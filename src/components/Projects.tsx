import Head from "next/head";
import React from "react";

import innerNote from "../../public/innerNote.png";
import sadaqati from "../../public/sadaqati.png";
import aly from "../../public/aly.png";

import konanhero from "../../public/konanhero.png";
import autoSkip from "../../public/Auto-Skip.png";

import Link from "next/link";
import ProjectShowCase from "./ProjectShowCase";

export default function Projects(): React.ReactElement {
  let allTabs = [
    {
      id: "Professional",
      name: "Professional",
    },
    {
      id: "Personal",
      name: "Personal",
    },
  ];

  const projects = [
    {
      title: "KONAN",
      logo: konanhero,
      stack: ["Typescript", "React", "React-query", "Django"],
      type: "professional",
      date: "2022 - present",
    },

    {
      title: "Aly",
      logo: aly,
      stack: ["Typescript", "React", "React-query", "Django"],
      type: "professional",
      date: "Apr 2022 - Aug 2022",
    },
    {
      title: "Sadaqhati",
      logo: sadaqati,
      stack: ["Typescript", "React", "React-query", "Django"],
      type: "professional",
      date: "Nov 2020 - Feb 2021",
    },
    {
      title: "InnerNote",
      logo: innerNote,
      stack: ["Typescript", "React", "React-query", "Django"],
      type: "personal",
      date: "2022",
    },
    {
      title: "Auto skip YT ads extenstion",
      logo: autoSkip,
      stack: ["Typescript", "React", "React-query", "Django"],
      type: "personal",
      date: "2024",
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
        className={`flex w-full flex-col flex-wrap items-center justify-center`}
      >
        {projects.map((project) => {
          return (
            <div className="mt-8 flex min-h-full w-full max-w-[1000] flex-col md:flex-row">
              <div
                className="mb-6 flex w-full items-center justify-center"
                key={project.title}
              >
                <ProjectShowCase
                  stack={project.stack}
                  title={project.title}
                  imageSrc={project.logo}
                  date={project.date}
                  type={project.type}
                />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
