import type { Product } from "@/lib/types";

export function AffiliateLink({ product }: { product: Product }) {
  let href: string | undefined;
  try {
    const url = new URL(product.affiliateUrl ?? "");
    const allowed = ["mercadolivre.com.br", "www.mercadolivre.com.br", "produto.mercadolivre.com.br", "mercadolivre.com", "www.mercadolivre.com", "meli.la"];
    if (process.env.AFFILIATE_CHANNEL_APPROVED === "true" && product.reviewed && url.protocol === "https:" && allowed.includes(url.hostname) && !url.username && !url.password) href = url.href;
  } catch { /* Missing or invalid links remain unavailable. */ }
  if (!href) return <p className="affiliate-notice">Exemplo demonstrativo. Oferta indisponível enquanto o produto não for verificado.</p>;
  return <div>
    <p className="affiliate-notice">Publicidade · Link de afiliado. Podemos receber uma comissão por compras qualificadas.</p>
    <a className="primary-button full" href={href} rel="sponsored nofollow">Consultar oferta no Mercado Livre</a>
    <p className="affiliate-notice">Confira preço, estoque, frete, vendedor e condições no anúncio antes de comprar.</p>
  </div>;
}
