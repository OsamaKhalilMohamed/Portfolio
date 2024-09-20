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
  const homeRef = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-zinc-950">
        <div
          id="home"
          ref={homeRef}
          className="mt-8 flex w-5/6 max-w-[1000px] flex-col items-center justify-center  md:mt-14"
        >
          <div className="flex	h-full w-full flex-col items-start  text-center text-2xl text-[#103090] text-transparent dark:text-white md:max-h-[900px] md:min-h-[15dvh] lg:min-h-[20dvh] xl:min-h-[25dvh]">
            <div className="flex h-full w-full grow flex-col justify-between ">
              <div className="flex h-full w-full flex-col justify-center">
                <div className="flex flex-grow flex-col flex-nowrap items-start justify-center md:mx-0 md:justify-start md:px-0">
                  <p className="flex text-start text-lg text-[#423411] dark:text-[#eaeaea]">
                    Hello, I'm
                  </p>
                  <h1 className="-ml-0.5 flex px-0 text-start text-5xl font-bold text-[#103090] dark:text-white md:-ml-1.5 md:text-8xl">
                    Osama Khalil
                  </h1>
                </div>
              </div>

              <div className="mt-4 w-full text-start leading-8  md:ml-0 md:leading-8">
                <span className="font-inter text-lg text-gray-500 dark:text-gray-500 md:text-xl">
                  <span className="font-inter text-lg text-gray-900 dark:text-gray-300 md:text-xl">
                    Software engineer,{" "}
                  </span>{" "}
                  Passionate about web development and building frontends.
                </span>
                <br />
                <span className="font-inter text-lg text-gray-500 dark:text-gray-500 md:text-xl">
                  More than +3 years of experience. Currently working at{"   "}
                  <Link href={"https://www.sami.com.sa/"} target="_blank">
                    <span className="text-neutral-700 hover:text-neutral-500 dark:text-yellow-50 dark:hover:text-yellow-100">
                      {" "}
                      SAMI <ExternalIcon link="https://www.sami.com.sa/" />
                    </span>
                  </Link>
                </span>
              </div>
              <div className="mt-8 flex h-full grow flex-wrap items-end justify-start gap-3 pb-4  font-inter text-lg md:ml-0 md:mt-14 md:max-w-[1000px] md:items-end">
                <Link
                  href={"https://github.com/osamakhalil98/"}
                  target="_blank"
                >
                  <span className="text-neutral-700 hover:text-neutral-500 dark:text-yellow-50 dark:hover:text-yellow-100 md:mr-0">
                    Github{" "}
                    <ExternalIcon link="https://github.com/osamakhalil98/" />
                  </span>
                </Link>

                <Link
                  href={"https://www.linkedin.com/in/osama-khalil98/"}
                  target="_blank"
                >
                  <span className="text-neutral-700 hover:text-neutral-500 dark:text-yellow-50 dark:hover:text-yellow-100 md:mr-0">
                    Linkedin{" "}
                    <ExternalIcon link="https://www.linkedin.com/in/osama-khalil98" />
                  </span>
                </Link>

                <Link href={"Timeline"} target="_blank">
                  <span className="text-neutral-700 hover:text-neutral-500 dark:text-yellow-50 dark:hover:text-yellow-100 md:mr-0">
                    Timeline <ExternalIcon link="Timeline" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <hr className="w-[100vw] border border-pink-100 dark:border-slate-900" />
        </div>

        {/* Projects section */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{
            once: true,
            margin: `0px 0px  -200px 0px`,
          }}
          transition={{ bounce: 0.4, type: "spring", duration: 1.5 }}
          id="projects"
          className="mx-auto mt-8 flex w-5/6 max-w-[1000px] flex-col pb-4 text-neutral-950 dark:text-yellow-50 md:mt-16 md:justify-start"
        >
          <h1 className="mb-1 mt-8 text-start font-inter text-4xl font-bold text-gray-500 dark:text-gray-500 md:-ml-1.5 md:text-5xl">
            <span className=" text-gray-900 dark:text-gray-300">1.</span>{" "}
            Projects.
          </h1>
          <Projects />
        </motion.div>

        <hr className="w-full border border-pink-100 dark:border-slate-900" />

        {/* About me section*/}
        <div
          id="about"
          className="mb-12 mt-8 flex w-5/6 max-w-[1000px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <AboutMe />
          <div className="my-2 mb-4 flex w-full flex-col justify-start gap-2 md:flex-row md:justify-center">
            {/* IMAGES */}
            <Image
              src={osama2}
              alt="A picture of myself :)"
              width="800"
              height="510"
              placeholder="blur"
              className="w-full rounded-3xl  md:w-3/6"
              quality={100}
              priority={true}
            />
          </div>
        </div>

        <hr className="w-full border border-pink-100 dark:border-slate-900" />
      </main>
    </>
  );
}
