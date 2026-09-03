"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PHOTOS } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";
import { scrollToId } from "./SmoothScroll";

// B-roll de judô (Pexels, uso livre) — trocar por vídeo próprio da academia quando houver.
const HERO_VIDEO =
  "https://videos.pexels.com/video-files/6766142/6766142-hd_1920_1080_25fps.mp4";

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.15,
      });
      tl.from(".hero__kicker > *", {
        yPercent: 120,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
      })
        .from(
          ".hero__line > span",
          { yPercent: 115, duration: 1.1, stagger: 0.12 },
          "-=0.5",
        )
        .from(
          ".hero__row > *",
          { y: 24, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.7",
        )
        .from(".hero__scroll", { opacity: 0, duration: 0.8 }, "-=0.5");

      if (reduce) return;

      gsap.to(".hero__media", {
        yPercent: 14,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero__inner", {
        yPercent: -12,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero__watermark", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="hero__media">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={PHOTOS.treino}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="hero__scrim" />
      <div className="hero__watermark" aria-hidden="true">
        {SITE.kanji}
      </div>

      <div className="hero__inner">
        <div className="hero__kicker">
          <span className="label">
            Academia de Judô · desde {SITE.foundedYear}
          </span>
          <span className="label label--violet">Vila Mariana · São Paulo</span>
        </div>

        <h1>
          <span className="hero__line">
            <span>O tatame ensina</span>
          </span>
          <span className="hero__line">
            <span>
              para a <em>vida</em>.
            </span>
          </span>
        </h1>

        <div className="hero__row">
          <p className="hero__sub">
            Judô, jiu-jitsu, muay thai e yoga — do primeiro rolamento da
            criança ao alto rendimento do atleta. Trinta anos de tradição,
            técnica e, acima de tudo, respeito, sob a direção do sensei Jairo
            Andrade, 6º Dan.
          </p>
          <a
            className="btn"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agende sua aula experimental
            <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={() => scrollToId("historia")}
        aria-label="Rolar para o conteúdo"
      >
        Role para descobrir
      </button>
    </section>
  );
}
