# Safety Solutions

Plataforma gratuita em GitHub Pages + Supabase para operações de alto valor dentro do RP.

## Configuração final obrigatória

O arquivo `config.js` está propositalmente sem credenciais. Para ativar autenticação e banco:

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
