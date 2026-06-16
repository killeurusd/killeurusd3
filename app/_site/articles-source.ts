import { articles as frFallback, type Article, type Block } from "./articles";
import { articlesEn as enFallback } from "./articles-en";

// Source des articles : Google Sheets (via le web app Apps Script) si branché,
// sinon repli sur les articles intégrés (le site fonctionne sans config).
// Lecture en ISR (revalidate) → un nouvel article ajouté dans la feuille apparaît
// sans redéploiement.
const ENDPOINT = process.env.SHEETS_WEBHOOK_URL;
export const ARTICLES_REVALIDATE = 60; // secondes

type Lang = "fr" | "en";

// Convertit le corps (texte/Markdown léger) en blocs rendus par <Article>.
// Règles : 1er paragraphe = chapô · ligne « ## » = sous-titre · « > » = citation · sinon paragraphe.
function parseBody(body: string): Block[] {
  const paras = String(body || "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  return paras.map((p, i) => {
    if (p.startsWith("## ")) return { t: "h2", text: p.slice(3).trim() };
    if (p.startsWith("> ")) return { t: "quote", text: p.slice(2).replace(/^"|"$/g, "").trim() };
    if (i === 0) return { t: "lead", text: p };
    return { t: "p", text: p };
  });
}

function rowToArticle(r: Record<string, string>): Article | null {
  const slug = String(r.slug || "").trim();
  const title = String(r.title || "").trim();
  if (!slug || !title) return null;
  return {
    slug,
    title,
    category: String(r.category || "").trim(),
    date: String(r.date || "").trim(),
    dateLabel: String(r.dateLabel || r.date || "").trim(),
    readTime: String(r.readTime || "").trim(),
    excerpt: String(r.excerpt || "").trim(),
    metaTitle: String(r.metaTitle || title).trim(),
    metaDescription: String(r.metaDescription || r.excerpt || "").trim(),
    blocks: parseBody(r.body || ""),
  };
}

export async function getArticles(lang: Lang): Promise<Article[]> {
  const fallback = lang === "en" ? enFallback : frFallback;
  if (!ENDPOINT) return fallback;
  try {
    const res = await fetch(`${ENDPOINT}?action=articles`, { next: { revalidate: ARTICLES_REVALIDATE } });
    if (!res.ok) throw new Error("sheet_error");
    const rows = (await res.json()) as Record<string, string>[];
    const mapped = rows
      .filter((r) => String(r.lang || "fr").toLowerCase().startsWith(lang) && String(r.published ?? "true").toLowerCase() !== "false")
      .map(rowToArticle)
      .filter((a): a is Article => a !== null);
    return mapped.length ? mapped : fallback;
  } catch {
    return fallback;
  }
}

export async function getArticle(lang: Lang, slug: string): Promise<Article | undefined> {
  return (await getArticles(lang)).find((a) => a.slug === slug);
}
