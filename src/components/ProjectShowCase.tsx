import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  const imageRef = useRef(null);
  const isInView = useInView(imageRef);

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
      <div className="relative flex w-full flex-col">
        <h2 className="mb-2 flex items-center justify-start pb-1 text-3xl font-bold text-neutral-950 dark:text-yellow-50">
          {title}{" "}
          <span className="ml-2 text-3xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 cursor-pointer text-3xl font-bold"
              style={{ display: "inline", verticalAlign: "middle" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
          <span className="ml-2 mt-4 flex flex-1 flex-grow">
            <hr className="border-1 w-[100%] border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />
          </span>
        </h2>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex w-full justify-between"
          ref={imageRef}
        >
          <Image
            src={imageSrc[currentImgIdx]}
            width={900}
            className="w-full rounded-md shadow-md"
            height={900}
            quality={100}
            placeholder="blur"
            priority
            alt={imageAlt}
          />
        </motion.div>
      </div>
    </div>
  );
}
