# 📌 KILLEURUSD — État du projet & reste à faire (handoff)

> Document de reprise. Le **site est en ligne et fonctionnel** sur `https://www.killeurusd.com`.
> Tout ce qui reste relève surtout de **branchements** (créer des comptes + coller des valeurs).

---

## 🔁 Reprendre le travail sur un autre poste
1. Installer **Node 20+** et **Git**.
2. Cloner le repo :
   ```bash
   git clone https://github.com/killeurusd/killeurusd3.git
   cd killeurusd3
   npm install
   npm run dev        # http://localhost:3000
   ```
3. **Déployer** : soit `git push origin main` (Vercel déploie tout seul), soit :
   ```bash
   npx vercel link --project killeurusd3 --scope killeurusds-projects   # 1re fois
   npx vercel deploy --prod --yes --scope killeurusds-projects
   ```
4. **À lire en premier** : `README.md` → puis `AUTOMATISATION.md`, `GUIDE-BLOG.md`, `backend/SETUP-BACKEND.md`, `BRANCHEMENTS-FINAL.md`.
5. **Avec Claude sur le nouveau poste** : ouvre un chat pointé sur ce dossier et dis « lis le README et les guides » — tout y est.

Infos clés : repo `killeurusd/killeurusd3` (branche `main`) · Vercel projet `killeurusd3` · prod `www.killeurusd.com`.

---

## ✅ Déjà fait (en ligne)
- Refonte FR (vraies routes, SEO/GEO, perf LCP 7,1→2,5 s, a11y), version **EN à parité** (`lang=en`).
- **Blog** réel : articles + **publication par Claude** (couverture + graphiques) ou via Google Sheet.
- **Branding** harmonisé (système rouge/or), **animations** (révélations, compteurs, survol premium).
- **Code backend prêt** : formulaires→Sheets, articles (ISR), GA4 (consentement FR+EN), bouton paiement→Stripe.
- En-têtes sécurité + CSP appliquée.

---

## 🔌 RESTE À FAIRE — Branchements (priorité haute)
> Le code attend ; il faut créer les comptes et poser les variables sur **Vercel → Settings → Environment Variables (Production)** puis **Redeploy**.

- [ ] **Stripe** (paiement + livraison) — voir `AUTOMATISATION.md` §1.
  Créer le compte → Payment Link 997 $ (after-payment = lien d'accès Notion/Telegram/Drive + redirect `/merci`)
  → poser `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`. **Décider où vit le cours** (Notion / Telegram / Drive).
- [ ] **GA4** (stats) — créer la propriété → poser `NEXT_PUBLIC_GA_ID` (`G-…`). Insights + rapport hebdo auto (natif GA4).
- [x] **Formulaires → Google Sheets** ✅ FAIT (2026-06-19). Écriture directe via **compte de service** (API Sheets v4) dans `/api/submit` ; un onglet par type (`Contacts` / `Leads` / `Anciens`), créés tout seuls. Variables Vercel posées : `SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`. Sheet : `1lv02iiesDZbFyo5ZqyemeNaEwX7_ry5mDNk9-qXWhiw`. ⚠️ Penser à **régénérer la clé** du compte de service (elle a transité en clair pendant le branchement).
- [ ] **Articles via Google Sheet** (optionnel) — encore sur Apps Script (`SHEETS_WEBHOOK_URL`, voir `backend/SETUP-BACKEND.md`). Non branché → le blog sert les 3 articles intégrés. Pas nécessaire si tu publies via Claude.
- [ ] **Certificat apex** : Vercel → Domains → ajouter `killeurusd.com` + redirection 301 vers `www` (aujourd'hui erreur TLS sur le domaine nu).
- [ ] **CSP + GA** : quand GA4 est actif, ajouter dans `next.config.ts` `https://www.googletagmanager.com` (script-src) et `https://*.google-analytics.com` (connect-src).

## ⚖️ RESTE À FAIRE — Légal (avant de vendre pour de vrai)
- [ ] **Traduire en FR** les **Mentions Légales** et la **Politique de Confidentialité** (actuellement en anglais sur le site FR) — fichiers `app/_site/pages/LegalNotice.tsx` et `Privacy.tsx`.
- [ ] Compléter les `[À COMPLÉTER]` / `[INSERT…]` : **adresse** du siège (RAYSS RESEARCH LLC), **email** support/vie privée, **hébergeur** (Vercel Inc.), **dates** de mise à jour, médiateur conso si requis. (CGV, Mentions, Confidentialité — FR et `/en`.)

## 🎨 RESTE À FAIRE — Assets / contenu
- [ ] **Photo du fondateur** : remplacer le logo en filigrane par la vraie photo dans `app/_site/FounderCard.tsx` (`<Image>` en `object-cover`).
- [ ] **Favicon** propre généré depuis le logo (onglet navigateur).
- [ ] **PDF du lead magnet** « L'Audit du Trader Discipliné » : brancher l'envoi par email (la capture est déjà loggée).
- [ ] **Cohorte** : tenir à jour `app/_site/offer.ts` (`COHORT` : places + date) à chaque nouvelle session.

## 🚀 RESTE À FAIRE — Optionnel (améliorations)
- [ ] **Automatisation Phase 2** : webhook Stripe → onglet `Clients` + email d'accès sur-mesure (à brancher une fois le compte Stripe créé, pour le tester).
- [ ] **Animations** mises de côté : le graphique du hero qui se dessine, halo d'ambiance en fond.
- [ ] Publier régulièrement des **articles** (SEO/GEO) — demander à Claude.

---

## 🗂️ Où est quoi (repères)
- Pages FR : `app/(site)/` · Pages EN : `app/en/` · Partagé : `app/_site/`
- Articles : `app/_site/articles.ts` (+ `articles-en.ts`) · visuels `public/blog/`
- Formulaires : `app/api/submit/route.ts` · source articles/Sheet : `app/_site/articles-source.ts`
- Animations : `app/_site/Motion.tsx` + `app/globals.css` · Compteurs : `app/_site/CountUp.tsx`
- Config offre/cohorte : `app/_site/offer.ts`

_Maj : 2026-06-19._
