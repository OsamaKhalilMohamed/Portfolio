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
      title: "Most Used Language",
      description:
        "Once you go typescript, you can't go back! (just use :any), but really using typescript will enrich your app and make your codebase much more reliable, safe and production ready.",
      logo: typescript,
      logoHeight: 40,
    },

    {
      name: "React",
      title: "Most Used Framework",
      description:
        "Well, really i love using React especially with Next.js but overall it deserves to be #1, it's scalable and easy to start with, and you have ton of resources to guide you, as well as large community and very good team behind it!",
      logo: react,
    },
    {
      name: "other tools",
      title: "other tech?",
      description:
        "This is a list of other tech i usually use and familiar with: REST API, GraphQL, MongoDB, Redux toolkit, NodeJs, ExpressJs, React-Router, React-Query, TailwindCSS, and MUI.",
      logo: toolsLogo,
      logoHeight: 40,
    },
  ];

  const tools = [
    {
      name: "VSC",
      title: "My Favorite IDE",
      description: (
        <>
          {" "}
          VSC is my favorite IDE, the extension ecosystem provides great DX,
          these are my top 5 extensions i use (other than prettier) <br />
          1-pretty-typescript-errors <br /> 2-import cost <br /> 3-Gitlens{" "}
          <br />
          4-Auto import (ES6, TS, JSX, TSX) <br /> 5-code spell checker. <br />
          font family: 'Droid Sans Mono', 'monospace', monospace. <br />
          theme: Gitlab dark
        </>
      ),
      logo: vsc,
    },
    {
      name: "Vercel",
      title: "Most admired platform",
      description: (
        <>
          Vercel is one of the best in the field from providing robust way to
          create react apps with Next.js framework to deploying your app and
          using serverless functions to ease your infra process. i mainly use
          vercel deployment service to host all my side projects.
        </>
      ),
      logo: vercel,
    },
    {
      name: "other tools",
      title: "other tools?",
      description:
        "This is a list of other tools i usually use and familiar with: Git, Github, Gitlab, Storybook, YouTrack, Jira, Grammarly, and Authy for managing passwords and 2FAs.",
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
