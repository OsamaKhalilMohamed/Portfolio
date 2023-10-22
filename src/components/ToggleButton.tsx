import React from "react";
import { useTheme } from "next-themes";

export default function ToggleButton(): React.ReactElement {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="fixed right-4 top-5 rounded-lg p-2  text-2xl text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
