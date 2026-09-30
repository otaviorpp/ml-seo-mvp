import type { Product } from "@/lib/types";

export function AffiliateLink({ product, href: suppliedHref, label = "Ver produto no Mercado Livre" }: { product?: Product; href?: string; label?: string }) {
  let href: string | undefined;
  try {
    const url = new URL(suppliedHref ?? product?.affiliateUrl ?? "");
    const allowed = ["mercadolivre.com.br", "www.mercadolivre.com.br", "produto.mercadolivre.com.br", "mercadolivre.com", "www.mercadolivre.com", "meli.la"];
    // Explicit local preview; production still requires channel confirmation.
    const enabled = process.env.NODE_ENV === "development" || process.env.AFFILIATE_CHANNEL_APPROVED === "true";
    if (enabled && url.protocol === "https:" && allowed.includes(url.hostname) && !url.username && !url.password) href = url.href;
  } catch { /* Invalid destinations are not rendered. */ }
  if (!href) return <p className="affiliate-notice">Links comerciais em preparação.</p>;
  return <div className="affiliate-block">
    <p className="affiliate-notice">Publicidade · Link de afiliado. Podemos receber comissão por compras qualificadas.</p>
    <a className="primary-button" href={href} rel="sponsored nofollow">{label} <span aria-hidden="true">↗</span></a>
    <p className="affiliate-notice">Preço, estoque, frete e condições devem ser conferidos no Mercado Livre.</p>
  </div>;
}
