# Escolha — MVP SEO + recomendações para Mercado Livre

MVP para validar o fluxo **Google/SEO → recomendação → clique para Mercado Livre**.

## O que já existe

- Home minimalista com busca.
- Nichos/categorias SEO.
- Ranking de produtos por categoria.
- Página individual de produto.
- Redirect rastreado `/go/[slug]` para Mercado Livre.
- Eventos `page_view` e `product_click` em memória.
- Painel local em `/admin`.
- Metadata, sitemap, robots e JSON-LD (`ItemList` e `Product`).
- Dados isolados em `src/lib/data.ts` e `src/lib/store.ts`.

## Stack

- Next.js 16 / App Router
- React 19
- TypeScript
- CSS puro
- Banco in-memory usando `globalThis`

## Rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Painel: `http://localhost:3000/admin`

## Limitação proposital do MVP

O banco é volátil. Eventos somem quando o processo reinicia e não são adequados a múltiplas instâncias de produção.

A troca posterior para PostgreSQL fica concentrada na camada `src/lib/store.ts`; o front-end e as rotas podem permanecer praticamente iguais.

## Próximas etapas sugeridas

1. Trocar os dados mockados por produtos reais.
2. Integrar a API oficial do Mercado Livre.
3. Persistir eventos e catálogo no PostgreSQL.
4. Adicionar Search Console / GA4 e correlacionar landing page → clique outbound.
5. Criar páginas programáticas por intenção de busca.
6. Gerar OG images específicas por ranking/categoria.

## Antes de publicar

Troque `https://example.com` pelo domínio real em `layout.tsx`, `sitemap.ts` e nos JSON-LD.
