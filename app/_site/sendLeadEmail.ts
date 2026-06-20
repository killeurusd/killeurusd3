import nodemailer from "nodemailer";

// Envoi de l'email automatique de bienvenue au lead (checklist "L'Audit du Trader
// Discipliné"), via Gmail (SMTP + mot de passe d'application). No-op si non configuré.
//   GMAIL_USER           = adresse d'envoi (ex. killeurusd@gmail.com)
//   GMAIL_APP_PASSWORD   = mot de passe d'application Google (16 caractères)
//   LEAD_PDF_URL         = URL publique du PDF à joindre (ex. https://www.killeurusd.com/audit.pdf)

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
const LEAD_PDF_URL = process.env.LEAD_PDF_URL;

export const emailConfigured = () => Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);

type Lang = "fr" | "en";

type Copy = {
  subject: string;
  pdfName: string;
  hi: (p: string) => string;
  intro: string;
  button: string;
  fallback: string;
  outro: string;
  signoff: string;
  team: string;
  ps: string;
};

const COPY: Record<Lang, Copy> = {
  fr: {
    subject: "Ta checklist — L'Audit du Trader Discipliné",
    pdfName: "Audit-du-Trader-Discipline.pdf",
    hi: (p: string) => (p ? `Salut ${p},` : "Salut,"),
    intro: "Merci d'avoir demandé « L'Audit du Trader Discipliné ». Voici tes 10 points de contrôle non-négociables à valider avant d'ouvrir la moindre position.",
    button: "Télécharger la checklist",
    fallback: "Si le bouton ne s'affiche pas, copie ce lien dans ton navigateur :",
    outro: "Prends le temps de la lire et de l'appliquer avant ta prochaine session. La discipline se construit avant le clic, pas après.",
    signoff: "À très vite,",
    team: "L'équipe KILLEUR USD",
    ps: "Tu reçois cet email car tu as demandé la checklist sur killeurusd.com. Désinscription en répondant simplement à ce message.",
  },
  en: {
    subject: "Your checklist — The Disciplined Trader's Audit",
    pdfName: "The-Disciplined-Traders-Audit.pdf",
    hi: (p: string) => (p ? `Hi ${p},` : "Hi,"),
    intro: "Thanks for requesting “The Disciplined Trader's Audit.” Here are your 10 non-negotiable checks to run before opening any position.",
    button: "Download the checklist",
    fallback: "If the button doesn't show, copy this link into your browser:",
    outro: "Take the time to read and apply it before your next session. Discipline is built before the click, not after.",
    signoff: "Talk soon,",
    team: "The KILLEUR USD team",
    ps: "You're receiving this because you requested the checklist on killeurusd.com. Unsubscribe by simply replying to this email.",
  },
};

function html(t: Copy, prenom: string, pdfUrl?: string): string {
  const btn = pdfUrl
    ? `<tr><td style="padding:8px 0 16px;">
         <a href="${pdfUrl}" style="display:inline-block;background:#7A0F0F;color:#ffffff;text-decoration:none;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:14px;padding:14px 28px;border-radius:4px;">${t.button}</a>
       </td></tr>
       <tr><td style="color:#71717a;font-size:12px;padding-bottom:20px;">${t.fallback}<br/><a href="${pdfUrl}" style="color:#C9A227;">${pdfUrl}</a></td></tr>`
    : "";
  return `<!doctype html><html><body style="margin:0;background:#0B0B0D;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0B0B0D;padding:32px 16px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#111114;border:1px solid #27272a;border-radius:8px;overflow:hidden;">
          <tr><td style="height:4px;background:#7A0F0F;"></td></tr>
          <tr><td style="padding:32px 32px 8px;color:#C9A227;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">KILLEUR USD</td></tr>
          <tr><td style="padding:0 32px 24px;">
            <p style="color:#ffffff;font-size:16px;font-weight:700;margin:0 0 16px;">${t.hi(prenom)}</p>
            <p style="color:#d4d4d8;font-size:15px;line-height:1.6;margin:0 0 24px;">${t.intro}</p>
            <table role="presentation" cellpadding="0" cellspacing="0">${btn}</table>
            <p style="color:#d4d4d8;font-size:15px;line-height:1.6;margin:0 0 24px;">${t.outro}</p>
            <p style="color:#d4d4d8;font-size:15px;margin:0;">${t.signoff}<br/><strong style="color:#ffffff;">${t.team}</strong></p>
          </td></tr>
          <tr><td style="padding:20px 32px;border-top:1px solid #27272a;color:#71717a;font-size:12px;line-height:1.5;">${t.ps}</td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

function text(t: Copy, prenom: string, pdfUrl?: string): string {
  return [
    t.hi(prenom),
    "",
    t.intro,
    pdfUrl ? `\n${t.button} : ${pdfUrl}\n` : "",
    t.outro,
    "",
    `${t.signoff}`,
    t.team,
    "",
    t.ps,
  ].join("\n");
}

export async function sendLeadEmail(to: string, prenom: string, lang: Lang): Promise<void> {
  if (!emailConfigured()) return;
  const t = COPY[lang === "en" ? "en" : "fr"];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  // Email léger : le PDF est servi par le site (LEAD_PDF_URL), on envoie juste le lien
  // — pas de pièce jointe (meilleure délivrabilité, email plus léger).
  await transporter.sendMail({
    from: `"KILLEUR USD" <${GMAIL_USER}>`,
    to,
    subject: t.subject,
    text: text(t, prenom, LEAD_PDF_URL),
    html: html(t, prenom, LEAD_PDF_URL),
  });
}
