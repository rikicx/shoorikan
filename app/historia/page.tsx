import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Historia from "@/components/Historia";

export const metadata: Metadata = {
  title: "História",
  description:
    "A história da Academia de Judô Shoorikan: do antigo Yamasaki Judô Clube, em 1996, aos 30 anos de tradição em 2026.",
};

export default function HistoriaPage() {
  return (
    <>
      <RevealInit />
      <Historia />
    </>
  );
}
