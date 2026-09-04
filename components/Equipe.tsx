import { FOUNDER, TEAM } from "@/lib/content";
import { TEAM_PHOTOS } from "@/lib/images";
import { SITE } from "@/lib/site";
import BackLink from "./BackLink";

export default function Equipe() {
  return (
    <section className="equipe" id="equipe">
      <div className="container">
        <BackLink light />
        <div
          className="eyebrow label"
          style={{ color: "var(--violet-deep)" }}
        >
          05 — Equipe
        </div>

        <div className="founder">
          <figure className="founder__media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FOUNDER.photo}
              alt="Sensei Jairo Andrade, 6º Dan — fundador da Academia Shoorikan"
              loading="lazy"
            />
          </figure>
          <div data-reveal data-reveal-delay="1">
            <div className="founder__role">{FOUNDER.role}</div>
            <h2 className="founder__name">{FOUNDER.name}</h2>
            <p className="founder__bio">{FOUNDER.bio}</p>
          </div>
        </div>

        <div className="eyebrow label" style={{ color: "var(--stone-dim)" }}>
          Corpo técnico
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <article
              className="team-card"
              key={m.name}
              data-reveal
              data-reveal-delay={String((i % 3) + 1)}
            >
              <figure className="team-card__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TEAM_PHOTOS[m.name]}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                />
              </figure>
              <div className="team-card__name">{m.name}</div>
              <div className="team-card__role">{m.role}</div>
              <p className="team-card__bio">{m.bio}</p>
            </article>
          ))}
        </div>

        <p
          data-reveal
          className="team-card__bio"
          style={{ marginTop: "2rem", maxWidth: "60ch" }}
        >
          Academia filiada à {SITE.federation}. Graduações, títulos e fotos
          conforme os materiais oficiais da própria academia.
        </p>
      </div>
    </section>
  );
}
