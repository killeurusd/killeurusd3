import { NextResponse } from "next/server";

// Réception serveur des soumissions de formulaire → transmet à Google Apps Script
// (qui écrit dans Google Sheets). L'URL du script est privée (env serveur, pas NEXT_PUBLIC).
// Sans config (branchement non fait), on répond OK pour ne pas casser l'UX.
const ENDPOINT = process.env.SHEETS_WEBHOOK_URL;

const ALLOWED_TYPES = new Set(["contact", "lead", "alumni"]);

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

  // Pas encore branché : on accepte (l'UX de confirmation fonctionne déjà côté client).
  if (!ENDPOINT) {
    return NextResponse.json({ ok: true, stored: false });
  }

  // Nettoyage : on ne transmet que des chaînes, taille limitée.
  const payload: Record<string, string> = {
    formType,
    submittedAt: new Date().toISOString(),
    page: typeof body.page === "string" ? body.page.slice(0, 300) : "",
  };
  for (const [k, v] of Object.entries(body)) {
    if (k === "formType" || k === "company") continue;
    if (typeof v === "string") payload[k] = v.slice(0, 2000);
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      // text/plain = pas de pré-vol CORS côté Apps Script ; le script parse le JSON.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      // évite de bloquer l'utilisateur si Sheets est lent
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error("sheet_error");
    return NextResponse.json({ ok: true, stored: true });
  } catch {
    // On ne révèle pas d'erreur à l'utilisateur ; à surveiller côté logs.
    return NextResponse.json({ ok: true, stored: false });
  }
}
