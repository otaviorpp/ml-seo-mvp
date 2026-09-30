import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, productsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateLink } from "@/components/AffiliateLink";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.name, description: category.description } : {};
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = productsByCategory(slug);
  return <main className={`theme-${category.slug}`}>
    <section className="page-hero category-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Início</Link> / {category.name}</div>
      <span className="eyebrow">{category.eyebrow}</span><h1>{category.headline}</h1><p>{category.description}</p>
      {category.collectionUrl && <AffiliateLink href={category.collectionUrl} label="Ver lista completa de Casa e Utilidades" />}
    </div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><h2>{products.length ? "Destaque da seleção" : "Novidades a caminho"}</h2><p>{products.length ? "Conheça o destaque aqui e explore os demais produtos na lista completa do Mercado Livre." : `Estamos preparando os primeiros produtos de ${category.name}.`}</p></div>
      {products.length ? <div className="product-grid">{products.map(product => <ProductCard product={product} key={product.id} />)}</div> : <div className="empty">Ainda não há produtos ou links cadastrados nesta categoria. <Link className="secondary-link" href="/categoria/casa-e-utilidades">Explore Casa e Utilidades →</Link></div>}
    </div></section>
    <section className="section soft"><div className="container"><h2>Antes de escolher</h2><div className="tips-grid">{category.tips.map((tip, i) => <article key={tip}><span className="eyebrow">0{i + 1}</span><p>{tip}</p></article>)}</div></div></section>
  </main>;
}
