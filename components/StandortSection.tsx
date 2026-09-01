"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// PLATZHALTER — Unsplash Stock; bitte durch ein reales Foto vom „Haus der Zukunft" / Eingang im Hof ersetzen.
const IMG =
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2400&q=80";

export default function StandortSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.15]);

  return (
    <section
      ref={ref}
      id="standort"
      className="section-shell relative bg-linen-50"
    >
      <div className="mx-auto grid max-w-[1400px] gap-0 md:grid-cols-2">
        {/* Left: sticky image tile that scales */}
        <div className="relative h-[80vh] md:h-auto">
          <div className="sticky top-0 h-[100svh] overflow-hidden md:h-screen">
            <motion.div
              style={{ y, scale }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={IMG}
                alt="Rundes, ruhiges Gebäude aus der Umgebung der Praxis"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sage-900/40 via-transparent to-transparent" />
            </motion.div>

            {/* address badge */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:max-w-sm">
              <div className="rounded-2xl liquid-glass p-5 shadow-glass">
                <p className="eyebrow text-sage-500">Praxis</p>
                <p className="h-display mt-2 text-xl text-sage-900">
                  Haus der Zukunft
                </p>
                <p className="mt-1 text-sm text-sage-700">
                  Dudweilerstraße 75<br />
                  66111 Saarbrücken
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dudweilerstra%C3%9Fe+75+66111+Saarbr%C3%BCcken"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-sage-800 px-3.5 py-2 text-xs text-linen-50"
                  >
                    Route öffnen
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sage-800/20 px-3.5 py-2 text-xs text-sage-700">
                    Eingang im Hof
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: how to get there */}
        <div className="flex items-center bg-linen-100 px-6 py-24 md:px-14 lg:px-20">
          <div className="w-full">
            <p className="eyebrow text-sage-500">Standort</p>
            <h2 className="h-display mt-4 text-[clamp(1.9rem,4vw,3rem)] font-light text-sage-900">
              Anfahrt &amp; <em className="not-italic text-copper-400">
                Erreichbarkeit
              </em>
            </h2>

            <div className="mt-10 space-y-6">
              <RouteBlock
                iconLabel="Bus"
                title="Busverbindungen"
                lines={[
                  `Haltestelle „Rathaus“ mit Linie 150, 124 oder 104 bis „Haus der Zukunft“.`,
                  "Von dort ca. 50 m auf derselben Straßenseite bis zum Eingang.",
                ]}
              />
              <RouteBlock
                iconLabel="Bahn"
                title="Saarbahn"
                lines={[
                  `Bis Haltestelle „Johannes Kirche“.`,
                  "Von dort in ca. 5 Minuten zu Fuß (ca. 100 m).",
                ]}
              />
              <RouteBlock
                iconLabel="Auto"
                title="Mit dem PKW"
                lines={[
                  "Von Saarbrücken kommend Richtung Dudweiler.",
                  "Am Beethovenplatz linker Hand vorbei zur Kreuzung Dudweilerstraße / Richard-Wagner-Straße.",
                  "Ca. 100 m weiter rechter Hand die Einfahrt.",
                  "Praxiseigene Parkplätze im Hof vorhanden.",
                ]}
              />
            </div>

            <div className="mt-10 rounded-2xl border border-sage-800/10 bg-linen-50 p-5">
              <p className="text-sm text-sage-700">
                <span className="mr-2 inline-block rounded-full bg-copper-400/15 px-2 py-0.5 text-[10px] uppercase tracking-widest text-copper-500">
                  Wichtig
                </span>
                Der Eingang befindet sich im Hof.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteBlock({
  iconLabel,
  title,
  lines,
}: {
  iconLabel: string;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-sage-800 text-[10px] uppercase tracking-widest text-linen-50">
          {iconLabel}
        </div>
        <div className="mt-2 h-full w-px bg-sage-800/12" />
      </div>
      <div>
        <h3 className="h-display text-lg text-sage-900">{title}</h3>
        <ul className="mt-2 space-y-1.5">
          {lines.map((l) => (
            <li key={l} className="text-sm leading-relaxed text-sage-700">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
