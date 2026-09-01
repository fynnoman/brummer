"use client";

import { motion } from "framer-motion";

export default function KontaktSection() {
  return (
    <section
      id="kontakt"
      className="section-shell relative overflow-hidden bg-sage-900 py-32 md:py-40"
    >
      {/* soft light bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(224,181,138,0.18), transparent 55%), radial-gradient(circle at 20% 80%, rgba(176,196,180,0.18), transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-copper-200">Kontakt</p>
            <h2 className="h-display mt-4 text-[clamp(2.2rem,6vw,4.4rem)] font-light text-linen-50">
              Haben Sie{" "}
              <em className="not-italic text-copper-100">Fragen?</em>
            </h2>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-linen-100/80">
              Rufen Sie mich einfach an. Termine nach Vereinbarung, damit für
              Ihre Behandlung genügend Zeit bleibt.
            </p>

            <motion.a
              href="tel:+4968196121 93"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group mt-10 inline-flex items-center gap-4 rounded-full liquid-glass-dark px-6 py-4 text-linen-50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-copper-400/25 text-copper-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] uppercase tracking-[0.24em] text-linen-100/60">
                  Telefon
                </span>
                <span className="h-display text-2xl">0681 / 96 12 193</span>
              </span>
              <span
                aria-hidden
                className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-linen-50 text-sage-900 transition-transform duration-500 ease-soft group-hover:translate-x-1"
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </motion.a>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-3xl liquid-glass-dark p-8 text-linen-100">
              <h3 className="h-display text-xl text-linen-50">
                Zur E‑Mail‑Adresse
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-linen-100/80">
                Liebe Patientinnen und Patienten und alle die es noch werden
                wollen: Derzeit ist keine E‑Mail‑Adresse hinterlegt, da die
                Webseite nach den Vorschriften der DSGVO überarbeitet wird.
              </p>

              <div className="mt-6 h-px w-full bg-linen-50/12" />

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-[9px] text-linen-100/60">
                    Termine
                  </p>
                  <p className="mt-2 text-[0.95rem] text-linen-100/90">
                    Nach Vereinbarung
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[9px] text-linen-100/60">
                    Praxis
                  </p>
                  <p className="mt-2 text-[0.95rem] text-linen-100/90">
                    Dudweilerstr. 75<br />
                    66111 Saarbrücken
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-linen-50/10 bg-linen-50/5 p-4">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-linen-50/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-linen-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.5 6.5L22 10l-5 5 1 7-6-3-6 3 1-7-5-5 6.5-1.5z" />
                  </svg>
                </span>
                <p className="text-xs leading-relaxed text-linen-100/80">
                  Mitglied im Zentralverband der Podologen und Fußpfleger
                  Deutschland (ZFD).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
