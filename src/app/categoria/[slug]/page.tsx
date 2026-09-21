import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, productsByCategory } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return category ? { title: `Catálogo demonstrativo de ${category.name}` } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <main className="container section">
    <h1>{category.name}</h1>
    <p>Exemplos ilustrativos de produtos. A ordem não representa um ranking de qualidade.</p>
    <div className="product-grid">
      {productsByCategory(slug).map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  </main>;
}
