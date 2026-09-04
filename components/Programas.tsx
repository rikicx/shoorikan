"use client";

import { useState } from "react";
import Link from "next/link";
import { PROGRAMS } from "@/lib/content";
import { waLink } from "@/lib/site";
import ProgramIcon from "./ProgramIcon";

export default function Programas() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (tag: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });

  return (
    <section className="programas" id="programas">
      <div className="container programas__head">
        <div className="eyebrow label label--violet">04 — Programas</div>
        <h2 data-reveal>Uma turma para cada fase da vida.</h2>
      </div>

      <div className="container">
        <div className="prog-grid">
          {PROGRAMS.map((p) => {
            const isOpen = open.has(p.tag);
            return (
              <div
                className={`prog-card${isOpen ? " prog-card--open" : ""}`}
                key={p.tag}
                data-reveal
              >
                <button
                  type="button"
                  className="prog-card__summary"
                  onClick={() => toggle(p.tag)}
                  aria-expanded={isOpen}
                >
                  <ProgramIcon tag={p.tag} />
                  <span className="prog-card__meta">
                    <span className="prog-card__tag">{p.tag}</span>
                    <span className="prog-card__age">{p.age}</span>
                  </span>
                  <span className="prog-card__chev" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  className="prog-card__body"
                  style={{ maxHeight: isOpen ? "320px" : "0px" }}
                >
                  <div className="prog-card__bodyInner">
                    <h3 className="prog-card__title">{p.title}</h3>
                    <p className="prog-card__text">{p.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p
          data-reveal
          style={{ marginTop: "2.5rem" }}
          className="prog-row__text"
        >
          <Link
            className="ulink"
            style={{ color: "var(--violet-hi)" }}
            href="/horarios"
          >
            Ver os horários de cada turma →
          </Link>
          {"  ·  "}
          Não sabe por onde começar?{" "}
          <a
            className="ulink"
            style={{ color: "var(--violet-hi)" }}
            href={waLink(
              "Olá! Gostaria de ajuda para escolher a turma ideal na Shoorikan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            A gente te orienta pelo WhatsApp.
          </a>
        </p>
      </div>
    </section>
  );
}
