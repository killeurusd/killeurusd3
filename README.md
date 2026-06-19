# KILLEURUSD — site (Next.js)

Site de la formation trading KILLEURUSD. Next.js (App Router) + Tailwind, déployé sur Vercel
(projet `killeurusd3` → `https://www.killeurusd.com`). FR à la racine, EN sous `/en`.

## 📚 Documentation (à lire en premier)
- **[`RESTE-A-FAIRE.md`](RESTE-A-FAIRE.md)** — état du projet, reste à faire, et **comment reprendre sur un autre poste**. **Commence ici.**
- **[`AUTOMATISATION.md`](AUTOMATISATION.md)** — automatiser le site (paiement Stripe, livraison, stats). Comptes à créer + variables.
- **[`GUIDE-BLOG.md`](GUIDE-BLOG.md)** — publier / modifier un article (couverture, graphiques, conventions). **Lire ça pour le blog.**
- **[`backend/SETUP-BACKEND.md`](backend/SETUP-BACKEND.md)** — brancher Google Sheets (formulaires + articles) et GA4 (stats).
- **[`BRANCHEMENTS-FINAL.md`](BRANCHEMENTS-FINAL.md)** — tous les raccordements externes restants (cert apex, légal FR, Stripe, GA4…).

## Développement
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de prod
```

## Déploiement
Push sur `main` → Vercel déploie. Ou : `npx vercel deploy --prod --yes --scope killeurusds-projects`.

## Repères de structure
- `app/(site)/` — pages FR (root layout `lang=fr` + chrome) · `app/en/` — pages EN (`lang=en`).
- `app/_site/` — composants/données partagés (articles, primitives, Header/Footer, HeroChart, FounderCard…).
- `app/api/submit/` — réception des formulaires → Google Sheets.
- `public/blog/` — visuels d'articles (couvertures, graphiques SVG).
