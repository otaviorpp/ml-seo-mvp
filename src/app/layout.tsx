import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: { default: "Escolha — catálogo demonstrativo", template: "%s | Escolha" },
  description: "Projeto independente de catálogo de produtos, em preparação.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>
    <Header />
    <aside className="demo-notice"><div className="container">
      <strong>Catálogo demonstrativo.</strong> Imagens ilustrativas e informações ainda não verificadas. <Link href="/transparencia">Transparência e publicidade</Link>
    </div></aside>
    {children}
    <footer className="site-footer"><div className="container">
      <p>Escolha: projeto independente, sem representação oficial do Mercado Livre.</p>
      <Link href="/transparencia">Transparência, publicidade e critérios editoriais</Link>
    </div></footer>
  </body></html>;
}
