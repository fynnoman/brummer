"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#podologie", label: "Podologie" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 20);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    const ids = ["home", "podologie", "leistungen", "standort", "kontakt"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-3 flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ease-soft ${
          scrolled
            ? "liquid-glass shadow-glass"
            : "border border-linen-50/15 bg-sage-900/25 backdrop-blur-md"
        }`}
        style={{
          transform: scrolled ? "translateY(0)" : "translateY(4px)",
        }}
      >
        <a
          href="#home"
          className="group flex items-center gap-2 pl-2 pr-4"
          aria-label="Zur Startseite"
        >
          <span
            aria-hidden
            className={`grid h-8 w-8 place-items-center rounded-full shadow-copper transition-all duration-500 ease-soft group-hover:rotate-[8deg] ${
              scrolled
                ? "bg-sage-500 text-linen-50"
                : "bg-linen-50 text-sage-800"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 14c0-3 1.5-5 4-5s5 2 5 6c0 1.8-1 3-2.5 3S10 17 10 15.5" />
              <circle cx="7" cy="8" r="1.2" fill="currentColor" />
              <circle cx="10" cy="6" r="1.2" fill="currentColor" />
              <circle cx="13" cy="5.5" r="1.2" fill="currentColor" />
              <circle cx="16" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`h-display text-[15px] transition-colors duration-500 ${
                scrolled ? "text-sage-800" : "text-linen-50"
              }`}
            >
              Dominik Brummer
            </span>
            <span
              className={`eyebrow mt-0.5 text-[9px] transition-colors duration-500 ${
                scrolled ? "text-sage-500" : "text-linen-100/80"
              }`}
            >
              Podologie · Saarbrücken
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  scrolled
                    ? "text-sage-700 hover:text-sage-900"
                    : "text-linen-100/90 hover:text-linen-50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ${
                      scrolled ? "bg-sage-800/8" : "bg-linen-50/15"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="tel:+4968196121 93"
          className={`ml-2 hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-500 ease-soft hover:-translate-y-0.5 md:inline-flex ${
            scrolled
              ? "bg-sage-800 text-linen-50"
              : "bg-linen-50 text-sage-900"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
          </svg>
          0681 / 96 12 193
        </a>

        <button
          type="button"
          aria-label="Menü"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-full liquid-glass"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-sage-800 transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-sage-800 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-[1.5px] w-full bg-sage-800 transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-2 w-[min(1180px,calc(100%-1.5rem))] overflow-hidden rounded-3xl md:hidden"
      >
        <div className="liquid-glass shadow-glass p-3">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-sage-800 transition-colors hover:bg-sage-800/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+4968196121 93"
              className="mt-2 rounded-2xl bg-sage-800 px-4 py-3 text-center text-sm text-linen-50"
            >
              0681 / 96 12 193
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
