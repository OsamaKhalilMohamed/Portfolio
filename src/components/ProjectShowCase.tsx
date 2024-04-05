import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Tag from "./Tag";

type Props = {
  title: string;
  imageSrc: any;
  stack: string[];
  date: string;
  type: string;
  link: string;
  description?: string;
};

export default function ProjectShowCase(props: Readonly<Props>) {
  const { imageSrc, stack, title, date, type, description, link } = props;
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef);
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  };

  return (
    <motion.div
      className="relative mb-6 flex w-full flex-col"
      animate={isContainerInView ? "visible" : "hidden"}
      variants={variants}
      exit="hidden"
      transition={{ duration: 1 }}
      ref={containerRef}
    >
      <h2 className="mb-2 flex items-center justify-start pb-1 text-3xl font-bold text-neutral-950 dark:text-yellow-50">
        {title}{" "}
        <span className="ml-2 text-3xl font-bold">
          <Link href={link} target="_blank">
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
          </Link>
        </span>
        <span className="ml-2 mt-4 flex flex-1 flex-grow">
          <hr className="border-1 w-[100%] border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />
        </span>
      </h2>
      <motion.div className=" w-full ">
        <Image
          src={imageSrc}
          width={900}
          className="w-full rounded-md shadow-md  "
          height={900}
          quality={100}
          placeholder="blur"
          priority
          alt={title}
        />
      </motion.div>
      <div className="mt-4 rounded-md border border-amber-600 p-6  dark:border-amber-100">
        <div className="flex flex-col justify-between md:flex-row">
          <p className="mb-2 md:mb-0">
            <span className="font-bold">Stack {"->"} </span>{" "}
            {stack.map((skill, index) => (
              <span className="mr-1 font-medium" key={`${index}-${skill}`}>
                <Tag title={skill} variant="stack" />
              </span>
            ))}
          </p>
          <p className="mb-2 md:mb-0">
            <span className="font-bold">Date {"->"} </span>{" "}
            <span className="font-medium">
              <Tag title={date} variant="date" />
            </span>
          </p>
          <p>
            <span className="font-bold">Type {"->"} </span>{" "}
            <span className="font-medium ">
              <Tag title={type} variant={type.toLocaleLowerCase()} />
            </span>
          </p>
        </div>
        {description && (
          <p className="mt-4 text-xl font-bold md:text-2xl">{description}</p>
        )}
        {title === "KONAN" && (
          <p className="mx-auto mt-4 text-sm font-semibold">
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
