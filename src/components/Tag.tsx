import React from "react";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  return (
    <div
      className={`w-[64px] rounded-full bg-[#0c0301] px-2 py-0.5 text-center  text-[#faf1f3] shadow-md dark:bg-[#faf1f3] dark:text-[#0c0301]  md:px-4 md:py-1`}
    >
      {title}
    </div>
  );
}
