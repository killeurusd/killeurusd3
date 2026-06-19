# ⚙️ Automatisation KILLEURUSD — guide complet

> Objectif : un site qui tourne **tout seul** — paiement, livraison de l'accès, leads, stats.
> Le **code est prêt**. Il reste à créer **2 comptes** (Stripe, GA4) + la Google Sheet, et à
> coller quelques valeurs. Aucune compétence technique requise.

## Ce qui devient automatique une fois branché
| Étape | Déclencheur | Action automatique |
|-------|-------------|--------------------|
| **Paiement** | Clic « Payer 997 $ » | Stripe encaisse, envoie le **reçu par email** |
| **Livraison** | Paiement validé | Stripe affiche le **lien d'accès** (Notion / Telegram / Drive) + redirige vers `/merci` |
| **Formulaires** | Contact / lead / anciens élèves | Ligne ajoutée dans Google Sheets (onglet `Formulaires`) |
| **Articles** | Tu me demandes (ou 1 ligne Sheet) | Publié en ~1 min |
| **Stats** | En continu | GA4 mesure tout + **rapports/insights automatiques** |

---

## 1) Paiement + livraison — **sans code, via Stripe** (le cœur)
> C'est le seul vrai « compte » à créer. ~30 min.

1. Crée un compte **[stripe.com](https://stripe.com)** (vérification d'identité requise — c'est normal pour encaisser).
2. **Produit** : Stripe → *Catalogue de produits* → *Ajouter un produit* :
   - Nom : `KILLEURUSD — Accès intégral + Mentoring`
   - Prix : **997** (devise au choix : USD ou EUR) · paiement **unique**.
3. **Payment Link** : sur ce produit → *Créer un lien de paiement*. Dans les options :
   - **Après le paiement** → *Afficher une page de confirmation* avec un **message + ton lien d'accès**
     (ta page **Notion**, ton **invite Telegram**, ou ton **dossier Google Drive**) ;
     **ou** *Rediriger* vers `https://www.killeurusd.com/merci`.
   - (Optionnel) Activer la **collecte d'email** + le **reçu automatique**.
4. **Copie l'URL du Payment Link** (`https://buy.stripe.com/...`).
5. Sur **Vercel** (projet `killeurusd3`) → *Settings → Environment Variables* (Production) :
   `NEXT_PUBLIC_STRIPE_PAYMENT_LINK = <l'URL du Payment Link>` → **Redeploy**.

✅ Résultat : le bouton de la page checkout encaisse réellement, livre l'accès et envoie le reçu — **tout seul**.
Tant que la variable n'est pas posée, le bouton garde l'ancien comportement (le site ne casse pas).

## 2) Leads / formulaires → Google Sheets
Déjà codé. Voir **[`backend/SETUP-BACKEND.md`](backend/SETUP-BACKEND.md)** : crée la Sheet + déploie l'Apps
Script + pose `SHEETS_WEBHOOK_URL`. (Pas de devis : tu as choisi l'achat direct.)

## 3) Stats visiteurs — automatiques (GA4)
1. Crée la propriété **GA4** ([analytics.google.com](https://analytics.google.com)), flux Web `https://www.killeurusd.com`.
2. Pose `NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX` sur Vercel → Redeploy. (Le suivi se charge après consentement.)
3. **Analyse automatique** (sans rien coder) :
   - GA4 → *Insights* : détection automatique d'anomalies et tendances.
   - GA4 → un rapport → *Partager → Programmer un envoi par email* (résumé hebdo automatique).

## 4) (Optionnel, Phase 2) Logging clients + email d'accès personnalisé
Si tu veux, EN PLUS de Stripe : enregistrer chaque acheteur dans un onglet `Clients` et envoyer un
**email d'accès sur mesure** (depuis ta Google Sheet, sans outil d'emailing). Ça nécessite un **webhook
Stripe** que je brancherai **quand ton compte Stripe existera** (pour pouvoir le tester avec toi).
→ Dis-le-moi à ce moment-là.

---

## Récap des variables à poser sur Vercel
| Variable | Pour | Source |
|----------|------|--------|
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | Paiement + livraison | Stripe (Payment Link) |
| `SHEETS_WEBHOOK_URL` | Formulaires (+ articles) | Apps Script (`/exec`) |
| `NEXT_PUBLIC_GA_ID` | Stats | GA4 (`G-…`) |

## Ce que JE ne peux pas faire à ta place (et pourquoi)
- Créer/valider ton **compte Stripe** (vérification d'identité financière) — c'est à toi.
- Saisir tes **identifiants / clés** — je ne manipule jamais ça.
→ Mais tout le **code** est en place : tu crées les comptes, tu colles les valeurs, et la machine tourne.
On peut le faire **ensemble, étape par étape**, quand tu es prêt.
