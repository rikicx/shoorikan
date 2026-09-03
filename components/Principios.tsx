"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRINCIPLES } from "@/lib/content";
import { PHOTOS } from "@/lib/images";

export default function Principios() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".principios__kanji",
        { yPercent: 18, scale: 1.08 },
        {
          yPercent: -18,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.to(".principios__bg img", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="principios" id="principios" ref={root}>
      <div className="principios__bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTOS.dojoAula} alt="" loading="lazy" />
      </div>
      <div className="principios__kanji" aria-hidden="true">
        道
      </div>

      <div className="container principios__inner">
        <div className="eyebrow label label--violet">02 — Princípios</div>

        <blockquote className="principios__quote" data-reveal>
          “{PRINCIPLES.quote}”
        </blockquote>
        <div className="principios__quote-author" data-reveal data-reveal-delay="1">
          {PRINCIPLES.quoteAuthor}
        </div>

        <p className="principios__intro" data-reveal data-reveal-delay="2">
          {PRINCIPLES.intro}
        </p>

        <div className="principios__grid">
          {PRINCIPLES.items.map((it, i) => (
            <div
              className="principio"
              key={it.romaji}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <div className="principio__kanji">{it.kanji}</div>
              <div className="principio__romaji">{it.romaji}</div>
              <h3 className="principio__title">{it.title}</h3>
              <p className="principio__text">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
