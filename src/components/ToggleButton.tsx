import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../../public/sun.svg";
import moonIcon from "../../public/moon.svg";

export default function ToggleButton(): React.ReactElement {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Image
      priority
      src={theme === "light" ? moonIcon : sunIcon}
      height={25}
      width={25}
      className="fixed right-4 top-3 cursor-pointer"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      alt="theme switch icon"
    />
  );
}
