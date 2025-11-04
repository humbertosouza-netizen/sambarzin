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
          black: "#000000", // Preto (fundo/parede)
          yellow: "#FFD700", // Amarelo vibrante (título SAMBA, destaques)
          orange: "#FF6B35", // Laranja queimado (ornamentos indígenas/traços)
          white: "#FFFFFF", // Branco (textos secundários)
          red: "#DC2626", // Vermelho (detalhes, destaque FERIADO e setinhas)
          gray: "#6B7280", // Cinza (textura do fundo e fumaça/luz)
          cream: "#FEFCE8", // Mantido para compatibilidade
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

