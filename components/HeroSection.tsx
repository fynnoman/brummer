"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// PLATZHALTER — Unsplash Stock; bitte durch eigene Praxis-/Fotos ersetzen.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=80";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      id="home"
      className="section-shell relative flex min-h-[100svh] items-end overflow-hidden bg-linen-100 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <Image
          src={HERO_IMAGE}
          alt="Ruhige Fußpflege-Behandlung"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* base tint darkens the whole photo so text stays legible */}
        <div className="absolute inset-0 bg-sage-900/55" />
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 bg-gradient-to-br from-sage-900 via-sage-900/60 to-sage-800/40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sage-900/85 via-sage-900/25 to-sage-900/45" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 55%, rgba(20,35,29,0.55), transparent 60%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
        <motion.div style={{ y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-linen-50/85"
          >
            Podologische Praxis · Saarbrücken
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-display mt-5 text-[clamp(2.6rem,7vw,5.6rem)] font-light text-linen-50"
          >
            Wissen worauf
            <br />
            <span className="italic text-copper-100">Sie stehen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-linen-50/85"
          >
            Fachgerechte, schmerzarme Behandlung Ihrer Füße. Ruhig,
            sorgfältig und mit Erfahrung. Mitten in Saarbrücken.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="tel:+4968196121 93"
              className="group inline-flex items-center gap-2 rounded-full bg-linen-50 px-6 py-3.5 text-sm font-medium text-sage-900 transition-transform duration-500 ease-soft hover:-translate-y-0.5"
            >
              Termin anfragen
              <span
                aria-hidden
                className="grid h-6 w-6 place-items-center rounded-full bg-sage-800 text-linen-50 transition-transform duration-500 ease-soft group-hover:translate-x-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full liquid-glass px-6 py-3.5 text-sm text-linen-50"
            >
              Leistungen ansehen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-linen-50/50" />
            <p className="text-xs text-linen-50/70">
              Mitglied im Zentralverband der Podologen und Fußpfleger
              Deutschland
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-linen-50/60">
          <span className="eyebrow text-[9px]">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-linen-50/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
