"use client";

import { useState } from "react";
import { SCHEDULE, SCHEDULE_NOTE, AGE_LEGEND } from "@/lib/content";
import { waLink } from "@/lib/site";

const FILTERS = ["Todas", "Judô", "Jiu-Jitsu", "Muay Thai"] as const;

export default function Horarios() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Todas");

  return (
    <section className="horarios" id="horarios">
      <div className="container">
        <div className="horarios__head">
          <div className="filterbar" role="group" aria-label="Filtrar por modalidade">
            {FILTERS.map((f) => (
              <button
                key={f}
                data-active={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="sched" data-reveal>
          {SCHEDULE.map((d) => (
            <div className="sched__day" key={d.day}>
              <h3>{d.day}</h3>
              {d.slots.map((s, i) => {
                const dim = filter !== "Todas" && s.mod !== filter;
                return (
                  <div className="slot" key={i} data-dim={dim}>
                    <span className="slot__time">{s.time}</span>
                    <span className="slot__title">
                      <b>{s.title}</b>
                      <span className="slot__group">{s.group}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <ul className="sched-legend" data-reveal>
          {AGE_LEGEND.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <p className="sched-note" data-reveal>
          {SCHEDULE_NOTE}
        </p>

        <div style={{ marginTop: "2rem" }} data-reveal>
          <a
            className="btn"
            href={waLink(
              "Olá! Gostaria de confirmar horários e vagas para uma turma na Shoorikan.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar horário e vaga
            <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
