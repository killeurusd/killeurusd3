import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.killeurusd.com";
  const now = new Date();
  const paths = ["", "/en", "/en/vision", "/en/blog", "/en/terms", "/en/legal", "/en/privacy"];
  return paths.map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
