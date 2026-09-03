import { MANIFESTO, INTRO_PARAGRAPH, FACTS } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function Manifesto() {
  return (
    <section className="section manifesto" aria-label="Manifesto">
      <div className="container">
        <div className="manifesto__grid">
          <div className="manifesto__lines">
            <div className="eyebrow label">{SITE.kanji} · Shoorikan</div>
            {MANIFESTO.map((line, i) => (
              <p
                key={i}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className={i === 2 ? "is-hot" : undefined}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="manifesto__aside">
            <p data-reveal>{INTRO_PARAGRAPH}</p>
            <p data-reveal data-reveal-delay="1">
              <strong>Somos filiados à {SITE.federation}.</strong>
            </p>
          </div>
        </div>

        <dl className="facts">
          {FACTS.map((f, i) => (
            <div
              key={f.value}
              data-reveal
              data-reveal-delay={String((i % 5) + 1)}
            >
              <dt className="fact__value">{f.value}</dt>
              <dd className="fact__label">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
