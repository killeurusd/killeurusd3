import type { MetadataRoute } from "next";

// Autorise tous les robots (dont les robots IA : GPTBot, Google-Extended, PerplexityBot…)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.killeurusd.com/sitemap.xml",
    host: "https://www.killeurusd.com",
  };
}
