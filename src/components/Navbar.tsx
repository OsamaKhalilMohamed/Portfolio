import React from "react";
import ToggleButton from "./ToggleButton";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
  return (
    <>
      {/* <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {theme === "dark" || theme !== "light" ? (
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
      </div> */}
      <div className="z-[999] flex w-full items-center justify-center shadow-sm   dark:bg-zinc-950">
        <div className="mt-2 flex w-5/6 max-w-[1000px] flex-row-reverse items-center justify-between">
          <ToggleButton />
        </div>
      </div>
    </>
  );
}
