import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function TechAndTools(): React.ReactElement {
  const techs = [
    "Typescript",
    "React",
    "React-Router",
    "React-Query",
    "NextJS",
    "Redux toolkit",
    "NodeJS",
    "ExpressJS",
    "REST API",
    "GraphQL",
    "MongoDB",
    "Docker",
    "Cypress",
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
      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-zinc-950">
        <div className="mb-8 w-5/6 max-w-[1000px]">
          <h1 className="mt-10 px-0 text-start text-5xl font-bold text-[#103090] dark:text-white md:-ml-1.5 md:text-8xl ">
            Tech
          </h1>
          <p className="text-md mt-1 font-bold text-[#103090] dark:text-white md:text-lg">
            My main tech drivers that i use when building apps.
          </p>
        </div>
        <ul className="flow-col mb-8 mt-4 h-fit w-5/6 max-w-[1000px] list-disc px-6">
          {techs?.map((tech) => (
            <div className="mb-8 w-full" key={tech}>
              <li>
                <span
                  className={`bg-gradient-to-l from-pink-500 to-yellow-400 bg-clip-text font-inter text-2xl font-bold text-transparent md:text-4xl`}
                >
                  {tech}
                </span>
              </li>
            </div>
          ))}
        </ul>
        <hr className="border-1 w-full border-[#d58322] duration-500  dark:border-[#d2a258]" />

        <div className="mb-8 w-5/6 max-w-[1000px]">
          <h1 className="mt-10 px-0 text-start text-5xl font-bold text-[#103090] dark:text-white md:-ml-1.5 md:text-8xl ">
            Tools
          </h1>
          <p className="text-md mt-1 font-bold text-[#103090] dark:text-white md:text-lg">
            My most used software tools for development and personal use.
          </p>
        </div>
        <ul className="flow-col mb-8 mt-4 h-fit w-5/6 max-w-[1000px] list-disc px-6">
          {tools?.map((tool) => (
            <div className="mb-8 w-5/6" key={tool}>
              <li>
                <span
                  className={`bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text font-inter text-2xl font-bold text-transparent md:text-4xl`}
                >
                  {tool}
                </span>
              </li>
            </div>
          ))}
        </ul>
        <div className="mb-2 flex w-full justify-center ">
          <Link href={"/"}>
            <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r text-lg text-[#103090] dark:to-slate-200   dark:text-[#7b8afe]">
              Home {"->"}
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
