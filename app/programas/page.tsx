import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Programas from "@/components/Programas";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Turmas da Academia Shoorikan para cada fase da vida: Kids I e II, Infantil, Juvenil, Adultos e Alto Rendimento.",
};

export default function ProgramasPage() {
  return (
    <>
      <RevealInit />
      <Programas />
    </>
  );
}
