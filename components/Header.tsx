"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";
import { SITE, waLink } from "@/lib/site";
import { LOGO } from "@/lib/images";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Shoorikan — início">
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
            {NAV.map((item) => {
              const active = pathname === item.route;
              return (
                <li key={item.id}>
                  <Link
                    href={item.route}
                    data-active={active ? "true" : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
        {NAV.map((item) => {
          const active = pathname === item.route;
          return (
            <span key={item.id} className="mobile-nav__item">
              <Link
                href={item.route}
                data-active={active ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </span>
          );
        })}
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
