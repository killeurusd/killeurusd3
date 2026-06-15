// Source unique des chemins FR + libellés de navigation.
// Remplace l'ancien système d'état `currentPage` du SPA par de vraies URL.

export const PATHS = {
  home: "/",
  about: "/vision",
  blog: "/blog",
  article: "/blog/pourquoi-90-pourcent-des-traders-echouent",
  contact: "/contact",
  alumni: "/acces-anciens",
  checkout: "/checkout",
  thankyou: "/merci",
  cgv: "/cgv",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const;

export type PageKey = keyof typeof PATHS;

// Article unique publié pour l'instant (le blog en liste 3, un seul a du contenu).
export const ARTICLE_SLUG = "pourquoi-90-pourcent-des-traders-echouent";

export const navLinks: { name: string; href: string }[] = [
  { name: "Le Programme", href: PATHS.home },
  { name: "Vision", href: PATHS.about },
  { name: "Blog", href: PATHS.blog },
  { name: "Contact", href: PATHS.contact },
];

export const footerNav: { name: string; href: string; accent?: boolean }[] = [
  { name: "Le Programme", href: PATHS.home },
  { name: "Vision & Fondateur", href: PATHS.about },
  { name: "Blog & Analyses", href: PATHS.blog },
  { name: "Support", href: PATHS.contact },
  { name: "Accès Anciens Élèves", href: PATHS.alumni, accent: true },
];

export const footerLegal: { name: string; href: string }[] = [
  { name: "Conditions Générales de Vente", href: PATHS.cgv },
  { name: "Mentions Légales", href: PATHS.legal },
  { name: "Politique de Confidentialité", href: PATHS.privacy },
];
