"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// PLATZHALTER — Unsplash Stock; bitte durch eigene Fotos ersetzen.
const IMG =
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2200&q=80";

export default function PodologieSection() {
  const ref = useRef<HTMLElement>(null);

  // Scale-to-background: das Bild wächst und wird zum Hintergrund der Sektion,
  // während man scrollt. Sticky im Inneren, damit es „hängen bleibt".
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [0.7, 1, 1.15]);
  const radius = useTransform(scrollYProgress, [0, 0.55, 1], [48, 24, 0]);
  const brightness = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 0.9, 0.55]
  );
  const filter = useTransform(brightness, (b) => `brightness(${b})`);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [0, 0.35, 0.75]
  );
  const contentY = useTransform(scrollYProgress, [0, 0.55, 1], [80, 0, -60]);

  return (
    <section
      ref={ref}
      id="podologie"
      className="section-shell relative bg-linen-50"
      style={{ minHeight: "170vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius: radius,
            filter,
          }}
          className="absolute inset-4 md:inset-10 will-change-transform overflow-hidden"
        >
          <Image
            src={IMG}
            alt="Ruhige, konzentrierte Behandlung"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-sage-900 via-sage-900/50 to-transparent"
          />
        </motion.div>

        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-8 px-6 py-16 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <p className="eyebrow text-linen-50/80">Podologie</p>
            <h2 className="h-display mt-4 text-[clamp(2rem,5vw,3.6rem)] font-light text-linen-50">
              Die Lehre <em className="text-copper-100 not-italic">vom Fuß.</em>
            </h2>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <div className="rounded-3xl liquid-glass-dark p-6 md:p-8 text-linen-100">
              <p className="text-[1rem] leading-relaxed">
                Podologen führen in Zusammenarbeit mit Ärzten und Kliniken
                fachgerechte, medizinische Behandlungen an den Füßen der
                Patienten durch. Neben vorbeugenden und pflegerischen
                Maßnahmen verantwortet der Podologe spezielle Techniken auch
                für Risikopatienten wie Diabetiker, Bluter und Rheumatiker.
              </p>
              <div className="mt-5 h-px w-full bg-linen-50/15" />
              <p className="mt-5 text-[0.98rem] leading-relaxed text-linen-100/85">
                Er tritt nicht nur handwerklich auf, sondern auch beratend:
                Pflege, Verbandmaterialien, Entlastungsmöglichkeiten,
                Badezusätze. Sein Wissen lässt Fußerkrankungen frühzeitig
                erkennen oder gar nicht erst entstehen.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { k: "20+", v: "Jahre Erfahrung" },
                  { k: "ZFD", v: "Verbandsmitglied" },
                  { k: "1:1", v: "Termine, ruhig" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl bg-linen-50/8 p-4 backdrop-blur"
                  >
                    <div className="h-display text-2xl text-linen-50">
                      {s.k}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-linen-100/70">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
