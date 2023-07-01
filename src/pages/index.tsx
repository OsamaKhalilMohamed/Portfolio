import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  EmailSVGIcon,
  GithubSVGIcon,
  LinkedinSVGIcon,
} from "~/assets/SvgIcons";

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
        className={`flex min-h-screen flex-col items-center justify-center`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl text-transparent"
        >
          <p className="flex text-center text-sm text-cyan-100 md:justify-start">
            Hi <span className="animate-waving-hand text-center">👋🏻</span>,
          </p>{" "}
          <h1 className="text-4xl font-extrabold sm:text-6xl">
            {" "}
            I'm Osama Khalil
          </h1>
        </motion.div>
        <div className="mt-8 w-5/6 grid-flow-col grid-cols-2 grid-rows-2 gap-8 md:grid md:w-2/3 lg:w-2/4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 cursor-pointer rounded-lg bg-stone-800 p-5 text-center shadow-md hover:bg-stone-700 md:mb-0"
          >
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
              Projects
            </p>
          </motion.div>
          <Link href="/Skills">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 cursor-pointer rounded-lg bg-stone-800 p-5 text-center shadow-md hover:bg-stone-700 md:mb-0"
            >
              <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                Skills + Tools
              </p>
            </motion.div>
          </Link>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 cursor-pointer rounded-lg bg-stone-800 p-5 text-center shadow-md hover:bg-stone-700 md:mb-0"
          >
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
              Experiences
            </p>
          </motion.div>
          <Link href={"/About"}>
            {" "}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 cursor-pointer rounded-lg bg-stone-800 p-5 text-center shadow-md hover:bg-stone-700 md:mb-0"
            >
              <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                About
              </p>
            </motion.div>
          </Link>
        </div>
        <motion.div
          className="mt-10 flex flex-col"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-xl font-bold text-transparent sm:text-2xl">
            Contact + links..
          </h1>
          <motion.div
            className="mt-1 flex flex-row justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={"https://www.linkedin.com/in/osama-khalil98/"}
              target="_blank"
            >
              <LinkedinSVGIcon
                width={24}
                height={24}
                fill={"rgb(207 250 254)"}
              />
            </Link>
            <Link href={"mailto:osadx35@gmail.com"}>
              <EmailSVGIcon width={24} height={24} fill={"rgb(207 250 254)"} />
            </Link>
            <Link href={"https://github.com/osamakhalil98/"} target="_blank">
              <GithubSVGIcon width={24} height={24} fill={"rgb(207 250 254)"} />
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
