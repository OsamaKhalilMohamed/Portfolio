import Image, { StaticImageData } from "next/image";
import React from "react";

export default function MiniCard({
  src,
  description,
  title,
  subTitle,
  size,
  workYear,
}: {
  src: StaticImageData;
  description: string;
  title: string;
  subTitle: string;
  size: number;
  workYear: string;
}) {
  return (
    <div className="flex w-full flex-col justify-between gap-y-1 rounded-lg bg-[#F8F8F8] p-4 shadow-sm dark:bg-[#1C1C1A]">
      <div className="h-[25%]">
        {" "}
        <Image
          className="rounded-lg shadow-sm"
          src={src}
          alt={description}
          width={size}
          height={size}
          priority={true}
          style={{
            objectFit: "fill",
            imageResolution: "from-image",
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      <div>
        {" "}
        <h3 className="mt-2 font-inter text-lg font-bold">{title}</h3>
        <p className="text-sm font-light text-[#7A7B77]">{workYear}</p>
      </div>

      <p className="mt-2 text-sm font-light text-[#7A7B77]">{subTitle}</p>
    </div>
  );
}
