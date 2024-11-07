import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        arefRuqaa: ["var(--font-aref-ruqaa)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
