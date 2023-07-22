import Head from "next/head";
import Link from "next/link";
import synapse from "../../public/synapse.jpeg";
import { motion } from "framer-motion";
import {
  EmailSVGIcon,
  GithubSVGIcon,
  LinkedinSVGIcon,
} from "~/assets/SvgIcons";
import Image from "next/image";

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
        className={`flex h-full min-h-screen flex-col items-center justify-center pb-8  pt-8`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-2xl text-transparent"
        >
          <div className="mx-auto flex w-5/6 flex-col justify-start px-4 sm:w-3/4">
            <div className=" flex flex-col mx-auto">
              <p className="flex text-sm text-cyan-100 text-start">
                Hi <span className="animate-waving-hand">👋🏻</span>,
              </p>{" "}
              <h1 className="text-3xl font-extrabold md:text-6xl text-start">
                {" "}
                I'm Osama Khalil
              </h1>
            </div>
          </div>

          <p className="mx-auto mt-2 flex w-5/6  sm:w-3/4  md:justify-start">
            {" "}
            <span className="text-lg font-extrabold"> Software engineer, Obsessed with building interactive UIs, currently
            working at{" "} <Link
              href={"https://www.synapse-analytics.io/"}
              target="_blank"
            >
              {" "}
              <span className="text-cyan-50 underline underline-offset-1">
                Synapse Analytics{" "}
              </span>
            </Link></span>
          </p>
        </motion.div>

        <div className="mx-auto mt-8 w-5/6 grid-flow-col grid-cols-2 grid-rows-2 gap-8 md:grid md:w-2/3 lg:w-2/4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-stone-900 mb-4  rounded-xl p-5 text-center shadow-md  md:mx-0 md:mb-0"
          >
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
              Projects
            </p>
          </motion.div>
          <Link href="/Tech">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-stone-900 mb-4  rounded-xl p-5 text-center shadow-md  md:mx-0 md:mb-0"
          >
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
              Tech + Tools
            </p>
          </motion.div>
          </Link>

          <Link href="/Timeline">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            className="bg-stone-900 mb-4  rounded-xl p-5 text-center shadow-md  md:mx-0 md:mb-0"
            >
              <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                Timeline
              </p>
            </motion.div>
          </Link>
          <Link href={"/About"}>
            {" "}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            className="bg-stone-900 mb-4  rounded-xl p-5 text-center shadow-md  md:mx-0 md:mb-0"
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
