import { STRUCTURE } from "@/lib/content";
import { GALLERY } from "@/lib/images";

export default function Estrutura() {
  return (
    <section className="estrutura" id="estrutura">
      <div className="container">
        <div
          className="eyebrow label"
          style={{ color: "var(--stone-dim)" }}
        >
          07 — O Dojo
        </div>
        <div className="estrutura__top">
          <h2 data-reveal>{STRUCTURE.lead}</h2>
          <ul className="estrutura__list" data-reveal data-reveal-delay="1">
            {STRUCTURE.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>

        <div className="gallery" data-reveal>
          {GALLERY.map((src, i) => (
            <figure key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Instalações e treinos da Academia Shoorikan"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
