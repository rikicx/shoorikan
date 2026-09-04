import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Principios from "@/components/Principios";

export const metadata: Metadata = {
  title: "Princípios",
  description:
    "A filosofia de Jigoro Kano que guia a Academia Shoorikan: Seiryoku Zen'yō, Jita Kyōei e o respeito acima de tudo.",
};

export default function PrincipiosPage() {
  return (
    <>
      <RevealInit />
      <Principios />
    </>
  );
}
