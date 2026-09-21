import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Allow crawlers to read the noindex metadata on demonstration pages.
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/go/"] }] };
}
