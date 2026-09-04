"use client";

import { useEffect } from "react";
import { waLink } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem",
        textAlign: "center",
        background: "var(--sumi)",
        color: "var(--washi)",
      }}
    >
      <p className="label label--violet">Ops</p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          maxWidth: "20ch",
        }}
      >
        Algo não carregou direito.
      </h1>
      <p style={{ color: "var(--stone)", maxWidth: "44ch" }}>
        Tente novamente — se persistir, chama a gente no WhatsApp que
        resolvemos rapidinho.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button className="btn" onClick={() => reset()}>
          Tentar novamente
          <span className="btn__arrow">→</span>
        </button>
        <a
          className="btn btn--ghost"
          href={waLink("Olá! Encontrei um erro no site da Shoorikan.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Avisar no WhatsApp
        </a>
      </div>
    </div>
  );
}
