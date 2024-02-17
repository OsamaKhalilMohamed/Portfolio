import Head from "next/head";
import Link from "next/link";
import me from "../../public/me.png";
import { motion } from "framer-motion";
import osama2 from "../../public/osama2.jpeg";
import Image from "next/image";
import Projects from "~/components/Projects";
import synapse2 from "../../public/synapse2.png";
import { useRef } from "react";

export default function Home(): React.ReactElement {
  const homeRef = useRef(null);
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
      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8">
        <div
          id="home"
          ref={homeRef}
          className="mt-8 flex w-5/6 max-w-[1000px] flex-col items-center justify-center  md:mt-14 md:min-h-[20dvh]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-full w-full flex-col items-start bg-gradient-to-r bg-clip-text text-center text-2xl text-cyan-800 text-transparent dark:text-cyan-100   lg:flex-row lg:justify-between"
          >
            <div className="flex h-full w-full grow flex-col lg:h-[550px]">
              <div className="flex w-full flex-col justify-start">
                <div className="flex flex-grow flex-col flex-nowrap items-start justify-start md:mx-0 md:px-0">
                  <motion.p
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    layout
                    className="flex text-start font-mono text-xl text-amber-600 dark:text-amber-100"
                  >
                    Hello, I'm
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    layout
                    className="-ml-0.5 flex px-0 text-start text-7xl font-extrabold text-cyan-800 dark:text-cyan-100 md:-ml-1.5 md:text-9xl"
                  >
                    Osama
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    layout
                    className="-ml-0.5 text-start text-7xl font-extrabold text-cyan-800 dark:text-cyan-100 md:-ml-1.5 md:text-9xl"
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
                className="w-full text-start leading-6 text-neutral-950 dark:text-yellow-50 md:ml-0 md:leading-8"
              >
                <span className="text-lg font-light text-neutral-950  dark:text-yellow-50 md:text-xl">
                  Software engineer, Obsessed with building interactive UIs.
                </span>
                <br />
                <span className="flex items-start  text-lg font-light text-neutral-950 dark:text-yellow-50 md:text-xl">
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
                className=" mt-5 flex grow flex-wrap pb-4 text-sm font-semibold sm:w-1/4 md:ml-0 md:mt-14 md:w-5/6 md:max-w-[1000px] md:items-end md:justify-between"
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

            <div className="mx-auto mt-4 flex h-full w-full justify-center lg:items-end lg:justify-end lg:self-end">
              {/* IMAGES */}
              <Image
                src={me}
                alt="A picture of myself :)"
                width="400"
                height="400"
                placeholder="blur"
                quality={100}
                priority={true}
              />
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
              <span className="font-mono text-3xl text-amber-600 dark:text-amber-100 md:text-5xl">
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
              <span className="font-mono text-3xl text-amber-600 dark:text-amber-100 md:text-5xl">
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
