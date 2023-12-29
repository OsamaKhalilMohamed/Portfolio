import Head from "next/head";
import Link from "next/link";
import me from "../../public/me.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Projects from "~/components/Projects";

export default function Home(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const hobbies = [
    { name: "coding", logo: "👨‍💻" },
    { name: "photography", logo: "📸" },
    { name: "football", logo: "⚽" },
    { name: "sleep", logo: "💤" },
    { name: "think", logo: "🧠" },
    { name: "tweet", logo: "🐥" },
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
        <title>Osama Khalil</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Home"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex h-full min-h-screen flex-col items-center justify-start pb-8 pt-8`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex w-4/6 max-w-[980px] flex-col items-start bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-2xl text-transparent dark:from-cyan-100 dark:to-slate-200  md:flex-row md:justify-between"
        >
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col justify-start">
              <div className="flex flex-grow flex-col flex-nowrap items-start justify-start md:mx-0 md:px-0">
                <motion.p
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  layout
                  className="flex text-start text-xl text-cyan-800 dark:text-cyan-100"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  layout
                  className="-ml-1.5 flex px-0 text-start text-6xl font-extrabold text-cyan-800 dark:text-cyan-100 md:text-9xl"
                >
                  Osama
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  layout
                  className="-ml-1.5 text-start text-6xl font-extrabold text-cyan-800 dark:text-cyan-100 md:text-9xl"
                >
                  Khalil
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              layout
              className="my-2 -ml-1.5 w-full text-start leading-7 text-neutral-950 dark:text-yellow-50 md:ml-0"
            >
              <span className="text-md font-medium  text-neutral-950 dark:text-yellow-50">
                Software engineer, Obsessed with building interactive UIs.
              </span>
              <br />
              <span className="text-md font-medium text-neutral-950 dark:text-yellow-50">
                currently working at{" "}
                <Link
                  href={"https://www.synapse-analytics.io/"}
                  target="_blank"
                >
                  <span className="w-full border-b-2 border-dotted border-violet-700 text-neutral-950 hover:border-red-500 dark:border-violet-800 dark:text-yellow-50 dark:hover:border-orange-500">
                    Synapse Analytics{" "}
                  </span>
                </Link>
              </span>
            </motion.div>
            <motion.div
              className="-ml-1.5 mt-4 flex max-w-[980px] flex-wrap pb-4 text-sm font-semibold sm:w-2/4 md:ml-0 md:w-5/6 md:justify-between"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Link
                href={"https://www.linkedin.com/in/osama-khalil98/"}
                target="_blank"
              >
                <span className=" mr-3 border-b-2 border-dotted border-lime-800 text-neutral-950 dark:border-lime-400 dark:text-yellow-50 md:mr-0">
                  Linkedin{" "}
                </span>
              </Link>
              <Link href={"mailto:osadx35@gmail.com"}>
                <span className="mr-3 border-b-2 border-dotted border-fuchsia-700 text-neutral-950 dark:border-fuchsia-700 dark:text-yellow-50 md:mr-0">
                  Email{" "}
                </span>
              </Link>
              <Link href={"https://github.com/osamakhalil98/"} target="_blank">
                <span className="mr-3 border-b-2 border-dotted border-red-800 text-neutral-950 dark:border-red-400 dark:text-yellow-50 md:mr-0">
                  Github{" "}
                </span>
              </Link>
              <Link href={"https://codepen.io/osadxen/"} target="_blank">
                <span className="mr-3 border-b-2 border-dotted border-rose-400 text-neutral-950 dark:border-rose-800 dark:text-yellow-50 md:mr-0">
                  Codepen{" "}
                </span>
              </Link>
              <Link
                href={
                  "https://drive.google.com/file/d/1NL1xID4YAZxaIZHtwyiRzyfSRb_QhI_Y/view?usp=sharing"
                }
                target="_blank"
              >
                <span className="mr-3 border-b-2 border-dotted border-amber-500 text-neutral-950 dark:text-yellow-50 md:mr-0">
                  Resume{" "}
                </span>
              </Link>
              <Link href={"Timeline"}>
                <span className="mr-3 border-b-2 border-dotted border-orange-400 text-neutral-950 dark:text-yellow-50 md:mr-0">
                  Timeline{" "}
                </span>
              </Link>
            </motion.div>
          </div>

          <div className="mx-auto mt-4 flex h-full w-full flex-col items-end justify-end self-end">
            {/* IMAGES */}
            <Image
              src={me}
              alt="A picture of myself :)"
              width="300"
              height="300"
              placeholder="blur"
              quality={100}
              priority={true}
            />
          </div>
        </motion.div>

        <hr className="border-1 w-full cursor-pointer border-orange-400 duration-500 hover:border-red-500" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mt-4 flex w-4/6  max-w-[980px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <p className="mx-auto mb-4 flex text-3xl font-bold md:text-3xl">
            <span className="bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-transparent dark:from-cyan-100 dark:to-slate-200">
              About me{" "}
            </span>
            <span className="animate-waving-hand md:mt-1 md:text-lg">👋🏻</span>
          </p>
          <div className="text-start text-lg font-extrabold leading-6 text-neutral-950 dark:text-yellow-50 sm:text-lg">
            Hi, I'm a front-end engineer, born and raised in Cairo - Egypt. Very
            interested in building interactive UIs. I have a bachelor's degree
            in computer science, class of 2020. I have +2 years of professional
            experience in front-end development and the cycle of software (web)
            development in general. on a mission to survive the very rapid
            javascript world we're living in by activating "student for life"
            mode. currently trying to learn Vue.js, if you're interested you can
            see my tech and tools i'm usually using in my work:{" "}
            <Link href={"/Tech"} className="h-fit w-fit ">
              {" "}
              <span className="border-b-2 border-dotted border-pink-400 text-neutral-950 dark:border-pink-700 dark:text-yellow-50">
                Tech + Tools{" "}
              </span>
            </Link>{" "}
            . My top hobbies include: listening to music, watching movies,
            gaming, and avoid writing regex. A wannabe Javascript ninja
            engineer. <span>{hobbies[currentIndex]?.logo}</span>
          </div>
          <div className="mb-4 mt-4 flex w-full flex-col flex-wrap items-center justify-start md:flex-row">
            <h1 className="font-semibold">Main Skills: </h1>{" "}
            <div className="text-md relative mb-2 w-[120px] rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800 md:mb-0 md:me-4 md:ml-2">
              <p className="absolute -right-2 -top-2">☑️</p>
              <p className="absolute -bottom-2 -left-2">☑️</p>
              Typescript
            </div>
            <div className="text-md relative mb-2 me-2 w-[120px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none  focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 md:mb-0 md:me-4">
              <p className="absolute -right-2 -top-2">🔥</p>
              <p className="absolute -bottom-2 -left-2">🔥</p>
              React
            </div>
            <div className="text-md relative mb-2 me-2 w-[120px] rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none  focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400 md:mb-0 md:me-4">
              <p className="absolute -right-2 -top-2">🎱</p>
              <p className="absolute -bottom-2 -left-2">🎱</p>
              Next.js
            </div>
            <div className="text-md relative w-[120px] rounded-lg  bg-gradient-to-r from-teal-500 to-lime-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-l  hover:from-teal-500 hover:to-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-500 dark:focus:ring-teal-700 md:me-4 ">
              <p className="absolute -right-2 -top-2">🚀</p>
              <p className="absolute -bottom-2 -left-2">🚀</p>
              CSS
            </div>
          </div>
        </motion.div>
        <hr className="border-1  w-full cursor-pointer border-orange-400 duration-500 hover:border-red-500" />

        <div className="mx-auto flex  w-4/6 max-w-[980px] flex-col px-1 pb-4 pt-4 text-neutral-950 dark:text-yellow-50 md:w-full md:justify-start md:px-2">
          <p className="mb-2 flex-grow text-center text-2xl font-extrabold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-transparent dark:from-cyan-100 dark:to-slate-200">
              Projects i've worked on{" "}
            </span>
            <span className="bg-none text-inherit">👀</span>?
          </p>

          <Projects />
        </div>
        <hr className="border-1 w-full cursor-pointer border-orange-400 duration-500 hover:border-red-500" />
      </main>
    </>
  );
}
