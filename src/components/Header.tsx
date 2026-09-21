import Link from "next/link";
import { categories } from "@/lib/data";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link href="/" className="brand" aria-label="Escolha Certa - início">
          escolha<span>.</span>
        </Link>
        <nav className="nav-links" aria-label="Navegação principal">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categoria/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
