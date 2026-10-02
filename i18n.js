(()=>{"use strict";
const EN="en",ES="es",TR="tr",PT="pt";
const entries={
"Entrar":["Sign in","Iniciar sesión","Giriş"],
"Cadastrar":["Register","Registrarse","Kayıt Ol"],
"👤 Cadastrar":["👤 Register","👤 Registrarse","👤 Kayıt Ol"],
"Painel":["Dashboard","Panel","Panel"],
"Mercado":["Market","Mercado","Pazar"],
"Leilões":["Auctions","Subastas","Açık Artırmalar"],
"Licitações":["Tenders","Licitaciones","İhaleler"],
"Investimentos":["Investments","Inversiones","Yatırımlar"],
"Invest":["Invest","Invertir","Yatırım"],
"Transações":["Transactions","Transacciones","İşlemler"],
"Perfil":["Profile","Perfil","Profil"],
"Moderação":["Moderation","Moderación","Moderasyon"],
"Sair":["Sign out","Salir","Çıkış"],
"Admin":["Admin","Admin","Yönetim"],
"Histórico":["History","Historial","Geçmiş"],
"Analytics":["Analytics","Analítica","Analitik"],
"Atualizar":["Refresh","Actualizar","Yenile"],
"Atualizar tudo":["Refresh all","Actualizar todo","Tümünü yenile"],
"↻ Atualizar tudo":["↻ Refresh all","↻ Actualizar todo","↻ Tümünü yenile"],
"Salvar alterações":["Save changes","Guardar cambios","Değişiklikleri kaydet"],
"Salvar patrocinador":["Save sponsor","Guardar patrocinador","Sponsoru kaydet"],
"Limpar":["Clear","Limpiar","Temizle"],
"Sim":["Yes","Sí","Evet"],
"Não":["No","No","Hayır"],
"Geral":["General","General","Genel"],
"Ativo":["Active","Activo","Aktif"],
"Ativos":["Active","Activos","Aktif"],
"Suspensos":["Suspended","Suspendidos","Askıya alınmış"],
"Rejeitados":["Rejected","Rechazados","Reddedilmiş"],
"Todos":["All","Todos","Tümü"],
"Todos os status":["All statuses","Todos los estados","Tüm durumlar"],
"Todos os produtos":["All products","Todos los productos","Tüm ürünler"],
"Selecione":["Select","Seleccionar","Seçin"],
"Carregando...":["Loading...","Cargando...","Yükleniyor..."],
"Patrocinado":["Sponsored","Patrocinado","Sponsorlu"],
"Data":["Date","Fecha","Tarih"],
"Ator":["Actor","Actor","İşlemi yapan"],
"Ação":["Action","Acción","İşlem"],
"Entidade":["Entity","Entidad","Varlık"],
"Detalhes":["Details","Detalles","Ayrıntılar"],
"Origem":["Source","Origen","Kaynak"],
"Pagador":["Payer","Pagador","Ödeyen"],
"Base":["Base","Base","Taban"],
"Taxa":["Fee","Tarifa","Ücret"],
"Receita":["Revenue","Ingresos","Gelir"],
"Produto":["Product","Producto","Ürün"],
"Quantidade":["Quantity","Cantidad","Miktar"],
"Condições":["Conditions","Condiciones","Koşullar"],
"Descrição / condições":["Description / conditions","Descripción / condiciones","Açıklama / koşullar"],
"Preço total em HC":["Total price in HC","Precio total en HC","Toplam HC fiyatı"],
"Prazo":["Deadline","Plazo","Son tarih"],
"Cargo":["Role / position","Cargo","Görev"],
"E-mail":["Email","Correo electrónico","E-posta"],
"Senha":["Password","Contraseña","Şifre"],
"Nome":["Name","Nombre","Ad"],
"Prioridade":["Priority","Prioridad","Öncelik"],
"Usuário":["User","Usuario","Kullanıcı"],
"Tipo":["Type","Tipo","Tür"],
"Status da conta":["Account status","Estado de la cuenta","Hesap durumu"],
"Perfil no jogo":["In-game profile","Perfil en el juego","Oyun profili"],
"Instituição / país":["Institution / country","Institución / país","Kurum / ülke"],
"MINHA CONTA":["MY ACCOUNT","MI CUENTA","HESABIM"],
"NOVO CADASTRO":["NEW REGISTRATION","NUEVO REGISTRO","YENİ KAYIT"],
"👤 Criar conta":["👤 Create account","👤 Crear cuenta","👤 Hesap oluştur"],
"Criar conta":["Create account","Crear cuenta","Hesap oluştur"],
"Cadastre seu perfil para operar na Safety Solutions.":["Create your profile to operate on Safety Solutions.","Crea tu perfil para operar en Safety Solutions.","Safety Solutions'ta işlem yapmak için profilinizi oluşturun."],
"Nome de usuário":["Username","Nombre de usuario","Kullanıcı adı"],
"Tipo de usuário":["User type","Tipo de usuario","Kullanıcı türü"],
"Link do perfil no jogo":["In-game profile link","Enlace del perfil en el juego","Oyun profil bağlantısı"],
"Nome da instituição / grupo":["Institution / group name","Nombre de la institución / grupo","Kurum / grup adı"],
"Cargo / função":["Role / position","Cargo / función","Görev / pozisyon"],
"🛡️ Verificação obrigatória":["🛡️ Mandatory verification","🛡️ Verificación obligatoria","🛡️ Zorunlu doğrulama"],
"ÁREA SEGURA":["SECURE AREA","ÁREA SEGURA","GÜVENLİ ALAN"],
"🔐 Entrar":["🔐 Sign in","🔐 Iniciar sesión","🔐 Giriş yap"],
"Acesse sua conta para negociar, acompanhar custódias e consultar seu histórico.":["Access your account to trade, track escrow and review your history.","Accede a tu cuenta para negociar, seguir custodias y consultar tu historial.","İşlem yapmak, emanet işlemlerini takip etmek ve geçmişinizi görmek için hesabınıza giriş yapın."],
"Ainda não tem conta?":["Don't have an account yet?","¿Aún no tienes cuenta?","Henüz hesabınız yok mu?"],
"Criar cadastro":["Create account","Crear cuenta","Hesap oluştur"],
"PLATAFORMA DE OPERAÇÕES DE ALTO VALOR":["HIGH-VALUE OPERATIONS PLATFORM","PLATAFORMA DE OPERACIONES DE ALTO VALOR","YÜKSEK DEĞERLİ İŞLEM PLATFORMU"],
"Negocie com":["Trade with","Negocia con","Güvenle"],
"segurança.":["confidence.","seguridad.","işlem yapın."],
"Mercado, custódia, mediação e registro para grandes operações de Ouro, Petróleo, Couro e TRM no ecossistema do jogo.":["Market, escrow, mediation and records for large Gold, Oil, Leather and TRM operations in the game ecosystem.","Mercado, custodia, mediación y registro para grandes operaciones de Oro, Petróleo, Cuero y TRM en el ecosistema del juego.","Oyun ekosistemindeki büyük Altın, Petrol, Deri ve TRM işlemleri için pazar, emanet, arabuluculuk ve kayıt sistemi."],
"🛒 Explorar mercado":["🛒 Explore market","🛒 Explorar mercado","🛒 Pazarı keşfet"],
"ℹ️ Como funciona":["ℹ️ How it works","ℹ️ Cómo funciona","ℹ️ Nasıl çalışır"],
"OPERAÇÃO PROTEGIDA":["PROTECTED OPERATION","OPERACIÓN PROTEGIDA","KORUMALI İŞLEM"],
"🔐 Custódia":["🔐 Escrow","🔐 Custodia","🔐 Emanet"],
"Custódia":["Escrow","Custodia","Emanet"],
"HubCredit fica retido até a conclusão da operação.":["HubCredit remains held until the operation is completed.","El HubCredit queda retenido hasta que finalice la operación.","HubCredit işlem tamamlanana kadar emanet altında tutulur."],
"🤝 Mediação":["🤝 Mediation","🤝 Mediación","🤝 Arabuluculuk"],
"Divergências podem ser encaminhadas à moderação.":["Disputes can be referred to moderation.","Las divergencias pueden enviarse a moderación.","Anlaşmazlıklar moderasyona iletilebilir."],
"📋 Registro":["📋 Record","📋 Registro","📋 Kayıt"],
"Ações importantes ficam registradas para auditoria.":["Important actions are recorded for audit.","Las acciones importantes quedan registradas para auditoría.","Önemli işlemler denetim için kaydedilir."],
"ESTRUTURA":["STRUCTURE","ESTRUCTURA","YAPI"],
"Segurança em cada etapa.":["Security at every step.","Seguridad en cada etapa.","Her aşamada güvenlik."],
"Uma base preparada para crescer com leilões, licitações, investimentos e analytics.":["A foundation ready to grow with auctions, tenders, investments and analytics.","Una base preparada para crecer con subastas, licitaciones, inversiones y analítica.","Açık artırmalar, ihaleler, yatırımlar ve analitik ile büyümeye hazır bir altyapı."],
"🛒 Mercado":["🛒 Market","🛒 Mercado","🛒 Pazar"],
"Compra, venda e contrapropostas.":["Buying, selling and counteroffers.","Compra, venta y contraofertas.","Alım, satım ve karşı teklifler."],
"Créditos bloqueados até confirmação.":["Credits remain locked until confirmation.","Créditos bloqueados hasta la confirmación.","Krediler onaya kadar kilitli kalır."],
"⚖️ Disputas":["⚖️ Disputes","⚖️ Disputas","⚖️ İtirazlar"],
"Fluxo formal de análise e resolução.":["Formal review and resolution flow.","Flujo formal de análisis y resolución.","Resmî inceleme ve çözüm süreci."],
"📊 Histórico":["📊 History","📊 Historial","📊 Geçmiş"],
"Base para reputação e indicadores objetivos.":["Basis for reputation and objective indicators.","Base para reputación e indicadores objetivos.","İtibar ve nesnel göstergeler için temel."],
"Produtos de alto valor.":["High-value products.","Productos de alto valor.","Yüksek değerli ürünler."],
"Mínimo: 100.000 unidades":["Minimum: 100,000 units","Mínimo: 100.000 unidades","Minimum: 100.000 birim"],
"FUNCIONAMENTO":["WORKFLOW","FUNCIONAMIENTO","İŞLEYİŞ"],
"Do anúncio à conclusão.":["From listing to completion.","Del anuncio a la finalización.","İlandan tamamlanmaya kadar."],
"🤝 Negocie":["🤝 Negotiate","🤝 Negocia","🤝 Pazarlık yap"],
"Compra direta ou contraproposta.":["Direct purchase or counteroffer.","Compra directa o contraoferta.","Doğrudan satın alma veya karşı teklif."],
"✅ Confirme":["✅ Confirm","✅ Confirma","✅ Onayla"],
"As condições viram uma transação.":["The agreed terms become a transaction.","Las condiciones se convierten en una transacción.","Koşullar bir işleme dönüşür."],
"O HC do comprador fica retido.":["The buyer's HC is held in escrow.","El HC del comprador queda retenido.","Alıcının HC'si emanet altında tutulur."],
"🚀 Conclua":["🚀 Complete","🚀 Finaliza","🚀 Tamamla"],
"Confirmação libera o pagamento ao vendedor.":["Confirmation releases payment to the seller.","La confirmación libera el pago al vendedor.","Onay, ödemeyi satıcıya serbest bırakır."],
"PAINEL":["DASHBOARD","PANEL","PANEL"],
"Visão geral da sua conta e das operações recentes.":["Overview of your account and recent operations.","Resumen de tu cuenta y operaciones recientes.","Hesabınızın ve son işlemlerin genel görünümü."],
"💰 HubCredit de teste":["💰 Test HubCredit","💰 HubCredit de prueba","💰 Test HubCredit"],
"Status da conta":["Account status","Estado de la cuenta","Hesap durumu"],
"Tipo de conta":["Account type","Tipo de cuenta","Hesap türü"],
"ATIVIDADE":["ACTIVITY","ACTIVIDAD","ETKİNLİK"],
"Transações recentes":["Recent transactions","Transacciones recientes","Son işlemler"],
"Ver todas":["View all","Ver todas","Tümünü gör"],
"ATALHOS":["SHORTCUTS","ATAJOS","KISAYOLLAR"],
"Operar na plataforma":["Operate on the platform","Operar en la plataforma","Platformda işlem yap"],
"Ver ofertas abertas.":["View open offers.","Ver ofertas abiertas.","Açık teklifleri görüntüle."],
"➕ Nova oferta":["➕ New listing","➕ Nueva oferta","➕ Yeni ilan"],
"Nova oferta":["New listing","Nueva oferta","Yeni ilan"],
"Anunciar um grande lote.":["List a large lot.","Publicar un lote grande.","Büyük bir lot ilan et."],
"🤝 Negociações":["🤝 Negotiations","🤝 Negociaciones","🤝 Görüşmeler"],
"Negociações":["Negotiations","Negociaciones","Görüşmeler"],
"Responder contrapropostas.":["Respond to counteroffers.","Responder contraofertas.","Karşı tekliflere yanıt ver."],
"Acompanhar operações em andamento.":["Track ongoing operations.","Seguir operaciones en curso.","Devam eden işlemleri takip et."],
"INTELIGÊNCIA E CONFIANÇA":["INTELLIGENCE AND TRUST","INTELIGENCIA Y CONFIANZA","İSTİHBARAT VE GÜVEN"],
"Ferramentas avançadas":["Advanced tools","Herramientas avanzadas","Gelişmiş araçlar"],
"📊 Safety Analytics":["📊 Safety Analytics","📊 Safety Analytics","📊 Safety Analytics"],
"Volume, preços médios e atividade registrada.":["Volume, average prices and recorded activity.","Volumen, precios medios y actividad registrada.","Hacim, ortalama fiyatlar ve kayıtlı faaliyet."],
"🏢 Histórico":["🏢 History","🏢 Historial","🏢 Geçmiş"],
"Indicadores objetivos de usuários e instituições.":["Objective indicators for users and institutions.","Indicadores objetivos de usuarios e instituciones.","Kullanıcılar ve kurumlar için nesnel göstergeler."],
"⚠️ Safety Alert":["⚠️ Safety Alert","⚠️ Safety Alert","⚠️ Safety Alert"],
"Incidentes verificados e contestações.":["Verified incidents and appeals.","Incidentes verificados y reclamaciones.","Doğrulanmış olaylar ve itirazlar."],
"Propostas e contrapropostas em andamento.":["Ongoing offers and counteroffers.","Ofertas y contraofertas en curso.","Devam eden teklifler ve karşı teklifler."],
"MERCADO":["MARKET","MERCADO","PAZAR"],
"🛒 Ofertas abertas":["🛒 Open listings","🛒 Ofertas abiertas","🛒 Açık ilanlar"],
"Compra direta ou contraproposta. O valor fica em custódia até a conclusão da operação.":["Direct purchase or counteroffer. Funds remain in escrow until the operation is completed.","Compra directa o contraoferta. El valor queda en custodia hasta que finalice la operación.","Doğrudan satın alma veya karşı teklif. Tutar işlem tamamlanana kadar emanette tutulur."],
"NEGOCIAÇÕES":["NEGOTIATIONS","NEGOCIACIONES","GÖRÜŞMELER"],
"🤝 Contrapropostas":["🤝 Counteroffers","🤝 Contraofertas","🤝 Karşı teklifler"],
"Acompanhe propostas enviadas e recebidas antes da criação da custódia.":["Track sent and received offers before escrow is created.","Sigue las ofertas enviadas y recibidas antes de crear la custodia.","Emanet oluşturulmadan önce gönderilen ve alınan teklifleri takip edin."],
"ANÚNCIO":["LISTING","ANUNCIO","İLAN"],
"Publique um lote de no mínimo 100.000 unidades.":["List a lot of at least 100,000 units.","Publica un lote de al menos 100.000 unidades.","En az 100.000 birimlik bir lot ilan edin."],
"Descrição factual":["Factual description","Descripción factual","Nesnel açıklama"],
"Descrição":["Description","Descripción","Açıklama"],
"Publicar oferta":["Publish listing","Publicar oferta","İlanı yayınla"],
"🔐 Segurança:":["🔐 Security:","🔐 Seguridad:","🔐 Güvenlik:"],
"ao fechar uma compra, o HubCredit do comprador é debitado e permanece em custódia até a confirmação da operação.":["when a purchase is closed, the buyer's HubCredit is debited and held in escrow until confirmation.","al cerrar una compra, el HubCredit del comprador se debita y queda en custodia hasta la confirmación.","bir satın alma tamamlandığında alıcının HubCredit'i düşülür ve onaya kadar emanette tutulur."],
"LEILÕES":["AUCTIONS","SUBASTAS","AÇIK ARTIRMALAR"],
"🔨 Leilões de alto valor":["🔨 High-value auctions","🔨 Subastas de alto valor","🔨 Yüksek değerli açık artırmalar"],
"O maior lance válido fica reservado em HC. Quando um lance é superado, a reserva anterior é devolvida automaticamente.":["The highest valid bid is reserved in HC. When outbid, the previous reserve is automatically refunded.","La puja válida más alta queda reservada en HC. Cuando se supera, la reserva anterior se devuelve automáticamente.","En yüksek geçerli teklif HC olarak ayrılır. Daha yüksek teklif geldiğinde önceki rezerv otomatik olarak iade edilir."],
"Criar leilão":["Create auction","Crear subasta","Açık artırma oluştur"],
"Lance inicial (HC)":["Starting bid (HC)","Puja inicial (HC)","Başlangıç teklifi (HC)"],
"Incremento mínimo (HC)":["Minimum increment (HC)","Incremento mínimo (HC)","Minimum artış (HC)"],
"Encerra em":["Ends at","Finaliza en","Bitiş zamanı"],
"Publicar leilão":["Publish auction","Publicar subasta","Açık artırmayı yayınla"],
"ATIVOS E HISTÓRICO":["ACTIVE AND HISTORY","ACTIVOS E HISTORIAL","AKTİF VE GEÇMİŞ"],
"LICITAÇÕES":["TENDERS","LICITACIONES","İHALELER"],
"📑 Demandas e propostas":["📑 Requests and proposals","📑 Demandas y propuestas","📑 Talepler ve teklifler"],
"Governos e instituições podem publicar demandas; fornecedores enviam propostas e a escolhida segue para custódia.":["Governments and institutions can publish requests; suppliers submit proposals and the selected one moves to escrow.","Gobiernos e instituciones pueden publicar demandas; los proveedores envían propuestas y la elegida pasa a custodia.","Hükümetler ve kurumlar talepler yayınlayabilir; tedarikçiler teklif verir ve seçilen teklif emanete geçer."],
"Publicar demanda":["Publish request","Publicar demanda","Talep yayınla"],
"Orçamento máximo em HC":["Maximum budget in HC","Presupuesto máximo en HC","Maksimum HC bütçesi"],
"Prazo para propostas":["Proposal deadline","Plazo para propuestas","Teklif son tarihi"],
"Especificação":["Specification","Especificación","Şartname"],
"Publicar licitação":["Publish tender","Publicar licitación","İhaleyi yayınla"],
"DEMANDAS":["REQUESTS","DEMANDAS","TALEPLER"],
"Licitações abertas":["Open tenders","Licitaciones abiertas","Açık ihaleler"],
"MINHAS PROPOSTAS":["MY PROPOSALS","MIS PROPUESTAS","TEKLİFLERİM"],
"Propostas enviadas e recebidas":["Sent and received proposals","Propuestas enviadas y recibidas","Gönderilen ve alınan teklifler"],
"SAFETY INVEST":["SAFETY INVEST","SAFETY INVEST","SAFETY INVEST"],
"📈 Iniciativas de investimento":["📈 Investment initiatives","📈 Iniciativas de inversión","📈 Yatırım girişimleri"],
"Captação registrada em HubCredit de teste. Participações e projeções são informações do projeto, não promessa de retorno.":["Funding is recorded in test HubCredit. Equity shares and projections are project information, not a promise of return.","La captación se registra en HubCredit de prueba. Participaciones y proyecciones son información del proyecto, no una promesa de retorno.","Fonlama test HubCredit ile kaydedilir. Paylar ve projeksiyonlar proje bilgisidir, getiri vaadi değildir."],
"Importante:":["Important:","Importante:","Önemli:"],
"nesta versão, o aporte transfere o HC de teste ao proponente e registra o investimento. Não existe garantia automática de retorno.":["in this version, the contribution transfers test HC to the proposer and records the investment. There is no automatic return guarantee.","en esta versión, el aporte transfiere el HC de prueba al proponente y registra la inversión. No existe garantía automática de retorno.","bu sürümde katkı, test HC'yi proje sahibine aktarır ve yatırımı kaydeder. Otomatik getiri garantisi yoktur."],
"Apresentar iniciativa":["Submit initiative","Presentar iniciativa","Girişim sun"],
"Título":["Title","Título","Başlık"],
"Capital necessário (HC)":["Required capital (HC)","Capital necesario (HC)","Gerekli sermaye (HC)"],
"Participação oferecida (%)":["Offered participation (%)","Participación ofrecida (%)","Sunulan pay (%)"],
"Prazo de captação":["Funding deadline","Plazo de captación","Fonlama son tarihi"],
"Objetivo e condições":["Objective and conditions","Objetivo y condiciones","Amaç ve koşullar"],
"Publicar iniciativa":["Publish initiative","Publicar iniciativa","Girişimi yayınla"],
"OPORTUNIDADES":["OPPORTUNITIES","OPORTUNIDADES","FIRSATLAR"],
"Iniciativas cadastradas":["Registered initiatives","Iniciativas registradas","Kayıtlı girişimler"],
"SAFETY ANALYTICS":["SAFETY ANALYTICS","SAFETY ANALYTICS","SAFETY ANALYTICS"],
"📊 Dados do mercado":["📊 Market data","📊 Datos del mercado","📊 Pazar verileri"],
"Indicadores calculados a partir de transações concluídas ou resolvidas na plataforma.":["Indicators calculated from completed or resolved transactions on the platform.","Indicadores calculados a partir de transacciones completadas o resueltas en la plataforma.","Platformdaki tamamlanmış veya çözümlenmiş işlemlerden hesaplanan göstergeler."],
"Transações concluídas":["Completed transactions","Transacciones completadas","Tamamlanan işlemler"],
"Volume total":["Total volume","Volumen total","Toplam hacim"],
"Quantidade negociada":["Traded quantity","Cantidad negociada","İşlem gören miktar"],
"POR PRODUTO":["BY PRODUCT","POR PRODUCTO","ÜRÜNE GÖRE"],
"Histórico consolidado":["Consolidated history","Historial consolidado","Birleştirilmiş geçmiş"],
"Preço médio / unidade":["Average price / unit","Precio medio / unidad","Ortalama fiyat / birim"],
"Sobre projeções:":["About projections:","Sobre proyecciones:","Projeksiyonlar hakkında:"],
"médias e tendências históricas servem como referência estatística. Elas não garantem preço futuro, retorno ou desempenho.":["historical averages and trends are statistical references. They do not guarantee future price, return or performance.","los promedios y tendencias históricas sirven como referencia estadística. No garantizan precio futuro, retorno ni rendimiento.","geçmiş ortalamalar ve eğilimler istatistiksel referanstır. Gelecekteki fiyatı, getiriyi veya performansı garanti etmez."],
"HISTÓRICO OBJETIVO":["OBJECTIVE HISTORY","HISTORIAL OBJETIVO","NESNEL GEÇMİŞ"],
"🏢 Instituições e usuários":["🏢 Institutions and users","🏢 Instituciones y usuarios","🏢 Kurumlar ve kullanıcılar"],
"Sem notas subjetivas: apenas operações concluídas, disputas, alertas verificados e volume registrado.":["No subjective ratings: only completed operations, disputes, verified alerts and recorded volume.","Sin calificaciones subjetivas: solo operaciones completadas, disputas, alertas verificados y volumen registrado.","Öznel puanlama yok: yalnızca tamamlanan işlemler, itirazlar, doğrulanmış uyarılar ve kayıtlı hacim."],
"SAFETY ALERT":["SAFETY ALERT","SAFETY ALERT","SAFETY ALERT"],
"⚠️ Incidentes comerciais verificados":["⚠️ Verified commercial incidents","⚠️ Incidentes comerciales verificados","⚠️ Doğrulanmış ticari olaylar"],
"Registros vinculados a fatos, evidências e decisão administrativa. A pessoa ou instituição citada pode contestar o registro.":["Records tied to facts, evidence and an administrative decision. The cited person or institution may contest the record.","Registros vinculados a hechos, evidencias y una decisión administrativa. La persona o institución citada puede impugnar el registro.","Kayıtlar olgulara, kanıtlara ve idari karara dayanır. Belirtilen kişi veya kurum kayda itiraz edebilir."],
"Critério:":["Criteria:","Criterio:","Kriter:"],
"a lista não publica acusações livres. Cada alerta exige documentação administrativa e possui mecanismo de contestação/correção.":["the list does not publish unverified accusations. Each alert requires administrative documentation and includes an appeal/correction mechanism.","la lista no publica acusaciones libres. Cada alerta exige documentación administrativa y dispone de un mecanismo de impugnación/corrección.","liste doğrulanmamış suçlamalar yayınlamaz. Her uyarı idari belge gerektirir ve itiraz/düzeltme mekanizmasına sahiptir."],
"CUSTÓDIA E HISTÓRICO":["ESCROW AND HISTORY","CUSTODIA E HISTORIAL","EMANET VE GEÇMİŞ"],
"🔐 Transações":["🔐 Transactions","🔐 Transacciones","🔐 İşlemler"],
"O comprador libera o pagamento após confirmar a conclusão no jogo. A taxa da Safety é cobrada apenas quando o valor é liberado ao vendedor.":["The buyer releases payment after confirming completion in the game. The Safety fee is charged only when funds are released to the seller.","El comprador libera el pago tras confirmar la finalización en el juego. La tarifa de Safety se cobra solo cuando el valor se libera al vendedor.","Alıcı, oyunda tamamlanmayı onayladıktan sonra ödemeyi serbest bırakır. Safety ücreti yalnızca tutar satıcıya bırakıldığında alınır."],
"TESOURARIA":["TREASURY","TESORERÍA","HAZİNE"],
"💰 Receita da Safety Solutions":["💰 Safety Solutions revenue","💰 Ingresos de Safety Solutions","💰 Safety Solutions geliri"],
"Acompanhe taxas arrecadadas e, se você for Proprietário, altere a política de cobrança.":["Track collected fees and, if you are the Owner, change the fee policy.","Sigue las tarifas recaudadas y, si eres Propietario, modifica la política de cobros.","Toplanan ücretleri izleyin ve Sahip iseniz ücret politikasını değiştirin."],
"POLÍTICA DE TAXAS":["FEE POLICY","POLÍTICA DE TARIFAS","ÜCRET POLİTİKASI"],
"Configuração":["Configuration","Configuración","Yapılandırma"],
"RECEITAS":["REVENUE","INGRESOS","GELİRLER"],
"Últimos lançamentos":["Latest entries","Últimos registros","Son kayıtlar"],
"PATROCINADORES":["SPONSORS","PATROCINADORES","SPONSORLAR"],
"📣 Espaços patrocinados":["📣 Sponsored placements","📣 Espacios patrocinados","📣 Sponsor alanları"],
"Gerencie blocos discretos que aparecem entre seções do site, sem pop-ups, sobreposições ou banners fixos.":["Manage discreet blocks shown between site sections, with no pop-ups, overlays or fixed banners.","Gestiona bloques discretos entre secciones del sitio, sin ventanas emergentes, superposiciones ni banners fijos.","Sitedeki bölümler arasında görünen sade sponsor bloklarını yönetin; açılır pencere, katman veya sabit banner yoktur."],
"CADASTRO":["SETUP","REGISTRO","KAYIT"],
"Novo patrocinador":["New sponsor","Nuevo patrocinador","Yeni sponsor"],
"Mensagem curta":["Short message","Mensaje corto","Kısa mesaj"],
"URL da imagem/logo (opcional)":["Image/logo URL (optional)","URL de imagen/logo (opcional)","Görsel/logo URL'si (isteğe bağlı)"],
"Link de destino (opcional)":["Destination link (optional)","Enlace de destino (opcional)","Hedef bağlantı (isteğe bağlı)"],
"Local":["Placement","Ubicación","Konum"],
"Início (opcional)":["Start (optional)","Inicio (opcional)","Başlangıç (isteğe bağlı)"],
"Fim (opcional)":["End (optional)","Fin (opcional)","Bitiş (isteğe bağlı)"],
"Patrocinadores cadastrados":["Registered sponsors","Patrocinadores registrados","Kayıtlı sponsorlar"],
"DIAGNÓSTICO":["DIAGNOSTICS","DIAGNÓSTICO","TEŞHİS"],
"🧩 Central de erros":["🧩 Error center","🧩 Central de errores","🧩 Hata merkezi"],
"Os usuários recebem um código, uma orientação e um protocolo. Ocorrências de usuários autenticados são registradas aqui para análise da equipe.":["Users receive an error code, guidance and an incident protocol. Errors from authenticated users are recorded here for staff analysis.","Los usuarios reciben un código, una orientación y un protocolo. Los errores de usuarios autenticados se registran aquí para el análisis del equipo.","Kullanıcılara hata kodu, yönlendirme ve olay protokolü verilir. Oturum açmış kullanıcıların hataları ekip incelemesi için burada kaydedilir."],
"CATÁLOGO":["CATALOG","CATÁLOGO","KATALOG"],
"Códigos de erro":["Error codes","Códigos de error","Hata kodları"],
"OCORRÊNCIAS":["INCIDENTS","INCIDENCIAS","OLAYLAR"],
"Erros registrados":["Recorded errors","Errores registrados","Kayıtlı hatalar"],
"Abertos":["Open","Abiertos","Açık"],
"Resolvidos":["Resolved","Resueltos","Çözüldü"],
"CENTRAL ADMINISTRATIVA":["ADMIN CONTROL CENTER","CENTRAL ADMINISTRATIVA","YÖNETİM MERKEZİ"],
"🛡️ Controle da plataforma":["🛡️ Platform control","🛡️ Control de la plataforma","🛡️ Platform kontrolü"],
"Acompanhe usuários, créditos, anúncios, negociações, custódias, disputas, leilões, licitações, investimentos e trilha de auditoria.":["Monitor users, credits, listings, negotiations, escrow, disputes, auctions, tenders, investments and the audit trail.","Supervisa usuarios, créditos, anuncios, negociaciones, custodias, disputas, subastas, licitaciones, inversiones y la auditoría.","Kullanıcıları, kredileri, ilanları, görüşmeleri, emanetleri, itirazları, açık artırmaları, ihaleleri, yatırımları ve denetim izini takip edin."],
"Visão geral":["Overview","Resumen","Genel görünüm"],
"Usuários":["Users","Usuarios","Kullanıcılar"],
"Auditoria":["Audit","Auditoría","Denetim"],
"VERIFICAÇÃO":["VERIFICATION","VERIFICACIÓN","DOĞRULAMA"],
"Contas pendentes":["Pending accounts","Cuentas pendientes","Bekleyen hesaplar"],
"CUSTÓDIA":["ESCROW","CUSTODIA","EMANET"],
"Valores retidos":["Held funds","Fondos retenidos","Tutulan fonlar"],
"DISPUTAS":["DISPUTES","DISPUTAS","İTİRAZLAR"],
"Casos abertos":["Open cases","Casos abiertos","Açık vakalar"],
"Últimos acontecimentos":["Latest events","Últimos eventos","Son olaylar"],
"CONTAS E HUBCREDIT":["ACCOUNTS AND HUBCREDIT","CUENTAS Y HUBCREDIT","HESAPLAR VE HUBCREDIT"],
"Usuários da plataforma":["Platform users","Usuarios de la plataforma","Platform kullanıcıları"],
"Níveis da equipe:":["Staff levels:","Niveles del equipo:","Ekip seviyeleri:"],
"FLUXO FINANCEIRO":["FINANCIAL FLOW","FLUJO FINANCIERO","FİNANSAL AKIŞ"],
"Todas as transações":["All transactions","Todas las transacciones","Tüm işlemler"],
"Ações que movimentam valores exigem confirmação e justificativa.":["Actions that move funds require confirmation and justification.","Las acciones que mueven fondos requieren confirmación y justificación.","Fon hareketi yapan işlemler onay ve gerekçe gerektirir."],
"Em disputa":["Disputed","En disputa","İtirazlı"],
"Concluídas":["Completed","Completadas","Tamamlandı"],
"Canceladas":["Cancelled","Canceladas","İptal edildi"],
"Anúncios e propostas":["Listings and offers","Anuncios y ofertas","İlanlar ve teklifler"],
"📦 Anúncios":["📦 Listings","📦 Anuncios","📦 İlanlar"],
"🤝 Propostas e contrapropostas":["🤝 Offers and counteroffers","🤝 Ofertas y contraofertas","🤝 Teklifler ve karşı teklifler"],
"Controle de leilões":["Auction control","Control de subastas","Açık artırma kontrolü"],
"Controle de licitações":["Tender control","Control de licitaciones","İhale kontrolü"],
"Controle de iniciativas":["Initiative control","Control de iniciativas","Girişim kontrolü"],
"TRILHA DE AUDITORIA":["AUDIT TRAIL","TRAZA DE AUDITORÍA","DENETİM İZİ"],
"Eventos registrados":["Recorded events","Eventos registrados","Kayıtlı olaylar"],
"MODERAÇÃO • SAFETY ALERT":["MODERATION • SAFETY ALERT","MODERACIÓN • SAFETY ALERT","MODERASYON • SAFETY ALERT"],
"⚠️ Registros e contestações":["⚠️ Records and appeals","⚠️ Registros e impugnaciones","⚠️ Kayıtlar ve itirazlar"],
"Crie alertas apenas após verificar fatos, vínculo da operação e documentação disponível.":["Create alerts only after verifying facts, the related operation and available documentation.","Crea alertas solo tras verificar los hechos, la operación relacionada y la documentación disponible.","Uyarıları yalnızca olguları, ilgili işlemi ve mevcut belgeleri doğruladıktan sonra oluşturun."],
"Novo alerta verificado":["New verified alert","Nueva alerta verificada","Yeni doğrulanmış uyarı"],
"Usuário / instituição citada":["Cited user / institution","Usuario / institución citada","Belirtilen kullanıcı / kurum"],
"ID da transação relacionada":["Related transaction ID","ID de transacción relacionada","İlgili işlem kimliği"],
"Tipo do incidente":["Incident type","Tipo de incidente","Olay türü"],
"Valor relacionado (HC)":["Related amount (HC)","Valor relacionado (HC)","İlgili tutar (HC)"],
"Referência de evidência":["Evidence reference","Referencia de evidencia","Kanıt referansı"],
"Decisão administrativa":["Administrative decision","Decisión administrativa","İdari karar"],
"Publicar alerta":["Publish alert","Publicar alerta","Uyarıyı yayınla"],
"CONTESTAÇÕES":["APPEALS","IMPUGNACIONES","İTİRAZLAR"],
"Pendentes de análise":["Pending review","Pendientes de análisis","İnceleme bekliyor"],
"⚠️ Exclusão da conta":["⚠️ Account deletion","⚠️ Eliminación de la cuenta","⚠️ Hesap silme"],
"A exclusão só pode ser solicitada a partir da própria conta autenticada. Para evitar exclusão acidental, será necessário digitar exatamente o seu nome de usuário.":["Deletion can only be requested from the authenticated account itself. To prevent accidental deletion, you must type your username exactly.","La eliminación solo puede solicitarse desde la propia cuenta autenticada. Para evitar eliminaciones accidentales, deberás escribir exactamente tu nombre de usuario.","Silme işlemi yalnızca oturum açılmış hesabın kendisinden istenebilir. Yanlışlıkla silmeyi önlemek için kullanıcı adınızı tam olarak yazmanız gerekir."],
"Excluir minha conta":["Delete my account","Eliminar mi cuenta","Hesabımı sil"],
"Buscar usuário, instituição ou país...":["Search user, institution or country...","Buscar usuario, institución o país...","Kullanıcı, kurum veya ülke ara..."],
"Buscar código, protocolo, usuário ou página...":["Search code, protocol, user or page...","Buscar código, protocolo, usuario o página...","Kod, protokol, kullanıcı veya sayfa ara..."],
"Buscar usuário, instituição, país ou tipo...":["Search user, institution, country or type...","Buscar usuario, institución, país o tipo...","Kullanıcı, kurum, ülke veya tür ara..."],
"Buscar por ID, usuário, produto ou origem...":["Search by ID, user, product or source...","Buscar por ID, usuario, producto u origen...","Kimlik, kullanıcı, ürün veya kaynağa göre ara..."],
"Buscar ação, entidade, ID ou detalhe...":["Search action, entity, ID or detail...","Buscar acción, entidad, ID o detalle...","İşlem, varlık, kimlik veya ayrıntı ara..."],
"Detalhes da entrega, condições e observações...":["Delivery details, conditions and notes...","Detalles de entrega, condiciones y observaciones...","Teslimat ayrıntıları, koşullar ve notlar..."],
"Ex.: Especialistas em comércio de alto valor":["E.g.: High-value trade specialists","Ej.: Especialistas en comercio de alto valor","Örn.: Yüksek değerli ticaret uzmanları"],
"Selecione primeiro o tipo de usuário":["Select the user type first","Selecciona primero el tipo de usuario","Önce kullanıcı türünü seçin"],
"O que fazer:":["What to do:","Qué hacer:","Ne yapmalı:"],
"Protocolo:":["Protocol:","Protocolo:","Protokol:"],
"Sessão expirada ou ausente":["Session expired or missing","Sesión expirada o ausente","Oturum süresi dolmuş veya yok"],
"Entre novamente na sua conta e repita a operação.":["Sign in again and repeat the operation.","Vuelve a iniciar sesión y repite la operación.","Hesabınıza tekrar giriş yapın ve işlemi yeniden deneyin."],
"Login inválido":["Invalid login","Inicio de sesión inválido","Geçersiz giriş"],
"Confira o e-mail e a senha. Se necessário, tente entrar novamente com os dados corretos.":["Check your email and password. If needed, try signing in again with the correct details.","Comprueba el correo y la contraseña. Si es necesario, vuelve a iniciar sesión con los datos correctos.","E-posta ve şifrenizi kontrol edin. Gerekirse doğru bilgilerle tekrar giriş yapın."],
"E-mail ainda não confirmado":["Email not yet confirmed","Correo aún no confirmado","E-posta henüz doğrulanmadı"],
"Confirme o e-mail da conta e depois faça login novamente.":["Confirm the account email and then sign in again.","Confirma el correo de la cuenta y vuelve a iniciar sesión.","Hesabın e-postasını doğrulayın ve ardından tekrar giriş yapın."],
"Conta já cadastrada":["Account already registered","Cuenta ya registrada","Hesap zaten kayıtlı"],
"Use o login existente ou cadastre outro e-mail.":["Use the existing login or register another email.","Usa el inicio de sesión existente o registra otro correo.","Mevcut giriş bilgilerini kullanın veya başka bir e-posta ile kayıt olun."],
"Conta não está ativa":["Account is not active","La cuenta no está activa","Hesap aktif değil"],
"Verifique o status da conta. Se estiver aguardando aprovação, entre em contato com a moderação.":["Check the account status. If it is awaiting approval, contact moderation.","Comprueba el estado de la cuenta. Si espera aprobación, contacta con moderación.","Hesap durumunu kontrol edin. Onay bekliyorsa moderasyonla iletişime geçin."],
"HubCredit insuficiente":["Insufficient HubCredit","HubCredit insuficiente","Yetersiz HubCredit"],
"Confira seu saldo de HC e reduza o valor da operação ou obtenha saldo suficiente antes de tentar novamente.":["Check your HC balance and reduce the operation amount or obtain enough balance before trying again.","Comprueba tu saldo de HC y reduce el valor de la operación u obtén saldo suficiente antes de volver a intentarlo.","HC bakiyenizi kontrol edin; işlem tutarını azaltın veya tekrar denemeden önce yeterli bakiye sağlayın."],
"Permissão insuficiente":["Insufficient permission","Permiso insuficiente","Yetersiz yetki"],
"Essa ação exige outro nível de acesso. Se acreditar que deveria ter permissão, envie este código à moderação.":["This action requires a different access level. If you believe you should have permission, send this code to moderation.","Esta acción requiere otro nivel de acceso. Si crees que deberías tener permiso, envía este código a moderación.","Bu işlem farklı bir erişim seviyesi gerektirir. Yetkiniz olması gerektiğini düşünüyorsanız bu kodu moderasyona gönderin."],
"Oferta do mercado indisponível":["Market listing unavailable","Oferta de mercado no disponible","Pazar ilanı kullanılamıyor"],
"Atualize a página. A oferta pode ter sido vendida, cancelada ou alterada.":["Refresh the page. The listing may have been sold, cancelled or changed.","Actualiza la página. La oferta puede haber sido vendida, cancelada o modificada.","Sayfayı yenileyin. İlan satılmış, iptal edilmiş veya değiştirilmiş olabilir."],
"Negociação indisponível":["Negotiation unavailable","Negociación no disponible","Görüşme kullanılamıyor"],
"Atualize a página e confira o estado da proposta ou contraproposta antes de tentar novamente.":["Refresh the page and check the offer or counteroffer status before trying again.","Actualiza la página y comprueba el estado de la oferta o contraoferta antes de volver a intentarlo.","Sayfayı yenileyin ve tekrar denemeden önce teklif veya karşı teklif durumunu kontrol edin."],
"Transação indisponível":["Transaction unavailable","Transacción no disponible","İşlem kullanılamıyor"],
"Atualize a página e confira o status da transação. Se o problema persistir, envie o código à moderação.":["Refresh the page and check the transaction status. If the problem persists, send the code to moderation.","Actualiza la página y comprueba el estado de la transacción. Si el problema continúa, envía el código a moderación.","Sayfayı yenileyin ve işlem durumunu kontrol edin. Sorun devam ederse kodu moderasyona gönderin."],
"Problema com a disputa":["Dispute issue","Problema con la disputa","İtiraz sorunu"],
"Confira se a disputa ainda está aberta. Se persistir, envie o código e o número da transação à moderação.":["Check whether the dispute is still open. If it persists, send the code and transaction number to moderation.","Comprueba si la disputa sigue abierta. Si persiste, envía el código y el número de transacción a moderación.","İtirazın hâlâ açık olup olmadığını kontrol edin. Sorun sürerse kodu ve işlem numarasını moderasyona gönderin."],
"Leilão indisponível":["Auction unavailable","Subasta no disponible","Açık artırma kullanılamıyor"],
"Atualize a página e verifique se o leilão ainda está aberto ou se já foi encerrado.":["Refresh the page and check whether the auction is still open or has ended.","Actualiza la página y comprueba si la subasta sigue abierta o ya terminó.","Sayfayı yenileyin ve açık artırmanın hâlâ açık mı yoksa sona mı erdiğini kontrol edin."],
"Licitação ou proposta indisponível":["Tender or proposal unavailable","Licitación o propuesta no disponible","İhale veya teklif kullanılamıyor"],
"Atualize a página e confirme se a licitação ainda está aberta.":["Refresh the page and confirm whether the tender is still open.","Actualiza la página y confirma si la licitación sigue abierta.","Sayfayı yenileyin ve ihalenin hâlâ açık olup olmadığını kontrol edin."],
"Iniciativa indisponível":["Initiative unavailable","Iniciativa no disponible","Girişim kullanılamıyor"],
"Atualize a página e confira o estado atual da iniciativa antes de tentar novamente.":["Refresh the page and check the initiative's current status before trying again.","Actualiza la página y comprueba el estado actual de la iniciativa antes de volver a intentarlo.","Sayfayı yenileyin ve tekrar denemeden önce girişimin mevcut durumunu kontrol edin."],
"Erro no sistema de patrocinadores":["Sponsor system error","Error en el sistema de patrocinadores","Sponsor sistemi hatası"],
"Revise os dados do patrocinador e tente novamente. Se persistir, envie este código à administração.":["Review the sponsor data and try again. If it persists, send this code to the administration.","Revisa los datos del patrocinador y vuelve a intentarlo. Si persiste, envía este código a la administración.","Sponsor bilgilerini gözden geçirip tekrar deneyin. Sorun sürerse bu kodu yönetime gönderin."],
"Registro duplicado":["Duplicate record","Registro duplicado","Yinelenen kayıt"],
"Esse dado já existe. Atualize a página e verifique o cadastro antes de tentar novamente.":["This data already exists. Refresh the page and check the record before trying again.","Este dato ya existe. Actualiza la página y revisa el registro antes de volver a intentarlo.","Bu veri zaten mevcut. Sayfayı yenileyin ve tekrar denemeden önce kaydı kontrol edin."],
"Dados inválidos ou incompletos":["Invalid or incomplete data","Datos inválidos o incompletos","Geçersiz veya eksik veri"],
"Revise os campos preenchidos e tente novamente.":["Review the completed fields and try again.","Revisa los campos completados y vuelve a intentarlo.","Doldurulan alanları kontrol edip tekrar deneyin."],
"Falha de comunicação com o banco":["Database communication failure","Fallo de comunicación con la base de datos","Veritabanı iletişim hatası"],
"Atualize a página e tente novamente. Se persistir, envie este código à moderação.":["Refresh the page and try again. If it persists, send this code to moderation.","Actualiza la página y vuelve a intentarlo. Si persiste, envía este código a moderación.","Sayfayı yenileyip tekrar deneyin. Sorun sürerse bu kodu moderasyona gönderin."],
"Incompatibilidade interna de dados":["Internal data mismatch","Incompatibilidad interna de datos","Dahili veri uyumsuzluğu"],
"Não repita várias vezes a operação. Atualize a página e envie este código à moderação para correção.":["Do not repeat the operation several times. Refresh the page and send this code to moderation for correction.","No repitas la operación varias veces. Actualiza la página y envía este código a moderación para su corrección.","İşlemi tekrar tekrar yapmayın. Sayfayı yenileyin ve düzeltme için bu kodu moderasyona gönderin."],
"Falha de conexão":["Connection failure","Fallo de conexión","Bağlantı hatası"],
"Confira sua internet, aguarde alguns segundos e tente novamente.":["Check your internet connection, wait a few seconds and try again.","Comprueba tu conexión a internet, espera unos segundos y vuelve a intentarlo.","İnternet bağlantınızı kontrol edin, birkaç saniye bekleyip tekrar deneyin."],
"Configuração da plataforma incompleta":["Incomplete platform configuration","Configuración incompleta de la plataforma","Eksik platform yapılandırması"],
"Avise a administração da Safety Solutions. Este problema precisa ser corrigido na configuração do site.":["Notify Safety Solutions administration. This issue must be fixed in the site configuration.","Avisa a la administración de Safety Solutions. Este problema debe corregirse en la configuración del sitio.","Safety Solutions yönetimine bildirin. Bu sorun site yapılandırmasında düzeltilmelidir."],
"Erro não identificado":["Unidentified error","Error no identificado","Tanımlanamayan hata"],
"Atualize a página e tente novamente. Se o erro continuar, envie o código e o protocolo à moderação.":["Refresh the page and try again. If the error continues, send the code and protocol to moderation.","Actualiza la página y vuelve a intentarlo. Si el error continúa, envía el código y el protocolo a moderación.","Sayfayı yenileyip tekrar deneyin. Hata devam ederse kodu ve protokolü moderasyona gönderin."]
};
Object.assign(entries,{
"Painel | Safety Solutions":["Dashboard | Safety Solutions","Panel | Safety Solutions","Panel | Safety Solutions"],
"Mercado | Safety Solutions":["Market | Safety Solutions","Mercado | Safety Solutions","Pazar | Safety Solutions"],
"Leilões | Safety Solutions":["Auctions | Safety Solutions","Subastas | Safety Solutions","Açık Artırmalar | Safety Solutions"],
"Licitações | Safety Solutions":["Tenders | Safety Solutions","Licitaciones | Safety Solutions","İhaleler | Safety Solutions"],
"Transações | Safety Solutions":["Transactions | Safety Solutions","Transacciones | Safety Solutions","İşlemler | Safety Solutions"],
"Negociações | Safety Solutions":["Negotiations | Safety Solutions","Negociaciones | Safety Solutions","Görüşmeler | Safety Solutions"],
"Nova oferta | Safety Solutions":["New listing | Safety Solutions","Nueva oferta | Safety Solutions","Yeni ilan | Safety Solutions"],
"Entrar | Safety Solutions":["Sign in | Safety Solutions","Iniciar sesión | Safety Solutions","Giriş | Safety Solutions"],
"Cadastro | Safety Solutions":["Register | Safety Solutions","Registro | Safety Solutions","Kayıt | Safety Solutions"],
"Perfil | Safety Solutions":["Profile | Safety Solutions","Perfil | Safety Solutions","Profil | Safety Solutions"],
"Histórico comercial | Safety Solutions":["Commercial history | Safety Solutions","Historial comercial | Safety Solutions","Ticari geçmiş | Safety Solutions"],
"Tesouraria | Safety Solutions":["Treasury | Safety Solutions","Tesorería | Safety Solutions","Hazine | Safety Solutions"],
"Patrocinadores | Safety Solutions":["Sponsors | Safety Solutions","Patrocinadores | Safety Solutions","Sponsorlar | Safety Solutions"],
"Central de Erros | Safety Solutions":["Error Center | Safety Solutions","Central de Errores | Safety Solutions","Hata Merkezi | Safety Solutions"],
"Central Administrativa | Safety Solutions":["Admin Control Center | Safety Solutions","Central Administrativa | Safety Solutions","Yönetim Merkezi | Safety Solutions"],
"Safety Analytics | Safety Solutions":["Safety Analytics | Safety Solutions","Safety Analytics | Safety Solutions","Safety Analytics | Safety Solutions"],
"Safety Invest | Safety Solutions":["Safety Invest | Safety Solutions","Safety Invest | Safety Solutions","Safety Invest | Safety Solutions"],
"Safety Alert | Safety Solutions":["Safety Alert | Safety Solutions","Safety Alert | Safety Solutions","Safety Alert | Safety Solutions"],
"Safety Alert Admin | Safety Solutions":["Safety Alert Admin | Safety Solutions","Admin Safety Alert | Safety Solutions","Safety Alert Yönetimi | Safety Solutions"],
"🏭 Fábrica / Indústria":["🏭 Factory / Industry","🏭 Fábrica / Industria","🏭 Fabrika / Sanayi"],
"📦 Revendedora":["📦 Reseller","📦 Revendedora","📦 Bayi"],
"🏦 Financeira":["🏦 Financial institution","🏦 Financiera","🏦 Finans kurumu"],
"🏛️ Representante governamental":["🏛️ Government representative","🏛️ Representante gubernamental","🏛️ Hükümet temsilcisi"],
"Contas de":["Accounts of","Las cuentas de","Şu hesaplar:"],
"representantes governamentais":["government representatives","representantes gubernamentales","hükümet temsilcileri"],
"instituições financeiras":["financial institutions","instituciones financieras","finans kurumları"],
"ficam aguardando aprovação. Após o cadastro, entre em contato com a moderação para solicitar a verificação da conta.":["remain pending approval. After registration, contact moderation to request account verification.","quedan pendientes de aprobación. Después del registro, contacta con moderación para solicitar la verificación de la cuenta.","onay bekler. Kayıttan sonra hesap doğrulaması istemek için moderasyonla iletişime geçin."],
"Ouro":["Gold","Oro","Altın"],
"Petróleo":["Oil","Petróleo","Petrol"],
"Couro":["Leather","Cuero","Deri"],
"Safety Solutions • V1 em desenvolvimento • HubCredit de teste":["Safety Solutions • V1 in development • Test HubCredit","Safety Solutions • V1 en desarrollo • HubCredit de prueba","Safety Solutions • V1 geliştirme aşamasında • Test HubCredit"],
"Conta criada.":["Account created.","Cuenta creada.","Hesap oluşturuldu."],
"Perfil atualizado.":["Profile updated.","Perfil actualizado.","Profil güncellendi."],
"Contraproposta enviada.":["Counteroffer sent.","Contraoferta enviada.","Karşı teklif gönderildi."],
"Pagamento liberado ao vendedor.":["Payment released to the seller.","Pago liberado al vendedor.","Ödeme satıcıya bırakıldı."],
"Disputa aberta. O valor seguirá bloqueado para análise.":["Dispute opened. Funds will remain locked for review.","Disputa abierta. El valor seguirá bloqueado para análisis.","İtiraz açıldı. Tutar inceleme için kilitli kalacak."],
"Confirmar compra? O valor ficará em custódia. A taxa da Safety é descontada do vendedor quando a operação for concluída.":["Confirm purchase? The amount will be held in escrow. The Safety fee is deducted from the seller when the operation is completed.","¿Confirmar compra? El valor quedará en custodia. La tarifa de Safety se descuenta al vendedor cuando se completa la operación.","Satın alma onaylansın mı? Tutar emanette tutulacak. Safety ücreti işlem tamamlandığında satıcıdan düşülür."],
"Confirma que a operação foi concluída? O HC líquido será liberado ao vendedor e a taxa da Safety irá para a Tesouraria.":["Do you confirm that the operation is complete? Net HC will be released to the seller and the Safety fee will go to the Treasury.","¿Confirmas que la operación fue completada? El HC neto se liberará al vendedor y la tarifa de Safety irá a la Tesorería.","İşlemin tamamlandığını onaylıyor musunuz? Net HC satıcıya bırakılacak ve Safety ücreti Hazineye aktarılacak."],
"Descreva o problema. Informe fatos e evidências disponíveis:":["Describe the problem. Include available facts and evidence:","Describe el problema. Incluye los hechos y evidencias disponibles:","Sorunu açıklayın. Mevcut olguları ve kanıtları belirtin:"],
"Valor total da contraproposta em HC:":["Total counteroffer amount in HC:","Valor total de la contraoferta en HC:","Toplam karşı teklif tutarı (HC):"],
"Novo valor total em HC:":["New total amount in HC:","Nuevo valor total en HC:","Yeni toplam tutar (HC):"],
"Valor inválido.":["Invalid amount.","Valor inválido.","Geçersiz tutar."],
"Transação #":["Transaction #","Transacción #","İşlem #"],
" criada em custódia.":[" created in escrow."," creada en custodia."," emanet olarak oluşturuldu."],
" criada.":[" created."," creada."," oluşturuldu."],
"Anúncio em destaque até ":["Listing featured until ","Anuncio destacado hasta ","İlan şu zamana kadar öne çıkarıldı: "],
"Leilão finalizado sem lances.":["Auction closed with no bids.","Subasta finalizada sin pujas.","Açık artırma teklifsiz kapatıldı."],
"Leilão finalizado. Transação #":["Auction closed. Transaction #","Subasta finalizada. Transacción #","Açık artırma kapatıldı. İşlem #"],
" criada em custódia. A taxa da Safety será cobrada quando o pagamento for liberado.":[" created in escrow. The Safety fee will be charged when payment is released."," creada en custodia. La tarifa de Safety se cobrará cuando se libere el pago."," emanet olarak oluşturuldu. Safety ücreti ödeme serbest bırakıldığında alınacak."],
"Erro: ":["Error: ","Error: ","Hata: "],
"Nenhuma oferta disponível.":["No listings available.","No hay ofertas disponibles.","Kullanılabilir ilan yok."],
"Nenhuma transação registrada.":["No transactions recorded.","No hay transacciones registradas.","Kayıtlı işlem yok."],
"Nenhuma negociação registrada.":["No negotiations recorded.","No hay negociaciones registradas.","Kayıtlı görüşme yok."],
"Nenhum leilão criado.":["No auctions created.","No hay subastas creadas.","Oluşturulmuş açık artırma yok."],
"Nenhum erro encontrado.":["No errors found.","No se encontraron errores.","Hata bulunamadı."],
"Nenhum patrocinador cadastrado.":["No sponsors registered.","No hay patrocinadores registrados.","Kayıtlı sponsor yok."],
"Somente leitura":["Read only","Solo lectura","Salt okunur"],
"Somente leitura neste nível.":["Read only at this level.","Solo lectura en este nivel.","Bu seviyede salt okunur."],
"Sem ação disponível":["No action available","Sin acción disponible","Kullanılabilir işlem yok"],
"Seu nível: ":["Your level: ","Tu nivel: ","Seviyeniz: "],
"Usuário:":["User:","Usuario:","Kullanıcı:"],
"Página:":["Page:","Página:","Sayfa:"],
"Contexto:":["Context:","Contexto:","Bağlam:"],
"Resolução:":["Resolution:","Resolución:","Çözüm:"],
"Marcar como resolvido":["Mark as resolved","Marcar como resuelto","Çözüldü olarak işaretle"]
});
Object.assign(entries,{
"Rede Comercial | Safety Solutions":["Commercial Network | Safety Solutions","Red Comercial | Safety Solutions","Ticari Ağ | Safety Solutions"],
"Contratos Comerciais | Safety Solutions":["Commercial Contracts | Safety Solutions","Contratos Comerciales | Safety Solutions","Ticari Sözleşmeler | Safety Solutions"],
"Perfil comercial | Safety Solutions":["Commercial Profile | Safety Solutions","Perfil Comercial | Safety Solutions","Ticari Profil | Safety Solutions"],
"Rede":["Network","Red","Ağ"],
"Contratos":["Contracts","Contratos","Sözleşmeler"],
"REDE COMERCIAL":["COMMERCIAL NETWORK","RED COMERCIAL","TİCARİ AĞ"],
"🔗 Parceiros e conexões":["🔗 Partners and connections","🔗 Socios y conexiones","🔗 Ortaklar ve bağlantılar"],
"Construa uma rede pública de relações comerciais confirmadas entre usuários e instituições.":["Build a public network of confirmed commercial relationships between users and institutions.","Construye una red pública de relaciones comerciales confirmadas entre usuarios e instituciones.","Kullanıcılar ve kurumlar arasında doğrulanmış ticari ilişkilerden oluşan açık bir ağ kurun."],
"MINHA REDE":["MY NETWORK","MI RED","AĞIM"],
"Parcerias":["Partnerships","Alianzas","Ortaklıklar"],
"ENCONTRAR PARCEIROS":["FIND PARTNERS","ENCONTRAR SOCIOS","ORTAK BUL"],
"Diretório":["Directory","Directorio","Dizin"],
"Solicitar parceria":["Request partnership","Solicitar alianza","Ortaklık iste"],
"🔗 Solicitar parceria":["🔗 Request partnership","🔗 Solicitar alianza","🔗 Ortaklık iste"],
"Conexão existente":["Existing connection","Conexión existente","Mevcut bağlantı"],
"Ver perfil":["View profile","Ver perfil","Profili gör"],
"Ver perfil comercial":["View commercial profile","Ver perfil comercial","Ticari profili gör"],
"Aceitar":["Accept","Aceptar","Kabul et"],
"Recusar":["Reject","Rechazar","Reddet"],
"Encerrar":["End","Finalizar","Sonlandır"],
"CONTRATOS RECORRENTES":["RECURRING CONTRACTS","CONTRATOS RECURRENTES","DÜZENLİ SÖZLEŞMELER"],
"📄 Acordos comerciais":["📄 Commercial agreements","📄 Acuerdos comerciales","📄 Ticari anlaşmalar"],
"Registre relações de fornecimento de longo prazo. Cada parcela pode entrar em custódia separadamente, preservando histórico e cumprimento.":["Register long-term supply relationships. Each installment can enter escrow separately, preserving history and fulfillment.","Registra relaciones de suministro a largo plazo. Cada cuota puede entrar en custodia por separado, preservando el historial y el cumplimiento.","Uzun vadeli tedarik ilişkilerini kaydedin. Her taksit ayrı ayrı emanete alınabilir; geçmiş ve yerine getirme kaydı korunur."],
"Como funciona:":["How it works:","Cómo funciona:","Nasıl çalışır:"],
"uma parte propõe o contrato, a outra aceita e o sistema cria o calendário das entregas. O comprador financia cada parcela em HC quando desejar; a liberação segue o fluxo normal de custódia.":["one party proposes the contract, the other accepts it and the system creates the delivery schedule. The buyer funds each installment in HC when desired; release follows the normal escrow flow.","una parte propone el contrato, la otra lo acepta y el sistema crea el calendario de entregas. El comprador financia cada cuota en HC cuando lo desee; la liberación sigue el flujo normal de custodia.","bir taraf sözleşmeyi önerir, diğer taraf kabul eder ve sistem teslimat takvimini oluşturur. Alıcı her taksiti istediğinde HC ile finanse eder; serbest bırakma normal emanet akışını izler."],
"NOVO ACORDO":["NEW AGREEMENT","NUEVO ACUERDO","YENİ ANLAŞMA"],
"Propor contrato":["Propose contract","Proponer contrato","Sözleşme öner"],
"Contraparte":["Counterparty","Contraparte","Karşı taraf"],
"Meu papel":["My role","Mi papel","Rolüm"],
"Comprador":["Buyer","Comprador","Alıcı"],
"Vendedor":["Seller","Vendedor","Satıcı"],
"Quantidade por entrega":["Quantity per delivery","Cantidad por entrega","Teslimat başına miktar"],
"Valor por entrega (HC)":["Amount per delivery (HC)","Valor por entrega (HC)","Teslimat başına tutar (HC)"],
"Intervalo entre entregas (dias)":["Delivery interval (days)","Intervalo entre entregas (días)","Teslimatlar arası süre (gün)"],
"Número de entregas":["Number of deliveries","Número de entregas","Teslimat sayısı"],
"Primeira entrega":["First delivery","Primera entrega","İlk teslimat"],
"Termos do acordo":["Agreement terms","Términos del acuerdo","Anlaşma koşulları"],
"Enviar proposta de contrato":["Send contract proposal","Enviar propuesta de contrato","Sözleşme önerisi gönder"],
"MEUS CONTRATOS":["MY CONTRACTS","MIS CONTRATOS","SÖZLEŞMELERİM"],
"Relacionamentos ativos e histórico":["Active relationships and history","Relaciones activas e historial","Aktif ilişkiler ve geçmiş"],
"Aceitar contrato":["Accept contract","Aceptar contrato","Sözleşmeyi kabul et"],
"Ver parcelas":["View installments","Ver cuotas","Taksitleri gör"],
"Encerrar contrato":["End contract","Finalizar contrato","Sözleşmeyi sonlandır"],
"Cancelar proposta":["Cancel proposal","Cancelar propuesta","Öneriyi iptal et"],
"Ver contraparte":["View counterparty","Ver contraparte","Karşı tarafı gör"],
"Colocar em custódia":["Place in escrow","Poner en custodia","Emanete al"],
"Ver transação":["View transaction","Ver transacción","İşlemi gör"],
"PERFIL COMERCIAL":["COMMERCIAL PROFILE","PERFIL COMERCIAL","TİCARİ PROFİL"],
"Sobre":["About","Acerca de","Hakkında"],
"CONFIANÇA OBJETIVA":["OBJECTIVE TRUST","CONFIANZA OBJETIVA","NESNEL GÜVEN"],
"Operações concluídas":["Completed operations","Operaciones completadas","Tamamlanan işlemler"],
"Volume registrado":["Recorded volume","Volumen registrado","Kayıtlı hacim"],
"Parceiros confirmados":["Confirmed partners","Socios confirmados","Doğrulanmış ortaklar"],
"Contratos ativos":["Active contracts","Contratos activos","Aktif sözleşmeler"],
"Contratos concluídos":["Completed contracts","Contratos completados","Tamamlanan sözleşmeler"],
"Contato público:":["Public contact:","Contacto público:","Açık iletişim:"],
"Na Safety desde:":["On Safety since:","En Safety desde:","Safety'de şu tarihten beri:"],
"Estes dados são registros objetivos da plataforma e não representam uma nota subjetiva.":["These are objective platform records and do not represent a subjective rating.","Estos son registros objetivos de la plataforma y no representan una calificación subjetiva.","Bunlar platformun nesnel kayıtlarıdır ve öznel bir puanlama değildir."],
"✓ Verificação institucional":["✓ Institutional verification","✓ Verificación institucional","✓ Kurumsal doğrulama"],
"📄 Propor contrato":["📄 Propose contract","📄 Proponer contrato","📄 Sözleşme öner"],
"Foco comercial":["Commercial focus","Enfoque comercial","Ticari odak"],
"Apresentação pública":["Public presentation","Presentación pública","Açık tanıtım"],
"URL do logo / imagem institucional":["Logo / institutional image URL","URL del logo / imagen institucional","Logo / kurumsal görsel URL'si"],
"Contato público":["Public contact","Contacto público","Açık iletişim"],
"Seu perfil agora também funciona como identidade comercial pública dentro da Safety Solutions.":["Your profile now also serves as your public commercial identity inside Safety Solutions.","Tu perfil ahora también funciona como identidad comercial pública dentro de Safety Solutions.","Profiliniz artık Safety Solutions içinde açık ticari kimliğiniz olarak da hizmet eder."],
"🏛️ Perfil Comercial":["🏛️ Commercial Profile","🏛️ Perfil Comercial","🏛️ Ticari Profil"],
"Sua identidade institucional, histórico e presença na Safety.":["Your institutional identity, history and presence on Safety.","Tu identidad institucional, historial y presencia en Safety.","Safety'deki kurumsal kimliğiniz, geçmişiniz ve varlığınız."],
"🔗 Rede Comercial":["🔗 Commercial Network","🔗 Red Comercial","🔗 Ticari Ağ"],
"Construa relações públicas e confirmadas com parceiros.":["Build public, confirmed relationships with partners.","Construye relaciones públicas y confirmadas con socios.","Ortaklarla açık ve doğrulanmış ilişkiler kurun."],
"📄 Contratos":["📄 Contracts","📄 Contratos","📄 Sözleşmeler"],
"Acordos recorrentes com calendário e custódia por parcela.":["Recurring agreements with schedules and escrow per installment.","Acuerdos recurrentes con calendario y custodia por cuota.","Takvimli ve taksit başına emanetli düzenli anlaşmalar."]
});
Object.assign(entries,{
"Erro na rede comercial":["Commercial network error","Error en la red comercial","Ticari ağ hatası"],
"Atualize a página e confira se a parceria ainda está disponível. Se persistir, envie o protocolo à moderação.":["Refresh the page and check whether the partnership is still available. If it persists, send the protocol to moderation.","Actualiza la página y comprueba si la alianza sigue disponible. Si persiste, envía el protocolo a moderación.","Sayfayı yenileyin ve ortaklığın hâlâ kullanılabilir olup olmadığını kontrol edin. Sorun sürerse protokolü moderasyona gönderin."],
"Erro no contrato comercial":["Commercial contract error","Error en el contrato comercial","Ticari sözleşme hatası"],
"Confira o status do contrato ou da parcela e tente novamente. Se persistir, envie o protocolo à moderação.":["Check the contract or installment status and try again. If it persists, send the protocol to moderation.","Comprueba el estado del contrato o de la cuota y vuelve a intentarlo. Si persiste, envía el protocolo a moderación.","Sözleşmenin veya taksitin durumunu kontrol edip tekrar deneyin. Sorun sürerse protokolü moderasyona gönderin."]
});
Object.assign(entries,{
"Mais":["More","Más","Daha Fazla"],
"Central Admin":["Admin Center","Centro Admin","Yönetim Merkezi"],
"Tesouraria":["Treasury","Tesorería","Hazine"],
"Patrocinadores":["Sponsors","Patrocinadores","Sponsorlar"],
"Erros":["Errors","Errores","Hatalar"],
"Safety Alert Admin":["Safety Alert Admin","Admin Safety Alert","Safety Alert Yönetimi"]
});
Object.assign(entries,{
"Falha na interface da plataforma":["Platform interface failure","Fallo en la interfaz de la plataforma","Platform arayüz hatası"],
"Atualize a página. Se o erro continuar, envie o código e o protocolo à moderação.":["Refresh the page. If the error continues, send the code and protocol to moderation.","Actualiza la página. Si el error continúa, envía el código y el protocolo a moderación.","Sayfayı yenileyin. Hata devam ederse kodu ve protokolü moderasyona gönderin."]
});
Object.assign(entries,{
"CLASSIFICAÇÃO E PREÇOS":["CLASSIFICATION AND PRICING","CLASIFICACIÓN Y PRECIOS","SINIFLANDIRMA VE FİYATLANDIRMA"],
"Pacotes de patrocínio":["Sponsorship packages","Paquetes de patrocinio","Sponsorluk paketleri"],
"Quanto maior a presença visual, maior o preço em HC. A duração padrão também faz parte do pacote.":["The larger the visual presence, the higher the HC price. The standard duration is also part of the package.","Cuanto mayor sea la presencia visual, mayor será el precio en HC. La duración estándar también forma parte del paquete.","Görsel alan büyüdükçe HC fiyatı artar. Standart süre de pakete dahildir."],
"Classificação":["Classification","Clasificación","Sınıflandırma"],
"Apoiador":["Supporter","Colaborador","Destekçi"],
"Destaque":["Highlight","Destacado","Öne Çıkan"],
"Premium":["Premium","Premium","Premium"],
"Master":["Master","Master","Master"],
"Prioridade interna":["Internal priority","Prioridad interna","Dahili öncelik"],
"Faixa horizontal ampla":["Wide horizontal strip","Franja horizontal amplia","Geniş yatay alan"],
"Bloco médio em destaque":["Medium highlighted block","Bloque destacado mediano","Orta boy öne çıkan blok"],
"Bloco grande de alta visibilidade":["Large high-visibility block","Bloque grande de alta visibilidad","Yüksek görünürlüklü büyük blok"],
"Faixa principal em largura total":["Full-width main banner","Franja principal a ancho completo","Tam genişlik ana sponsor alanı"],
"por":["for","por","için"],
"dias":["days","días","gün"],
"Conhecer apoiador ↗":["Visit supporter ↗","Conocer patrocinador ↗","Destekçiyi gör ↗"],
"Os anúncios ocupam espaço real no conteúdo, com tamanhos proporcionais ao pacote contratado. Nenhum formato usa pop-up, sobreposição ou interfere na navegação.":["Ads use real content space, with sizes proportional to the selected package. No format uses pop-ups, overlays, or interferes with navigation.","Los anuncios ocupan espacio real en el contenido, con tamaños proporcionales al paquete contratado. Ningún formato usa ventanas emergentes, superposiciones ni interfiere con la navegación.","Reklamlar içerikte gerçek alan kullanır ve boyutları seçilen pakete göre değişir. Hiçbir format açılır pencere, kaplama kullanmaz veya gezinmeyi engellemez."]
});
Object.assign(entries,{
"Posição visual":["Visual position","Posición visual","Görsel konum"],
"Lado esquerdo":["Left side","Lado izquierdo","Sol taraf"],
"Lado direito":["Right side","Lado derecho","Sağ taraf"],
"Embaixo da página":["Bottom of page","Parte inferior de la página","Sayfanın altı"],
"Apoiadores":["Supporters","Colaboradores","Destekçiler"],
"Apoiadores da Safety Solutions":["Safety Solutions supporters","Colaboradores de Safety Solutions","Safety Solutions destekçileri"],
"Presença compacta":["Compact presence","Presencia compacta","Kompakt görünüm"],
"recomendado: embaixo":["recommended: bottom","recomendado: abajo","önerilen: alt bölüm"],
"recomendado: laterais":["recommended: sides","recomendado: laterales","önerilen: yanlar"]
});
Object.assign(entries,{
"Segurança":["Security","Seguridad","Güvenlik"],
"Segurança da Conta":["Account Security","Seguridad de la Cuenta","Hesap Güvenliği"],
"Proteção e sessões":["Protection and sessions","Protección y sesiones","Koruma ve oturumlar"],
"Gerencie sua verificação em duas etapas, sessão atual e histórico de segurança.":["Manage two-step verification, your current session, and security history.","Gestiona la verificación en dos pasos, la sesión actual y el historial de seguridad.","İki adımlı doğrulamayı, mevcut oturumu ve güvenlik geçmişini yönetin."],
"Verificação em duas etapas":["Two-step verification","Verificación en dos pasos","İki adımlı doğrulama"],
"Ativar 2FA":["Enable 2FA","Activar 2FA","2FA'yı etkinleştir"],
"Encerrar outras sessões":["End other sessions","Cerrar otras sesiones","Diğer oturumları kapat"],
"Sair de todos os dispositivos":["Sign out of all devices","Cerrar sesión en todos los dispositivos","Tüm cihazlardan çıkış yap"],
"Atividade de segurança":["Security activity","Actividad de seguridad","Güvenlik etkinliği"],
"Proteção da conta":["Account protection","Protección de la cuenta","Hesap koruması"],
"Abrir Segurança":["Open Security","Abrir Seguridad","Güvenliği Aç"],
"Verificação em duas etapas necessária":["Two-step verification required","Se requiere verificación en dos pasos","İki adımlı doğrulama gerekli"],
"Conclua a verificação 2FA na área de Segurança da Conta e tente novamente.":["Complete 2FA verification in Account Security and try again.","Completa la verificación 2FA en Seguridad de la Cuenta e inténtalo de nuevo.","Hesap Güvenliği bölümünde 2FA doğrulamasını tamamlayıp tekrar deneyin."]
});
Object.assign(entries,{
"BAÚ DIÁRIO":["DAILY CHEST","COFRE DIARIO","GÜNLÜK SANDIK"],
"Recompensa de acesso":["Login reward","Recompensa de acceso","Giriş ödülü"],
"Abrir baú":["Open chest","Abrir cofre","Sandığı aç"],
"Baú fechado":["Chest locked","Cofre cerrado","Sandık kilitli"],
"Disponível agora":["Available now","Disponible ahora","Şimdi hazır"],
"Próximo baú em":["Next chest in","Próximo cofre en","Sonraki sandık"],
"Baú diário indisponível":["Daily chest unavailable","Cofre diario no disponible","Günlük sandık kullanılamıyor"],
"Aguarde o tempo indicado no painel antes de tentar abrir o baú novamente.":["Wait for the time shown on the dashboard before opening the chest again.","Espera el tiempo indicado en el panel antes de abrir el cofre nuevamente.","Sandığı tekrar açmadan önce panelde gösterilen süreyi bekleyin."],
"O baú diário está temporariamente desativado.":["The daily chest is temporarily disabled.","El cofre diario está temporalmente desactivado.","Günlük sandık geçici olarak devre dışı."],
"Sua conta ainda não pode abrir o baú.":["Your account cannot open the chest yet.","Tu cuenta aún no puede abrir el cofre.","Hesabınız henüz sandığı açamıyor."]
});
Object.assign(entries,{
"Exclusão automática indisponível":["Automatic deletion unavailable","Eliminación automática no disponible","Otomatik silme kullanılamıyor"],
"Esta conta possui histórico comercial que precisa ser preservado. Entre em contato com a administração para tratar o encerramento da conta.":["This account has commercial history that must be preserved. Contact administration to arrange account closure.","Esta cuenta tiene historial comercial que debe conservarse. Contacta con la administración para gestionar el cierre de la cuenta.","Bu hesabın korunması gereken ticari geçmişi var. Hesabın kapatılması için yönetimle iletişime geçin."]
});
Object.assign(entries,{
"Saúde Beta":["Beta Health","Salud Beta","Beta Sağlığı"],
"Saúde da plataforma":["Platform health","Salud de la plataforma","Platform sağlığı"],
"Verificação automática de integridade financeira, dados, permissões e pendências operacionais.":["Automatic checks for financial integrity, data, permissions, and operational issues.","Verificación automática de integridad financiera, datos, permisos y pendientes operativos.","Finansal bütünlük, veri, izinler ve operasyonel sorunlar için otomatik kontroller."],
"Rodar verificação novamente":["Run checks again","Ejecutar verificación de nuevo","Kontrolleri yeniden çalıştır"],
"Economia":["Economy","Economía","Ekonomi"],
"Integridade de dados":["Data integrity","Integridad de datos","Veri bütünlüğü"],
"Operações":["Operations","Operaciones","Operasyonlar"],
"Verificação externa ainda necessária:":["External verification still required:","Aún se requiere verificación externa:","Harici doğrulama hâlâ gerekli:"]
});
Object.assign(entries,{
"Muitas ações em pouco tempo":["Too many actions in a short time","Demasiadas acciones en poco tiempo","Kısa sürede çok fazla işlem"],
"Aguarde alguns minutos antes de repetir muitas operações semelhantes. O limite existe para proteger a beta contra automação e spam.":["Wait a few minutes before repeating many similar operations. This limit protects the beta from automation and spam.","Espera unos minutos antes de repetir muchas operaciones similares. Este límite protege la beta contra automatización y spam.","Benzer işlemleri çok sık tekrarlamadan önce birkaç dakika bekleyin. Bu sınır betayı otomasyon ve spamden korur."]
});
const index={en:0,es:1,tr:2};
const originalText=new WeakMap(),originalAttrs=new WeakMap();
const langs={pt:"PT",en:"EN",es:"ES",tr:"TR"};
const locale={pt:"pt-BR",en:"en",es:"es",tr:"tr"};

function lang(){const v=localStorage.getItem("safety_language")||"pt";return langs[v]?v:"pt"}
function t(value,forced){
  const l=forced||lang();
  if(l===PT)return String(value??"");
  const row=entries[String(value??"")];
  return row?row[index[l]]:String(value??"")
}
function loose(value,forced){
  const l=forced||lang();let out=String(value??"");
  if(l===PT)return out;
  const keys=Object.keys(entries).sort((a,b)=>b.length-a.length);
  for(const k of keys){if(out.includes(k))out=out.split(k).join(entries[k][index[l]])}
  return out
}
function preserve(raw,newCore){
  const m=String(raw).match(/^(\s*)([\s\S]*?)(\s*)$/);
  return (m?.[1]||"")+newCore+(m?.[3]||"")
}
function translateTextNode(node,l){
  const parent=node.parentElement;if(!parent||parent.closest("[data-no-i18n]")||["SCRIPT","STYLE","CODE","PRE"].includes(parent.tagName))return;
  if(parent.tagName==="OPTION"&&!parent.hasAttribute("value"))parent.setAttribute("value",String(node.nodeValue||"").trim());
  if(!originalText.has(node))originalText.set(node,node.nodeValue);
  const raw=originalText.get(node),core=String(raw).trim();if(!core)return;
  const translated=l===PT?core:t(core,l);
  const target=preserve(raw,translated);
  if(node.nodeValue!==target)node.nodeValue=target
}
function translateAttrs(el,l){
  if(!(el instanceof Element)||el.closest("[data-no-i18n]"))return;
  let store=originalAttrs.get(el);if(!store){store={};originalAttrs.set(el,store)}
  for(const attr of ["placeholder","title","aria-label"]){
    if(el.hasAttribute(attr)){
      if(!(attr in store))store[attr]=el.getAttribute(attr);
      const raw=store[attr],translated=l===PT?raw:t(raw,l);
      if(el.getAttribute(attr)!==translated)el.setAttribute(attr,translated)
    }
  }
}
function walk(root,l){
  if(root.nodeType===Node.TEXT_NODE){translateTextNode(root,l);return}
  if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE&&root.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return;
  if(root.nodeType===Node.ELEMENT_NODE)translateAttrs(root,l);
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);
  let n;while(n=w.nextNode()){if(n.nodeType===Node.TEXT_NODE)translateTextNode(n,l);else translateAttrs(n,l)}
}
function updatePickerUI(){
  const current=lang();
  document.querySelectorAll(".language-picker button[data-lang]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===current);
    btn.setAttribute("aria-pressed",String(btn.dataset.lang===current))
  })
}
function apply(l=lang()){
  document.documentElement.lang=locale[l]||"pt-BR";
  walk(document,l);
  updatePickerUI()
}
function makePicker(){
  if(document.querySelector(".language-picker"))return;
  const host=document.querySelector(".navlinks")||document.querySelector(".nav");if(!host)return;
  const wrap=document.createElement("div");wrap.className="language-picker";wrap.setAttribute("data-no-i18n","");
  wrap.innerHTML='<span class="lang-icon" aria-hidden="true">🌐</span><div class="lang-buttons" role="group" aria-label="Language"><button type="button" data-lang="pt" aria-label="Português">PT</button><button type="button" data-lang="en" aria-label="English">EN</button><button type="button" data-lang="es" aria-label="Español">ES</button><button type="button" data-lang="tr" aria-label="Türkçe">TR</button></div>';
  wrap.querySelectorAll("button[data-lang]").forEach(btn=>{
    btn.addEventListener("click",()=>setLanguage(btn.dataset.lang))
  });
  host.prepend(wrap);
  updatePickerUI()
}
function setLanguage(l){
  if(!langs[l])return;
  localStorage.setItem("safety_language",l);
  apply(l);
  document.dispatchEvent(new CustomEvent("safety-language-change",{detail:{language:l}}))
}
let observer;
function init(){
  makePicker();apply();
  observer=new MutationObserver(muts=>{
    const l=lang();
    for(const m of muts){
      if(m.type==="characterData")translateTextNode(m.target,l);
      for(const n of m.addedNodes||[])walk(n,l)
    }
  });
  observer.observe(document.body||document.documentElement,{subtree:true,childList:true,characterData:true})
}
const baseConfirm=window.confirm.bind(window),basePrompt=window.prompt.bind(window),baseAlert=window.alert.bind(window);
window.confirm=(message)=>baseConfirm(loose(message));
window.prompt=(message,def)=>basePrompt(loose(message),def);
window.alert=(message)=>{
  const s=String(message??"");
  if(/^Erro:\s*/i.test(s))return baseAlert(s);
  return baseAlert(loose(s))
};
window.I18N={t,loose,lang,setLanguage,apply,entries};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();