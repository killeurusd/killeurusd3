// Route de l'assistant. Aujourd'hui : réponses par règles (mots-clés).
// IA branchable plus tard : décommenter le bloc OpenAI/Claude + ajouter la clé en variable d'env.

type Rule = { keys: string[]; reply: string };

const RULES: Rule[] = [
  { keys: ["prix", "coût", "cout", "tarif", "997", "combien"], reply:
    "L'accès est un paiement unique de 997$ : accès à vie + accompagnement privé (1h/semaine pendant 3 mois). Aucun abonnement caché." },
  { keys: ["débutant", "debutant", "commencer", "novice", "zéro", "zero"], reply:
    "Oui, le programme accueille les débutants motivés : le module 1 pose les fondations. Il faut surtout de la rigueur et du travail (résultats non garantis)." },
  { keys: ["temps", "durée", "duree", "combien de temps", "rythme"], reply:
    "Compte environ 3 mois de travail assidu. Tu avances à ton rythme, avec un suivi hebdomadaire pendant 3 mois." },
  { keys: ["garantie", "remboursé", "rembourse", "satisfait"], reply:
    "Pour toute question sur les conditions (CGV) et l'accès, le mieux est d'en parler directement via le formulaire de contact." },
  { keys: ["risque", "perte", "danger"], reply:
    "⚠️ Le trading comporte un risque élevé de perte en capital. Le programme est purement éducatif et ne constitue pas un conseil en investissement." },
  { keys: ["contenu", "programme", "modules", "quoi", "inclus"], reply:
    "Méthode price action, gestion du risque, discipline d'exécution + mentoring privé (1h/sem, 3 mois) + groupe privé + accès à vie à la plateforme." },
  { keys: ["contact", "humain", "appeler", "parler", "rendez-vous", "rdv"], reply:
    "Avec plaisir — utilise le formulaire de contact du site et on revient vers toi rapidement." },
];

export async function POST(request: Request) {
  let message = "";
  try {
    const body = await request.json();
    message = String(body?.message || "").toLowerCase();
  } catch {
    return Response.json({ reply: "Message non compris. Réessaie." }, { status: 200 });
  }

  // --- [À BRANCHER] IA réelle (OpenAI / Claude) ---
  // if (process.env.OPENAI_API_KEY) {
  //   const r = await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
  //     body: JSON.stringify({
  //       model: "gpt-4o-mini",
  //       messages: [
  //         { role: "system", content: "Tu es l'assistant de KILLEURUSD (formation trading). Sois bref, honnête, jamais de promesse de gains, rappelle le risque. Oriente vers le contact pour conclure." },
  //         { role: "user", content: message },
  //       ],
  //     }),
  //   });
  //   const data = await r.json();
  //   const reply = data?.choices?.[0]?.message?.content;
  //   if (reply) return Response.json({ reply });
  // }

  // Réponse par règles
  const hit = RULES.find((r) => r.keys.some((k) => message.includes(k)));
  const reply = hit
    ? hit.reply
    : "Bonne question. Je peux t'aider sur le programme, le prix, la durée ou te mettre en relation via le formulaire de contact.";
  return Response.json({ reply });
}
