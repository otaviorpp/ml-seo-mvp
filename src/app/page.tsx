import Link from "next/link";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { TrackPageView } from "@/components/TrackPageView";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main>
      <TrackPageView path="/" />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Catálogo em preparação</span>
          <h1>Explore nosso catálogo demonstrativo.</h1>
          <p>Explore exemplos de produtos. As ofertas e recomendações ainda não foram verificadas.</p>
          <form className="hero-search" action="/busca" method="GET">
            <input name="q" required minLength={2} placeholder="Ex.: cuba inox, furadeira 20 V..." aria-label="O que você procura?" />
            <button className="primary-button" type="submit">Encontrar meu produto</button>
          </form>
          <div className="hero-proof">
            <span><strong>{products.length}</strong> produtos no MVP</span>
            <span><strong>{categories.length}</strong> nichos iniciais</span>
            <span><strong>1</strong> próximo passo</span>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <h2>Comece pelo que você quer comprar.</h2>
            <p>Explore exemplos organizados por categoria.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link href={`/categoria/${category.slug}`} className="category-card" key={category.slug}>
                <span className="category-number">0{index + 1}</span>
                <div>
                  <h3>{category.name}</h3>
                  <p>{`Exemplos de produtos para ${category.name.toLowerCase()}.`}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>3 exemplos para explorar.</h2>
            <p>A ordem é ilustrativa e não representa uma avaliação de qualidade.</p>
          </div>
          <div className="product-grid">
            {featured.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
