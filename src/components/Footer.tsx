import React, { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const hobbies = [
    { name: "coding", logo: "👨‍💻" },
    { name: "photography", logo: "📸" },
    { name: "football", logo: "⚽" },
    { name: "sleep", logo: "💤" },
    { name: "think", logo: "🧠" },
    { name: "tweet", logo: "🐥" },
    { name: "music", logo: "🎧" },
    { name: "eye-stare", logo: "👀" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prev: number) =>
        prev === hobbies.length - 1 ? 0 : prev + 1
      );
    }, 1000);
  }, [currentIndex]);

  return (
    <div className="flex w-full justify-center pb-2 pt-2 text-sm dark:bg-[#111110]">
      <span className="pb-2 font-arefRuqaa text-lg font-extrabold">
        أسامة خليل{" "}
      </span>{" "}
      <span className="mt-1 pl-1 font-mono">
        {" "}
        - {currentYear} - All rights reserved.
      </span>
      <span className="pl-1">{hobbies[currentIndex]?.logo}</span>
    </div>
  );
}
