"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";
import { SITE, waLink } from "@/lib/site";
import { LOGO } from "@/lib/images";
import { scrollToId } from "./SmoothScroll";

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll-spy só para as seções que vivem na própria home
  // (História, Princípios, Modalidades, Programas).
  useEffect(() => {
    if (!onHome) return;
    const ids = NAV.filter((n) => !n.route).map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  const isActive = (item: (typeof NAV)[number]) =>
    item.route ? pathname === item.route : onHome && active === item.id;

  const renderLink = (item: (typeof NAV)[number], closeOnClick?: boolean) => {
    const active = isActive(item);
    const activeAttr = active ? "true" : undefined;

    if (item.route) {
      return (
        <Link
          href={item.route}
          data-active={activeAttr}
          aria-current={active ? "page" : undefined}
          onClick={closeOnClick ? () => setOpen(false) : undefined}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        href={onHome ? `#${item.id}` : `/#${item.id}`}
        data-active={activeAttr}
        onClick={(e) => {
          if (!onHome) return; // deixa o navegador ir para /#id
          e.preventDefault();
          if (closeOnClick) setOpen(false);
          window.setTimeout(() => scrollToId(item.id), closeOnClick ? 260 : 0);
        }}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <Link
          className="brand"
          href="/"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              scrollToId("inicio");
            }
          }}
          aria-label="Shoorikan — início"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand__logo"
            src={LOGO}
            alt=""
            width={34}
            height={34}
          />
          <span className="brand__mark">SHOORIKAN</span>
          <span className="brand__kanji">{SITE.kanji}</span>
        </Link>

        <nav className="nav" aria-label="Principal">
          <ul className="nav__list">
            {NAV.map((item) => (
              <li key={item.id}>{renderLink(item)}</li>
            ))}
          </ul>

          <a
            className="nav__cta"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Aula experimental
          </a>

          <button
            className={`burger${open ? " burger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`}>
        {NAV.map((item) => (
          <span key={item.id} className="mobile-nav__item">
            {renderLink(item, true)}
          </span>
        ))}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Aula experimental
        </a>
        <div className="mobile-nav__foot">
          {SITE.address.street}
          <br />
          {SITE.address.district}, {SITE.address.city} — {SITE.address.state}
          <br />
          {SITE.phoneDisplay}
        </div>
      </div>
    </>
  );
}
