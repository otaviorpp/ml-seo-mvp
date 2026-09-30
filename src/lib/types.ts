export type Category = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  collectionUrl?: string;
  tips: string[];
};

export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  image: string;
  gallery: string[];
  bestFor: string;
  summary: string;
  highlights: string[];
  affiliateUrl: string;
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
