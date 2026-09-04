import Link from "next/link";
import { NAV } from "@/lib/content";
import { SITE, waLink } from "@/lib/site";
import { LOGO } from "@/lib/images";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="" width={44} height={44} />
            SHOORIKAN<span>{SITE.kanji}</span>
          </div>
          <nav className="footer__nav" aria-label="Rodapé">
            {NAV.map((n) => (
              <Link key={n.id} href={n.route}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Endereço</h4>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.district}
              <br />
              {SITE.address.city} — {SITE.address.state}
              <br />
              CEP {SITE.address.zip}
            </p>
          </div>
          <div className="footer__col">
            <h4>Contato</h4>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              {SITE.phoneDisplay} · WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.instagramHandle}
            </a>
          </div>
          <div className="footer__col">
            <h4>A academia</h4>
            <p>
              Fundada em {SITE.foundedYear}
              <br />
              {SITE.anniversaryLabel}
              <br />
              Filiada à {SITE.federation}
            </p>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {year} {SITE.name}. Todos os direitos reservados.
          </span>
          <span>{SITE.kanji} — {SITE.meaning}</span>
        </div>
      </div>
    </footer>
  );
}
