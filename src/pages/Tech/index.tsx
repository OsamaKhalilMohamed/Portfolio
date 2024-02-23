import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TechAndTools(): React.ReactElement {
  const techs = [
    "Typescript",
    "React",
    "NextJS",
    "REST API",
    "GraphQL",
    "MongoDB",
    "Docker",
    "Redux toolkit",
    "NodeJS",
    "ExpressJS",
    "Cypress",
    "React-Router",
    "React-Query",
    "TailwindCSS",
    "MUI",
  ];

  const tools = [
    "Visual studio code",
    "Vercel",
    "Git",
    "Github",
    "Gitlab",
    "Storybook",
    "npm",
    "yarn",
    "YouTrack",
    "Jira",
    "T3-stack to bootstrap my side-projects",
    "figma",
    "metabase",
    "sentry",
    "framer",
    "framer motion",
    "Grammarly",
    "Authy",
  ];

  return (
    <>
      <Head>
        <title>Osama Khalil - Tech</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Tech and tools i've used!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen w-5/6 flex-col items-start justify-center overflow-x-hidden lg:max-w-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 w-full"
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-100  dark:to-slate-200 md:text-7xl ">
            Tech
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text font-bold text-transparent dark:from-cyan-100 dark:to-slate-200 md:text-lg">
            My main tech drivers that i use when building apps.
          </p>
        </motion.div>
        <motion.ul className="flow-col mb-8 mt-4 h-fit w-full list-disc px-6">
          {techs?.map((tech) => (
            <motion.div className="mb-2 w-full" key={tech}>
              <li className="text-lg font-bold">{tech}</li>
            </motion.div>
          ))}
        </motion.ul>
        <hr className="border-1 w-full border-amber-600 duration-500 hover:border-red-500 dark:border-amber-100" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 "
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-100  dark:to-slate-200 md:text-7xl">
            Tools
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text font-bold text-transparent dark:from-cyan-100 dark:to-slate-200 md:text-lg">
            My most used software tools for development and personal use.
          </p>
        </motion.div>
        <motion.ul className="mb-8 mt-4  h-fit w-full list-disc flex-col px-6">
          {tools?.map((tech) => (
            <motion.div className="mb-2 w-full" key={tech}>
              <li className="text-lg font-bold">{tech}</li>
            </motion.div>
          ))}
        </motion.ul>
        <motion.div className="mb-2 flex w-full justify-center ">
          <Link href={"/"}>
            <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-lg text-transparent dark:from-cyan-100  dark:to-slate-200">
              Home {"->"}
            </p>
          </Link>
        </motion.div>
      </main>
    </>
  );
}
