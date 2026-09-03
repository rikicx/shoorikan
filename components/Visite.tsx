import Link from "next/link";
import { SITE, waLink, mapsEmbed } from "@/lib/site";

export default function Visite() {
  return (
    <section className="visite" id="visite">
      <div className="container">
        <div className="visite__grid">
          <div>
            <div className="eyebrow label" style={{ color: "var(--stone-dim)" }}>
              09 — Visite
            </div>
            <h2 data-reveal>Venha conhecer o tatame.</h2>
            <p className="visite__lead" data-reveal data-reveal-delay="1">
              A primeira aula é uma conversa e um treino. Traga roupa
              confortável — o resto a gente empresta.
            </p>
            <div className="visite__cta" data-reveal data-reveal-delay="2">
              <a
                className="btn"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar no WhatsApp
                <span className="btn__arrow">→</span>
              </a>
              <a
                className="btn btn--ghost"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <dl className="info-list" data-reveal data-reveal-delay="1">
            <div>
              <dt>Endereço</dt>
              <dd>
                {SITE.address.street}
                <br />
                {SITE.address.district}, {SITE.address.city} — {SITE.address.state}
                <br />
                CEP {SITE.address.zip}
              </dd>
            </div>
            <div>
              <dt>Telefone · WhatsApp</dt>
              <dd>
                <a
                  className="ulink"
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a
                  className="ulink"
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.instagramHandle}
                </a>
                <br />
                <a
                  className="ulink"
                  href={SITE.storeInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.storeHandle} — loja
                </a>
              </dd>
            </div>
            <div>
              <dt>Horários</dt>
              <dd>
                <Link className="ulink" href="/horarios">
                  Ver a grade completa de aulas →
                </Link>
              </dd>
            </div>
            <div>
              <dt>Federação</dt>
              <dd>{SITE.federation}</dd>
            </div>
          </dl>
        </div>

        <div className="map" data-reveal>
          <iframe
            src={mapsEmbed}
            title="Mapa — Academia de Judô Shoorikan, Vila Mariana"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
