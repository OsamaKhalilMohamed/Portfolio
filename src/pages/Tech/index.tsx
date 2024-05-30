import Head from "next/head";
import React from "react";
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
        <div className="mb-8 w-full">
          <h1 className="mt-10 bg-gradient-to-r text-4xl font-bold text-[#103090] dark:to-slate-200   dark:text-[#7b8afe] md:text-7xl ">
            Tech
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r font-bold text-[#103090] dark:to-slate-200  dark:text-[#7b8afe] md:text-lg">
            My main tech drivers that i use when building apps.
          </p>
        </div>
        <ul className="flow-col mb-8 mt-4 h-fit w-full list-disc px-6">
          {techs?.map((tech) => (
            <div className="mb-2 w-full" key={tech}>
              <li className="font-inter text-lg">{tech}</li>
            </div>
          ))}
        </ul>
        <hr className="border-1 w-full border-[#d58322] duration-500  dark:border-[#d2a258]" />

        <div className="mb-8 ">
          <h1 className="mt-10 bg-gradient-to-r text-4xl font-bold text-[#103090] dark:to-slate-200   dark:text-[#7b8afe] md:text-7xl">
            Tools
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r font-bold text-[#103090] dark:to-slate-200  dark:text-[#7b8afe] md:text-lg">
            My most used software tools for development and personal use.
          </p>
        </div>
        <ul className="mb-8 mt-4  h-fit w-full list-disc flex-col px-6">
          {tools?.map((tech) => (
            <div className="mb-2 w-full" key={tech}>
              <li className="font-inter text-lg">{tech}</li>
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
