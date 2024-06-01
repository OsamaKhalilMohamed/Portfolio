import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
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

  return (
    <div className="relative mb-6 flex w-full flex-col" ref={containerRef}>
      <h2 className="mb-2 flex items-center justify-start pb-1 font-inter text-3xl text-neutral-950 dark:text-yellow-50">
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
          <hr className="border-1 w-[100%] border-[#d58322] duration-500  dark:border-[#d2a258]" />
        </span>
      </h2>
      <div className="w-full">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={3}
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
          <p className="mb-2 flex items-center gap-1 md:mb-0">
            <Tag variant="stack" title="Stack" />
            <span className="font-thin text-gray-700 dark:text-gray-300">
              {stack.join(", ")}
            </span>
          </p>
          <p className="mb-2 flex items-center gap-1 md:mb-0">
            <Tag variant="date" title="Date" />
            <span className="font-thin text-gray-700 dark:text-gray-300">
              {date}
            </span>
          </p>
          <p className="mb-2 flex items-center gap-1 md:mb-0">
            <Tag variant="professional" title="Type" />
            <span className="font-thin text-gray-700 dark:text-gray-300">
              {type}
            </span>
          </p>
        </div>
        {description && (
          <p className="mt-4 font-inter text-xl md:text-2xl">{description}</p>
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
    </div>
  );
}
