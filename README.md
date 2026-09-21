# Escolha — catálogo demonstrativo

Projeto independente em Next.js, React e TypeScript. O catálogo atual usa exemplos e imagens ilustrativas; não representa ofertas ou avaliações verificadas.

## Rodar localmente

Instale Node.js e as dependências com `npm install`, depois execute `npm run dev`. Valide alterações com `npm run lint` e `npm run build`.

## Estado da divulgação comercial

- Preços, avaliações, notas e dados estruturados comerciais fictícios não são exibidos.
- Páginas têm `noindex`; o sitemap fica vazio enquanto o catálogo e o domínio não forem revisados.
- Links antigos `/go/[slug]` retornam HTTP 410 e não redirecionam nem registram cliques.
- Não há links de afiliado ativos nos dados de exemplo. `mlUrl` é legado e não é utilizado como destino comercial.
- `/transparencia` explica a demonstração, a publicidade e os critérios editoriais.
- O painel `/admin` continua sendo uma ferramenta local, sem autenticação. Não exponha esse painel e suas APIs em uma publicação de produção.

## Antes de ativar ofertas reais

1. Confirme a aprovação da sua conta e cadastre o domínio público, de sua propriedade, no programa. O código não consegue verificar esse cadastro.
2. Consulte os termos vigentes no painel do Mercado Livre. Não use campanhas de busca/search/shopping para impulsionar links ou conteúdo afiliado. Não realize compras pelo próprio link para gerar comissões.
3. Substitua os exemplos por produtos elegíveis e informações verificadas. Registre fontes e datas, direitos de uso das imagens e critérios editoriais; não invente avaliações, estoque, testes ou promessas.
4. Copie o link gerado pela ferramenta oficial para `affiliateUrl` de cada produto e marque `reviewed: true` somente após a revisão. O componente aceita apenas HTTPS e os hosts listados em `AffiliateLink.tsx`; essa validação não comprova que um link pertence ao programa.
5. Copie `.env.example` para `.env.local`. Defina `AFFILIATE_CHANNEL_APPROVED=true` somente após concluir as verificações. Reinicie/recompile o app, pois páginas podem ser pré-renderizadas.
6. Revise os textos demonstrativos, a página de transparência e os dados de cada página antes de remover `noindex` e gerar um sitemap com o domínio real. A variável de afiliados não libera indexação automaticamente.

O link comercial é direto, identificado como publicidade e marcado com `rel="sponsored nofollow"`. A navegação depende do clique do visitante. O rastreamento de cliques da antiga rota foi desativado; visualizações e buscas continuam em memória. Não há mecanismo que impeça compras próprias ou campanhas criadas fora deste projeto: essas regras dependem da operação do responsável.

## Fontes consultadas

- [Canais próprios e cadastrados](https://www.mercadolivre.com.br/l/afiliados-blogs-nao-proprios)
- [Direcionamento de visitas e links oficiais](https://www.mercadolivre.com.br/l/afiliados-direcionamento-de-visitas)
- [Perguntas frequentes do programa](https://www.mercadolivre.com.br/l/primeiros-passos-perguntas-frequentes-para-afiliados)
- [CDC](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm): informação clara e identificação da publicidade, especialmente arts. 6, 30, 31, 36 e 37. A responsabilidade jurídica depende do caso concreto.

As alterações técnicas não equivalem à aprovação pelo Mercado Livre ou a uma certificação jurídica.
