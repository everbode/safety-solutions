-- Username login support. Applied with Supabase MCP; no Auth credentials are changed here.
begin;
alter table public.profiles add column if not exists username_login_key text
  generated always as (regexp_replace(lower(username), '[[:space:]]+', '', 'g')) stored;
create or replace function public.guard_username_login() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  if new.username is distinct from old.username then
    raise exception 'Username cannot be changed';
  end if;
  return new;
end;
$$;
revoke all on function public.guard_username_login() from public, anon, authenticated;
drop trigger if exists guard_username_login on public.profiles;
create trigger guard_username_login before update of username on public.profiles
for each row execute function public.guard_username_login();

create schema if not exists private;
create table if not exists private.username_auth_limits (
  scope text not null,
  key_hash text not null,
  window_start timestamptz not null,
  attempts integer not null default 1,
  primary key (scope, key_hash, window_start)
);
alter table private.username_auth_limits enable row level security;
revoke all on private.username_auth_limits from public, anon, authenticated;
create or replace function public.consume_username_auth_limit(p_scope text, p_key_hash text)
returns boolean language plpgsql security definer set search_path = '' as $$
declare v_window timestamptz; v_limit integer; v_count integer;
begin
  if p_key_hash !~ '^[a-f0-9]{64}$' then raise exception 'Invalid key'; end if;
  case p_scope
    when 'login_ip' then v_limit := 40;
    when 'login_user' then v_limit := 15;
    when 'signup_ip' then v_limit := 5;
    when 'signup_global' then v_limit := 30;
    else raise exception 'Invalid scope';
  end case;
  v_window := pg_catalog.date_trunc('hour', now()) +
    pg_catalog.floor(extract(minute from now()) / 10) * interval '10 minutes';
  delete from private.username_auth_limits where window_start < now() - interval '1 day';
  insert into private.username_auth_limits(scope,key_hash,window_start)
  values(p_scope,p_key_hash,v_window)
  on conflict(scope,key_hash,window_start) do update
  set attempts=private.username_auth_limits.attempts+1
  returning attempts into v_count;
  return v_count <= v_limit;
end;
$$;
revoke all on function public.consume_username_auth_limit(text,text) from public, anon, authenticated;
grant execute on function public.consume_username_auth_limit(text,text) to service_role;
commit;
