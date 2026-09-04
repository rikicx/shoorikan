"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/content";
import BackLink from "./BackLink";

export default function Historia() {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const bar = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!mq.matches || reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const el = track.current!;
      const distance = () =>
        Math.max(0, el.scrollWidth - el.parentElement!.clientWidth);

      const tween = gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + (distance() + window.innerHeight * 0.6),
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current)
              bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="historia" id="historia" ref={root} aria-label="A Shoorikan">
      <div className="historia__inner">
        <div className="historia__head">
          <BackLink />
          <div className="eyebrow label">01 — Legado</div>
          <h2 data-reveal>
            Trinta anos mantendo a tradição do verdadeiro judô.
          </h2>
        </div>

        <div className="historia__viewport">
          <div className="historia__track" ref={track}>
            {TIMELINE.map((item, i) => (
              <article className="tl-card" key={i} data-reveal>
                <span className="tl-card__year">{item.year}</span>
                <h3 className="tl-card__title">{item.title}</h3>
                <p className="tl-card__text">{item.text}</p>
                <span className="tl-card__idx">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(TIMELINE.length).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="historia__progress">
          <div className="historia__progress-bar">
            <span ref={bar} />
          </div>
        </div>
      </div>
    </section>
  );
}
