import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { TrackPageView } from "@/components/TrackPageView";
import { TrackSearch } from "@/components/TrackSearch";

export const metadata: Metadata = {
  title: "Busca",
  robots: { index: false, follow: true }
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results = products.filter((product) => {
    const haystack = `${product.name} ${product.bestFor} ${product.summary} ${product.highlights.join(" ")}`.toLowerCase();
    return terms.length > 0 && terms.every((term) => haystack.includes(term));
  });

  return (
    <main>
      <TrackPageView path={`/busca?q=${encodeURIComponent(query)}`} />
      <TrackSearch query={query} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Busca</span>
          <h1>{query ? `Resultados para “${query}”` : "O que você quer encontrar?"}</h1>
          <p>{results.length ? `${results.length} produto(s) encontrado(s) no MVP.` : "Ainda não temos uma recomendação para esta busca."}</p>
        </div>
      </section>
      <section className="section search-results">
        <div className="container">
          {results.length ? (
            <div className="product-grid">
              {results.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          ) : (
            <div className="empty">Tente “cuba”, “furadeira”, “chuveiro” ou “torneira”.</div>
          )}
        </div>
      </section>
    </main>
  );
}
