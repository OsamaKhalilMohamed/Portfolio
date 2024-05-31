import { useTheme } from "next-themes";
import React from "react";

export default function LoadingState() {
  const { theme } = useTheme();

  return (
    <div className="flex h-full min-h-[90dvh] w-full flex-col items-center justify-center">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {theme === "dark" || theme !== "light" ? (
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
      <div className="flex	h-36 w-56  items-center justify-center rounded-lg border-2 border-[#d58322] bg-transparent text-start text-7xl font-extrabold text-[#103090]  transition-opacity dark:border-[#d2a258] ">
        OS
      </div>
      <div className="mt-2 flex gap-2 transition-opacity	">
        <div className="h-4 w-4 rounded-md bg-gray-300 motion-safe:animate-bounce dark:bg-white"></div>
        <div className="h-4 w-4 rounded-md bg-gray-300 motion-safe:animate-bounce dark:bg-white"></div>
        <div className="h-4 w-4 rounded-md bg-gray-300 motion-safe:animate-bounce dark:bg-white"></div>
      </div>
    </div>
  );
}
