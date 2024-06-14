import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Tag from "./Tag";
import { motion } from "framer-motion";

type Props = {
  title: string;
  archives: Array<StaticImageData>;
  stack: string[];
  date: string;
  type: string;
  link: string;
  description?: string;
};

export default function ProjectShowCase(props: Readonly<Props>) {
  const { archives, stack, title, date, type, description, link } = props;
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative mb-8 flex w-full flex-col"
      ref={containerRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 50 }}
      viewport={{
        once: true,
        margin: `0px 0px ${title === "KONAN" ? "-20px" : "-170px"} 0px`,
      }}
      transition={{ bounce: 0.4, type: "spring", duration: 1.5 }}
    >
      <h2 className="mb-2 flex items-center justify-start pb-1 text-3xl font-bold text-neutral-950 dark:text-yellow-50">
        {title}{" "}
        <span className="ml-2 font-inter text-3xl">
          <Link href={link} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 cursor-pointer font-inter text-3xl"
              style={{ display: "inline", verticalAlign: "middle" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </span>
        <span className="ml-2 mt-4 flex flex-1 flex-grow">
          <hr className="border-1 w-[100%] border-pink-100 dark:border-slate-900 " />
        </span>
      </h2>
      <div className="w-full">
        <Swiper
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, A11y, Autoplay, FreeMode]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor
        >
          {archives.map((imageUrl, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="w-full">
                <Image
                  src={imageUrl}
                  width={1000}
                  height={800}
                  quality={100}
                  placeholder="blur"
                  className="rounded-md"
                  priority
                  alt={title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-6">
        <div className="flex flex-col justify-between md:flex-row">
          <p className="mb-4 flex flex-col items-start justify-start gap-1 md:mb-0">
            <Tag variant="stack" title="Stack" />
            <span className="font-inter text-gray-700 dark:text-gray-300">
              {stack.join(", ")}
            </span>
          </p>
          <p className="mb-4 flex flex-col items-start justify-start gap-1 md:mb-0">
            <Tag variant="date" title="Date" />
            <span className="font-inter text-gray-700 dark:text-gray-300">
              {date}
            </span>
          </p>
        </div>
        {description && (
          <div className="relative mb-6 mt-6 rounded-lg  bg-gradient-to-r from-pink-400 to-pink-500 p-6 text-lg font-bold text-white shadow-md dark:from-blue-500 dark:to-blue-600 md:text-xl">
            <div className="absolute inset-1 rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 opacity-60 blur-xl dark:from-blue-500 dark:to-blue-600"></div>
            <p className="relative z-10">{description}</p>
          </div>
        )}

        {title === "KONAN" && (
          <p className="font-semiinter mx-auto mt-4 text-sm">
            Learn more about KONAN{" "}
            <span>
              <span>
                <span className="mr-1">
                  <Link
                    href={"https://www.synapse-analytics.io/konan"}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 cursor-pointer"
                      style={{ display: "inline", verticalAlign: "middle" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Link>
                </span>
              </span>
            </span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
