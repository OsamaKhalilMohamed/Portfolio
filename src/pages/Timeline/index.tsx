import React, { Fragment } from "react";
import synapse from "../../../public/synapse.jpeg";
import majal from "../../../public/majal.png";
import digitopia from "../../../public/digitopia.jpeg";
import sami from "../../../public/sami.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { renderTextWithRandomClasses } from "~/utils/helpers";

export default function TimeLine() {
  const timeline = [
    {
      name: "SAMI",
      date: "AUG 2024 - present",
      logo: sami,
      description:
        "As i'm starting a new chapter in my journey, with SAMI advanced electronics as a senior frontend developer. very excited and grateful for this one!",
      logoAlt: "sami-logo",
      link: "https://www.sami.com.sa/advanced-electronics",
    },
    {
      name: "Synapse Analytics",
      date: "JUL 2022 - JUL 2024",
      logo: synapse,
      description:
        "Synapse was a very unique and crucial step in my career, greate team, greate enviroment, very promising products. forever grateful!",
      logoAlt: "Synapse-logo",
      link: "https://www.synapse-analytics.io/",
    },
    {
      name: "Digitopia Studio",
      date: "MAR 2022 - JUL 2022",
      logo: digitopia,
      description:
        "My first full-time job after finishing military service, worked  on maintaining and developing new features to Moroccan platform called Aly, this was my first experience to work with a large codebase with a good amount of users.",
      logoAlt: "Digitopia-logo",
      link: "",
    },
    {
      name: "Majal tech",
      date: "NOV 2020 - FEB 2021",
      logo: majal,
      description:
        " My first ever full-time job, was really a good start for me, learned how to work with tools like Redux, different React-hooks, i18n localization and more. unfortunately, it got cut short because of my military service was in FEB 2021.",
      logoAlt: "Majal-logo",
      link: "",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Osama Khalil</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Timeline"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-zinc-950">
        <div className="mx-auto mt-8 h-fit   text-center text-[#103090] dark:text-[#7b8afe]">
          {" "}
          <h1 className="break-all text-6xl font-bold text-[#103090] dark:text-white md:-ml-1.5 md:text-8xl">
            Timeline
          </h1>
        </div>
        <div className="mx-4 w-5/6 max-w-[700px] ">
          <ol className="relative mt-8 border-l border-gray-700">
            {timeline.map((journey, index) => (
              <Fragment key={index}>
                <li className="mb-10 ml-6">
                  <span className="absolute -left-5 mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400  ring-8 ring-gray-400  dark:bg-blue-900 dark:ring-gray-900">
                    <Image
                      className="h-100 w-100 rounded-full object-cover shadow-md"
                      placeholder="blur"
                      src={journey.logo}
                      alt={journey.logoAlt as string}
                    />
                  </span>

                  <Link href={journey.link}>
                    <h3 className="ml-4 cursor-pointer text-2xl font-bold text-[#103090] hover:text-[#22356c] dark:text-white">
                      {journey.name}{" "}
                    </h3>
                  </Link>

                  <time className="my-4 ml-4 mt-1 block text-sm font-normal leading-none  text-gray-950 dark:text-yellow-50">
                    {journey.date}
                  </time>
                  <p className="mb-4 ml-4 flex-wrap text-lg font-normal leading-8 tracking-wide text-gray-900 dark:text-gray-300 md:font-inter md:text-xl  md:leading-10">
                    {renderTextWithRandomClasses(journey.description)}
                  </p>
                </li>
              </Fragment>
            ))}
          </ol>
          <div className="mb-2 flex w-full justify-center">
            <Link href={"/"}>
              <p className="mx-auto my-2 cursor-pointer  text-lg  dark:from-cyan-100  dark:to-slate-200">
                Home {"->"}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
