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

  async usernameAuth(action,payload={}){
    const {data,error}=await this.db().functions.invoke("safety-auth",{body:{action,...payload}});
    if(error){
      let detail;
      try{detail=await error.context.json()}catch{}
      throw new Error(detail?.error||"Não foi possível concluir a solicitação. Tente novamente.");
    }
    if(data?.error)throw new Error(data.error);
    return data;
  },

  locale(){const l=window.I18N?.lang?.()||"pt";return ({pt:"pt-BR",en:"en-US",es:"es-ES",tr:"tr-TR"})[l]||"pt-BR"},
  hc(v){return new Intl.NumberFormat(this.locale()).format(Number(v||0))+" HC"},
  num(v){return new Intl.NumberFormat(this.locale()).format(Number(v||0))},
  date(v){return v?new Date(v).toLocaleString(this.locale()):"—"},
  escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))},

  errorCatalog:{
    "SS-AUTH-001":{title:"Sessão expirada ou ausente",action:"Entre novamente na sua conta e repita a operação."},
    "SS-AUTH-002":{title:"Login inválido",action:"Confira o nome de usuário e a senha. Espaços e maiúsculas são ignorados no usuário."},
    "SS-AUTH-003":{title:"E-mail ainda não confirmado",action:"Confirme o e-mail da conta e depois faça login novamente."},
    "SS-AUTH-004":{title:"Conta já cadastrada",action:"Use o login existente ou escolha outro nome de usuário."},
    "SS-AUTH-005":{title:"Verificação em duas etapas necessária",action:"Conclua a verificação 2FA na área de Segurança da Conta e tente novamente."},
    "SS-AUTH-006":{title:"Link de recuperação inválido ou expirado",action:"Solicite um novo link em Esqueci minha senha e use somente o e-mail mais recente recebido."},
    "SS-AUTH-007":{title:"Nova senha recusada",action:"Use uma senha com pelo menos 10 caracteres e diferente da senha anterior."},
    "SS-ACC-001":{title:"Conta não está ativa",action:"Verifique o status da conta. Se estiver aguardando aprovação, entre em contato com a moderação."},
    "SS-ACC-002":{title:"Exclusão automática indisponível",action:"Esta conta possui histórico comercial que precisa ser preservado. Entre em contato com a administração para tratar o encerramento da conta."},
    "SS-HC-001":{title:"HubCredit insuficiente",action:"Confira seu saldo de HC e reduza o valor da operação ou obtenha saldo suficiente antes de tentar novamente."},
    "SS-HC-002":{title:"Baú diário indisponível",action:"Aguarde o tempo indicado no painel antes de tentar abrir o baú novamente."},
    "SS-PERM-001":{title:"Permissão insuficiente",action:"Essa ação exige outro nível de acesso. Se acreditar que deveria ter permissão, envie este código à moderação."},
    "SS-MKT-001":{title:"Oferta do mercado indisponível",action:"Atualize a página. A oferta pode ter sido vendida, cancelada ou alterada."},
    "SS-NEG-001":{title:"Negociação indisponível",action:"Atualize a página e confira o estado da proposta ou contraproposta antes de tentar novamente."},
    "SS-TX-001":{title:"Transação indisponível",action:"Atualize a página e confira o status da transação. Se o problema persistir, envie o código à moderação."},
    "SS-DSP-001":{title:"Problema com a disputa",action:"Confira se a disputa ainda está aberta. Se persistir, envie o código e o número da transação à moderação."},
    "SS-AUC-001":{title:"Leilão indisponível",action:"Atualize a página e verifique se o leilão ainda está aberto ou se já foi encerrado."},
    "SS-TND-001":{title:"Licitação ou proposta indisponível",action:"Atualize a página e confirme se a licitação ainda está aberta."},
    "SS-INV-001":{title:"Iniciativa indisponível",action:"Atualize a página e confira o estado atual da iniciativa antes de tentar novamente."},
    "SS-SPN-001":{title:"Erro no sistema de patrocinadores",action:"Revise os dados do patrocinador e tente novamente. Se persistir, envie este código à administração."},
    "SS-NET-002":{title:"Erro na rede comercial",action:"Atualize a página e confira se a parceria ainda está disponível. Se persistir, envie o protocolo à moderação."},
    "SS-CTR-001":{title:"Erro no contrato comercial",action:"Confira o status do contrato ou da parcela e tente novamente. Se persistir, envie o protocolo à moderação."},
    "SS-DATA-001":{title:"Registro duplicado",action:"Esse dado já existe. Atualize a página e verifique o cadastro antes de tentar novamente."},
    "SS-DATA-002":{title:"Dados inválidos ou incompletos",action:"Revise os campos preenchidos e tente novamente."},
    "SS-DB-001":{title:"Falha de comunicação com o banco",action:"Atualize a página e tente novamente. Se persistir, envie este código à moderação."},
    "SS-DB-002":{title:"Incompatibilidade interna de dados",action:"Não repita várias vezes a operação. Atualize a página e envie este código à moderação para correção."},
    "SS-NET-001":{title:"Falha de conexão",action:"Confira sua internet, aguarde alguns segundos e tente novamente."},
    "SS-SYS-001":{title:"Configuração da plataforma incompleta",action:"Avise a administração da Safety Solutions. Este problema precisa ser corrigido na configuração do site."},
    "SS-UI-001":{title:"Falha na interface da plataforma",action:"Atualize a página. Se o erro continuar, envie o código e o protocolo à moderação."},
    "SS-UNK-001":{title:"Erro não identificado",action:"Atualize a página e tente novamente. Se o erro continuar, envie o código e o protocolo à moderação."}
  },

  classifyError(value){
    const raw=String(value?.message||value||"").replace(/^❌\s*/,"").replace(/^Erro:\s*/i,"").trim();
    const s=raw.toLowerCase();
    let code="SS-UNK-001";
    if(s.includes("config_pendente"))code="SS-SYS-001";
    else if(s.includes("invalid login credentials")||s.includes("invalid credentials"))code="SS-AUTH-002";
    else if(s.includes("email not confirmed"))code="SS-AUTH-003";
    else if(s.includes("nome de usuário já cadastrado")||s.includes("user already registered")||s.includes("already been registered"))code="SS-AUTH-004";
    else if(s.includes("mfa_required")||s.includes("aal2"))code="SS-AUTH-005";
    else if(s.includes("otp_expired")||s.includes("token has expired")||s.includes("expired token")||s.includes("invalid token")||s.includes("recovery")&&s.includes("expired"))code="SS-AUTH-006";
    else if(s.includes("password")&&(s.includes("too short")||s.includes("weak")||s.includes("at least")||s.includes("different from the old")||s.includes("same password")))code="SS-AUTH-007";
    else if(s.includes("auth_required")||s.includes("jwt expired")||s.includes("session")&&s.includes("expired"))code="SS-AUTH-001";
    else if(s.includes("commercial history")||s.includes("cannot be deleted automatically"))code="SS-ACC-002";
    else if(s.includes("account is not active")||s.includes("awaiting_verification")||s.includes("account is suspended"))code="SS-ACC-001";
    else if(s.includes("daily chest"))code="SS-HC-002";
    else if(s.includes("insufficient hubcredit")||s.includes("insufficient")&&s.includes("balance"))code="SS-HC-001";
    else if(s.includes("rate_limited")||s.includes("too many")&&s.includes("actions"))code="SS-RATE-001";
    else if(s.includes("insufficient moderator level")||s.includes("moderator required")||s.includes("not allowed")||s.includes("permission denied")||s.includes("only owner")||s.includes("last active owner")||s.includes("moderation roles require an active account"))code="SS-PERM-001";
    else if(s.includes("structure of query does not match function result type"))code="SS-DB-002";
    else if(s.includes("failed to fetch")||s.includes("networkerror")||s.includes("network request")||s.includes("load failed"))code="SS-NET-001";
    else if(s.includes("duplicate key")||s.includes("unique constraint"))code="SS-DATA-001";
    else if(s.includes("not-null")||s.includes("not null")||s.includes("check constraint")||s.includes("invalid input")||s.startsWith("invalid ")||s.includes(" too long")||s.includes("minimum quantity")||s.includes("must be positive"))code="SS-DATA-002";
    else if(s.includes("listing")||s.includes("own listing"))code="SS-MKT-001";
    else if(s.includes("counteroffer")||s.includes("offer unavailable")||s.includes("only seller can accept")||s.includes("only buyer can accept"))code="SS-NEG-001";
    else if(s.includes("transaction"))code="SS-TX-001";
    else if(s.includes("dispute"))code="SS-DSP-001";
    else if(s.includes("auction"))code="SS-AUC-001";
    else if(s.includes("tender")||s.includes("proposal unavailable"))code="SS-TND-001";
    else if(s.includes("initiative"))code="SS-INV-001";
    else if(s.includes("partnership")||s.includes("partner profile"))code="SS-NET-002";
    else if(s.includes("contract")||s.includes("counterparty")||s.includes("cycle unavailable"))code="SS-CTR-001";
    else if(s.includes("sponsor"))code="SS-SPN-001";
    else if(s.includes("is not defined")||s.includes("cannot read properties")||s.includes("undefined is not")||s.includes("null is not an object"))code="SS-UI-001";
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

  async user(){
    const{data,error}=await this.db().auth.getUser();
    if(error){
      const s=String(error.message||error).toLowerCase();
      if(s.includes("jwt")||s.includes("session")||s.includes("auth session missing"))return null;
      throw error
    }
    return data?.user||null
  },
  async requireUser(){
    const u=await this.user();
    if(!u){location.replace("login.html");throw new Error("AUTH_REQUIRED")}
    return u
  },
  async logout(){await this.db().auth.signOut({scope:"local"});location.href="index.html"},

  configNotice(el){
    const info=this.formatError("CONFIG_PENDENTE","configuration");
    if(el){el.className="notice error";el.textContent=info.text;el.classList.remove("hidden")}
  },

  safeUrl(v){try{const u=new URL(v,location.href);if(u.protocol==="https:")return u.href;const local=["localhost","127.0.0.1"].includes(location.hostname);return local&&u.protocol==="http:"?u.href:null}catch{return null}},

  async initAuthGuard(){
    const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
    const publicPages=new Set(["index.html","login.html","cadastro.html","recuperar-senha.html"]);
    if(publicPages.has(page))return;
    let db;try{db=this.db()}catch{return}
    const{data:{session}}=await db.auth.getSession();
    if(!session){location.replace("login.html");return}
    db.auth.onAuthStateChange((event,nextSession)=>{
      if(event==="SIGNED_OUT"&&!nextSession){
        location.replace("login.html")
      }
    })
  },

  async initGlobalNav(){
    const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
    const publicPages=new Set(["index.html","login.html","cadastro.html","recuperar-senha.html"]);
    if(publicPages.has(page))return;

    const nav=document.querySelector(".topbar .nav");
    if(!nav)return;

    let links=nav.querySelector(".navlinks");
    if(!links){
      links=document.createElement("nav");
      links.className="navlinks";
      nav.appendChild(links)
    }

    const a=(href,label,extra="")=>'<a class="btn small global-nav-link '+extra+(page===href?' active':'')+'" href="'+href+'">'+label+'</a>';
    const moreActive=["leiloes.html","licitacoes.html","investimentos.html","contratos.html","rede.html","reputacao.html","perfil.html","seguranca.html"].includes(page);

    links.innerHTML=
      a("dashboard.html","Painel")+
      a("mercado.html","Mercado")+
      a("negociacoes.html","Negociações")+
      a("transacoes.html","Transações")+
      a("nova-oferta.html","+ Oferta","primary ")+
      '<details class="nav-menu '+(moreActive?'active':'')+'"><summary class="btn small">Mais ▾</summary><div class="nav-menu-pop">'+
        a("leiloes.html","Leilões")+
        a("licitacoes.html","Licitações")+
        a("investimentos.html","Invest")+
        a("contratos.html","Contratos")+
        a("rede.html","Rede")+
        a("reputacao.html","Histórico")+
        a("perfil.html","Perfil")+
        a("seguranca.html","Segurança")+
      '</div></details>'+
      '<button class="btn small global-logout" type="button">Sair</button>';

    links.querySelector(".global-logout")?.addEventListener("click",()=>this.logout());

    try{
      const db=this.db();
      const{data:{user}}=await db.auth.getUser();
      if(!user)return;
      const{data:mod}=await db.from("moderators").select("role").eq("user_id",user.id).maybeSingle();
      if(!mod)return;

      const adminPages=["admin.html","tesouraria.html","patrocinadores.html","erros.html","admin-alertas.html","saude.html"];
      const adminActive=adminPages.includes(page);
      const admin=document.createElement("details");
      admin.className="nav-menu admin-menu"+(adminActive?" active":"");
      admin.innerHTML='<summary class="btn small">Moderação ▾</summary><div class="nav-menu-pop nav-menu-right">'+
        a("admin.html","Central Admin")+
        a("tesouraria.html","Tesouraria")+
        a("patrocinadores.html","Patrocinadores")+
        a("erros.html","Erros")+
        a("admin-alertas.html","Safety Alert Admin")+
        a("saude.html","Saúde Beta")+
      '</div>';
      const logout=links.querySelector(".global-logout");
      links.insertBefore(admin,logout)
    }catch{}
  },

  async initSponsors(){
    const page=(location.pathname.split("/").pop()||"").toLowerCase();
    const noSponsorPages=new Set(["index.html","login.html","cadastro.html","recuperar-senha.html","admin.html","tesouraria.html","patrocinadores.html","erros.html","admin-alertas.html","seguranca.html","saude.html"]);
    if(noSponsorPages.has(page))return;
    const placementMap={
      "dashboard.html":"dashboard","mercado.html":"market","leiloes.html":"auctions",
      "licitacoes.html":"tenders","investimentos.html":"investments","analytics.html":"analytics"
    };
    const existingSlots=[...document.querySelectorAll("[data-sponsor-placement]")];
    const placement=existingSlots[0]?.dataset.sponsorPlacement||placementMap[page]||"general";
    existingSlots.forEach(slot=>slot.closest(".sponsor-zone")?.remove());

    const main=document.querySelector("main");
    if(!main)return;
    let db;try{db=this.db()}catch{return}
    const{data:{user}}=await db.auth.getUser();
    if(!user)return;

    const makeCard=(s,side=false)=>{
      const tier=["supporter","highlight","premium","master"].includes(s.tier)?s.tier:"supporter";
      const link=document.createElement(s.target_url?"a":"div");
      link.className="sponsor-card sponsor-"+tier+(side?" sponsor-side-card":"");
      link.dataset.sponsorTier=tier;
      const href=this.safeUrl(s.target_url);
      if(link.tagName==="A"&&href){link.href=href;link.target="_blank";link.rel="noopener sponsored"}
      else if(link.tagName==="A"){link.removeAttribute("href")}

      const media=document.createElement("div");media.className="sponsor-media";
      const imgUrl=this.safeUrl(s.image_url);
      if(imgUrl){
        const img=document.createElement("img");img.className="sponsor-logo";img.src=imgUrl;img.alt="";img.loading="lazy";media.appendChild(img)
      }else{
        const ph=document.createElement("div");ph.className="sponsor-logo-placeholder";ph.textContent=(s.name||"S").trim().slice(0,1).toUpperCase();media.appendChild(ph)
      }
      link.appendChild(media);

      const copy=document.createElement("div");copy.className="sponsor-copy";
      const badge=document.createElement("span");badge.className="sponsor-tier-badge";badge.textContent=s.tier_label||tier;
      const name=document.createElement("p");name.className="sponsor-name";name.textContent=s.name||"Patrocinador";
      const headline=document.createElement("p");headline.className="sponsor-headline";headline.textContent=s.headline||"";
      copy.append(badge,name,headline);link.appendChild(copy);

      if(href){
        const cta=document.createElement("span");cta.className="sponsor-cta";cta.textContent="Conhecer apoiador ↗";link.appendChild(cta)
      }
      return link
    };

    const makePlaceholder=(side=false)=>{
      const card=document.createElement("div");
      card.className="sponsor-card sponsor-supporter sponsor-empty"+(side?" sponsor-side-card":"");
      card.dataset.sponsorPlaceholder="true";
      const img=document.createElement("img");
      img.src=side?"assets/seu-anuncio-aqui-lateral.svg":"assets/anuncie-aqui-banner.svg";
      img.alt=side?"Seu anúncio aqui — espaço publicitário disponível":"Anuncie aqui — sua marca na Safety Solutions";
      img.width=side?440:1200;img.height=side?600:240;img.loading="lazy";
      card.appendChild(img);return card
    };

    const fetchZone=async zone=>{
      const{data,error}=await db.rpc("sponsor_feed",{p_placement:placement,p_zone:zone});
      if(error)throw error;
      return data||[]
    };

    try{
      const[leftAds,rightAds,bottomAds]=await Promise.all([fetchZone("left"),fetchZone("right"),fetchZone("bottom")]);

      const createRail=(side,ads)=>{
        const rail=document.createElement("aside");
        rail.className="sponsor-rail sponsor-rail-"+side;
        rail.setAttribute("aria-label","Patrocinadores");
        const label=document.createElement("span");label.className="sponsor-label";label.textContent=ads.length?"Apoiadores":"Espaço publicitário";
        const stack=document.createElement("div");stack.className="sponsor-rail-stack";
        if(ads.length)ads.forEach(s=>stack.appendChild(makeCard(s,true)));
        else stack.appendChild(makePlaceholder(true));
        rail.append(label,stack);document.body.appendChild(rail);return rail
      };
      createRail("left",leftAds);createRail("right",rightAds);

      const bottom=document.createElement("section");
      bottom.className="sponsor-zone sponsor-bottom-zone";
      const label=document.createElement("span");label.className="sponsor-label";label.textContent=bottomAds.length?"Apoiadores da Safety Solutions":"Espaço publicitário";
      const desktop=document.createElement("div");desktop.className="sponsor-grid sponsor-bottom-grid";
      if(bottomAds.length)bottomAds.forEach(s=>desktop.appendChild(makeCard(s,false)));
      else desktop.appendChild(makePlaceholder());
      const mobile=document.createElement("div");mobile.className="sponsor-grid sponsor-side-fallback";
      for(const ads of [leftAds,rightAds]){
        if(ads.length)ads.forEach(s=>mobile.appendChild(makeCard(s,false)));
        else mobile.appendChild(makePlaceholder());
      }
      bottom.append(label,desktop,mobile);
      main.appendChild(bottom);

      // On phones, a single showcase becomes a compact persistent brand strip
      // only after the showcase leaves the viewport. No timer or automatic slides.
      const phoneAds=[...bottomAds,...leftAds,...rightAds].filter((ad,i,all)=>
        all.findIndex(other=>other.id===ad.id)===i);
      const items=phoneAds.length?phoneAds:[null];
      const showcase=document.createElement("section");
      showcase.className="sponsor-mobile-showcase";
      showcase.setAttribute("aria-label","Publicidade");
      const heading=document.createElement("div");heading.className="sponsor-mobile-heading";
      const caption=document.createElement("span");caption.className="sponsor-label";caption.textContent="Publicidade";
      const paging=document.createElement("span");paging.className="sponsor-mobile-paging";
      heading.append(caption,paging);
      const track=document.createElement("div");track.className="sponsor-mobile-track";
      track.setAttribute("aria-label","Anúncios — deslize para navegar");
      items.forEach(ad=>{
        const card=ad?makeCard(ad):makePlaceholder();
        if(!ad){const img=card.querySelector("img");img.src="assets/anuncie-aqui-mobile.svg";img.width=720;img.height=280;img.alt="Sua marca em destaque. Anuncie aqui na Safety Solutions."}
        track.appendChild(card)
      });
      showcase.append(heading,track);
      const title=main.querySelector(":scope > .page-title");
      if(title)title.after(showcase);else main.prepend(showcase);

      const dock=document.createElement("aside");dock.className="sponsor-mobile-dock";dock.hidden=true;
      dock.setAttribute("aria-label","Publicidade");
      const dockBody=document.createElement("div");dockBody.className="sponsor-dock-body";
      const navigation=document.createElement("div");navigation.className="sponsor-dock-nav";
      let index=0;
      const renderDock=()=>{
        const ad=items[index];dockBody.replaceChildren();
        const href=ad?this.safeUrl(ad.target_url):null;
        const content=document.createElement(href?"a":"div");content.className="sponsor-dock-content";
        if(href){content.href=href;content.target="_blank";content.rel="noopener sponsored"}
        const image=document.createElement("div");image.className="sponsor-dock-image";
        const src=ad?this.safeUrl(ad.image_url):null;
        if(src){const img=document.createElement("img");img.src=src;img.alt="";image.appendChild(img)}
        else {image.textContent=ad?(ad.name||"S").slice(0,1).toUpperCase():"↗"}
        const copy=document.createElement("div");copy.className="sponsor-dock-copy";
        const disclosure=document.createElement("span");disclosure.className="sponsor-dock-label";disclosure.textContent="Publicidade";
        const name=document.createElement("strong");name.textContent=ad?.name||"Sua marca aqui";
        const line=document.createElement("span");line.className="sponsor-dock-headline";line.textContent=ad?.headline||"Anuncie na Safety Solutions";
        copy.append(disclosure,name,line);content.append(image,copy);
        if(href){const arrow=document.createElement("span");arrow.className="sponsor-dock-cta";arrow.textContent="↗";arrow.setAttribute("aria-hidden","true");content.appendChild(arrow)}
        dockBody.appendChild(content);
        paging.textContent=items.length>1?(index+1)+" / "+items.length+" · Deslize":"";
      };
      if(items.length>1){
        for(const [label,step,glyph] of [["Anúncio anterior",-1,"‹"],["Próximo anúncio",1,"›"]]){
          const button=document.createElement("button");button.type="button";button.setAttribute("aria-label",label);button.textContent=glyph;
          button.addEventListener("click",()=>{
            index=(index+step+items.length)%items.length;renderDock();
            track.scrollTo({left:track.children[index].offsetLeft-track.children[0].offsetLeft,behavior:"smooth"})
          });navigation.appendChild(button)
        }
      }
      dock.append(dockBody,navigation);document.body.appendChild(dock);renderDock();
      track.addEventListener("scroll",()=>{
        const width=track.children[0].getBoundingClientRect().width+12;
        const next=Math.max(0,Math.min(items.length-1,Math.round(track.scrollLeft/width)));
        if(next!==index){index=next;renderDock()}
      },{passive:true});
      const phone=matchMedia("(max-width:900px)");
      let showcasePast=false;
      const syncDock=()=>{
        dock.hidden=!(phone.matches&&showcasePast);
        document.body.classList.toggle("sponsor-dock-visible",!dock.hidden)
      };
      if("IntersectionObserver" in window){
        const stickyHeight=document.querySelector(".topbar")?.getBoundingClientRect().height||72;
        new IntersectionObserver(([entry])=>{
          showcasePast=!entry.isIntersecting&&entry.boundingClientRect.bottom<=stickyHeight;
          syncDock()
        },{rootMargin:"-"+stickyHeight+"px 0px 0px 0px",threshold:0}).observe(showcase)
      }
      phone.addEventListener("change",syncDock);


    }catch(e){
      this.reportError(this.formatError(e,"sponsor-layout"))
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

document.addEventListener("DOMContentLoaded",()=>{window.Safety.initAuthGuard().catch(()=>{});window.Safety.initGlobalNav().catch(()=>{});window.Safety.initSponsors().catch(()=>{})});
