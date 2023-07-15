import React from "react";
import synapse from "../../../public/synapse.jpeg";
import majal from "../../../public/majal.png";
import digitopia from "../../../public/digitopia.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type Props = {};

export default function TimeLine({}: Props) {
  return (
    <>
      <Head>
        <title>Osama Khalil</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Home"
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
          className="mx-auto mt-8 h-fit  bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-center text-transparent"
        >
          {" "}
          <h1 className="break-all text-3xl font-bold md:text-6xl">Timeline</h1>
        </motion.div>
        <div className="w-5/6 sm:ml-12 sm:w-1/2">
          <motion.ol
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mt-8 border-l border-gray-200  dark:border-gray-700"
          >
            <motion.li className="mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={synapse}
                  alt={"Synapse-analytics logo"}
                />
              </span>
              <h3 className="ml-2 w-full bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                Synapse Analytics{" "}
                <span className="ml-1 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  Current
                </span>
              </h3>
              <time className="mb-2 ml-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2022 - Present
              </time>
              <p className="mb-4 ml-2 flex-wrap  text-base font-normal text-gray-500 dark:text-gray-400">
                Started as an intern in summer of 2022 and then got hired as a
                full-time Front-end engineer at Synapse analytics. Already
                learned a lot. worked on large features, that went live and used
                by our lovely clients. psst: if you or your company needs an
                MLOPS product solution to manage and deploy all of your AI
                models, i have a very cool product, you can use:{" "}
                <span className="  italic underline">
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
            </motion.li>

            <motion.li className="mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={digitopia}
                  alt={"digitopia logo"}
                />
              </span>
              <h3 className=" ml-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                Digitopia Studio{" "}
              </h3>
              <time className="mb-2 ml-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                March 2022 - July 2022
              </time>
              <p className="mb-4 ml-2 flex-wrap  text-base font-normal text-gray-500 dark:text-gray-400">
                My first full-time job after finishing military service, worked
                on maintaining and developing new features to Moroccan platform
                called Aly, this was my first experience to work with a large
                codebase with a good amount of users.
              </p>
            </motion.li>
            <motion.li className=" mb-10 ml-6">
              <span className="absolute -left-3 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <Image
                  className="h-50 w-50 rounded-xl object-cover shadow-md"
                  placeholder="blur"
                  src={majal}
                  alt={"majal logo"}
                />
              </span>
              <h3 className=" ml-2 bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-2xl font-bold text-transparent">
                Majal Tech{" "}
              </h3>
              <time className="mb-2 ml-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                November 2020 - February 2021
              </time>
              <p className="mb-4 ml-2 flex-wrap  text-base font-normal text-gray-500 dark:text-gray-400">
                My first ever full-time job, was really a good start for me,
                learned how to work with tools like Redux, different
                React-hooks, i18n localization and more. unfortunately, it got
                cut short because of my military service was in FEB 2021.
              </p>
            </motion.li>
          </motion.ol>
          <motion.div className="mb-2 flex w-full justify-center">
            <Link href={"/"}>
              <p className="mx-auto my-2 cursor-pointer bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg text-transparent">
                Home {"->"}
              </p>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
