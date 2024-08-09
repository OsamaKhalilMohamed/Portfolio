import Head from "next/head";
import React from "react";

import innerNote from "../../public/innerNote.png";
import sadaqatihero from "../../public/sHero.png";

import aly from "../../public/aly.png";
import aly2 from "../../public/aly2.png";

import autoSkip from "../../public/Auto-Skip.png";
import konanhero3 from "../../public/konanhero3.png";
import konan2 from "../../public/konan2.png";
import konan3 from "../../public/konan3.png";
import konan5 from "../../public/konan5.png";
import konan6 from "../../public/konan6.png";
import konan7 from "../../public/konan7.png";
import ProjectShowCase from "./ProjectShowCase";
import konanlogo from "../../public/konanlogo.svg";
import konanlogodark from "../../public/konanlogodark.svg";
import alylogo from "../../public/alylogo.webp";
import sadaqatilogo from "../../public/sadaqatilogo.png";
import { useTheme } from "next-themes";

export default function Projects(): React.ReactElement {
  const { theme } = useTheme();

  const projects = [
    {
      title: "KONAN",
      archives: [konanhero3, konan2, konan3, konan5, konan6, konan7],
      stack: ["Typescript", "React", "Django", "REST API", "and more.."],
      type: "Professional",
      description:
        "KONAN is MLOps platform, provides key features to analyze and track your deployed models, as well as providing use cases such as credit scoring.",
      date: "2022 - present",
      link: "https://app.konan.ai/",
      logo: { size: 120, src: theme === "light" ? konanlogo : konanlogodark },
    },
    {
      title: "Aly",
      archives: [aly, aly2],
      stack: ["Next.js", "Redux", "React-query", "graphQL"],
      type: "Professional",
      description:
        "Aly aims to enrich moroccan lifestyle by providing several utilities and information about a lot of business all over Morocco.",
      date: "Apr 2022 - Aug 2022",
      link: "https://www.aly.ma/",
      logo: { src: alylogo, size: 80 },
    },
    {
      title: "Sadaqhati",
      archives: [sadaqatihero],
      stack: ["React", "styled-components"],
      type: "Professional",
      date: "Nov 2020 - Feb 2021",
      link: "https://sadaqahti.com/en/",
      logo: { src: sadaqatilogo, size: 150 },
      description:
        "Sadaqati Foundation is a voluntary charitable organization to support the poor and Muslims and provide humanitarian aid in African countries and poor and afflicted countries. It was established in 2015 in the state of Malawi",
    },
    {
      title: "InnerNote",
      archives: [innerNote],
      stack: ["Next.js", "tailwind", "mongoDB", "Nodejs", "Redux"],
      type: "Personal",
      date: "2022",
      link: "https://inner-note.vercel.app/",
      description:
        "InnerNote is a note sharing web app that lets you share your (confessions - dreams - thoughts - ideas) publicly or privately as well as read and interact with other notes and share them. (under developing).",
    },
    {
      title: "Auto skip YT ads",
      archives: [autoSkip],
      stack: ["Javascript", "css", "HTML"],
      type: "Personal",
      date: "2024",
      link: "https://chromewebstore.google.com/detail/auto-skip-yt-ads/gdjacpddhealmljhbangakjkenohfbgf",
      description:
        "This chrome extension aims to automatically skip the skip-able Youtube ads, so it makes the youtube experience more focused and content-driven!",
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
        {projects.map((project, index) => {
          return (
            <div
              className="mt-8 flex min-h-full w-full max-w-[1000] flex-col md:flex-row"
              key={`${project.title}-${index}`}
            >
              <div
                className="mb-6 flex w-full items-center justify-center"
                key={project.title}
              >
                <ProjectShowCase
                  stack={project.stack}
                  title={project.title}
                  archives={project.archives}
                  date={project.date}
                  type={project.type}
                  description={project.description}
                  link={project.link}
                  logo={project.logo}
                />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
