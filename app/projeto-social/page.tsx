import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import ProjetoSocial from "@/components/ProjetoSocial";

export const metadata: Metadata = {
  title: "Projeto Social",
  description:
    "O Projeto Social Shoorikan leva o judô a crianças da Vila Prudente, em parceria com a ONG Arca do Saber.",
};

export default function ProjetoSocialPage() {
  return (
    <>
      <RevealInit />
      <ProjetoSocial />
    </>
  );
}
