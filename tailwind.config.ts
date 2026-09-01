import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // warm bone / linen base
        linen: {
          50: "#FBF8F3",
          100: "#F5EFE5",
          200: "#EAE1D0",
          300: "#DACDB4",
          400: "#C4B191",
        },
        // soft sage / clinical calm
        sage: {
          50: "#EFF3EF",
          100: "#D9E3DC",
          200: "#B0C4B4",
          300: "#83A28C",
          400: "#5C806A",
          500: "#3F6551",
          600: "#325142",
          700: "#284134",
          800: "#1B2D24",
          900: "#0F1A15",
        },
        // muted copper accent
        copper: {
          50: "#FBEFE4",
          100: "#F0D6B9",
          200: "#E1B58A",
          300: "#CB915C",
          400: "#AC7440",
          500: "#8B5A30",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "brand-tight": "-0.02em",
        "brand-wide": "0.24em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.55) inset, 0 20px 60px -18px rgba(27,45,36,0.25), 0 0 0 1px rgba(27,45,36,0.06)",
        glassDark:
          "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 24px 70px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
        copper: "0 12px 34px -12px rgba(172,116,64,0.55)",
      },
      backdropBlur: {
        xs: "6px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
