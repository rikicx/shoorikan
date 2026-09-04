import RevealInit from "@/components/Reveal";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Historia from "@/components/Historia";
import Principios from "@/components/Principios";
import Modalidades from "@/components/Modalidades";
import Programas from "@/components/Programas";
import Equipe from "@/components/Equipe";
import ProjetoSocial from "@/components/ProjetoSocial";
import Estrutura from "@/components/Estrutura";
import Visite from "@/components/Visite";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE.name,
  description:
    "Academia de judô fundada em 1996, na Vila Mariana, São Paulo. Judô, jiu-jitsu e muay thai.",
  url: SITE.currentSite,
  telephone: "+55 11 98888-4324",
  sameAs: [SITE.instagram, SITE.storeInstagram, SITE.currentSite],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.district,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "BR",
  },
  foundingDate: "1996",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealInit />
      <Hero />
      <Manifesto />
      <Historia />
      <Principios />
      <Modalidades />
      <Programas />
      <Equipe />
      <ProjetoSocial />
      <Estrutura />
      <Visite />
    </>
  );
}
