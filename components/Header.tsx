"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, NAV_ANCHORS } from "@/lib/content";
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

  // Scroll-spy só para as seções-âncora da home (submenu de Início).
  useEffect(() => {
    if (!onHome) return;
    const sections = NAV_ANCHORS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
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

  const renderPageLink = (
    item: (typeof NAV)[number],
    closeOnClick?: boolean,
  ) => {
    const isActive = pathname === item.route;
    return (
      <Link
        href={item.route!}
        data-active={isActive ? "true" : undefined}
        aria-current={isActive ? "page" : undefined}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );
  };

  const renderAnchorLink = (
    item: (typeof NAV_ANCHORS)[number],
    closeOnClick?: boolean,
  ) => {
    const isActive = onHome && active === item.id;
    return (
      <a
        href={onHome ? `#${item.id}` : `/#${item.id}`}
        data-active={isActive ? "true" : undefined}
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
      <header
        className={`header${!onHome || scrolled ? " header--scrolled" : ""}`}
      >
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
            <li className="nav__item nav__item--home">
              <Link
                href="/"
                data-active={onHome ? "true" : undefined}
                aria-current={onHome ? "page" : undefined}
              >
                Início
                <span className="nav__caret" aria-hidden="true">
                  ⌄
                </span>
              </Link>
              <ul className="nav__dropdown">
                {NAV_ANCHORS.map((item) => (
                  <li key={item.id}>{renderAnchorLink(item)}</li>
                ))}
              </ul>
            </li>
            {NAV.map((item) => (
              <li key={item.id}>{renderPageLink(item)}</li>
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
        <span className="mobile-nav__item">
          <Link
            href="/"
            data-active={onHome ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            Início
          </Link>
        </span>
        <div className="mobile-nav__sub">
          {NAV_ANCHORS.map((item) => (
            <span key={item.id} className="mobile-nav__subitem">
              {renderAnchorLink(item, true)}
            </span>
          ))}
        </div>
        {NAV.map((item) => (
          <span key={item.id} className="mobile-nav__item">
            {renderPageLink(item, true)}
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
