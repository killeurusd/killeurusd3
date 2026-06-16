/**
 * KILLEURUSD — Google Apps Script (Web App)
 * Relie le site à Google Sheets :
 *   - doPost : enregistre les soumissions de formulaire (onglet "Formulaires")
 *   - doGet?action=articles : renvoie les articles en JSON (onglet "Articles")
 *
 * INSTALLATION (voir backend/SETUP-BACKEND.md pour le détail) :
 *   1. Ouvre ta Google Sheet → Extensions → Apps Script → colle ce code → Enregistrer.
 *   2. Déployer → Nouveau déploiement → type "Application Web" :
 *        - Exécuter en tant que : Moi
 *        - Qui a accès : Tout le monde
 *      Autorise, puis COPIE l'URL qui finit par /exec.
 *   3. Dans Vercel (projet killeurusd3) → Settings → Environment Variables :
 *        SHEETS_WEBHOOK_URL = <l'URL /exec>   (Production)
 *      Puis redeploy.
 */

const FORMS_TAB = "Formulaires";
const ARTICLES_TAB = "Articles";

function ss_() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// --- Enregistrement des formulaires -----------------------------------------
function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    let sh = ss_().getSheetByName(FORMS_TAB);
    if (!sh) sh = ss_().insertSheet(FORMS_TAB);

    // En-têtes : crée la 1re ligne si vide, ajoute les colonnes manquantes au besoin.
    let headers = sh.getLastRow() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : [];
    if (!headers.length || (headers.length === 1 && headers[0] === "")) {
      headers = Object.keys(data);
      sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    } else {
      Object.keys(data).forEach(function (k) {
        if (headers.indexOf(k) === -1) {
          headers.push(k);
          sh.getRange(1, headers.length).setValue(k);
        }
      });
    }
    const row = headers.map(function (h) { return data[h] !== undefined ? data[h] : ""; });
    sh.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// --- Lecture des articles ----------------------------------------------------
function doGet(e) {
  const action = ((e.parameter && e.parameter.action) || "").toLowerCase();
  if (action === "articles") {
    const sh = ss_().getSheetByName(ARTICLES_TAB);
    if (!sh || sh.getLastRow() < 2) return json_([]);
    const values = sh.getRange(1, 1, sh.getLastRow(), sh.getLastColumn()).getValues();
    const headers = values[0].map(function (h) { return String(h).trim(); });
    const rows = values.slice(1).map(function (r) {
      const o = {};
      headers.forEach(function (h, i) { o[h] = r[i]; });
      return o;
    }).filter(function (o) { return o.slug && o.title; });
    return json_(rows);
  }
  return json_({ ok: true, info: "KILLEURUSD endpoint" });
}
