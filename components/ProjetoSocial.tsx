import { SOCIAL } from "@/lib/content";
import { PHOTOS } from "@/lib/images";
import { waLink } from "@/lib/site";

export default function ProjetoSocial() {
  return (
    <section className="social" id="projeto-social">
      <div className="social__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTOS.kidsTreino} alt="" loading="lazy" />
      </div>

      <div className="container social__inner">
        <div className="eyebrow label label--violet">06 — Projeto Social</div>

        <p className="social__lead" data-reveal>
          {SOCIAL.lead}
        </p>

        <div className="social__body">
          {SOCIAL.paragraphs.map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={String((i % 3) + 1)}>
              {p}
            </p>
          ))}
        </div>

        <div className="social__transp" data-reveal>
          <span className="label label--violet">Transparência</span>
          <ul>
            {SOCIAL.transparency.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <small>{SOCIAL.transparencyNote}</small>
        </div>

        <div style={{ marginTop: "2.5rem" }} data-reveal>
          <a
            className="btn"
            href={waLink(
              "Olá! Gostaria de apoiar o Projeto Social da Shoorikan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero apoiar o projeto
            <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
