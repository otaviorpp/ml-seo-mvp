import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, productsByCategory } from "@/lib/data";
import { TrackPageView } from "@/components/TrackPageView";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `Melhores produtos de ${category.name}`,
    description: category.description
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const ranked = productsByCategory(slug);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Seleção de ${category.name}`,
    numberOfItems: ranked.length,
    itemListElement: ranked.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://example.com/produto/${product.slug}`,
      name: product.name
    }))
  };

  return (
    <main>
      <TrackPageView path={`/categoria/${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Início</Link> / {category.name}</div>
          <span className="eyebrow">{category.eyebrow}</span>
          <h1>{category.headline}</h1>
          <p>{category.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container rank-list">
          {ranked.map((product, index) => (
            <article className="rank-card" key={product.id}>
              <div className="rank-index">{index + 1}</div>
              <Image className="rank-image" src={product.image} alt="" width={500} height={375} />
              <div className="rank-content">
                <span className="eyebrow">{product.score}/100 · melhor para {product.bestFor}</span>
                <h2><Link href={`/produto/${product.slug}`}>{product.name}</Link></h2>
                <p>{product.summary}</p>
                <div className="rank-actions">
                  <strong>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.price)}</strong>
                  <Link className="primary-button" href={`/go/${product.slug}?from=${encodeURIComponent(`/categoria/${slug}`)}`} prefetch={false}>
                    Ver no Mercado Livre
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
