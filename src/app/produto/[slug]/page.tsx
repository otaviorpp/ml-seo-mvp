import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/data";
import { AffiliateLink } from "@/components/AffiliateLink";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: "Exemplo de catálogo: informações comerciais ainda não verificadas." } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <main className="container product-detail">
    <Image className="detail-image" src={product.image} alt={`Ilustração: ${product.name}`} width={800} height={600} />
    <div className="detail-copy">
      <Link href="/">Início</Link>
      <p className="eyebrow">Catálogo demonstrativo</p>
      <h1>{product.name}</h1>
      <p>Este exemplo não representa uma oferta verificada. A imagem é ilustrativa; não realizamos testes deste produto.</p>
      <p>Antes de escolher, confira modelo, medidas, compatibilidade, garantia e informações do vendedor no anúncio.</p>
      <AffiliateLink product={product} />
      <Link href="/transparencia">Como funcionam nossas recomendações</Link>
    </div>
  </main>;
}
