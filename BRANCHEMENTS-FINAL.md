# Branchements finaux — KILLEURUSD

> Raccordements externes (comptes, clés, config plateforme, contenus à compléter)
> volontairement différés à une passe finale. Le **code** qui les attend est déjà en place.

## 🔌 Mesure & marketing
- [ ] **GA4** : créer la propriété, récupérer l'ID `G-XXXXXXXXXX`, le poser en variable
  d'environnement Vercel `NEXT_PUBLIC_GA_ID`. Le code (`app/_site/Consent.tsx`) charge alors
  GA **uniquement** après consentement. Sans ID, aucun tracker n'est injecté.
- [ ] **Meta Pixel / Google Ads** (si trafic payant prévu) : à ajouter sur le même modèle que GA,
  conditionné au consentement.
- [ ] Vérifier que le consentement (refus par défaut) couvre bien tous les traceurs ajoutés.

## 🌐 Domaine & sécurité (Vercel)
- [ ] **Certificat apex** : `killeurusd.com` (sans `www`) renvoie une erreur TLS (ALTNAME).
  Dans Vercel → Domains : ajouter/valider `killeurusd.com` et configurer une **redirection 301**
  vers `https://www.killeurusd.com` (cert couvrant les deux).
- [ ] **CSP** : passer l'en-tête de `Content-Security-Policy-Report-Only` à
  `Content-Security-Policy` (dans `next.config.ts`) une fois la console vérifiée sans erreur.
  ⚠️ Si GA4 est activé, ajouter `https://www.googletagmanager.com` à `script-src` et
  `https://*.google-analytics.com` à `connect-src`.

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
- [ ] **Paiement Stripe** : le bouton checkout (`Checkout.tsx`) mène à `/merci` sans transaction
  réelle. Brancher Stripe Checkout / Payment Link.
- [ ] **Formulaire de contact** (`Contact.tsx`) : actuellement `setSent(true)` sans envoi.
  Brancher vers email/CRM (cf. commentaire `[À BRANCHER]`).
- [ ] **Lead magnet** (« L'Audit du Trader Discipliné », section hero bas) : brancher la capture
  email + l'envoi du PDF.
- [ ] **Accès Anciens Élèves** (`Alumni.tsx`) : brancher la soumission.

## ⚖️ Décision en attente (intégrité)
- [ ] **Allégation de rareté** : bandeau marquee + bloc checkout « places volontairement limitées ».
  À **rendre vérifiable** (nb de places/cohorte + date) **ou** atténuer, pour rester conforme
  (DGCCRF / Directive Omnibus) et préserver la confiance.

---
_Maj : 2026-06-15 — Phase 1 de la refonte (routage FR, a11y, CTA, consentement) livrée sur la branche `refonte/phase-1-routage-fr`._
