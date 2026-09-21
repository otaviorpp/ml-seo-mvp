import type { MetadataRoute } from "next";

// Publish a real sitemap only after the domain and catalog are verified.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
