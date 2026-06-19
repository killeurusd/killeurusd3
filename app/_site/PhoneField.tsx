"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { buildCountries, defaultIso } from "./countries";

// Champ téléphone international : sélecteur de pays (drapeau + indicatif, cherchable)
// + numéro obligatoire. Émet un input caché name="telephone" = "<indicatif> <numéro>".
// Indicatif par défaut : France sur le site FR, États-Unis sur le site EN.

type Variant = "dark" | "light";

const FIELD: Record<Variant, string> = {
  dark: "rounded-sm border border-zinc-800 bg-[#0B0B0D] text-white px-4 py-3 focus:outline-none focus:border-[#7A0F0F] transition-colors",
  light: "rounded-sm border border-white/20 bg-[#0B0B0D]/50 text-white px-6 py-4 focus:outline-none focus:border-white transition-colors",
};

export default function PhoneField({
  lang,
  variant = "dark",
  className = "",
}: {
  lang: "fr" | "en";
  variant?: Variant;
  className?: string;
}) {
  const countries = useMemo(() => buildCountries(lang), [lang]);
  const [iso, setIso] = useState(() => defaultIso(lang));
  const [num, setNum] = useState("");
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const current = countries.find((c) => c.iso === iso) || countries[0];
  const full = num.trim() ? `${current.dial} ${num.trim()}` : "";
  const field = FIELD[variant];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const filtered = q
    ? countries.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()) || c.dial.includes(q.replace(/\s/g, "")))
    : countries;

  const numberPlaceholder = lang === "en" ? "Phone number *" : "Numéro de téléphone *";
  const searchPlaceholder = lang === "en" ? "Search a country…" : "Rechercher un pays…";

  return (
    <div className={`flex gap-2 ${className}`} ref={ref}>
      {/* Sélecteur de pays */}
      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={lang === "en" ? "Country code" : "Indicatif du pays"}
          aria-expanded={open}
          className={`${field} flex items-center gap-2 whitespace-nowrap`}
        >
          <span className={`fi fi-${current.iso.toLowerCase()} shrink-0`} aria-hidden="true" />
          <span>{current.dial}</span>
          <ChevronDown className="h-4 w-4 opacity-60" />
        </button>

        {open && (
          <div className="absolute left-0 z-50 mt-1 max-h-72 w-72 overflow-hidden rounded-sm border border-zinc-700 bg-[#111114] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-zinc-700 bg-[#0B0B0D] px-3 py-2">
              <Search className="h-4 w-4 text-white/40" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
            </div>
            <ul className="max-h-60 overflow-auto" role="listbox">
              {filtered.map((c) => (
                <li key={c.iso}>
                  <button
                    type="button"
                    onClick={() => {
                      setIso(c.iso);
                      setOpen(false);
                      setQ("");
                    }}
                    className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm hover:bg-white/10 ${c.iso === iso ? "bg-white/5" : ""}`}
                  >
                    <span className={`fi fi-${c.iso.toLowerCase()} shrink-0`} aria-hidden="true" />
                    <span className="flex-1 truncate text-white">{c.name}</span>
                    <span className="text-white/50">{c.dial}</span>
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-3 text-sm text-white/40">{lang === "en" ? "No match" : "Aucun résultat"}</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Numéro (obligatoire) */}
      <input
        type="tel"
        inputMode="tel"
        required
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder={numberPlaceholder}
        aria-label={numberPlaceholder}
        className={`${field} flex-1 min-w-0`}
      />

      {/* Valeur transmise au formulaire */}
      <input type="hidden" name="telephone" value={full} />
    </div>
  );
}
