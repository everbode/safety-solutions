# Safety Solutions

Plataforma gratuita em GitHub Pages + Supabase para operações de alto valor dentro do RP.

## Configuração final obrigatória

O arquivo `config.js` contém apenas a URL e a chave publicável. Para apontar a aplicação para outro projeto:

1. Abra `config.js` no GitHub.
2. Substitua `COLE_AQUI_SUA_URL_DO_SUPABASE` pela **Project URL**.
3. Substitua `COLE_AQUI_SUA_CHAVE_PUBLICAVEL` pela chave **publishable**.
4. Salve o arquivo.

Nunca coloque **Secret Key** ou **service_role** no GitHub Pages.

## Recursos implementados

- Cadastro e login
- Perfis de indústria, revendedora, financeira e governo
- Aprovação de contas governamentais
- HubCredit fictício para testes
- Marketplace de Ouro, Petróleo, Couro e TRM
- Compra direta e contrapropostas
- Custódia, confirmação e disputas
- Leilões com reserva automática do maior lance
- Licitações e propostas
- Safety Invest com créditos de teste
- Safety Analytics
- Histórico comercial objetivo
- Safety Alert com registro verificado e contestação
- Painel de moderação e logs de auditoria

## Observação sobre HubCredit

A implementação atual usa apenas créditos fictícios de teste. PIX, PayPal ou qualquer compra de créditos com dinheiro real não está habilitada nesta versão.


## Acesso por usuário e senha

Cadastro e login não pedem e-mail. Nomes são únicos ignorando espaços e maiúsculas; o nome de acesso é permanente. Novos nomes aceitam letras ASCII, números, espaços, ponto, hífen e sublinhado (3–40 caracteres).

- `supabase/functions/safety-auth`: endpoint de cadastro/login que mantém as credenciais administrativas no servidor. Valida a senha usando Supabase Auth, limita tentativas e aceita apenas metadados de perfil permitidos. Aprovação de financeiras/governos continua no trigger do banco.
- `supabase/username-auth.sql`: suporte aplicado ao banco, com chave normalizada, imutabilidade e limites acessíveis somente ao servidor. A unicidade continua no índice `profiles_username_key`.
- Cada novo cadastro recebe um identificador sintético SHA-256 em `@login.safety.invalid`, já confirmado tecnicamente. Não existe caixa postal nem confirmação enviada por e-mail.
- Contas existentes entram com o nome do perfil e a senha atual. Depois do login (e do 2FA, se ativo), o servidor substitui apenas o identificador da própria conta por um sintético. O UUID, senha, perfil e permissões são preservados. Falha nessa migração não impede o acesso.
- A função verifica a sessão e exige AAL2 para migrar contas com fator verificado. Nunca aceita um ID arbitrário para essa mudança.
- Não há recuperação automática por e-mail. O usuário deve procurar a moderação e comprovar a titularidade; senhas e códigos 2FA não devem ser enviados.

Para atualizar o backend, aplique o SQL no projeto correto e publique a função `safety-auth` com o `deno.json` incluído. O gateway não exige JWT para cadastro/login porque esses endpoints verificam usuário e senha; a ação de migração valida um JWT de usuário. Secrets administrativos usam apenas as variáveis de ambiente padrão das Edge Functions.
