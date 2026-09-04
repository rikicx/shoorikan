import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Equipe from "@/components/Equipe";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça o sensei Jairo Andrade, 6º Dan, e o corpo técnico da Academia de Judô Shoorikan.",
};

export default function EquipePage() {
  return (
    <>
      <RevealInit />
      <Equipe />
    </>
  );
}
