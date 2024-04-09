import { useTheme } from "next-themes";
import React from "react";

export default function LoadingState() {
  const { theme } = useTheme();
  return (
    <div className="fixed flex h-full w-full items-center justify-center overflow-hidden bg-red-200 dark:bg-yellow-900">
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
      <div className="border-1 flex items-center rounded-md border border-amber-600 p-2  dark:border-amber-100">
        <div className="loader"></div>
        <p className="ml-4 mr-4 font-bold">Loading..</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}
