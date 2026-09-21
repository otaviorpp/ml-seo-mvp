import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProduct } from "@/lib/data";
import { TrackPageView } from "@/components/TrackPageView";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name}: vale comparar?`,
    description: product.summary
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const price = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://example.com${product.image}`],
    description: product.summary,
    brand: { "@type": "Brand", name: product.brand },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price,
      url: product.mlUrl,
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <main>
      <TrackPageView path={`/produto/${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container product-detail">
        <Image className="detail-image" src={product.image} alt={product.name} width={800} height={600} priority />
        <div className="detail-copy">
          <div className="breadcrumbs"><Link href="/">Início</Link> / <Link href={`/categoria/${product.categorySlug}`}>{category?.name}</Link></div>
          <span className="eyebrow">{product.score}/100 na seleção</span>
          <h1>{product.name}</h1>
          <p className="lead">{product.summary}</p>
          <div className="detail-price">{price}</div>
          <ul className="highlights">
            <li><span>Melhor para</span><strong>{product.bestFor}</strong></li>
            <li><span>Avaliação</span><strong>★ {product.rating} em {product.reviewCount.toLocaleString("pt-BR")} avaliações</strong></li>
            {product.highlights.map((item) => <li key={item}><span>Ponto de atenção</span><strong>{item}</strong></li>)}
          </ul>
          <Link className="primary-button full" href={`/go/${product.slug}?from=${encodeURIComponent(`/produto/${slug}`)}`} prefetch={false}>
            Ver preço no Mercado Livre
          </Link>
        </div>
      </div>
    </main>
  );
}
