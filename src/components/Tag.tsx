import React from "react";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  return (
    <div
      className={`rounded-full bg-[#0c0301] px-4 py-1 text-[#faf1f3] dark:bg-[#faf1f3]  dark:text-[#0c0301] `}
    >
      {title}
    </div>
  );
}
