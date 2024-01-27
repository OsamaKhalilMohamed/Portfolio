import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  imageSrc: any[];
  stack: string[];
  description: string;
  imageAlt: string;
};

export default function ProjectShowCase(props: Readonly<Props>) {
  const { description, imageSrc, stack, title, imageAlt } = props;
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    if (imageSrc?.length) {
      setTimeout(() => {
        setCurrentImgIdx((prev: number) =>
          prev === imageSrc.length - 1 ? 0 : prev + 1
        );
      }, 10000);
    }
  }, [currentImgIdx, imageSrc]);

  return (
    <div className="flex w-full items-center justify-between">
      <div className="relative flex flex-col">
        <h2 className="pb-1 text-3xl font-bold text-neutral-950 dark:text-yellow-50">
          {title}
        </h2>
        <div className="flex w-full justify-between">
          <Image
            src={imageSrc[currentImgIdx]}
            width={600}
            className="rounded-md shadow-md"
            height={600}
            quality={100}
            //placeholder="blur"
            alt={imageAlt}
          />
          {/* <div className="hidden md:flex">
            <p className="ml-4 self-end  text-xl font-bold">{description}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
