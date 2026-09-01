export default function Footer() {
  return (
    <footer
      id="impressum"
      className="relative bg-linen-100 pt-16 pb-10 text-sage-800"
    >
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-12 border-t border-sage-800/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-800 text-linen-50">
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
              <div>
                <p className="h-display text-lg text-sage-900">
                  Dominik Brummer
                </p>
                <p className="eyebrow text-[9px] text-sage-500">
                  Podologie · Saarbrücken
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sage-700">
              Mitglied im Zentralverband der Podologen und Fußpfleger
              Deutschland. Wissen worauf Sie stehen.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-sage-500">Praxis</p>
            <p className="mt-4 text-sm leading-relaxed text-sage-800">
              Dudweilerstr. 75<br />
              66111 Saarbrücken
            </p>
            <a
              href="tel:+4968196121 93"
              className="mt-3 inline-block text-sm text-sage-800 underline underline-offset-4 hover:text-sage-900"
            >
              0681 / 96 12 193
            </a>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-sage-500">Impressum</p>
            <p className="mt-4 text-sm leading-relaxed text-sage-700">
              Inhaltlich verantwortlich für diese Website ist{" "}
              <span className="text-sage-900">Dominik Brummer</span>,
              Dudweilerstr. 75, 66111 Saarbrücken.
            </p>
            <p className="mt-4 text-xs text-sage-500">
              Termine nach Vereinbarung.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-sage-800/10 pt-6 text-[11px] text-sage-500 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Dominik Brummer · Podologie
          </p>
          <p>
            Website nach den Vorgaben der DSGVO gestaltet.
          </p>
        </div>
      </div>
    </footer>
  );
}
