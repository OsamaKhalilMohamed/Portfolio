import Head from "next/head";
import Link from "next/link";
import me from "../../public/me.jpg";
import { motion } from "framer-motion";
import {
  EmailSVGIcon,
  GithubSVGIcon,
  LinkedinSVGIcon,
} from "~/assets/SvgIcons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home(): React.ReactElement {
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
        <title>Osama Khalil</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Home"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex h-full min-h-screen flex-col items-center justify-center pb-8  pt-8`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex w-5/6 max-w-[680px] flex-col bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl text-transparent md:w-2/4 md:flex-row md:justify-between"
        >
          <div className="flex w-full flex-col md:w-3/6">
            <div className="w-full">
              <div className="flex w-full flex-col justify-start md:w-full md:px-2">
                <div className=" flex flex-grow flex-col flex-nowrap">
                  <p className="flex text-start text-sm text-cyan-100">
                    Hi <span className="animate-waving-hand">👋🏻</span>,
                  </p>{" "}
                  <h1 className="flex-grow text-start text-3xl font-extrabold md:text-4xl">
                    {" "}
                    I'm Osama Khalil
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full text-start leading-3 text-yellow-50 md:w-3/4 md:pl-2">
              <span className="text-sm font-semibold text-yellow-50">
                Software engineer, Obsessed with building interactive UIs,
                currently working at{" "}
                <Link
                  href={"https://www.synapse-analytics.io/"}
                  target="_blank"
                >
                  {" "}
                  <span className="w-full border-b-2 border-dotted border-violet-500 text-yellow-50">
                    Synapse Analytics{" "}
                  </span>
                </Link>
              </span>
            </div>
          </div>

          <motion.div
            className="mx-auto mt-4 flex flex-col justify-end sm:mt-0 md:mx-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            {/* IMAGES */}
            <Image
              src={me}
              alt="A picture of myself :)"
              className="w-50 h-40 rounded-xl object-cover shadow-md"
              width="150"
              height="100"
              placeholder="blur"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="mx-auto mt-4 flex w-5/6 max-w-[680px] flex-wrap px-1 pt-4 font-bold sm:w-2/4 md:justify-between md:px-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={"https://www.linkedin.com/in/osama-khalil98/"}
            target="_blank"
          >
            <span className="mr-3 border-b-2 border-dotted border-lime-400 text-yellow-50 md:mr-0">
              Linkedin{" "}
            </span>
          </Link>
          <Link href={"mailto:osadx35@gmail.com"}>
            <span className="mr-3 border-b-2 border-dotted border-fuchsia-700 text-yellow-50 md:mr-0">
              Email{" "}
            </span>
          </Link>
          <Link href={"https://github.com/osamakhalil98/"} target="_blank">
            <span className="mr-3 border-b-2 border-dotted border-red-400 text-yellow-50 md:mr-0">
              Github{" "}
            </span>
          </Link>
          <Link href={"https://codepen.io/osadxen/"} target="_blank">
            <span className="mr-3 border-b-2 border-dotted border-rose-800 text-yellow-50 md:mr-0">
              Codepen{" "}
            </span>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1NL1xID4YAZxaIZHtwyiRzyfSRb_QhI_Y/view?usp=sharing"
            }
            target="_blank"
          >
            <span className="mr-3 border-b-2 border-dotted border-amber-500 text-yellow-50 md:mr-0">
              Resume{" "}
            </span>
          </Link>
          <Link href={"Timeline"}>
            <span className="mr-3 border-b-2 border-dotted border-blue-500 text-yellow-50 md:mr-0">
              Timeline{" "}
            </span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mx-auto mt-4 flex w-5/6 max-w-[680px] px-1 pb-4 pt-4 text-yellow-50 sm:w-2/4 md:justify-start md:px-2"
        >
          <div className="text-md text-start font-bold leading-6 text-yellow-50 sm:text-lg">
            I'm a front-end engineer, born and raised in Cairo - Egypt{" "}
            <span className="bg-none text-inherit">🇪🇬</span>. Very Interested in
            building interactive UIs. I have a bachelor's degree in computer
            science, Class of 2020. I have +2 years of professional experience
            in Front-end development and the cycle of software (web) development
            in general. constantly trying out new tech in the very rapid
            javascript world we're living in. currently on a mission to learn
            Vue.js, if you're interested you can see my Tech and Tools i'm
            usually using in my work:{" "}
            <Link href={"/Tech"} className="h-fit w-fit ">
              {" "}
              <span className="border-b-2 border-dotted border-pink-700 text-yellow-50">
                Tech + Tools{" "}
              </span>
            </Link>{" "}
            . My Top hobbies include: listening to music, watching movies,
            gaming, and avoid writing regex. A wannabe Javascript ninja
            engineer. <span>{hobbies[currentIndex]?.logo}</span>
          </div>
        </motion.div>
        <div className="mx-auto flex w-5/6 max-w-[680px] flex-col px-1 pb-4 pt-4 text-yellow-50 md:w-2/4 md:justify-start md:px-2">
          <p className="mb-2 flex-grow text-center text-2xl font-extrabold md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-transparent">
              Wanna check out projects i've worked on{" "}
            </span>
            <span className="bg-none text-inherit">👀</span>?
          </p>

          <Link href="/Projects">
            <motion.div
              whileTap={{ scale: 0.9 }}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-md border border-zinc-800 p-4 text-center text-2xl font-bold shadow-md hover:bg-zinc-800  md:mx-0 md:mb-0"
            >
              <span className="bg-none text-inherit">✨ </span>
              <span className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text  text-transparent">
                Projects{" "}
              </span>
              <span className="bg-none text-inherit"> ✨</span>
            </motion.div>
          </Link>
        </div>
      </main>
    </>
  );
}
