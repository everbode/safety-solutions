window.Safety={
  _db:null,
  _nativeAlert:window.alert.bind(window),

  db(){
    if(this._db)return this._db;
    const c=window.SAFETY_CONFIG||{};
    if(!c.supabaseUrl||!c.supabaseKey||c.supabaseUrl.includes("COLE_AQUI")||c.supabaseKey.includes("COLE_AQUI"))throw new Error("CONFIG_PENDENTE");
    this._db=supabase.createClient(c.supabaseUrl,c.supabaseKey);
    return this._db
  },

  locale(){const l=window.I18N?.lang?.()||"pt";return ({pt:"pt-BR",en:"en-US",es:"es-ES",tr:"tr-TR"})[l]||"pt-BR"},
  hc(v){return new Intl.NumberFormat(this.locale()).format(Number(v||0))+" HC"},
  num(v){return new Intl.NumberFormat(this.locale()).format(Number(v||0))},
  date(v){return v?new Date(v).toLocaleString(this.locale()):"—"},

  errorCatalog:{
    "SS-AUTH-001":{title:"Sessão expirada ou ausente",action:"Entre novamente na sua conta e repita a operação."},
    "SS-AUTH-002":{title:"Login inválido",action:"Confira o e-mail e a senha. Se necessário, tente entrar novamente com os dados corretos."},
    "SS-AUTH-003":{title:"E-mail ainda não confirmado",action:"Confirme o e-mail da conta e depois faça login novamente."},
    "SS-AUTH-004":{title:"Conta já cadastrada",action:"Use o login existente ou cadastre outro e-mail."},
    "SS-ACC-001":{title:"Conta não está ativa",action:"Verifique o status da conta. Se estiver aguardando aprovação, entre em contato com a moderação."},
    "SS-HC-001":{title:"HubCredit insuficiente",action:"Confira seu saldo de HC e reduza o valor da operação ou obtenha saldo suficiente antes de tentar novamente."},
    "SS-PERM-001":{title:"Permissão insuficiente",action:"Essa ação exige outro nível de acesso. Se acreditar que deveria ter permissão, envie este código à moderação."},
    "SS-MKT-001":{title:"Oferta do mercado indisponível",action:"Atualize a página. A oferta pode ter sido vendida, cancelada ou alterada."},
    "SS-NEG-001":{title:"Negociação indisponível",action:"Atualize a página e confira o estado da proposta ou contraproposta antes de tentar novamente."},
    "SS-TX-001":{title:"Transação indisponível",action:"Atualize a página e confira o status da transação. Se o problema persistir, envie o código à moderação."},
    "SS-DSP-001":{title:"Problema com a disputa",action:"Confira se a disputa ainda está aberta. Se persistir, envie o código e o número da transação à moderação."},
    "SS-AUC-001":{title:"Leilão indisponível",action:"Atualize a página e verifique se o leilão ainda está aberto ou se já foi encerrado."},
    "SS-TND-001":{title:"Licitação ou proposta indisponível",action:"Atualize a página e confirme se a licitação ainda está aberta."},
    "SS-INV-001":{title:"Iniciativa indisponível",action:"Atualize a página e confira o estado atual da iniciativa antes de tentar novamente."},
    "SS-SPN-001":{title:"Erro no sistema de patrocinadores",action:"Revise os dados do patrocinador e tente novamente. Se persistir, envie este código à administração."},
    "SS-DATA-001":{title:"Registro duplicado",action:"Esse dado já existe. Atualize a página e verifique o cadastro antes de tentar novamente."},
    "SS-DATA-002":{title:"Dados inválidos ou incompletos",action:"Revise os campos preenchidos e tente novamente."},
    "SS-DB-001":{title:"Falha de comunicação com o banco",action:"Atualize a página e tente novamente. Se persistir, envie este código à moderação."},
    "SS-DB-002":{title:"Incompatibilidade interna de dados",action:"Não repita várias vezes a operação. Atualize a página e envie este código à moderação para correção."},
    "SS-NET-001":{title:"Falha de conexão",action:"Confira sua internet, aguarde alguns segundos e tente novamente."},
    "SS-SYS-001":{title:"Configuração da plataforma incompleta",action:"Avise a administração da Safety Solutions. Este problema precisa ser corrigido na configuração do site."},
    "SS-UNK-001":{title:"Erro não identificado",action:"Atualize a página e tente novamente. Se o erro continuar, envie o código e o protocolo à moderação."}
  },

  classifyError(value){
    const raw=String(value?.message||value||"").replace(/^❌\s*/,"").replace(/^Erro:\s*/i,"").trim();
    const s=raw.toLowerCase();
    let code="SS-UNK-001";
    if(s.includes("config_pendente"))code="SS-SYS-001";
    else if(s.includes("invalid login credentials")||s.includes("invalid credentials"))code="SS-AUTH-002";
    else if(s.includes("email not confirmed"))code="SS-AUTH-003";
    else if(s.includes("user already registered")||s.includes("already been registered"))code="SS-AUTH-004";
    else if(s.includes("auth_required")||s.includes("jwt expired")||s.includes("session")&&s.includes("expired"))code="SS-AUTH-001";
    else if(s.includes("account is not active")||s.includes("awaiting_verification"))code="SS-ACC-001";
    else if(s.includes("insufficient hubcredit")||s.includes("insufficient")&&s.includes("balance"))code="SS-HC-001";
    else if(s.includes("insufficient moderator level")||s.includes("moderator required")||s.includes("not allowed")||s.includes("permission denied")||s.includes("only owner"))code="SS-PERM-001";
    else if(s.includes("structure of query does not match function result type"))code="SS-DB-002";
    else if(s.includes("failed to fetch")||s.includes("networkerror")||s.includes("network request")||s.includes("load failed"))code="SS-NET-001";
    else if(s.includes("duplicate key")||s.includes("unique constraint"))code="SS-DATA-001";
    else if(s.includes("not-null")||s.includes("not null")||s.includes("check constraint")||s.includes("invalid input"))code="SS-DATA-002";
    else if(s.includes("listing")||s.includes("own listing"))code="SS-MKT-001";
    else if(s.includes("counteroffer")||s.includes("offer unavailable")||s.includes("only seller can accept")||s.includes("only buyer can accept"))code="SS-NEG-001";
    else if(s.includes("transaction"))code="SS-TX-001";
    else if(s.includes("dispute"))code="SS-DSP-001";
    else if(s.includes("auction"))code="SS-AUC-001";
    else if(s.includes("tender")||s.includes("proposal unavailable"))code="SS-TND-001";
    else if(s.includes("initiative"))code="SS-INV-001";
    else if(s.includes("sponsor"))code="SS-SPN-001";
    else if(s.includes("pgrst")||s.includes("database")||s.includes("sql")||s.includes("relation")||s.includes("column"))code="SS-DB-001";
    return {code,raw}
  },

  incidentKey(){
    const d=new Date();
    const date=d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0");
    const rnd=Math.random().toString(36).slice(2,8).toUpperCase();
    return "ERR-"+date+"-"+rnd
  },

  formatError(value,context=""){
    const classified=this.classifyError(value);
    const item=this.errorCatalog[classified.code]||this.errorCatalog["SS-UNK-001"];
    const tr=(v)=>window.I18N?.t?.(v)||v;
    const incident=this.incidentKey();
    const title=tr(item.title),action=tr(item.action);
    return {
      code:classified.code,
      raw:classified.raw,
      incident,
      context,
      title,
      action,
      text:"❌ "+classified.code+" — "+title+"\n"+tr("O que fazer:")+" "+action+"\n"+tr("Protocolo:")+" "+incident
    }
  },

  async reportError(info){
    try{
      const db=this.db();
      const{data:{user}}=await db.auth.getUser();
      if(!user)return;
      await db.rpc("report_client_error",{
        p_incident_key:info.incident,
        p_error_code:info.code,
        p_page:location.pathname,
        p_context:info.context||"",
        p_technical_message:info.raw||"",
        p_user_agent:navigator.userAgent||""
      })
    }catch{}
  },

  errorAlert(value,context=""){
    const info=this.formatError(value,context);
    this.reportError(info);
    this._nativeAlert(info.text);
    return info
  },

  errorMsg(el,value,context=""){
    const info=this.formatError(value,context);
    this.reportError(info);
    if(el){
      el.className="notice error";
      el.textContent=info.text;
      el.classList.remove("hidden")
    }
    return info
  },

  msg(el,text,type=""){
    if(type==="error"&&/^❌\s*/.test(String(text||"")))return this.errorMsg(el,String(text).replace(/^❌\s*/,""),"ui-message");
    el.className="notice "+type;
    el.textContent=text;
    el.classList.remove("hidden")
  },

  async user(){const{data:{user}}=await this.db().auth.getUser();return user},
  async requireUser(){const u=await this.user();if(!u){location.href="login.html";throw new Error("AUTH_REQUIRED")}return u},
  async logout(){await this.db().auth.signOut();location.href="index.html"},

  configNotice(el){
    const info=this.formatError("CONFIG_PENDENTE","configuration");
    if(el){el.className="notice error";el.textContent=info.text;el.classList.remove("hidden")}
  },

  safeUrl(v){try{const u=new URL(v,location.href);return ["http:","https:"].includes(u.protocol)?u.href:null}catch{return null}},

  async initSponsors(){
    const slots=[...document.querySelectorAll("[data-sponsor-placement]")];
    if(!slots.length)return;
    let db;try{db=this.db()}catch{return}
    for(const slot of slots){
      const placement=slot.dataset.sponsorPlacement||"general";
      try{
        const{data,error}=await db.rpc("sponsor_feed",{p_placement:placement});
        if(error||!(data||[]).length){slot.closest(".sponsor-zone")?.classList.add("hidden");continue}
        const wrap=document.createElement("div");wrap.className="sponsor-grid";
        for(const s of data){
          const link=document.createElement(s.target_url?"a":"div");link.className="sponsor-card";
          const href=this.safeUrl(s.target_url);
          if(link.tagName==="A"&&href){link.href=href;link.target="_blank";link.rel="noopener sponsored"}else if(link.tagName==="A"&&!href){link.removeAttribute("href")}
          const imgUrl=this.safeUrl(s.image_url);
          if(imgUrl){const img=document.createElement("img");img.className="sponsor-logo";img.src=imgUrl;img.alt="";img.loading="lazy";link.appendChild(img)}
          else{const ph=document.createElement("div");ph.className="sponsor-logo-placeholder";ph.textContent=(s.name||"S").trim().slice(0,1).toUpperCase();link.appendChild(ph)}
          const copy=document.createElement("div");copy.className="sponsor-copy";
          const name=document.createElement("p");name.className="sponsor-name";name.textContent=s.name||"Patrocinador";
          const headline=document.createElement("p");headline.className="sponsor-headline";headline.textContent=s.headline||"";
          copy.append(name,headline);link.appendChild(copy);
          if(href){const cta=document.createElement("span");cta.className="sponsor-cta";cta.textContent="Conhecer ↗";link.appendChild(cta)}
          wrap.appendChild(link)
        }
        slot.replaceChildren(wrap)
      }catch{slot.closest(".sponsor-zone")?.classList.add("hidden")}
    }
  }
};

window.alert=(message)=>{
  const text=String(message??"");
  if(/^Erro:\s*/i.test(text))return window.Safety.errorAlert(text.replace(/^Erro:\s*/i,""),"alert");
  return window.Safety._nativeAlert(message)
};

window.addEventListener("error",event=>{
  if(event?.error)window.Safety.reportError(window.Safety.formatError(event.error,"window-error"))
});
window.addEventListener("unhandledrejection",event=>{
  if(event?.reason)window.Safety.reportError(window.Safety.formatError(event.reason,"unhandled-promise"))
});

document.addEventListener("DOMContentLoaded",()=>{window.Safety.initSponsors().catch(()=>{})});
