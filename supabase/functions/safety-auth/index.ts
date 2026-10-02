import { createClient } from '@supabase/supabase-js';

const origins = new Set(['https://everbode.github.io']);
const options = { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } };
const canonical = (v: string) => v.replace(/\s/g, '').toLowerCase();
async function digest(v: string) {
  const bytes = new TextEncoder().encode(v);
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)))
    .map(b => b.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async req => {
  const origin = req.headers.get('origin');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Vary': 'Origin',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
  if (origin && origins.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
  const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });
  if (origin && !origins.has(origin)) return reply({ error: 'Origem não permitida.' }, 403);
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return reply({ error: 'Método não permitido.' }, 405);
  try {
    const text = await req.text();
    if (text.length > 8192) return reply({ error: 'Dados inválidos.' }, 400);
    const body = JSON.parse(text);
    const url = Deno.env.get('SUPABASE_URL')!;
    const admin = createClient(url, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, options);
    const auth = createClient(url, Deno.env.get('SUPABASE_ANON_KEY')!, options);

    // Email migration is restricted to the authenticated user's own account.
    // Verified TOTP/phone factors require AAL2 before any identity change.
    if (body.action === 'migrate') {
      const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
      const current = await auth.auth.getUser(token);
      if (current.error || !current.data.user) return reply({ error: 'AUTH_REQUIRED' }, 401);
      const user = current.data.user;
      const factorResult = await admin.auth.admin.getUserById(user.id);
      if (factorResult.error) return reply({ error: 'Serviço temporariamente indisponível.' }, 503);
      const factors = factorResult.data.user?.factors || [];
      const claims = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      if (factors.some(f => f.status === 'verified') && claims.aal !== 'aal2') {
        return reply({ error: 'MFA_REQUIRED' }, 403);
      }
      const profile = await admin.from('profiles').select('username_login_key').eq('id', user.id).single();
      if (profile.error || !profile.data) return reply({ error: 'Perfil indisponível.' }, 403);
      const email = await digest(profile.data.username_login_key) + '@login.safety.invalid';
      if (user.email !== email) {
        const updated = await admin.auth.admin.updateUserById(user.id, { email, email_confirm: true });
        if (updated.error) return reply({ error: 'Não foi possível atualizar o acesso.' }, 503);
      }
      return reply({ migrated: true });
    }

    if (!['signup', 'login'].includes(body.action)) return reply({ error: 'Dados inválidos.' }, 400);
    const name = typeof body.username === 'string' ? body.username.trim().replace(/\s/g, ' ') : '';
    const key = canonical(name);
    const password = typeof body.password === 'string' ? body.password : '';
    if (name.length > 40 || !/^[a-z0-9_.-]{3,40}$/.test(key) || !password || password.length > 1024) {
      return reply({ error: 'Use um usuário de 3 a 40 caracteres: letras sem acentos, números, espaços, ponto, hífen ou sublinhado.' }, 400);
    }
    // The gateway's forwarded client IP is only one signal; per-name and global
    // limits also apply, so changing a forwarded header cannot evade every limit.
    const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
    const checks: [string, string][] = body.action === 'signup'
      ? [['signup_ip', await digest(ip)], ['signup_global', await digest('safety-signup')]]
      : [['login_ip', await digest(ip)], ['login_user', await digest(key)]];
    for (const [scope, hash] of checks) {
      const limited = await admin.rpc('consume_username_auth_limit', { p_scope: scope, p_key_hash: hash });
      if (limited.error) return reply({ error: 'Serviço temporariamente indisponível.' }, 503);
      if (limited.data !== true) return reply({ error: 'Muitas tentativas. Aguarde até 10 minutos.' }, 429);
    }
    const profile = await admin.from('profiles').select('id').eq('username_login_key', key).maybeSingle();
    if (profile.error) return reply({ error: 'Serviço temporariamente indisponível.' }, 503);
    if (body.action === 'signup') {
      if (password.length < 10) return reply({ error: 'Use uma senha com pelo menos 10 caracteres.' }, 400);
      if (profile.data) return reply({ error: 'Nome de usuário já cadastrado. Espaços e maiúsculas não diferenciam nomes.' }, 409);
      const m = body.metadata || {};
      const type = m.user_type;
      if (!['industry', 'reseller', 'financial', 'government'].includes(type)) return reply({ error: 'Tipo de usuário inválido.' }, 400);
      // Whitelist metadata: roles, balances and status are never accepted here.
      const metadata = {
        username: name, user_type: type,
        game_profile: typeof m.game_profile === 'string' ? m.game_profile.trim() : '',
        institution: type !== 'government' && typeof m.institution === 'string' ? m.institution.trim() : null,
        country: type === 'government' && typeof m.country === 'string' ? m.country.trim() : null,
        position: typeof m.position === 'string' ? m.position.trim() : '',
      };
      const entity = type === 'government' ? metadata.country : metadata.institution;
      let gameUrl: URL;
      try { gameUrl = new URL(metadata.game_profile); } catch { return reply({ error: 'Link do perfil inválido.' }, 400); }
      if (!['http:', 'https:'].includes(gameUrl.protocol) || metadata.game_profile.length > 500 ||
        !entity || entity.length > 80 || !metadata.position || metadata.position.length > 80) {
        return reply({ error: 'Revise o link, a instituição e o cargo.' }, 400);
      }
      const email = await digest(key) + '@login.safety.invalid';
      const created = await admin.auth.admin.createUser({ email, password, email_confirm: true, user_metadata: metadata });
      if (created.error) {
        const duplicate = /already|duplicate|registered/i.test(created.error.message);
        return reply({ error: duplicate ? 'Nome de usuário já cadastrado.' : 'Não foi possível criar a conta. Revise os dados ou tente novamente.' }, duplicate ? 409 : 400);
      }
      return reply({ created: true, needsVerification: ['government', 'financial'].includes(type) });
    }
    // Always use Supabase Auth to verify the password. No password hashes or
    // email lookup are returned, and unknown names receive the same login error.
    let email = await digest(key) + '@login.safety.invalid';
    if (profile.data) {
      const identity = await admin.auth.admin.getUserById(profile.data.id);
      if (identity.error) return reply({ error: 'Serviço temporariamente indisponível.' }, 503);
      email = identity.data.user?.email || email;
    }
    const signed = await auth.auth.signInWithPassword({ email, password });
    if (signed.error || !signed.data.session || !profile.data || signed.data.user?.id !== profile.data.id) {
      return reply({ error: 'Invalid login credentials' }, 401);
    }
    // Return only the session tokens required by setSession; never log credentials.
    return reply({ access_token: signed.data.session.access_token, refresh_token: signed.data.session.refresh_token });
  } catch {
    return reply({ error: 'Não foi possível concluir a solicitação.' }, 400);
  }
});
