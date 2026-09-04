import Link from "next/link";
import { SITE_PAGES } from "@/lib/content";

export default function SiteIndex() {
  return (
    <section className="siteindex" aria-label="Explore a Shoorikan">
      <div className="container">
        <div className="siteindex__head">
          <div className="eyebrow label">Explore a Shoorikan</div>
          <h2 data-reveal>Tudo sobre a academia, em detalhe.</h2>
        </div>

        <div className="siteindex__grid">
          {SITE_PAGES.map((p, i) => (
            <Link
              href={p.href}
              key={p.href}
              className="siteindex__item"
              data-reveal
              data-reveal-delay={String((i % 5) + 1)}
            >
              <span className="siteindex__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="siteindex__body">
                <span className="siteindex__title">{p.title}</span>
                <span className="siteindex__desc">{p.desc}</span>
              </span>
              <span className="siteindex__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
