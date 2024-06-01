import React from "react";

type Props = {
  title: string;
  variant: "professional" | "personal" | "stack" | "date";
};

export default function Tag({ title, variant }: Props): React.ReactElement {
  return (
    <div
      className={`rounded-md px-2.5 py-0.5 ${
        variant === "stack"
          ? `bg-[#4c175c]  text-[#b457d3]  dark:bg-[#9862ab] dark:text-[#43264d]`
          : variant === "date"
          ? `bg-[#339260]  text-[#64e09c]  dark:bg-[#2c6126] dark:text-[#6ab162]`
          : `bg-[#0b5fb2]  text-[#5e94d5]  dark:bg-[#073c73] dark:text-[#7599c6]`
      }`}
    >
      {title}
    </div>
  );
}
