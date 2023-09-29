import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "~/components/Card";
import innerNote from "../../../public/innerNote.png";
import blonded from "../../../public/endless.webp";
import sadaqati from "../../../public/sadaqati.png";
import aly from "../../../public/aly.png";
import Konan from "../../../public/Vector.png";
import Link from "next/link";

export default function Projects(): React.ReactElement {
  const [tab, setTab] = useState<{ active: string; hidden: string }>({
    active: "Personal",
    hidden: "Professional",
  });

  const personalProjects = [
    {
      title: "InnerNote",
      logo: innerNote,
      logoSize: 800,
      description: (
        <div className="flex flex-col justify-center">
          <p className="text-small mt-2 font-bold text-yellow-50">
            InnerNote is a web app that let you share your confessions/ dreams/
            thoughts/ ideas publicly or privately as well as see other notes and
            interact with them. (under developing).
          </p>
          <br />
          <span className="mx-auto self-center border-b-2 border-dotted border-violet-500 text-center">
            <span className="text-small mr-1 mt-2 font-bold text-yellow-50">
              <Link href={"https://inner-note.vercel.app/"} target="_blank">
                Live{" "}
              </Link>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-4 w-4 cursor-pointer"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </span>
        </div>
      ),
    },
  ];

  const professionalProjects = [
    {
      title: "KONAN",
      logo: Konan,
      logoSize: 900,
      description: (
        <div className="flex grow flex-col justify-between">
          <p className="text-small mt-2 font-bold text-yellow-50">
            The AI decisioning platform that enables financial institutions to
            fully automate their credit risk policy workflows, give out
            instantaneous decisions and lower non-performing loans.
          </p>
          <br />
          <span className="mx-auto self-center  border-b-2 border-dotted border-violet-500 text-center">
            <span className="text-small mr-1 mt-2 font-bold text-yellow-50">
              <Link href={"https://app.konan.ai/login"} target="_blank">
                Live{" "}
              </Link>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-4 w-4 cursor-pointer"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </span>
        </div>
      ),
    },

    {
      title: "Aly",
      logo: aly,
      logoSize: 130,
      description: (
        <div className="flex grow flex-col justify-between">
          <p className="text-small mt-2 font-bold text-yellow-50">
            Aly allows Moroccans to help each other and share their opinions and
            experiences Connect with the community and find the best Businesses
            in your area
          </p>
          <br />
          <span className="mx-auto self-center  border-b-2 border-dotted border-violet-500 text-center">
            <span className="text-small mr-1 mt-2 font-bold text-yellow-50">
              <Link href={"https://www.aly.ma/"} target="_blank">
                Live{" "}
              </Link>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-4 w-4 cursor-pointer"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </span>
        </div>
      ),
    },
    {
      title: "Sadaqhati",
      logo: sadaqati,
      logoSize: 100,
      description: (
        <div className="flex grow flex-col justify-between">
          <p className="text-small mt-2 font-bold text-yellow-50">
            (Sadaqati Africa) is a charitable organization that works to improve
            the lives of individuals and communities most in need of Muslims and
            others in African countries.
          </p>
          <br />
          <span className="mx-auto self-center border-b-2 border-dotted border-violet-500 text-center">
            <span className="text-small mr-1 mt-2 font-bold text-yellow-50">
              <Link href={"https://sadaqahti.com/en/"} target="_blank">
                Live{" "}
              </Link>
            </span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-4 w-4 cursor-pointer"
                style={{ display: "inline", verticalAlign: "middle" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Osama Khalil</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min flex-wrap-h-screen flex flex-col items-center justify-center`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 flex h-fit items-center  bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-transparent"
        >
          <h1 className="mr-2 cursor-pointer break-all text-3xl font-bold md:mr-4  md:text-6xl">
            {tab.active}
          </h1>
          <h1
            className="text-md mr-4 cursor-pointer break-all font-bold text-yellow-50  md:text-2xl "
            onClick={() => setTab({ hidden: tab.active, active: tab.hidden })}
          >
            {tab.hidden}
          </h1>
        </motion.div>
        <div className="mt-8 flex min-h-full w-5/6 max-w-[1100px] flex-col  md:flex-row">
          {tab.active === "Personal"
            ? personalProjects.map((project) => (
                <div
                  className="mx-auto mb-6 w-full md:w-1/2"
                  key={project.title}
                >
                  <Card
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    logo={project.logo}
                    logoSize={project.logoSize}
                    animate={false}
                  />
                </div>
              ))
            : professionalProjects.map((project) => (
                <div
                  className="mb-6 w-full md:mr-8 md:w-1/2"
                  key={project.title}
                >
                  <Card
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    logo={project.logo}
                    logoSize={project.logoSize}
                    animate={false}
                    className={
                      project.title === "KONAN" ? "brightness-0 invert" : ""
                    }
                  />
                </div>
              ))}
        </div>
        <motion.div className="mb-2 mt-10 flex w-full justify-center">
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
