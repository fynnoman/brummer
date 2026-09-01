"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// PLATZHALTER — Unsplash Stock; bitte durch eigene Fotos ersetzen.
const IMG =
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=80";

const items = [
  "Starke Verhornungen",
  "Hühneraugen",
  "Eingewachsene Nägel",
  "Zu lange Fußnägel",
  "Fußpilz",
  "Diabetiker-Fuß",
];

export default function BeschwerdenSection() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.35]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0.6]
  );

  return (
    <section
      ref={ref}
      className="section-shell relative bg-sage-900 py-32 md:py-40"
    >
      <motion.div
        ref={imgRef}
        style={{ y, scale, opacity }}
        aria-hidden
        className="absolute inset-0 -z-0 overflow-hidden will-change-transform"
      >
        <Image
          src={IMG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900 via-sage-900/60 to-sage-900" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-copper-200">Was uns aufsucht</p>
            <h2 className="h-display mt-4 text-[clamp(2rem,5vw,3.4rem)] font-light text-linen-50">
              Ihre Füße{" "}
              <em className="not-italic text-copper-100">
                leisten Schwerstarbeit.
              </em>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-linen-100/80">
              Tagein, tagaus tragen sie unser gesamtes Körpergewicht. Wenig
              Wunder, dass ein Großteil der Bevölkerung mit verhornten,
              wunden und zum Teil wirklich kranken Füßen herumläuft.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-linen-100/80">
              Abhilfe schafft der erfahrene Podologe: mit Fachwissen,
              schmerzarmen Techniken und der Ruhe, die es dafür braucht.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center gap-4 rounded-2xl liquid-glass-dark px-5 py-4 text-linen-100"
                >
                  <span
                    aria-hidden
                    className="grid h-8 w-8 place-items-center rounded-full bg-copper-400/20 text-copper-100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[0.95rem]">{it}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-3xl border border-linen-50/10 bg-linen-50/5 p-6 backdrop-blur"
            >
              <p className="text-sm leading-relaxed text-linen-100/85">
                <span className="eyebrow mr-2 text-copper-200">Hinweis</span>
                Auch für Risikopatienten wie Diabetiker, Bluter und
                Rheumatiker erfolgt die Behandlung mit besonderer Sorgfalt.
                Bei Bedarf erfolgt eine Überweisung an den Arzt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
