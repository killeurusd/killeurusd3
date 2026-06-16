# Backend KILLEURUSD — mode d'emploi (à brancher)

Tout le **code** est en place. Il reste à connecter tes comptes Google. ~20 min.

## 1) Créer la Google Sheet
1. Crée une Google Sheet (nom au choix, ex. « KILLEURUSD — Data »).
2. Crée **2 onglets** (en bas) :
   - **`Formulaires`** : laisse-le vide (les en-têtes se créent tout seuls à la 1re soumission).
   - **`Articles`** : mets en **1re ligne** ces colonnes (exactement ces noms) :

   ```
   lang | slug | title | category | date | dateLabel | readTime | excerpt | metaTitle | metaDescription | cover | body | published
   ```

## 2) Installer le script
1. Dans la Sheet : **Extensions → Apps Script**.
2. Supprime le code par défaut, colle le contenu de [`google-apps-script.gs`](google-apps-script.gs), **Enregistrer**.
3. **Déployer → Nouveau déploiement** → roue crantée → **Application Web** :
   - *Description* : KILLEURUSD
   - *Exécuter en tant que* : **Moi**
   - *Qui a accès* : **Tout le monde**
   - **Déployer** → autorise l'accès (ton compte Google).
4. **Copie l'URL** qui se termine par `/exec`.

## 3) Brancher sur Vercel
Dans Vercel → projet **killeurusd3** → **Settings → Environment Variables** (scope *Production*) :

| Variable | Valeur |
|----------|--------|
| `SHEETS_WEBHOOK_URL` | l'URL `…/exec` du script |
| `NEXT_PUBLIC_GA_ID` | ton **ID GA4** (`G-XXXXXXXXXX`) — voir §5 |

Puis **redeploy** (Deployments → … → Redeploy).

## 4) Vérifier
- **Formulaires** : remplis le formulaire de contact du site → une ligne apparaît dans l'onglet `Formulaires`.
- **Articles** : ajoute une ligne dans l'onglet `Articles` (voir §6) → l'article apparaît sur `/blog` sous ~1 min (ISR).

## 5) Stats visiteurs (GA4)
1. [analytics.google.com](https://analytics.google.com) → crée une propriété **GA4** + un flux **Web** (URL `https://www.killeurusd.com`).
2. Récupère l'**ID de mesure** `G-XXXXXXXXXX` → mets-le dans `NEXT_PUBLIC_GA_ID` (Vercel) → redeploy.
3. GA ne se charge **qu'après acceptation** de la bannière cookies (RGPD). Le suivi des changements de page (navigation interne) est géré automatiquement.
4. ⚠️ La **CSP** est appliquée : si GA est bloqué, ajoute dans `next.config.ts` `https://www.googletagmanager.com` à `script-src` et `https://*.google-analytics.com` à `connect-src` (déjà noté dans `BRANCHEMENTS-FINAL.md`).

## 6) Publier un article — 2 façons

**A. Le plus simple : demande-le à Claude.** Tu dis « publie un article sur X, avec une couverture
et un graphique de Y au milieu » → l'article (texte + **photo de couverture** + **graphiques**) est créé
dans le code, committé, et **en ligne en ~1 min**. Zéro manip de ta part.

**B. Toi-même, via la Google Sheet** (onglet `Articles`, pour des articles surtout texte).
Une **ligne = un article**. Colonnes :
- `lang` : `fr` ou `en`
- `slug` : l'URL (minuscules, tirets), ex. `gerer-le-risque`
- `title`, `category` (Psychology/Method/Rigor ou Psychologie/Méthode/Rigueur pour la vignette), `date` (`2026-06-15`), `dateLabel` (`15 juin 2026`), `readTime` (`6 min`)
- `excerpt` : résumé (carte + SEO)
- `metaTitle`, `metaDescription` : SEO (optionnels, sinon dérivés du titre/excerpt)
- `cover` : (optionnel) image de couverture — chemin (`/blog/ma-couv.png`) ou URL. Sinon, l'icône de catégorie est utilisée.
- `body` : le contenu. **Format simple** :
  - 1er paragraphe = chapô (mis en avant)
  - une ligne commençant par `## ` = sous-titre
  - une ligne commençant par `> ` = citation encadrée
  - une ligne `![texte](/chemin-ou-url.png)` = **image / graphique au milieu**
  - le reste = paragraphes (sépare-les par une **ligne vide**)
- `published` : `true` (ou `false` pour masquer)

> Tant que `SHEETS_WEBHOOK_URL` n'est pas branché, le site sert les **3 articles intégrés** par défaut (il ne casse jamais).
