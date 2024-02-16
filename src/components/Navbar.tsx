import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Navbar(): React.ReactElement {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (ref.current) {
        if (currentScrollPos < prevScrollPos) {
          ref.current.style.position = "sticky";
          ref.current.style.top = "0px";
          ref.current.style.transition = "all 0.5s";
        } else {
          ref.current.style.position = "";
          ref.current.style.top = "";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollIntoSection = (secId: string): void => {
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={ref}
      className="z-[999] box-border flex w-full justify-center bg-zinc-50 bg-opacity-60 pb-8 pt-4 shadow-sm dark:bg-zinc-950"
    >
      <div className="flex w-5/6 max-w-[1000px] items-center justify-between ">
        <button
          className={`cursor-pointer font-bold hover:opacity-70 `}
          onClick={() => scrollIntoSection("home")}
        >
          Home
        </button>
        <button className={`cursor-pointer font-bold hover:opacity-70 `}>
          Projects
        </button>

        <button
          className={`cursor-pointer font-bold hover:opacity-70 `}
          onClick={() => scrollIntoSection("about")}
        >
          About me
        </button>
        <div>
          <ToggleButton />
        </div>
      </div>
    </nav>
  );
}
