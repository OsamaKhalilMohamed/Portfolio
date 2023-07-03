import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import me from "../../../public/me.jpg";

export default function About(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Osama Khalil - About</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - About me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden bg-stone-950">
        <motion.div
          className="mb-2 mt-8 flex flex-col"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* IMAGES */}
          <Image
            src={me}
            alt="A picture of myself :)"
            className="h-50 w-50 rounded-xl object-cover shadow-md"
            width="200"
            height="200"
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mt-2 w-full rounded-lg px-6 pb-4 pt-0  sm:mt-4 sm:w-1/2"
        >
          <div>
            <span className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg font-bold text-transparent">
              Hello Hello, glad that you clicked on this About button, even if
              it was by mistake, anyway I'm Osama Khalil, I'm a front-end
              engineer, born and raised in Cairo - Egypt{" "}
            </span>{" "}
            <span className="bg-none text-inherit">🇪🇬</span>
            <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg font-bold text-transparent">
              {" "}
              <br /> I'm very Interested in building interactive UIs. I have a
              bachelor's degree in computer science, Class of 2020. I have +2
              years of professional experience in Front-end development and the
              cycle of software (web) development in general. Currently working
              at{" "}
              <Link
                href={"https://www.synapse-analytics.io/"}
                target="_blank"
                className="h-fit"
              >
                {" "}
                <span
                  className="italic text-cyan-50 underline underline-offset-1
            "
                >
                  Synapse Analytics
                </span>
              </Link>
            </p>
          </div>
          <br />
          <p className="bg-gradient-to-r from-cyan-100 to-slate-200 bg-clip-text text-lg font-bold text-transparent">
            My Top hobbies include : listening to music, watching movies,
            gaming, and avoid writing regex. A wannabe Javascript ninja
            engineer.
          </p>
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
