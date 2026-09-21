import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    ...categories.map((category) => ({ url: `${base}/categoria/${category.slug}`, changeFrequency: "daily" as const, priority: 0.8 })),
    ...products.map((product) => ({ url: `${base}/produto/${product.slug}`, changeFrequency: "weekly" as const, priority: 0.7 }))
  ];
}
