import type { Category, Product } from "./types";

export const categories: Category[] = [
  {
    slug: "casa-e-utilidades", name: "Casa e Utilidades", eyebrow: "Seu espaço, do seu jeito",
    headline: "Ideias para a casa. Utilidade para o dia a dia.",
    description: "Explore nossa lista de móveis, organização e utilidades para os ambientes da sua casa.",
    collectionUrl: "https://meli.la/1RN5JWu",
    tips: ["Meça o ambiente e os acessos antes de escolher um móvel.", "Confira materiais, montagem e itens incluídos no anúncio.", "Consulte frete, prazo e condições de entrega para seu CEP."]
  },
  {
    slug: "informatica", name: "Informática", eyebrow: "Tecnologia que acompanha sua rotina",
    headline: "Seu próximo setup começa com uma boa escolha.",
    description: "Um espaço para equipamentos e acessórios de informática, do trabalho aos jogos. Nossa seleção está em preparação.",
    tips: ["Confira conexões, dimensões e compatibilidade com seu equipamento.", "Escolha as especificações de acordo com os programas e jogos que usa.", "Verifique garantia, voltagem e acessórios incluídos."]
  },
  {
    slug: "tcg", name: "TCG", eyebrow: "Para jogar, colecionar e cuidar",
    headline: "Um lugar para a sua próxima coleção.",
    description: "Cartas, jogos e acessórios para o universo dos Trading Card Games. Em breve, uma seleção para sua mesa e sua coleção.",
    tips: ["Confira o jogo, a edição, o idioma e a condição das cartas.", "Verifique a procedência e a descrição do vendedor antes de comprar.", "Produtos aleatórios não garantem cartas específicas ou valorização financeira."]
  }
];

export const products: Product[] = [{
  id: "rack-tv", slug: "rack-para-tv", categorySlug: "casa-e-utilidades",
  name: "Rack para TV", image: "/assets/RACK-TV-55-POLEGADAS(2).webp",
  gallery: ["/assets/RACK-TV-55-POLEGADAS(2).webp", "/assets/RACK-TV-55-POLEGADAS.webp"],
  bestFor: "sala e organização", summary: "Um destaque da nossa seleção para a sala, com espaço para organizar o ambiente da TV. Confira as especificações e variações no anúncio.",
  highlights: ["Confira as medidas do móvel e da base da sua TV.", "Consulte as cores, o material e as condições de montagem.", "As imagens de referência podem mostrar objetos não incluídos."],
  affiliateUrl: "https://meli.la/2LHVEue"
}];

export function getCategory(slug: string) { return categories.find(category => category.slug === slug); }
export function getProduct(slug: string) { return products.find(product => product.slug === slug); }
export function productsByCategory(slug: string) { return products.filter(product => product.categorySlug === slug); }
