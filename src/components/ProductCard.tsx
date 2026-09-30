import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { AffiliateLink } from "@/components/AffiliateLink";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/produto/${product.slug}`} className="product-image-wrap" aria-label={`Ver detalhes de ${product.name}`}>
      <Image src={product.image} alt={product.name} width={600} height={600} className="product-image" />
    </Link>
    <div className="product-body">
      <span className="eyebrow">Na seleção SALLOZIDADE</span>
      <h3><Link href={`/produto/${product.slug}`}>{product.name}</Link></h3>
      <p className="product-summary">{product.summary}</p>
      <Link className="secondary-link" href={`/produto/${product.slug}`}>Ver fotos e detalhes →</Link>
      <AffiliateLink product={product} />
    </div>
  </article>;
}
