// Attribution "premier contact" : capture les UTM + le site référent externe au
// premier chargement, les conserve en sessionStorage (survit à la navigation
// interne), puis les joint aux soumissions de formulaire (/api/submit).
// Invisible pour le visiteur. Aucune donnée si pas de campagne/référent.

const KEY = "ku_attrib";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

type Attrib = Record<string, string>;

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return; // premier contact uniquement
    const params = new URLSearchParams(window.location.search);
    const a: Attrib = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) a[k] = v.slice(0, 200);
    });
    // Référent externe uniquement (on ignore la navigation interne au site).
    const ref = document.referrer;
    if (ref) {
      try {
        if (new URL(ref).host !== window.location.host) a.referrer = ref.slice(0, 300);
      } catch {}
    }
    a.landing = window.location.pathname.slice(0, 200);
    sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {}
}

export function getAttribution(): Attrib {
  if (typeof window === "undefined") return {};
  captureAttribution();
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Attrib;
  } catch {
    return {};
  }
}
