import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/data";
import { AffiliateLink } from "@/components/AffiliateLink";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.summary } : {};
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <main className="container product-detail">
    <div className="product-gallery">{product.gallery.map((src, i) => <figure key={src}><Image className="detail-image" src={src} alt={i === 0 ? product.name : `Medidas de referência de ${product.name}`} width={1200} height={1200} /><figcaption>{i === 0 ? "Imagem de referência do produto." : "Medidas na imagem enviada. Confirme a variação e as dimensões no anúncio."}</figcaption></figure>)}</div>
    <div className="detail-copy">
      <div className="breadcrumbs"><Link href="/">Início</Link> / <Link href={`/categoria/${product.categorySlug}`}>Casa e Utilidades</Link></div>
      <span className="eyebrow">Seleção SALLOZIDADE</span><h1>{product.name}</h1><p className="lead">{product.summary}</p>
      <h2>O que conferir</h2><ul>{product.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      <p>Não realizamos teste próprio deste produto. Consulte o anúncio para confirmar modelo, medidas e itens incluídos.</p>
      <AffiliateLink product={product} /><Link className="secondary-link" href="/transparencia">Como funciona nossa seleção</Link>
    </div>
  </main>;
}
