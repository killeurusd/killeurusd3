import type { MetadataRoute } from "next";
import { ARTICLE_SLUG } from "./_site/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.killeurusd.com";
  const now = new Date();

  // Pages indexables (on exclut checkout / merci / acces-anciens, en noindex).
  const fr = ["", "/vision", "/blog", `/blog/${ARTICLE_SLUG}`, "/contact", "/cgv", "/mentions-legales", "/confidentialite"];
  const en = ["/en", "/en/vision", "/en/blog", "/en/terms", "/en/legal", "/en/privacy"];

  return [...fr, ...en].map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
