import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import osama2 from "../../public/osama2.jpeg";
import Image from "next/image";
import Projects from "~/components/Projects";
import synapse2 from "../../public/synapse2.png";
import { useRef } from "react";
import { useTheme } from "next-themes";

export default function Home(): React.ReactElement {
  const homeRef = useRef(null);
  const { theme } = useTheme();

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
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {theme === "dark" ? (
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
      </div>
      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8">
        <div
          id="home"
          ref={homeRef}
          className="mt-8 flex w-5/6 max-w-[1000px] flex-col items-center justify-center  md:mt-14 md:min-h-[20dvh]"
        >
          <motion.div className="flex h-full w-full flex-col items-start bg-gradient-to-r bg-clip-text text-center text-2xl text-cyan-800 text-transparent dark:text-cyan-100 md:h-full   lg:flex-row lg:justify-between">
            <div className="flex h-full  w-full grow flex-col ">
              <div className="flex h-full w-full flex-col justify-center">
                <div className="flex flex-grow flex-col flex-nowrap items-start justify-center md:mx-0 md:justify-start md:px-0">
                  <p className="flex text-start text-xl text-amber-600 dark:text-amber-100">
                    Hello, I'm
                  </p>
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    layout
                    className="-ml-0.5 flex px-0 text-start text-7xl font-extrabold text-cyan-800 dark:text-cyan-100 md:-ml-1.5 md:text-9xl"
                  >
                    Osama Khalil
                  </motion.h1>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                layout
                className="w-full text-start leading-6 text-neutral-950 dark:text-yellow-50 md:ml-0 md:leading-8"
              >
                <span className="text-xl font-semibold text-neutral-950  dark:text-yellow-50 md:text-2xl">
                  Software engineer, Obsessed with building interactive UIs.
                </span>
                <br />
                <span className="flex items-start  text-xl font-semibold text-neutral-950 dark:text-yellow-50 md:text-2xl">
                  currently working at{" "}
                  <Link
                    href={"https://www.synapse-analytics.io/"}
                    target="_blank"
                    className="-mt-4 inline h-16 w-16"
                  >
                    <span className="inline ">
                      <Image
                        src={synapse2}
                        alt="synapse logo"
                        width="80"
                        height="80"
                        placeholder="blur"
                        quality={100}
                        priority={true}
                      />
                    </span>
                  </Link>
                </span>
              </motion.div>
              <motion.div
                className="mt-8 flex grow flex-wrap pb-4  text-lg font-semibold md:ml-0 md:mt-14 md:max-w-[1000px] md:items-end md:justify-between"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
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
                <Link
                  href={"https://github.com/osamakhalil98/"}
                  target="_blank"
                >
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
          </motion.div>
          <hr className="border-1 w-[100vw] border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />
        </div>

        {/* Projects section */}
        <div
          id="projects"
          className="mx-auto mt-8 flex w-5/6 max-w-[1000px] flex-col pb-4 text-neutral-950 dark:text-yellow-50 md:mt-16 md:justify-start"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 mt-2 flex-grow text-center text-3xl font-extrabold md:text-5xl"
          >
            <span className="text-center text-cyan-800 dark:text-cyan-100">
              <span className="text-3xl text-amber-600 dark:text-amber-100 md:text-5xl">
                1.{""}
              </span>{" "}
              Projects
            </span>
          </motion.p>

          <Projects />
        </div>

        <hr className="border-1 w-full border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />

        {/* About me section*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          id="about"
          transition={{ type: "spring", stiffness: 50 }}
          className="mt-8 flex w-5/6  max-w-[1000px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="my-8 mt-2 flex-grow text-center text-3xl font-extrabold md:text-5xl"
          >
            <span className="text-center text-cyan-800 dark:text-cyan-100">
              <span className="text-3xl text-amber-600 dark:text-amber-100 md:text-5xl">
                2.{""}
              </span>{" "}
              About me
            </span>
          </motion.p>
          <div className="text-md mb-8 flex flex-col items-start justify-between text-start font-inter leading-9 text-neutral-950 dark:text-yellow-50 md:flex-row ">
            <div className="mr-2 w-full md:w-4/6 md:max-w-[500px]">
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
            <div className="my-4 flex-col justify-start md:ml-4">
              {/* IMAGES */}
              <Image
                src={osama2}
                alt="A picture of myself :)"
                width="510"
                height="510"
                placeholder="blur"
                className="rounded-lg shadow-lg"
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </motion.div>
        <hr className="border-1 w-full border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />
      </main>
    </>
  );
}
