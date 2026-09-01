import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dominik Brummer · Podologie in Saarbrücken",
  description:
    "Podologische Praxis Dominik Brummer in Saarbrücken. Medizinische Fußpflege, Nagelbehandlungen, Orthonyxie, Diabetiker-Behandlung. Mitglied im Zentralverband der Podologen.",
  openGraph: {
    title: "Dominik Brummer · Podologie",
    description:
      "Podologische Praxis in Saarbrücken. Wissen worauf Sie stehen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
