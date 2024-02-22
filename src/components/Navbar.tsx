import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar(): React.ReactElement {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const ref = useRef<any>(null);
  const { theme } = useTheme();

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
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {theme === "dark" ? (
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
      </div>
      <nav
        ref={ref}
        className="z-[999] box-border flex w-full items-center justify-center border-b border-b-amber-600 bg-zinc-50 pb-8 pt-4 shadow-sm dark:border-b-amber-100 dark:bg-zinc-950"
      >
        <div className="mt-2 flex w-5/6 max-w-[1000px] items-center justify-between">
          <button className={`cursor-pointer font-bold hover:opacity-70 `}>
            <Link href="/" scroll>
              <span className="text-cyan-800 dark:text-cyan-100">
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
              <span className="text-cyan-800 dark:text-cyan-100">
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
              <span className="text-cyan-800 dark:text-cyan-100">
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
    </>
  );
}
