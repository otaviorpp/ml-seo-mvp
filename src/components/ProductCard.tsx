import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

function money(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

export function ProductCard({ product, rank }: { product: Product; rank?: number }) {
  return (
    <article className="product-card">
      <Link href={`/produto/${product.slug}`} className="product-image-wrap" aria-label={`Ver análise de ${product.name}`}>
        <Image src={product.image} alt="" width={560} height={420} className="product-image" />
      </Link>
      <div className="product-body">
        <div className="product-meta">
          {rank ? <span>#{rank} da seleção</span> : <span>{product.brand}</span>}
          <span>{product.score}/100</span>
        </div>
        <h3><Link href={`/produto/${product.slug}`}>{product.name}</Link></h3>
        <p className="best-for">Melhor para: <strong>{product.bestFor}</strong></p>
        <p className="product-summary">{product.summary}</p>
        <div className="price-row">
          <div>
            <span className="price-label">A partir de</span>
            <strong className="price">{money(product.price)}</strong>
          </div>
          <span className="rating">★ {product.rating} · {product.reviewCount.toLocaleString("pt-BR")}</span>
        </div>
        <Link
          className="primary-button full"
          href={`/go/${product.slug}?from=${encodeURIComponent(`/produto/${product.slug}`)}`}
          prefetch={false}
        >
          Ver no Mercado Livre
        </Link>
      </div>
    </article>
  );
}
