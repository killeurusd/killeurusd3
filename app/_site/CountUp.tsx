"use client";

import { useEffect, useRef, useState } from "react";

// Compteur animé : compte de 0 à `end` quand il entre à l'écran.
// SSR/sans-JS : affiche directement la valeur finale (pas de "0" pour le SEO).
export default function CountUp({
  end,
  duration = 1400,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(end); // valeur finale par défaut (SSR correct)
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // on garde la valeur finale, sans animation

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setVal(end * eased);
        if (p < 1) requestAnimationFrame(step);
        else setVal(end);
      };
      requestAnimationFrame(step);
    };

    const vh = window.innerHeight || 0;
    const aboveFold = el.getBoundingClientRect().top < vh * 0.9;
    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }
    if (aboveFold) {
      setVal(0);
      run();
      return;
    }
    // En dessous de la ligne de flottaison : on remet à 0 (invisible) puis on anime à l'entrée.
    setVal(0);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { run(); io.disconnect(); } }),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {prefix}
      {Math.round(val)}
      {suffix}
    </span>
  );
}
