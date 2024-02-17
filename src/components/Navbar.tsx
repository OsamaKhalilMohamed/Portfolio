import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";
import Link from "next/link";

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

  return (
    <nav
      ref={ref}
      className="z-[999] box-border flex w-full justify-center bg-zinc-50 bg-opacity-60 pb-8 pt-4 shadow-sm dark:bg-zinc-950"
    >
      <div className="flex w-5/6 max-w-[1000px] items-center justify-between ">
        <button className={`cursor-pointer font-bold hover:opacity-70 `}>
          <Link href="/" scroll>
            <span>
              {" "}
              <span className="text-amber-600 dark:text-amber-100">
                0.{" "}
              </span>{" "}
              Home
            </span>
          </Link>
        </button>
        <button className={`cursor-pointer font-bold hover:opacity-70 `}>
          <Link href="/#projects" scroll>
            <span>
              {" "}
              <span className="text-amber-600 dark:text-amber-100">
                1.{" "}
              </span>{" "}
              Projects
            </span>
          </Link>
        </button>

        <button className={`cursor-pointer font-bold hover:opacity-70 `}>
          <Link href="/#about" scroll>
            <span>
              {" "}
              <span className="text-amber-600 dark:text-amber-100">
                2.{" "}
              </span>{" "}
              About me
            </span>
          </Link>
        </button>
        <div>
          <ToggleButton />
        </div>
      </div>
    </nav>
  );
}
