import React, { useRef, useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry?.isIntersecting),
      { threshold: 0 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  return (
    <>
      <div ref={triggerRef} className="h-px"></div>

      <div
        className={`top-0 z-50 flex min-h-0 w-full items-center justify-center overflow-hidden pb-4 backdrop-blur-md md:sticky ${
          scrolled ? `dark:bg-[#111110]/30` : `dark:bg-[#111110]`
        }`}
      >
        <div className="flex w-5/6 max-w-[800px] flex-row-reverse items-center justify-between pt-2">
          <ToggleButton />
          <Link href={"/"}>
            <h1 className="font-arefRuqaa text-2xl font-extrabold">
              أسامة خليل
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
