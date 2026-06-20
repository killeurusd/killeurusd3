import { NextResponse } from "next/server";
import { google } from "googleapis";
import { sendLeadEmail, emailConfigured } from "../../_site/sendLeadEmail";

// Réception serveur des soumissions de formulaire → écriture directe dans Google
// Sheets via un compte de service (API Sheets v4). Un onglet par type de
// formulaire (Contacts / Leads / Anciens), en-têtes créés automatiquement.
// Sans configuration (clés absentes), on répond OK pour ne pas casser l'UX.
export const runtime = "nodejs";

const ALLOWED_TYPES = new Set(["contact", "lead", "alumni"]);
const TABS: Record<string, string> = { contact: "Contacts", lead: "Leads", alumni: "Anciens" };
const DEFAULT_TAB = "Formulaires";

const SHEET_ID = process.env.SHEET_ID;
const SA_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
// La clé privée est stockée avec des \n littéraux dans les variables d'env → on restaure les sauts de ligne.
const SA_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

const isConfigured = () => Boolean(SHEET_ID && SA_EMAIL && SA_KEY);

function sheetsClient() {
  const auth = new google.auth.JWT({
    email: SA_EMAIL,
    key: SA_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

type Sheets = ReturnType<typeof sheetsClient>;

// Crée l'onglet si absent (avec en-tête en gras + ligne figée).
async function ensureTab(sheets: Sheets, title: string): Promise<void> {
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  const exists = (meta.data.sheets || []).some((s) => s.properties?.title === title);
  if (exists) return;
  const res = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: { requests: [{ addSheet: { properties: { title } } }] },
  });
  const sheetId = res.data.replies?.[0]?.addSheet?.properties?.sheetId;
  if (sheetId != null) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: {
        requests: [
          {
            updateSheetProperties: {
              properties: { sheetId, gridProperties: { frozenRowCount: 1 } },
              fields: "gridProperties.frozenRowCount",
            },
          },
          {
            repeatCell: {
              range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
              cell: { userEnteredFormat: { textFormat: { bold: true } } },
              fields: "userEnteredFormat.textFormat.bold",
            },
          },
        ],
      },
    });
  }
}

// Ajoute une ligne, en alignant sur les en-têtes existants et en ajoutant les colonnes manquantes.
async function appendRow(sheets: Sheets, tab: string, data: Record<string, string>): Promise<void> {
  await ensureTab(sheets, tab);

  const hdr = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${tab}!1:1` });
  let headers = (hdr.data.values?.[0] as string[] | undefined) || [];

  let headersChanged = false;
  if (headers.length === 0) {
    headers = Object.keys(data);
    headersChanged = true;
  } else {
    for (const k of Object.keys(data)) {
      if (!headers.includes(k)) {
        headers.push(k);
        headersChanged = true;
      }
    }
  }
  if (headersChanged) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${tab}!1:1`,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
  }

  const row = headers.map((h) => (data[h] !== undefined ? data[h] : ""));
  // RAW : on stocke les valeurs telles quelles (préserve les zéros initiaux des
  // téléphones). L'horodatage "YYYY-MM-DD HH:mm:ss" reste trié correctement en texte.
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${tab}!A1`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Honeypot anti-bot : si le champ caché est rempli, on ignore silencieusement.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const formType = String(body.formType || "");
  if (!ALLOWED_TYPES.has(formType)) {
    return NextResponse.json({ ok: false, error: "bad_type" }, { status: 400 });
  }

  // 1) Stockage Google Sheets (si configuré).
  let stored = false;
  if (isConfigured()) {
    // Nettoyage : uniquement des chaînes, taille limitée. Horodatage lisible (UTC).
    const payload: Record<string, string> = {
      formType,
      submittedAt: new Date().toISOString().replace("T", " ").slice(0, 19),
      page: typeof body.page === "string" ? body.page.slice(0, 300) : "",
    };
    for (const [k, v] of Object.entries(body)) {
      if (k === "formType" || k === "company" || k === "page") continue;
      if (typeof v === "string") payload[k] = v.slice(0, 2000);
    }
    try {
      await appendRow(sheetsClient(), TABS[formType] || DEFAULT_TAB, payload);
      stored = true;
    } catch (err) {
      // On ne révèle pas d'erreur à l'utilisateur ; à surveiller côté logs Vercel.
      console.error("[submit] sheets error:", err);
    }
  }

  // 2) Email automatique de bienvenue — leads uniquement (indépendant du stockage).
  if (formType === "lead" && typeof body.email === "string" && body.email && emailConfigured()) {
    try {
      await sendLeadEmail(body.email, typeof body.prenom === "string" ? body.prenom : "", body.lang === "en" ? "en" : "fr");
    } catch (err) {
      console.error("[submit] email error:", err);
    }
  }

  return NextResponse.json({ ok: true, stored });
}
