import Head from "next/head";
import Link from "next/link";
import osama2 from "../../public/osama2.jpg";
import Image from "next/image";
import Projects from "~/components/Projects";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ExternalIcon from "~/components/ExternalIcon";
import AboutMe from "~/components/AboutMe";

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Osama Khalil - Software engineer</title>
        <meta
          name="description"
          content="Osama Khalil - Software engineer - Home"
        />
        <meta property="og:title" content="Osama Khalil" />
        <meta
          property="og:description"
          content="Passionate software developer"
        />
        <meta
          property="og:image"
          content="https://www.osamakhalil.me/osama2.jpg"
        />
        <meta property="og:url" content="https://www.osamakhalil.me/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="541859888331124" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-[#111110]"></main>
    </>
  );
}
