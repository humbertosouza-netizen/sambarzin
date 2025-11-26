import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        samba: {
          primary: "#D4A857", // Dourado principal
          primaryDark: "#B27F30", // Dourado escuro
          primaryLight: "#F3C97A", // Dourado claro
          black: "#000000", // Preto
          blackSoft: "#0D0D0F", // Preto suave
          smokeGray: "#1A1A1D", // Cinza fumaça
          white: "#FFFFFF", // Branco
          whiteSoft: "#F5F5F5", // Branco suave
          // Mantidos para compatibilidade (serão substituídos gradualmente)
          yellow: "#D4A857",
          orange: "#F3C97A",
          red: "#D4A857",
          gray: "#1A1A1D",
          cream: "#F5F5F5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        swing: "swing 0.6s ease-in-out",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.9",
            transform: "scale(1.02)",
          },
        },
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(3deg)" },
          "75%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

