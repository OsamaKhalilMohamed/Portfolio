import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import me from "../../../public/me.jpg";
import synapse from "../../../public/synapse.jpeg";

export default function About(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const hobbies = [
    { name: "coding", logo: "👨‍💻" },
    { name: "movies", logo: "🎞" },
    { name: "photography", logo: "📸" },
    { name: "football", logo: "⚽" },
    { name: "sleep", logo: "💤" },
    { name: "think", logo: "🧠" },
    { name: "tweet", logo: "🐥" },
    { name: "kiss", logo: "💋" },
    { name: "music", logo: "🎧" },
    { name: "sunflower", logo: "🌻" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((prev: number) =>
        prev === hobbies.length - 1 ? 0 : prev + 1
      );
    }, 1000);
  }, [currentIndex]);

  return (
    <>
      <Head>
        <title>Osama Khalil - About</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - About me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex h-full min-h-screen flex-col items-center justify-center overflow-x-hidden bg-stone-950">
        <motion.div
          className="mb-2 mt-8 flex flex-col"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* IMAGES */}
          <Image
            src={me}
            alt="A picture of myself :)"
            className="h-50 w-50 rounded-xl object-cover shadow-md"
            width="200"
            height="200"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mx-8 mt-2 rounded-xl  bg-stone-900 px-2 sm:px-4 pb-4 pt-4 text-center sm:mt-4 sm:w-1/2 sm:px-2"
        >
          <div>
            <span className="text-lg font-bold text-zinc-300 sm:text-xl">
              Hello Hello, glad that you clicked on this About button, even if
              it was by mistake, anyway I'm Osama Khalil, I'm a front-end
              engineer, born and raised in Cairo - Egypt{" "}
            </span>{" "}
            <span className="bg-none text-inherit">🇪🇬</span>
            <div className="text-lg font-bold text-zinc-300 sm:text-xl">
              {" "}
              <br /> I'm very Interested in building interactive UIs. I have a
              bachelor's degree in computer science, Class of 2020. I have +2
              years of professional experience in Front-end development and the
              cycle of software (web) development in general. Currently working
              at{" "}
              <Link
                href={"https://www.synapse-analytics.io/"}
                target="_blank"
                className="h-fit w-fit "
              >
                {" "}
                <span className="text-zinc-300 underline decoration-pink-700 underline-offset-1">
                  Synapse Analytics{" "}
                </span>
              </Link>
            </div>
          </div>
          <br />
          <p className="text-lg font-bold text-zinc-300 sm:text-xl">
            My Top hobbies include : listening to music, watching movies,
            gaming, and avoid writing regex. A wannabe Javascript ninja
            engineer. <span>{hobbies[currentIndex]?.logo}</span>
          </p>
        </motion.div>

        <motion.div className="mb-2 flex w-full justify-center">
          <Link href={"/"}>
            <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r from-cyan-100 to-zinc-300 bg-clip-text text-lg text-transparent">
              Home {"->"}
            </p>
          </Link>
        </motion.div>
      </main>
    </>
  );
}
