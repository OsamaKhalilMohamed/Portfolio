import Head from "next/head";
import React from "react";

import innerNote from "../../public/innerNote.png";
import sadaqatihero from "../../public/sHero.png";

import aly from "../../public/aly.png";

import konanhero from "../../public/konanhero.png";
import autoSkip from "../../public/Auto-Skip.png";

import ProjectShowCase from "./ProjectShowCase";

export default function Projects(): React.ReactElement {
  const projects = [
    {
      title: "KONAN",
      logo: konanhero,
      stack: ["Typescript", "React", "Django", "SCSS", "REST"],
      type: "professional",
      description:
        "Working on developing all new features and maintain the frontend for this MLOps platform, it has a lot of features that enable faster decision making for risk officers, automated workflows, visual dashboards and analytics, and many more.",
      date: "2022 - present",
      link: "https://app.konan.ai/",
    },
    {
      title: "Aly",
      logo: aly,
      stack: ["Next.js", "Redux", "React-query", "graphQL"],
      type: "professional",
      description:
        "Aly aims to enrich moroccan lifestyle by providing several utilities and information about a lot of business all over Morocco.",
      date: "Apr 2022 - Aug 2022",
      link: "https://www.aly.ma/",
    },
    {
      title: "Sadaqhati",
      logo: sadaqatihero,
      stack: ["React", "styled-components"],
      type: "professional",
      date: "Nov 2020 - Feb 2021",
      link: "https://sadaqahti.com/en/",
      description:
        "Sadaqati Foundation is a voluntary charitable organization to support the poor and Muslims and provide humanitarian aid in African countries and poor and afflicted countries. It was established in 2015 in the state of Malawi",
    },
    {
      title: "InnerNote",
      logo: innerNote,
      stack: ["Next.js", "tailwind", "mongoDB", "Nodejs", "Redux"],
      type: "personal",
      date: "2022",
      link: "https://inner-note.vercel.app/",
      description:
        "InnerNote is a note sharing web app that lets you share your (confessions - dreams - thoughts - ideas) publicly or privately as well as read and interact with other notes and share them. (under developing).",
    },
    {
      title: "Auto skip YT ads extension",
      logo: autoSkip,
      stack: ["Javascript", "css", "HTML"],
      type: "personal",
      date: "2024",
      link: "https://chromewebstore.google.com/detail/auto-skip-yt-ads/gdjacpddhealmljhbangakjkenohfbgf",
      description:
        "This extension aims to automatically skip the skip-able Youtube ads, so it makes the youtube experience more focused and content-driven!",
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
                  description={project.description}
                  link={project.link}
                />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
