import Head from "next/head";
import React from "react";
import Card from "~/components/Card";
import toolsLogo from "../../../public/tools.png";
import react from "../../../public/react.svg";
import vsc from "../../../public/vsc.png";
import vercel from "../../../public/vercel.svg";
import { motion } from "framer-motion";
import typescript from "../../../public/typescript.png";
import Link from "next/link";

export default function TechAndTools(): React.ReactElement {
  const techs = [
    {
      name: "Typescript",
      title: "Typescript",
      description:
        "Once you go typescript, you can't go back! (just use :any), but really using typescript will enrich your app and make your codebase much more reliable, safe and production ready.",
      logo: typescript,
      logoHeight: 40,
    },

    {
      name: "React",
      title: "React",
      description:
        "Well, really i love using React especially with Next.js but overall it deserves to be #1, it's scalable and easy to start with, and you have ton of resources to guide you, as well as large community and very good team behind it!",
      logo: react,
    },
    {
      name: "other tools",
      title: "other tech?",
      description: (
        <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
          This is a list of other tech i usually use and familiar with: <br />
          <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
            NextJS, REST API, GraphQL, MongoDB, Docker, Redux toolkit, NodeJS,
            ExpressJS, Cypress, React-Router, React-Query, TailwindCSS, and MUI.
          </p>
        </p>
      ),
      logo: toolsLogo,
      logoHeight: 40,
    },
  ];

  const tools = [
    {
      name: "VSC",
      title: "Visual studio code",
      description: (
        <div className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
          {" "}
          VSC is my favorite IDE, the extension ecosystem provides great DX,
          these are my top 5 extensions i use (other than prettier)
          <p className="text-small mb-2 mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
            {" "}
            1-pretty-typescript-errors <br /> 2-import cost <br /> 3-Gitlens{" "}
            <br />
            4-Auto import (ES6, TS, JSX, TSX) <br /> 5-code spell checker.{" "}
            <br />{" "}
          </p>
          font family: monospace. <br />
          theme: Gitlab dark
        </div>
      ),
      logo: vsc,
    },
    {
      name: "Vercel",
      title: "Vercel",
      description: (
        <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
          Vercel is one of the best in the field from providing robust way to
          create react apps with Next.js framework to deploying your app and
          using serverless functions to ease your infra process. i mainly use
          vercel deployment service to host all my side projects.
        </p>
      ),
      logo: vercel,
    },
    {
      name: "other tools",
      title: "other tools?",
      description: (
        <div className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
          This is a list of other tools i usually use and familiar with when
          building apps or in personal use:{" "}
          <p className="text-small mt-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-medium text-transparent">
            Git, Github, Gitlab, Storybook, npm, yarn, YouTrack, Jira, figma,
            framer, framer motion, Grammarly, and Authy for managing passwords
            and 2FAs.
          </p>
        </div>
      ),
      logo: toolsLogo,
    },
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
      <main className="flex min-h-screen flex-col items-start justify-start overflow-x-hidden bg-stone-950 px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-4xl font-bold text-transparent md:text-7xl ">
            Tech
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-bold text-transparent md:text-lg">
            My main tech drivers that i use when building apps.
          </p>
        </motion.div>
        <motion.div className="mt-4 grid h-fit w-full grid-flow-col grid-cols-1 grid-rows-3 md:grid-flow-row  md:grid-cols-3 md:grid-rows-1 md:gap-6">
          {techs?.map((tech) => (
            <motion.div className="mb-8 w-full" key={tech.name}>
              <Card
                title={tech.title}
                description={tech.description}
                logo={tech.logo}
                logoHeight={tech?.logoHeight}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-4xl font-bold text-transparent md:text-7xl ">
            Tools
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text font-bold text-transparent md:text-lg">
            My most used software tools for development and personal use.
          </p>
        </motion.div>
        <motion.div className="mt-4 grid h-fit w-full grid-flow-col grid-cols-1 grid-rows-3 md:grid-flow-row  md:grid-cols-3 md:grid-rows-1 md:gap-6">
          {tools?.map((tool) => (
            <motion.div className="mb-8 w-full" key={tool.name}>
              <Card
                title={tool.title}
                description={tool.description}
                logo={tool.logo}
                //logoHeight={tool?.logoHeight}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mb-2 flex w-full justify-center">
          <Link href={"/"}>
            <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg text-transparent">
              Home {"->"}
            </p>
          </Link>
        </motion.div>
      </main>
    </>
  );
}
