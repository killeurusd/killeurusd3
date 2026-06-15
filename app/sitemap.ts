import type { MetadataRoute } from "next";
import { articles } from "./_site/articles";
import { articlesEn } from "./_site/articles-en";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.killeurusd.com";
  const now = new Date();

  // Pages indexables (on exclut checkout / merci / acces-anciens, en noindex).
  const fr = ["", "/vision", "/blog", "/contact", "/cgv", "/mentions-legales", "/confidentialite"];
  const frArticles = articles.map((a) => `/blog/${a.slug}`);
  const en = ["/en", "/en/vision", "/en/blog", "/en/terms", "/en/legal", "/en/privacy"];
  const enArticles = articlesEn.map((a) => `/en/blog/${a.slug}`);

  return [...fr, ...frArticles, ...en, ...enArticles].map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
