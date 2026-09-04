import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Visite from "@/components/Visite";

export const metadata: Metadata = {
  title: "Visite",
  description:
    "Endereço, telefone e como agendar uma aula experimental na Academia de Judô Shoorikan, na Vila Mariana, São Paulo.",
};

export default function VisitePage() {
  return (
    <>
      <RevealInit />
      <Visite />
    </>
  );
}
