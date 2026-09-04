import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Estrutura from "@/components/Estrutura";

export const metadata: Metadata = {
  title: "O Dojo",
  description:
    "Conheça o espaço da Academia Shoorikan: instalações modernas, tatames dedicados e vestiários masculino e feminino, na Vila Mariana.",
};

export default function EstruturaPage() {
  return (
    <>
      <RevealInit />
      <Estrutura />
    </>
  );
}
