import Head from "next/head";
import React from "react";
import Card from "~/components/Card";
import toolsLogo from "../../../public/tools.png";
import react from "../../../public/react.png";
import vsc from "../../../public/vsc.png";
import vercel from "../../../public/vercel.png";
import { motion } from "framer-motion";
import typescript from "../../../public/typescript.png";
import Link from "next/link";

export default function TechAndTools(): React.ReactElement {
  const techs = [
    {
      name: "Typescript",
      title: "Typescript",
      logoSize: 180,
      description: (
        <div className="text-small mt-2 flex grow flex-col justify-between font-bold text-yellow-50">
          <p>
            Once you go typescript, you can't go back! (just use :any), but
            really using typescript will enrich your app and make your codebase
            much more reliable, safe and production ready.
          </p>
        </div>
      ),
      logo: typescript,
    },

    {
      name: "React",
      title: "React",
      logoSize: 200,
      description: (
        <div className="text-small mt-2 flex grow flex-col justify-between font-bold text-yellow-50">
          <p>
            Well, really i love using React especially with Next.js, it's
            scalable and easy to start with, and you have ton of resources to
            guide you, as well as large community and support behind it!
          </p>
        </div>
      ),

      logo: react,
    },
    {
      name: "other tech",
      title: "other tech?",
      logoSize: 180,
      description: (
        <div className="text-small mt-2 flex grow flex-col justify-between font-bold text-yellow-50">
          This is a list of other tech i usually use and familiar with: <br />
          <p className="text-small mt-2 font-bold text-yellow-50">
            NextJS, REST API, GraphQL, MongoDB, Docker, Redux toolkit, NodeJS,
            ExpressJS, Cypress, React-Router, React-Query, TailwindCSS, and MUI.
          </p>
        </div>
      ),
      logo: toolsLogo,
    },
  ];

  const tools = [
    {
      name: "VSC",
      title: "Visual studio code",
      logoSize: 180,
      description: (
        <div className="text-small mt-2 font-bold text-yellow-50">
          {" "}
          VSC is my favorite IDE, the extension ecosystem provides great DX,
          these are my top 5 extensions i use (other than prettier)
          <p className="text-small mt-2 font-bold text-yellow-50">
            {" "}
            1-pretty-typescript-errors <br /> 2-import cost <br /> 3-Gitlens{" "}
            <br />
            4-Auto import (ES6, TS, JSX, TSX) <br /> 5-code spell checker.{" "}
          </p>
          <br /> font family: monospace. <br />
          theme: Gitlab dark
        </div>
      ),
      logo: vsc,
    },
    {
      name: "Vercel",
      title: "Vercel",
      logoSize: 180,
      description: (
        <p className="text-small mt-2 font-bold text-yellow-50">
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
      logoSize: 180,
      description: (
        <div className="text-small mt-2 font-bold text-yellow-50">
          This is a list of other tools i usually use and familiar with when
          building apps or in personal use:{" "}
          <p className="text-small mt-2 font-bold text-yellow-50">
            Git, Github, Gitlab, Storybook, npm, yarn, YouTrack, Jira, T3-stack
            to bootstrap my side-projects, figma, metabase, sentry, framer,
            framer motion, Grammarly, and Authy for managing passwords / 2FAs.
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
      <main className="flex min-h-screen flex-col items-start justify-start overflow-x-hidden px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-100  dark:to-slate-200 md:text-7xl ">
            Tech
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text font-bold text-transparent dark:from-cyan-100 dark:to-slate-200 md:text-lg">
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
                className={"min-h-[150px]"}
                logoSize={tech.logoSize}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-10 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-100  dark:to-slate-200 md:text-7xl">
            Tools
          </h1>
          <p className="text-md mt-1 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text font-bold text-transparent dark:from-cyan-100 dark:to-slate-200 md:text-lg">
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
                className="mx-auto"
                logoSize={tool.logoSize}
              />
            </motion.div>
          ))}
        </motion.div>
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
