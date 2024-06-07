import React from "react";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  return (
    <div
      className={`rounded-full px-4 py-1 dark:bg-[#faf1f3]  dark:text-[#0c0301] `}
    >
      {title}
    </div>
  );
}
