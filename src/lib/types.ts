export type Category = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  bestFor: string;
  summary: string;
  score: number;
  highlights: string[];
  mlUrl: string;
  affiliateUrl?: string;
  reviewed?: boolean;
};

export type EventType = "page_view" | "product_click" | "search";

export type AnalyticsEvent = {
  id: string;
  type: EventType;
  createdAt: string;
  path?: string;
  productId?: string;
  query?: string;
  referrer?: string;
};
