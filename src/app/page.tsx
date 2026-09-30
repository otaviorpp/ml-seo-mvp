import Link from "next/link";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { TrackPageView } from "@/components/TrackPageView";

export default function Home() {
  return <main>
    <TrackPageView path="/" />
    <section className="hero"><div className="container">
      <span className="eyebrow">Casa · Informática · TCG</span>
      <h1>Seu espaço.<br />Seu setup. Sua coleção.</h1>
      <p>Bem-vindo à SALLOZIDADE. Explore nossos interesses, descubra produtos e encontre a próxima escolha para sua rotina.</p>
      <form className="hero-search" action="/busca" method="GET">
        <input name="q" required minLength={2} placeholder="Busque na seleção: rack, sala…" aria-label="Buscar produtos" />
        <button className="primary-button" type="submit">Explorar</button>
      </form>
    </div></section>
    <section className="section soft"><div className="container">
      <div className="section-heading"><h2>Três universos.<br />Uma SALLOZIDADE.</h2><p>Entre na categoria que combina com você.</p></div>
      <div className="category-grid">{categories.map((category, index) => <Link href={`/categoria/${category.slug}`} className={`category-card theme-${category.slug}`} key={category.slug}>
        <span className="category-number">0{index + 1} / {category.collectionUrl ? "Explore a seleção" : "Em preparação"}</span>
        <div><h3>{category.name}</h3><p>{category.description}</p></div><span className="secondary-link">Explorar categoria →</span>
      </Link>)}</div>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><h2>Em destaque para sua casa.</h2><Link className="secondary-link" href="/categoria/casa-e-utilidades">Ver Casa e Utilidades →</Link></div>
      <div className="product-grid">{products.map(product => <ProductCard product={product} key={product.id} />)}</div>
    </div></section>
  </main>;
}
