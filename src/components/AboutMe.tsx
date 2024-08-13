import Link from "next/link";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  getRandomClassName,
  renderTextWithRandomClasses,
} from "~/utils/helpers";
import { motion } from "framer-motion";

const textBeforeLink = `Hi, I'm a passionate front-end engineer from Cairo, Egypt,
dedicated to crafting interactive and engaging user interfaces.
With a bachelor's degree in Computer Science (Class of 2020) and
over three years of experience, including leading front-end
projects, I have a solid understanding of the complete software
development lifecycle, particularly in web development. Embracing
the ever-evolving JavaScript ecosystem, I adopt a "student for
life" mindset to stay current with the latest technologies. You can check out my`;

const textAfterLink = `When I'm not coding, you can find me listening to music,
watching movies, gaming, or creatively avoiding writing regex. I
aspire to become a JavaScript ninja.`;

export default function AboutMe() {
  const [shouldUpdateTextColors, setShouldUpdateTextColors] =
    useState<boolean>(false);

  const updatedTextClassNames = useCallback((text: string) => {
    const words = text.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        className={`${getRandomClassName()} leading-9 md:leading-10`}
      >
        {word}{" "}
      </span>
    ));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShouldUpdateTextColors(!shouldUpdateTextColors ?? false);
    }, 5000);
  });

  return (
    <Fragment>
      <h1 className="mb-1 mt-8 text-start font-inter text-4xl font-bold text-gray-500 dark:text-gray-500 md:-ml-1.5 md:text-5xl">
        <span className=" text-gray-900 dark:text-gray-300">2.</span> About me.
      </h1>
      <motion.div className="text-md mb-8 mt-4 flex flex-col items-start text-start font-inter font-light  text-neutral-950 transition-colors duration-100 dark:text-yellow-50 md:flex-row md:text-lg ">
        <div className="mr-2 w-full text-justify ">
          {updatedTextClassNames(textBeforeLink)}
          <Link href="/Tech" className="h-fit w-fit">
            <span className="border-b border-pink-100 text-neutral-950 dark:border-slate-900 dark:text-yellow-50">
              most used tech and tools
            </span>
          </Link>
          {", "}
          {updatedTextClassNames(textAfterLink)} Feel free to email me at{" "}
          <span className="border-b border-pink-100 text-neutral-950 dark:border-slate-900 dark:text-yellow-50">
            <a href="mailto:osadx35@gmail.com">osadx35@gmail.com</a>
          </span>
        </div>
      </motion.div>
    </Fragment>
  );
}
