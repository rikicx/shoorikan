"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "./SmoothScroll";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${show ? " back-to-top--show" : ""}`}
      onClick={scrollToTop}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      aria-label="Voltar ao topo"
    >
      <span aria-hidden="true">↑</span>
      <span className="back-to-top__label">Voltar ao topo</span>
    </button>
  );
}
