import React from "react";
import ToggleButton from "./ToggleButton";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
  return (
    <>
      <div className=" flex w-full items-center justify-center   dark:bg-[#111110]">
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
