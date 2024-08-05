import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "gradient-dark-start": "#ff7e5f",
        "gradient-dark-end": "#feb47b",
        "gradient-light-start": "#00c6ff",
        "gradient-light-end": "#0072ff",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        shine: {
          "100%": { left: "125%" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        shine: "shine 1s",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to right, theme(colors.gradient-dark-start), theme(colors.gradient-dark-end))",
        "gradient-light":
          "linear-gradient(to right, theme(colors.gradient-light-start), theme(colors.gradient-light-end))",
      },
    },
  },
  plugins: [],
} satisfies Config;
