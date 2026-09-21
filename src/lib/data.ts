import type { Category, Product } from "./types";

export const categories: Category[] = [
  {
    slug: "cozinha",
    name: "Cozinha",
    eyebrow: "Escolhas para cozinha",
    headline: "Produtos que valem comparar antes de comprar.",
    description: "Uma seleção curta para decidir rápido, sem abrir vinte anúncios diferentes."
  },
  {
    slug: "banheiro",
    name: "Banheiro",
    eyebrow: "Escolhas para banheiro",
    headline: "Veja o que muda de verdade entre os modelos.",
    description: "Comparamos preço, uso e diferenças que costumam pesar na decisão."
  },
  {
    slug: "ferramentas",
    name: "Ferramentas",
    eyebrow: "Escolhas de ferramentas",
    headline: "Menos anúncios. Mais clareza para escolher.",
    description: "Recomendações diretas para chegar ao Mercado Livre sabendo o que procurar."
  }
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "cuba-inox-60cm",
    categorySlug: "cozinha",
    name: "Cuba inox 60 cm",
    brand: "Seleção",
    image: "/products/cuba.svg",
    price: 489.9,
    rating: 4.8,
    reviewCount: 1280,
    bestFor: "cozinhas maiores",
    summary: "Bom espaço interno sem partir para uma cuba exageradamente grande.",
    score: 94,
    highlights: ["60 cm", "inox", "bom espaço útil"],
    mlUrl: "https://lista.mercadolivre.com.br/cuba-inox-60cm"
  },
  {
    id: "p2",
    slug: "cuba-gourmet-com-acessorios",
    categorySlug: "cozinha",
    name: "Cuba gourmet com acessórios",
    brand: "Seleção",
    image: "/products/cuba-gourmet.svg",
    price: 699.9,
    rating: 4.7,
    reviewCount: 842,
    bestFor: "quem quer kit completo",
    summary: "Faz sentido quando escorredor, tábua e dosador entram de fato na rotina.",
    score: 89,
    highlights: ["kit completo", "acessórios", "visual gourmet"],
    mlUrl: "https://lista.mercadolivre.com.br/cuba-gourmet-acessorios"
  },
  {
    id: "p3",
    slug: "torneira-monocomando",
    categorySlug: "cozinha",
    name: "Torneira monocomando",
    brand: "Seleção",
    image: "/products/torneira.svg",
    price: 329.9,
    rating: 4.8,
    reviewCount: 2014,
    bestFor: "controle simples de temperatura",
    summary: "Uma escolha prática para quem quer regular vazão e temperatura em um comando.",
    score: 91,
    highlights: ["monocomando", "bica alta", "uso diário"],
    mlUrl: "https://lista.mercadolivre.com.br/torneira-monocomando-cozinha"
  },
  {
    id: "p4",
    slug: "chuveiro-alta-vazao",
    categorySlug: "banheiro",
    name: "Chuveiro de alta vazão",
    brand: "Seleção",
    image: "/products/chuveiro.svg",
    price: 259.9,
    rating: 4.7,
    reviewCount: 1560,
    bestFor: "banhos com jato mais amplo",
    summary: "Prioriza área de banho e conforto; vale conferir a pressão disponível antes da compra.",
    score: 92,
    highlights: ["jato amplo", "acabamento simples", "fácil comparação"],
    mlUrl: "https://lista.mercadolivre.com.br/chuveiro-alta-vazao"
  },
  {
    id: "p5",
    slug: "furadeira-parafusadeira-20v",
    categorySlug: "ferramentas",
    name: "Furadeira e parafusadeira 20 V",
    brand: "Seleção",
    image: "/products/furadeira.svg",
    price: 549.9,
    rating: 4.9,
    reviewCount: 3421,
    bestFor: "uso doméstico frequente",
    summary: "Equilibra autonomia e força para montagem, manutenção e pequenos furos.",
    score: 96,
    highlights: ["20 V", "bateria", "dupla função"],
    mlUrl: "https://lista.mercadolivre.com.br/furadeira-parafusadeira-20v"
  },
  {
    id: "p6",
    slug: "lavadora-alta-pressao",
    categorySlug: "ferramentas",
    name: "Lavadora de alta pressão",
    brand: "Seleção",
    image: "/products/lavadora.svg",
    price: 649.9,
    rating: 4.8,
    reviewCount: 2298,
    bestFor: "limpeza externa da casa",
    summary: "Boa candidata para pátios, muros e carros quando mangueira comum começa a limitar.",
    score: 93,
    highlights: ["uso externo", "compacta", "boa vazão"],
    mlUrl: "https://lista.mercadolivre.com.br/lavadora-alta-pressao"
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(slug: string) {
  return products
    .filter((product) => product.categorySlug === slug)
    .sort((a, b) => b.score - a.score);
}
