import type { Metadata } from "next";
import Link from "next/link";
import RevealInit from "@/components/Reveal";
import Horarios from "@/components/Horarios";
import { waLink, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Horários das aulas",
  description:
    "Grade de horários da Academia de Judô Shoorikan — judô, jiu-jitsu e muay thai, do Kids ao alto rendimento, sete dias por semana na Vila Mariana.",
};

export default function HorariosPage() {
  return (
    <>
      <RevealInit />

      <section className="subhero">
        <div className="container">
          <Link href="/" className="subhero__back">
            ← Shoorikan
          </Link>
          <div className="eyebrow label label--violet">Horários</div>
          <h1 data-reveal>
            Tatame aberto <em>sete dias</em> por semana.
          </h1>
          <p className="subhero__lead" data-reveal data-reveal-delay="1">
            Judô, jiu-jitsu e muay thai em vários horários — do primeiro contato
            das crianças ao treino de alto rendimento. Escolha a faixa que
            combina com a sua rotina e a da sua família.
          </p>
          <div className="subhero__cta" data-reveal data-reveal-delay="2">
            <a
              className="btn"
              href={waLink(
                "Olá! Quero saber sobre horários e vagas para começar na Shoorikan.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
              <span className="btn__arrow">→</span>
            </a>
            <span className="subhero__addr">{SITE.address.full}</span>
          </div>
        </div>
      </section>

      <Horarios />
    </>
  );
}
