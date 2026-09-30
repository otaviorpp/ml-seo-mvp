# SALLOZIDADE

Catálogo de Casa e Utilidades, Informática e TCG, em Next.js.

## Desenvolvimento

Use `npm install` e `npm run dev`. Valide com `npm run lint` e `npm run build`.

- `/categoria/casa-e-utilidades`: lista completa https://meli.la/1RN5JWu e destaque do rack https://meli.la/2LHVEue.
- `/categoria/informatica` e `/categoria/tcg`: páginas personalizadas aguardando produtos e links.
- `/produto/rack-para-tv`: galeria com as duas imagens de `public/assets`.

Os links são diretos e dependem de clique, com aviso de publicidade e `rel="sponsored nofollow"`. Em desenvolvimento ficam ativos para revisão local. Em produção, só ficam ativos com `AFFILIATE_CHANNEL_APPROVED=true`, após confirmar o cadastro do domínio no programa. Essa variável é uma confirmação operacional, não uma verificação automática do Mercado Livre.

A lista completa é acessada externamente; seu conteúdo não foi importado. O rack foi associado ao link individual enviado pelo responsável, com base nas imagens disponibilizadas. Confirme a correspondência, os direitos de uso das imagens e as informações do anúncio antes de publicar. Não há preços, avaliações, estoque ou testes inventados.

O site permanece com `noindex` e sitemap vazio. Registro de domínio e publicação ficam para depois. Antes de publicar, proteger/desativar `/admin` e `/api/analytics`, revisar privacidade e contato, confirmar links e informações, atualizar SEO e cadastrar o canal. Métricas locais são voláteis. A antiga rota `/go/[slug]` retorna 410.
