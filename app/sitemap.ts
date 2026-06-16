import type { MetadataRoute } from "next";
import { getArticles } from "./_site/articles-source";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.killeurusd.com";
  const now = new Date();

  const [frArts, enArts] = await Promise.all([getArticles("fr"), getArticles("en")]);

  // Pages indexables (on exclut checkout / merci / acces-anciens, en noindex).
  const fr = ["", "/vision", "/blog", "/contact", "/cgv", "/mentions-legales", "/confidentialite"];
  const frArticles = frArts.map((a) => `/blog/${a.slug}`);
  const en = ["/en", "/en/vision", "/en/blog", "/en/terms", "/en/legal", "/en/privacy"];
  const enArticles = enArts.map((a) => `/en/blog/${a.slug}`);

  return [...fr, ...frArticles, ...en, ...enArticles].map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
