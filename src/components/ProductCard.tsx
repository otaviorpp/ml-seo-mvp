import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { AffiliateLink } from "@/components/AffiliateLink";

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link href={`/produto/${product.slug}`} className="product-image-wrap" aria-label={`Ver detalhes de ${product.name}`}>
      <Image src={product.image} alt="Ilustração do tipo de produto" width={560} height={420} className="product-image" />
    </Link>
    <div className="product-body">
      <span className="eyebrow">Catálogo demonstrativo</span>
      <h3><Link href={`/produto/${product.slug}`}>{product.name}</Link></h3>
      <p>Imagem ilustrativa. Especificações e condições de venda ainda não verificadas.</p>
      <AffiliateLink product={product} />
    </div>
  </article>;
}
