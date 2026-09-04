import Link from "next/link";
import { PROGRAMS } from "@/lib/content";
import { waLink } from "@/lib/site";
import BackLink from "./BackLink";

export default function Programas() {
  return (
    <section className="programas" id="programas">
      <div className="container programas__head">
        <BackLink />
        <div className="eyebrow label label--violet">04 — Programas</div>
        <h2 data-reveal>Uma turma para cada fase da vida.</h2>
      </div>

      <div className="container">
        {PROGRAMS.map((p, i) => (
          <div className="prog-row" key={p.tag} data-reveal>
            <div className="prog-row__meta">
              <span className="prog-row__tag">{p.tag}</span>
              <span className="prog-row__age">{p.age}</span>
            </div>
            <h3 className="prog-row__title">{p.title}</h3>
            <p className="prog-row__text">{p.text}</p>
          </div>
        ))}

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
