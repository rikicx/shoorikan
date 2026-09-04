import type { Metadata } from "next";
import RevealInit from "@/components/Reveal";
import Modalidades from "@/components/Modalidades";

export const metadata: Metadata = {
  title: "Modalidades",
  description:
    "Judô, jiu-jitsu e muay thai na Academia Shoorikan — do lúdico das crianças ao alto rendimento.",
};

export default function ModalidadesPage() {
  return (
    <>
      <RevealInit />
      <Modalidades />
    </>
  );
}
