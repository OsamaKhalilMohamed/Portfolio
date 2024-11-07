import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../../public/sun.svg";
import moonIcon from "../../public/moon.svg";

export default function ToggleButton(): React.ReactElement {
  const { systemTheme, theme, setTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState("");

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    setImageSrc(currentTheme === "light" ? moonIcon : sunIcon);
  }, [currentTheme]);

  return (
    <>
      {imageSrc && (
        <Image
          src={imageSrc}
          height={22}
          width={22}
          className="transform cursor-pointer transition duration-150 hover:scale-90 active:scale-75"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          alt="theme switch icon"
        />
      )}
    </>
  );
}
