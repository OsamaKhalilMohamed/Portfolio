import Image, { StaticImageData } from "next/image";
import React from "react";

export default function MiniCard({
  src,
  description,
  title,
  subTitle,
  size,
}: {
  src: StaticImageData;
  description: string;
  title: string;
  subTitle: string;
  size: number;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-y-1 rounded-lg bg-[#F8F8F8] p-4 dark:bg-[#1C1C1A]">
      <div className="h-[25%]">
        {" "}
        <Image
          className="rounded-lg"
          src={src}
          alt={description}
          width={size}
          height={size}
        />
      </div>

      <h3 className="mt-4 font-inter font-bold">{title}</h3>

      <p className="mt-6 text-xs font-light text-[#7A7B77]">{subTitle}</p>
    </div>
  );
}
