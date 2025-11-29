import type { Config } from "tailwindcss";

const tasheliConfig: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#e1a957", // Menada referansındaki o tatlı altın rengi
          500: "#d49b4a",
        },
        dark: {
          900: "#0b0b0b", // Derin siyah arka plan
          800: "#1a1a1a",
        },
      },
      fontFamily: {
        serif: ["var(--font-abril)", "serif"], // Başlıklar için
        sans: ["var(--font-lato)", "sans-serif"], // Metinler için
      },
    },
  },
  plugins: [],
};

export default tasheliConfig;