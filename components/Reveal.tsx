"use client";

import { useEffect } from "react";

/**
 * Observa todos os elementos [data-reveal] e adiciona .is-in quando entram
 * na viewport. Combina IntersectionObserver com uma checagem no scroll para
 * cobrir também saltos programáticos (navegação por âncora / Lenis).
 */
export default function RevealInit() {
  useEffect(() => {
    const targets = new Set(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!targets.size) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      targets.forEach((t) => t.classList.add("is-in"));
      return;
    }

    const reveal = (el: HTMLElement) => {
      el.classList.add("is-in");
      targets.delete(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    targets.forEach((t) => io.observe(t));

    // Fallback por scroll — cobre saltos de âncora e navegadores teimosos
    let ticking = false;
    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      targets.forEach((t) => {
        const r = t.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) reveal(t);
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Checagem inicial (caso a página carregue já rolada, via hash)
    const t0 = window.setTimeout(check, 200);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t0);
    };
  }, []);

  return null;
}
