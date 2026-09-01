"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Leistung = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const leistungen: Leistung[] = [
  {
    title: "Nagelbehandlungen",
    desc: "Richtiges Schneiden der Nägel, Behandlung eingerollter und eingewachsener Nägel, Nagelmykosen und verdickter Nägel.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 20c0-6 1.5-9 4-9s4 3 4 9" />
        <path d="M6 20h12" />
      </svg>
    ),
  },
  {
    title: "Hyperkeratosen",
    desc: "Schonendes Abtragen übermäßiger Hornhaut und Schwielen. Für Füße, die sich wieder leicht anfühlen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 16c4-1 6-4 10-4s6 2 6 4-2 4-6 4-6-3-10-4z" />
        <path d="M8 12c1-2 2-3 4-3" />
      </svg>
    ),
  },
  {
    title: "Clavi & Verrucae",
    desc: "Fachgerechtes Entfernen und Behandeln von Hühneraugen und Warzen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: "Druck- & Reibungsschutz",
    desc: "Individuelle Maßnahmen zur Entlastung schmerzhafter Stellen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h4l3-7 4 14 3-7h2" />
      </svg>
    ),
  },
  {
    title: "Orthonyxie",
    desc: "Anfertigung spezieller Nagelspangen bei eingewachsenen Nägeln.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12c2-4 6-4 8 0s6 4 8 0" />
        <circle cx="4" cy="12" r="1.4" fill="currentColor" />
        <circle cx="20" cy="12" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Orthesentechnik",
    desc: "Anfertigen von langlebigen Druckentlastungen aus Silikon.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 20V8a4 4 0 0 1 8 0v4a2 2 0 0 0 2 2h2v6" />
      </svg>
    ),
  },
  {
    title: "Nagelprothetik",
    desc: "Künstlicher Nagelersatz für ein natürliches, gepflegtes Aussehen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 18c0-6 2-10 4-10s4 4 4 10" />
        <path d="M6 18h12" />
      </svg>
    ),
  },
  {
    title: "Fuß- & Unterschenkel-Massage",
    desc: "Als therapeutische Maßnahme oder zur Steigerung des Wohlbefindens.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 18c3-2 5-6 8-6s5 4 8 6" />
        <path d="M8 10c1-2 2-3 4-3" />
      </svg>
    ),
  },
  {
    title: "Individuelle Beratung",
    desc: "Allgemeine und persönliche Beratung zur Fußgesundheit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6h16v10H8l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    ),
  },
];

export default function LeistungenSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      id="leistungen"
      className="section-shell relative overflow-hidden bg-linen-50 py-32 md:py-40"
    >
      {/* soft background wash that drifts */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-0 h-[120%] opacity-70"
      >
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-100 blur-[120px]" />
        <div className="absolute left-1/4 top-1/3 h-[40vh] w-[40vh] rounded-full bg-copper-50 blur-[100px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <motion.div style={{ y: headlineY }}>
          <p className="eyebrow text-sage-500">Leistungen</p>
          <h2 className="h-display mt-4 max-w-2xl text-[clamp(2rem,5vw,3.6rem)] font-light text-sage-900">
            Alles, was Ihre Füße{" "}
            <em className="not-italic text-copper-400">tragen können.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-sage-700">
            Von der klassischen Nagelbehandlung bis zur Orthonyxie: Jede
            Behandlung wird sorgfältig, schmerzarm und mit Zeit für Sie
            durchgeführt.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l, i) => (
            <motion.article
              key={l.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl liquid-glass p-6 shadow-glass transition-transform duration-500 ease-soft hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-800 text-linen-50">
                  {l.icon}
                </div>
                <span className="eyebrow text-[9px] text-sage-500">
                  0{i + 1}
                </span>
              </div>
              <h3 className="h-display mt-6 text-xl text-sage-900">
                {l.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-sage-700">
                {l.desc}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-soft group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at 30% -10%, rgba(255,255,255,0.55), transparent 40%)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
