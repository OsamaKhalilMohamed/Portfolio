import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Navbar(): React.ReactElement {
  const [currentTab, setCurrentTab] = useState("Home");

  const scrollIntoSection = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    secId: string
  ): void => {
    setCurrentTab(e.currentTarget.innerText);
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sticky top-0 z-[999] box-border flex w-full  justify-center bg-zinc-50 bg-opacity-60 pb-8 pt-4 shadow-sm dark:bg-zinc-950">
      <div className="flex w-5/6 max-w-[1000px] items-center justify-between ">
        <div
          className={`cursor-pointer font-bold hover:opacity-70 ${
            currentTab === "Home"
              ? "border-b-2 border-dotted border-red-400"
              : "border-b-2 border-transparent"
          }`}
          onClick={(e) => scrollIntoSection(e, "home")}
        >
          Home
        </div>
        <div
          className={`cursor-pointer font-bold hover:opacity-70 ${
            currentTab === "Projects"
              ? "border-b-2 border-dotted border-red-400"
              : "border-b-2 border-transparent"
          }`}
          onClick={(e) => scrollIntoSection(e, "about")}
        >
          Projects
        </div>

        <div
          className={`cursor-pointer font-bold hover:opacity-70 ${
            currentTab === "About me"
              ? "border-b-2 border-dotted border-red-400"
              : "border-b-2 border-transparent"
          }`}
          onClick={(e) => scrollIntoSection(e, "about")}
        >
          About me
        </div>
        <div>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}
