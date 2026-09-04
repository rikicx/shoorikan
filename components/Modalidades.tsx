import { MODALITIES } from "@/lib/content";
import { waLink } from "@/lib/site";

export default function Modalidades() {
  return (
    <section className="modalidades" id="modalidades">
      <div className="container">
        <div className="modalidades__head">
          <div>
            <div className="eyebrow label">03 — Modalidades</div>
            <h2 data-reveal>Três caminhos, um mesmo dojo.</h2>
          </div>
          <a
            className="ulink label"
            href={waLink(
              "Olá! Gostaria de saber mais sobre as modalidades da Shoorikan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a recepção →
          </a>
        </div>

        <div className="mod-stack">
          {MODALITIES.map((m, i) => (
            <article className="mod-card" key={m.id} id={m.id}>
              <div className="mod-card__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.photo}
                  alt={`${m.name} na Academia Shoorikan`}
                  loading="lazy"
                />
              </div>
              <div className="mod-card__body">
                <span className="mod-card__index">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(MODALITIES.length).padStart(2, "0")}
                </span>
                <div>
                  <div className="mod-card__kanji" aria-hidden="true">
                    {m.kanji}
                  </div>
                  <h3 className="mod-card__name">{m.name}</h3>
                  <p className="mod-card__lead">{m.lead}</p>
                  <p className="mod-card__text">{m.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
