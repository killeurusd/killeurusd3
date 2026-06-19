# Branchements finaux — KILLEURUSD

> Raccordements externes (comptes, clés, config plateforme, contenus à compléter)
> volontairement différés à une passe finale. Le **code** qui les attend est déjà en place.

## 🗄️ Backend Google Sheets + GA4 — voir [`backend/SETUP-BACKEND.md`](backend/SETUP-BACKEND.md)
Tout le code est prêt (articles depuis Sheets en ISR, formulaires → `/api/submit`, GA4 + suivi SPA).
Il reste à connecter Google (≈20 min) :
- [ ] Créer la Google Sheet (onglets `Formulaires` + `Articles`) et déployer
  [`backend/google-apps-script.gs`](backend/google-apps-script.gs) en Web App.
- [ ] Variable Vercel `SHEETS_WEBHOOK_URL` = l'URL `…/exec` du script (formulaires **et** articles).
- [ ] Sans cette variable : formulaires acceptés sans enregistrement + blog sur les 3 articles intégrés
  (le site ne casse jamais).

## 🔌 Mesure & marketing
- [ ] **GA4** : créer la propriété, récupérer l'ID `G-XXXXXXXXXX`, le poser dans la variable Vercel
  `NEXT_PUBLIC_GA_ID`. Le code (`app/_site/Consent.tsx`) charge GA **uniquement après consentement**
  (bannière FR **et** EN) et suit déjà les changements de page (navigation SPA). Sans ID, aucun tracker.
- [ ] **Meta Pixel / Google Ads** (si trafic payant prévu) : à ajouter sur le même modèle que GA,
  conditionné au consentement.
- [ ] Vérifier que le consentement (refus par défaut) couvre bien tous les traceurs ajoutés.

## 🌐 Domaine & sécurité (Vercel)
- [ ] **Certificat apex** : `killeurusd.com` (sans `www`) renvoie une erreur TLS (ALTNAME).
  Dans Vercel → Domains : ajouter/valider `killeurusd.com` et configurer une **redirection 301**
  vers `https://www.killeurusd.com` (cert couvrant les deux).
- [x] **CSP** : déjà passée en `Content-Security-Policy` (appliquée) dans `next.config.ts`.
  ⚠️ **À l'activation de GA4** : ajouter `https://www.googletagmanager.com` à `script-src` et
  `https://*.google-analytics.com` à `connect-src` (sinon GA sera bloqué par la CSP).

## 📄 Contenu légal (placeholders `[À COMPLÉTER]` / `[INSERT…]`)
Textes sources dans `../annexe/`. À compléter dans :
`app/_site/pages/Cgv.tsx`, `LegalNotice.tsx`, `Privacy.tsx` (+ équivalents `/en`).
- [ ] Adresse du siège (RAYSS RESEARCH LLC, Nouveau-Mexique)
- [ ] Email support / email vie privée
- [ ] Hébergeur (Vercel Inc. — nom + adresse) dans les Mentions Légales
- [ ] Dates de « dernière mise à jour »
- [ ] Médiateur de la consommation (si requis pour le public FR)
- [ ] **Traduire en FR** les Mentions Légales et la Politique de Confidentialité du site FR
  (actuellement en anglais sur la version française).

## 💳 Conversion (back-ends à brancher)
- [ ] **Paiement Stripe (automatisé)** : le bouton checkout pointe sur `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
  dès qu'il est posé (sinon repli sur `/merci`). Procédure no-code (Payment Link = paiement + reçu +
  livraison du lien d'accès Notion/Telegram/Drive) dans **[`AUTOMATISATION.md`](AUTOMATISATION.md)**.
  Webhook clients/email sur-mesure = Phase 2 (à brancher une fois le compte Stripe créé).
- [x] **Formulaires** (contact, lead magnet, anciens élèves — FR **et** EN) : désormais envoyés à
  `/api/submit` → Google Sheets. Ne reste qu'à poser `SHEETS_WEBHOOK_URL` (voir section Backend).
- [ ] **Lead magnet** : brancher en plus l'**envoi du PDF** (« L'Audit du Trader Discipliné ») par email
  (la capture e-mail, elle, est déjà enregistrée en Sheets).
- [ ] **Accès Anciens Élèves** (`Alumni.tsx`) : brancher la soumission.

## 🔁 Maintenance par cohorte (rareté honnête — RÉSOLU, à tenir à jour)
- [ ] **Mettre à jour `app/_site/offer.ts`** (`COHORT` : `seats` + `dateFr`/`dateEn`) à **chaque nouvelle
  cohorte**. Actuellement : **5 places, bootcamp du 1ᵉʳ août**. Affiché dans le bandeau, le bloc prix
  et le checkout (FR + EN). Ne jamais afficher un nombre/date non réel.

---
_Maj : 2026-06-15 — Phase 1 de la refonte (routage FR, a11y, CTA, consentement) livrée sur la branche `refonte/phase-1-routage-fr`._
