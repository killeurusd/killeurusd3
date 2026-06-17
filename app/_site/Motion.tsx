"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Active les animations de révélation : ajoute `js` sur <html>, puis `is-visible`
// sur chaque [data-reveal] / [data-reveal-stagger] quand il entre à l'écran.
// Respecte « réduire les animations ». Re-scanne à chaque changement de page.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]")
    ).filter((el) => !el.classList.contains("is-visible"));

    const reveal = (el: Element) => el.classList.add("is-visible");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vh = window.innerHeight || document.documentElement.clientHeight || 0;

    // Cas dégradés : pas d'IO, mouvement réduit, ou viewport inconnu → tout visible.
    if (reduce || !("IntersectionObserver" in window) || vh === 0) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Révèle d'emblée ce qui est déjà à l'écran ; observe le reste.
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
      else io.observe(el);
    });

    // Filet de sécurité : rien ne doit JAMAIS rester caché si l'IO échoue.
    const failsafe = window.setTimeout(() => els.forEach(reveal), 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
