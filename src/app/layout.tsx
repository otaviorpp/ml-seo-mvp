import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";
export const metadata: Metadata = {
  title: { default: "SALLOZIDADE — Casa, Informática e TCG", template: "%s | SALLOZIDADE" },
  description: "Explore a seleção SALLOZIDADE de produtos para casa, equipamentos de informática e TCG.",
  robots: { index: false, follow: false }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header />
    {children}
    <footer className="site-footer"><div className="container">
      <strong className="brand">SALLOZIDADE<span>.</span></strong>
      <p>Casa, tecnologia e coleção. Um projeto independente, sem representação oficial do Mercado Livre.</p>
      <p>Publicidade: podemos receber comissão por compras qualificadas nos links de afiliado.</p>
      <Link href="/transparencia">Transparência e critérios da seleção</Link>
    </div></footer>
  </body></html>;
}
