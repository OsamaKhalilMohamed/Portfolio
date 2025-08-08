import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ".swiper-slide"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        arefRuqaa: ["var(--font-aref-ruqaa)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
