import React, { Fragment } from "react";
import synapse from "../../../public/synapse.jpeg";
import majal from "../../../public/majal.png";
import digitopia from "../../../public/digitopia.jpeg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function TimeLine() {
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
      <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden px-10 md:px-20">
        <div className="mx-auto mt-8 h-fit  bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-center text-transparent dark:from-cyan-100 dark:to-slate-200">
          {" "}
          <h1 className="break-all text-3xl font-bold md:text-6xl">Timeline</h1>
        </div>
        <div className="w-5/6 max-w-[700px] sm:ml-12 sm:w-1/2">
          <ol className="relative mt-8 border-l border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-400  ring-8 ring-gray-400  dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={synapse}
                  alt={"Synapse-analytics logo"}
                />
              </span>
              <h3 className="ml-2 w-full bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-2xl font-bold text-transparent dark:from-cyan-100 dark:to-slate-200">
                Synapse Analytics{" "}
              </h3>
              <time className="mb-2 ml-2 mt-1 block text-sm font-normal leading-none  text-gray-950 dark:text-yellow-50">
                July 2022 - Present
              </time>
              <p className="md:text-md mb-4 ml-2 flex-wrap text-sm  font-semibold text-gray-950 dark:text-yellow-50  md:font-bold">
                Started as an intern in summer of 2022 and then got hired as a
                full-time Front-end engineer at Synapse analytics. Already
                learned a lot. worked on large features, that went live and used
                by large number of clients. psst: if you or your company needs
                MLOps product solution to manage and deploy all of your AI
                models, i have a very cool product, you can use:{" "}
                <span className="border-b-2 border-dotted border-violet-500">
                  <span className="mr-1">
                    <Link
                      href={"https://www.synapse-analytics.io/konan"}
                      target="_blank"
                    >
                      KONAN{" "}
                    </Link>
                  </span>

                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
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
              </p>
            </li>

            <li className="mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-400  ring-8 ring-gray-400  dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={digitopia}
                  alt={"digitopia logo"}
                />
              </span>
              <h3 className=" ml-2 bg-gradient-to-r from-cyan-800 to-slate-600  bg-clip-text text-2xl font-bold text-transparent dark:from-cyan-100 dark:to-slate-200">
                Digitopia Studio{" "}
              </h3>
              <time className="mb-2 ml-2 mt-1 block text-sm font-normal leading-none  text-gray-950 dark:text-yellow-50">
                March 2022 - July 2022
              </time>
              <p className="md:text-md mb-4 ml-2 flex-wrap text-sm  font-semibold text-gray-950 dark:text-yellow-50  md:font-bold">
                My first full-time job after finishing military service, worked
                on maintaining and developing new features to Moroccan platform
                called Aly, this was my first experience to work with a large
                codebase with a good amount of users.
              </p>
            </li>
            <li className=" mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-400  ring-8 ring-gray-400  dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={majal}
                  alt={"majal logo"}
                />
              </span>
              <h3 className=" ml-2 bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-2xl font-bold text-transparent dark:from-cyan-100 dark:to-slate-200">
                Majal Tech{" "}
              </h3>
              <time className="mb-2 ml-2 mt-1 block text-sm font-normal leading-none  text-gray-950 dark:text-yellow-50">
                November 2020 - February 2021
              </time>
              <p className="md:text-md mb-4 ml-2 flex-wrap text-sm  font-semibold text-gray-950 dark:text-yellow-50  md:font-bold">
                My first ever full-time job, was really a good start for me,
                learned how to work with tools like Redux, different
                React-hooks, i18n localization and more. unfortunately, it got
                cut short because of my military service was in FEB 2021.
              </p>
            </li>
          </ol>
          <div className="mb-2 flex w-full justify-center">
            <Link href={"/"}>
              <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r from-cyan-800 to-slate-600 bg-clip-text text-lg text-transparent dark:from-cyan-100  dark:to-slate-200">
                Home {"->"}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
