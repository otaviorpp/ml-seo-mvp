import Link from "next/link";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { TrackPageView } from "@/components/TrackPageView";

export default function Home() {
  const featured = [...products].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <main>
      <TrackPageView path="/" />
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Compare antes de comprar</span>
          <h1>Escolha melhor no Mercado Livre.</h1>
          <p>Digite o que você procura. Nós reduzimos a lista e mostramos o que vale comparar.</p>
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
            <p>Cada nicho leva a uma seleção curta, desenhada para responder uma única pergunta: qual modelo faz mais sentido?</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link href={`/categoria/${category.slug}`} className="category-card" key={category.slug}>
                <span className="category-number">0{index + 1}</span>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>3 escolhas para começar.</h2>
            <p>O ranking combina utilidade, avaliação e clareza de proposta. No MVP, o score é editorial.</p>
          </div>
          <div className="product-grid">
            {featured.map((product, index) => <ProductCard product={product} rank={index + 1} key={product.id} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
