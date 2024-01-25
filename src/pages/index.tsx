import Head from "next/head";
import Link from "next/link";
import me from "../../public/me.png";
import { motion } from "framer-motion";
import osama from "../../public/osama.jpg";
import Image from "next/image";
import Projects from "~/components/Projects";

export default function Home(): React.ReactElement {
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
        className={`flex h-full min-h-screen flex-col items-center justify-start scroll-smooth pb-8 pt-8`}
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
              className="my-2 -ml-1.5 w-full text-start leading-8 text-neutral-950 dark:text-yellow-50 md:ml-0"
            >
              <span className="text-md font-light  text-neutral-950 dark:text-yellow-50">
                Software engineer, Obsessed with building interactive UIs.
              </span>
              <br />
              <span className="text-md font-light text-neutral-950 dark:text-yellow-50">
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
              className="-ml-1.5 mt-5 flex max-w-[980px] flex-wrap pb-4 text-sm font-semibold sm:w-2/4 md:ml-0 md:mt-10 md:w-5/6 md:justify-between"
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

        {/* Projects section */}
        <div className="mx-auto flex w-4/6 max-w-[980px] flex-col pb-4 pt-4 text-neutral-950 dark:text-yellow-50 md:mt-14 md:justify-start">
          <p className="mb-2 mt-2 flex-grow text-center text-2xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-transparent dark:from-cyan-100 dark:to-slate-200">
              1. Projects i've worked on!
            </span>
          </p>

          <Projects />
        </div>

        <hr className="border-1 w-full cursor-pointer border-orange-400 duration-500 hover:border-red-500" />

        {/* About me section*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mt-4 flex w-4/6  max-w-[980px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <p className="mx-auto mb-8 mt-5 flex flex-grow text-center text-2xl font-extrabold md:mt-14 md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-transparent dark:from-cyan-100 dark:to-slate-200">
              2. About me{" "}
            </span>
          </p>

          <div className="text-md flex justify-between text-start font-inter leading-9 text-neutral-950 dark:text-yellow-50 ">
            <div className="mr-2 w-full md:w-4/6">
              Hi, I'm a front-end engineer, born and raised in Cairo - Egypt.
              Very interested in building interactive UIs. I have a bachelor's
              degree in computer science, class of 2020. I have +2 years of
              professional experience in front-end development and the cycle of
              software (web) development in general. on a mission to survive the
              very rapid javascript world we're living in by activating "student
              for life" mode. currently trying to learn Vue.js, if you're
              interested you can see my tech and tools i'm usually using in my
              work:{" "}
              <Link href={"/Tech"} className="h-fit w-fit ">
                {" "}
                <span className="border-b-2 border-dotted border-pink-400 text-neutral-950 dark:border-pink-700 dark:text-yellow-50">
                  Tech + Tools{" "}
                </span>
              </Link>{" "}
              . My top hobbies include: listening to music, watching movies,
              gaming, and avoid writing regex. A wannabe Javascript ninja
              engineer.
            </div>
            <div className="mb-4 hidden self-end md:flex">
              {/* IMAGES */}
              <Image
                src={osama}
                alt="A picture of myself :)"
                width="200"
                height="200"
                //placeholder="blur"
                className="rounded-lg shadow-lg"
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div className="mb-8 mt-4 flex w-full flex-col flex-wrap items-center justify-between md:mt-8 md:flex-row">
            <h1 className="mt-4 font-medium md:text-xl">Main Skills: </h1>{" "}
            <div className="text-md relative mb-2 w-full rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300  dark:focus:ring-blue-800 md:mb-0 md:me-4 md:ml-2 md:w-[150px]">
              <p className="absolute -right-2 -top-2">☑️</p>
              <p className="absolute -bottom-2 -left-2">☑️</p>
              Typescript
            </div>
            <div className="text-md relative mb-2 me-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-cyan-300 dark:focus:ring-cyan-800 md:mb-0 md:me-4 md:w-[150px]">
              <p className="absolute -right-2 -top-2">🔥</p>
              <p className="absolute -bottom-2 -left-2">🔥</p>
              React
            </div>
            <div className="text-md relative mb-2 me-2 w-full rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-red-100 dark:focus:ring-red-400 md:mb-0 md:me-4 md:w-[150px]">
              <p className="absolute -right-2 -top-2">🎱</p>
              <p className="absolute -bottom-2 -left-2">🎱</p>
              Next.js
            </div>
            <div className="text-md relative w-full rounded-lg bg-gradient-to-r  from-teal-500 to-lime-500 px-5 py-2.5 text-center text-sm font-bold hover:bg-gradient-to-l hover:from-teal-500  hover:to-lime-500 focus:outline-none focus:ring-4 focus:ring-lime-500 dark:focus:ring-teal-700 md:me-4 md:w-[150px] ">
              <p className="absolute -right-2 -top-2">🚀</p>
              <p className="absolute -bottom-2 -left-2">🚀</p>
              CSS
            </div>
          </div>
        </motion.div>
        <hr className="border-1 w-full cursor-pointer border-orange-400 duration-500 hover:border-red-500" />
      </main>
    </>
  );
}
