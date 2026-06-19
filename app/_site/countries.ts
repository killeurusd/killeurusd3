import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js";

// Liste complète des pays + indicatifs (source : libphonenumber-js) avec noms
// localisés (Intl.DisplayNames). Drapeaux rendus via flag-icons (classe `fi fi-xx`).

export type Country = { iso: string; dial: string; name: string };

export function buildCountries(lang: "fr" | "en"): Country[] {
  let dn: Intl.DisplayNames | null = null;
  try {
    dn = new Intl.DisplayNames([lang], { type: "region" });
  } catch {
    dn = null;
  }
  const list = getCountries().map((iso) => ({
    iso,
    dial: "+" + getCountryCallingCode(iso as CountryCode),
    name: (dn?.of(iso) as string) || iso,
  }));
  list.sort((a, b) => a.name.localeCompare(b.name, lang));
  return list;
}

export const defaultIso = (lang: "fr" | "en") => (lang === "en" ? "US" : "FR");
