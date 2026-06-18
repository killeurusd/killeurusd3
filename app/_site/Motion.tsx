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
    const vh = window.innerHeight || document.documentElement.clientHeight || 0;

    // Cas où l'observation est impossible (pas d'IO, ou viewport inconnu) → tout visible.
    // NB : on NE court-circuite PAS "réduire les animations" — le CSS gère alors un simple
    // fondu (sans mouvement), donc on laisse l'IO déclencher la révélation normalement.
    if (!("IntersectionObserver" in window) || vh === 0) {
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

    // Révèle d'emblée ce qui est déjà à l'écran ; observe le reste (révélé au scroll).
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
      else io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  // Halo qui suit la souris : met à jour --mx/--my sur la carte .card-rise survolée.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement)?.closest?.(".card-rise") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}

