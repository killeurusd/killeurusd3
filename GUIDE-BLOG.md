# 📝 Guide du blog KILLEURUSD — publier / modifier un article

> Référence unique pour publier un article, **que tu sois l'utilisateur** ou **une session Claude**
> (nouveau chat). Le blog vit en `/blog` (FR) et `/en/blog` (EN).

Il existe **3 façons** de publier. Choisis selon qui publie :

| Méthode | Qui | Riche (couverture + graphiques) ? | Mise en ligne |
|---------|-----|-----------------------------------|---------------|
| **A. Demander à Claude** | toi → Claude (un chat) | ✅ oui (sur mesure) | commit → ~1 min |
| **B. Google Sheet** | toi, en autonomie | ⚠️ texte + image par URL | ~1 min (ISR) |
| **C. Éditer le code** | toi/dev sur GitHub | ✅ oui | commit → ~1 min |

---

## A. Demander à Claude (le plus simple)
Dans **n'importe quel nouveau chat** où Claude a accès à ce projet, dis par ex. :
> « Publie un article sur *[sujet]*, en *[FR/EN/les deux]*, catégorie *[Psychologie/Méthode/Rigueur]*,
>   avec une couverture et un graphique de *[ce que tu veux montrer]*. »

Claude écrit l'article, crée les visuels, committe et déploie. **Pointe-le vers ce fichier** (`GUIDE-BLOG.md`)
s'il a besoin des conventions.

## B. Publier toi-même via Google Sheet
Voir [`backend/SETUP-BACKEND.md`](backend/SETUP-BACKEND.md) (§6). En résumé : une **ligne = un article**
dans l'onglet `Articles`. Colonnes :
`lang | slug | title | category | date | dateLabel | readTime | excerpt | metaTitle | metaDescription | cover | body | published`
- `cover` : URL/chemin d'une image (optionnel).
- `body` : 1er paragraphe = chapô · `## ` = sous-titre · `> ` = citation · `![texte](/image.png)` = image · ligne vide = nouveau paragraphe.
- Il faut que `SHEETS_WEBHOOK_URL` soit branché (sinon le site sert les articles intégrés).

---

## C / Référence technique (pour Claude ou un dev)

### Où vivent les articles
- **FR** : `app/_site/articles.ts` → `export const articles: Article[]`
- **EN** : `app/_site/articles-en.ts` → `export const articlesEn: Article[]`
- **Visuels** (couvertures, graphiques) : `public/blog/*.svg` (ou `.png`/`.jpg`)
- La source `app/_site/articles-source.ts` **fusionne** ces fichiers (repli) avec la Google Sheet (si branchée).
  Les routes blog sont en **ISR** + `dynamicParams` → un nouvel article apparaît sans casser le build.

### Schéma d'un article (TypeScript — `app/_site/articles.ts`)
```ts
type Block =
  | { t: "lead"; text: string }      // chapô (1er, mis en avant)
  | { t: "p"; text: string }         // paragraphe
  | { t: "h2"; text: string }        // sous-titre
  | { t: "quote"; text: string }     // citation encadrée
  | { t: "image"; src: string; alt?: string; caption?: string }; // image/graphique au milieu

type Article = {
  slug: string;            // URL, minuscules-avec-tirets (unique)
  title: string;
  category: string;        // voir "catégories" ci-dessous
  date: string;            // ISO "2026-06-15" (JSON-LD + <time>)
  dateLabel: string;       // affichage : FR "15 juin 2026" / EN "June 15, 2026"
  readTime: string;        // "6 min"
  excerpt: string;         // résumé (carte + SEO)
  metaTitle: string;       // SEO (souvent "Titre | KILLEURUSD")
  metaDescription: string; // SEO
  cover?: string;          // ex "/blog/mon-article-cover.svg" (sinon icône de catégorie)
  blocks: Block[];
};
```

### Pour publier en code (étapes)
1. Ajouter un objet `Article` dans `articles.ts` (FR) et/ou `articles-en.ts` (EN).
2. Créer les visuels dans `public/blog/` (couverture + graphiques). **Pour l'EN, suffixer `-en`**
   (ex. `xxx-cover.svg` / `xxx-cover-en.svg`) car les labels des graphiques sont traduits.
3. `git add -A && git commit && git push origin main` → Vercel déploie en prod (~1 min).
   (ou `npx vercel deploy --prod --yes --scope killeurusds-projects` ; projet lié = `killeurusd3`.)

### Catégories → vignette automatique (si pas de `cover`)
| FR | EN | Icône | Halo |
|----|----|-------|------|
| `Psychologie` | `Psychology` | cerveau | rouge |
| `Méthode` | `Method` | pouls | or |
| `Rigueur` | `Rigor` | bouclier | blanc |
Autre catégorie → icône livre par défaut. (Logique dans `Blog.tsx` / `en/blog/page.tsx`.)

### Charte des graphiques SVG (cohérence visuelle)
- Fond : `#0B0B0D`. Grille : `#27272a` discrète.
- **Baissier / problème** : rouge `#A8201A` (ou marque `#7A0F0F`).
- **Haussier / valeur / accent** : or `#C9A227`.
- Texte/labels : blanc `#ffffff` ou or. Police : `system-ui, …, sans-serif`.
- S'inspirer de `public/blog/price-action-liquidity.svg` (graphique) et `…-cover.svg` (couverture 1200×630).
- Règle d'or branding : **rouge = marque/CTA/problème, or = valeur/solution** (accent rare = premium).

### Exemple minimal (FR)
```ts
{
  slug: "gerer-le-risque",
  title: "Gérer le risque avant de penser au gain",
  category: "Rigueur",
  date: "2026-06-20",
  dateLabel: "20 juin 2026",
  readTime: "5 min",
  excerpt: "Le trader pro protège son capital d'abord. Voici le cadre.",
  metaTitle: "Gérer le risque | KILLEURUSD",
  metaDescription: "Pourquoi la gestion du risque prime sur l'entrée, et comment la cadrer.",
  cover: "/blog/gerer-le-risque-cover.svg",
  blocks: [
    { t: "lead", text: "Avant de chercher le gain, le professionnel borne sa perte." },
    { t: "h2", text: "Le risque par position" },
    { t: "p", text: "Définir un pourcentage fixe du capital par trade…" },
    { t: "image", src: "/blog/gerer-le-risque-rr.svg", alt: "Ratio risque/récompense", caption: "Un R:R de 1:3 en pratique." },
    { t: "quote", text: "On ne contrôle pas le gain. On contrôle l'exposition." },
  ],
}
```

> Note Claude : `app/_site/articles.ts` / `articles-en.ts` contiennent déjà 3 articles ; calque le style.
> Les routes/rendus (`Article.tsx`, `en/blog/[slug]/page.tsx`) gèrent déjà `cover` + blocs `image`.
