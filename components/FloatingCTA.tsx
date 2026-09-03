"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setShow(y > window.innerHeight * 0.9 && y < max - 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`floating-cta${show ? " floating-cta--show" : ""}`}
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      Aula experimental
      <span aria-hidden="true">→</span>
    </a>
  );
}
