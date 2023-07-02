import Head from "next/head";
import React from "react";
import Card from "~/components/Card";
import tools from "../../../public/tools.png";
import react from "../../../public/react.svg";
import { motion } from "framer-motion";
import typescript from "../../../public/typescript.png";
import Link from "next/link";

export default function SkillsAndTools(): React.ReactElement {
  const skills = [
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
        "Well, really i love using React especially with Next.js but overall it deserves to be #1, it's scalable and easy to start with with a ton of resources to guide you, as well as large community and very good team behind it!",
      logo: react,
    },
    {
      name: "other tools",
      title: "Other Tech?",
      description:
        "This is a list of other tech i usually use and familiar with: REST API, GraphQL, MongoDB, Redux toolkit, Nodejs, ExpressJs, React-router, React-Query, Tailwind, and MUI.",
      logo: tools,
      logoHeight: 40,
    },
  ];
  return (
    <>
      <Head>
        <title>Osama Khalil - Skills</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Skills and tools i've used!"
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
            Skills
          </h1>
        </motion.div>
        <motion.div className="mt-4 grid h-fit w-full grid-flow-col grid-cols-1 grid-rows-3 md:grid-flow-row  md:grid-cols-3 md:grid-rows-1 md:gap-6">
          {skills?.map((skill) => (
            <motion.div className="mb-8 w-full" key={skill.name}>
              <Card
                title={skill.title}
                description={skill.description}
                logo={skill.logo}
                logoHeight={skill?.logoHeight}
              />
            </motion.div>
          ))}
        </motion.div>
        <Link href={"/"}>
          <p className="my-4 cursor-pointer bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg text-transparent">
            Home {"->"}
          </p>
        </Link>
      </main>
    </>
  );
}
