import { StaticImageData } from "next/image";
import Image from "next/image";

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
    <div
      className="
      group
      relative
      w-full
      rounded-2xl
      bg-[#F8F8F8]
      p-5
      shadow-sm
      transition-all
      duration-300
      ease-out
      hover:-translate-y-[0.5]
      hover:shadow-lg
      dark:bg-[#1C1C1A]
    "
    >
      {/* Top row: logo + year */}
      {/* Top row */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div
          className="
      flex 
      h-24
      w-24
      items-center
      justify-center
      rounded-lg
      bg-white
      shadow-sm
      dark:bg-[#2A2A28]
    "
        >
          <Image
            src={src}
            alt={description}
            width={size}
            height={size}
            className="max-h-16 max-w-16 object-contain"
            priority
          />
        </div>

        {/* Date */}
        <span className="text-xs text-[#7A7B77] md:mt-1 md:text-right">
          {workYear}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-inter text-lg font-semibold leading-snug">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-[#7A7B77]">{subTitle}</p>

      {/* Hover glow */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-white/10
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      /> */}
    </div>
  );
}
