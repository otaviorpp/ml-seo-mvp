import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Escolha — compare antes do Mercado Livre",
    template: "%s | Escolha"
  },
  description: "Compare produtos e chegue ao Mercado Livre sabendo o que vale considerar.",
  openGraph: {
    title: "Escolha melhor antes de comprar no Mercado Livre",
    description: "Seleções curtas, diferenças claras e um próximo passo.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="container footer-share">
            <div>
              <strong>Menos anúncios. Mais clareza.</strong>
              <p>Envie a seleção para alguém que também está escolhendo.</p>
            </div>
            <a className="secondary-link" href="https://wa.me/?text=Veja%20estas%20recomenda%C3%A7%C3%B5es" target="_blank" rel="noreferrer">
              Compartilhar no WhatsApp →
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
