import Head from "next/head";
import Link from "next/link";
import osama2 from "../../public/osama2.jpeg";
import Image from "next/image";
import Projects from "~/components/Projects";
import synapse2 from "../../public/synapse2.png";
import { useRef } from "react";

export default function Home(): React.ReactElement {
  const homeRef = useRef(null);

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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8">
        <div
          id="home"
          ref={homeRef}
          className="mt-8 flex w-5/6 max-w-[1000px] flex-col items-center justify-center  md:mt-14"
        >
          <div className="flex h-full w-full  flex-col items-start bg-gradient-to-r bg-clip-text text-center text-2xl text-[#103090] text-transparent dark:text-[#7b8afe] md:min-h-[45dvh]">
            <div className="flex h-full w-full grow flex-col justify-between ">
              <div className="flex h-full w-full flex-col justify-center">
                <div className="flex flex-grow flex-col flex-nowrap items-start justify-center md:mx-0 md:justify-start md:px-0">
                  <p className="flex text-start text-xl text-[#423411] dark:text-[#d2a258]">
                    Hello, I'm
                  </p>
                  <h1 className="-ml-0.5 flex px-0 text-start text-7xl font-bold text-[#103090] dark:text-[#7b8afe] md:-ml-1.5 md:text-9xl">
                    Osama Khalil
                  </h1>
                </div>
              </div>

              <div className="w-full text-start leading-8  md:ml-0 md:leading-8">
                <span className="font-inter text-lg text-gray-700 dark:text-gray-300 md:text-xl">
                  Software engineer, Obsessed with building interactive UIs.
                </span>
                <br />
                <span className="font-inter text-lg text-gray-700 dark:text-gray-300 md:text-xl">
                  currently working at{"   "}
                  <span className="text-neutral-950 dark:text-yellow-50">
                    {" "}
                    Synapse Analytics{" "}
                    <Link
                      href={"https://www.synapse-analytics.io"}
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4 cursor-pointer font-inter text-3xl"
                        style={{ display: "inline", verticalAlign: "middle" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
                  </span>
                </span>
              </div>
              <div className="mt-8 flex h-full grow flex-wrap items-end justify-start gap-3 pb-4  font-inter text-lg md:ml-0 md:mt-14 md:max-w-[1000px] md:items-end">
                <span className="text-neutral-950 dark:text-yellow-50 md:mr-0">
                  Github{" "}
                  <Link
                    href={"https://github.com/osamakhalil98/"}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 cursor-pointer font-inter text-3xl"
                      style={{ display: "inline", verticalAlign: "middle" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="text-neutral-950 dark:text-yellow-50 md:mr-0">
                  Linkedin{" "}
                  <Link
                    href={"https://www.linkedin.com/in/osama-khalil98"}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 cursor-pointer font-inter text-3xl"
                      style={{ display: "inline", verticalAlign: "middle" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Link>
                </span>
                <span className="text-neutral-950 dark:text-yellow-50 md:mr-0">
                  Timeline{" "}
                  <Link href={"Timeline"} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 cursor-pointer font-inter text-3xl"
                      style={{ display: "inline", verticalAlign: "middle" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <hr className="border-1 w-[100vw] border-[#d58322] duration-500  dark:border-[#d2a258]" />
        </div>

        {/* Projects section */}
        <div
          id="projects"
          className="mx-auto mt-8 flex w-5/6 max-w-[1000px] flex-col pb-4 text-neutral-950 dark:text-yellow-50 md:mt-16 md:justify-start"
        >
          <p className="mb-2 mt-2 flex-grow text-center font-inter text-3xl md:text-5xl">
            <span className="text-center text-[#103090] dark:text-[#7b8afe]">
              <span className="text-3xl text-[#423411] dark:text-[#d2a258] md:text-5xl">
                1.{""}
              </span>{" "}
              Projects
            </span>
          </p>

          <Projects />
        </div>

        <hr className="border-1 w-full border-[#d58322] duration-500  dark:border-[#d2a258]" />

        {/* About me section*/}
        <div
          id="about"
          className="mt-8 flex w-5/6  max-w-[1000px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <p className="my-8 mt-2 flex-grow text-center font-inter text-3xl md:text-5xl">
            <span className="text-center text-[#103090] dark:text-[#7b8afe]">
              <span className="text-3xl text-[#423411] dark:text-[#d2a258] md:text-5xl">
                2.{""}
              </span>{" "}
              About me
            </span>
          </p>
          <div className="text-md mb-8 flex flex-col items-start justify-between text-start font-inter leading-9 text-neutral-950 dark:text-yellow-50 md:flex-row ">
            <div className="mr-2 w-full md:w-4/6 md:max-w-[500px]">
              Hi, I'm a front-end engineer, born and raised in Cairo - Egypt.
              Very interested in building interactive UIs. I have a bachelor's
              degree in computer science, class of 2020. I have +2 years of
              professional experience in front-end development and the cycle of
              software (web) development in general. on a mission to survive the
              very rapid javascript world we're living in by activating "student
              for life" mode. currently trying to learn Vue.js, if you're
              interested you can see my tech and tools i'm usually using in my
              work:{" "}
              <Link href={"/Tech"} className="h-fit w-fit ">
                {" "}
                <span className="border-b-2 border-dotted border-pink-400 text-neutral-950 dark:border-pink-700 dark:text-yellow-50">
                  Tech + Tools{" "}
                </span>
              </Link>{" "}
              . My top hobbies include: listening to music, watching movies,
              gaming, and avoid writing regex. A wannabe Javascript ninja
              engineer.
            </div>
            <div className="my-4 flex-col justify-start md:ml-4">
              {/* IMAGES */}
              <Image
                src={osama2}
                alt="A picture of myself :)"
                width="510"
                height="510"
                placeholder="blur"
                className="rounded-lg shadow-lg"
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </div>
        <hr className="border-1 w-full border-[#d58322] duration-500  dark:border-[#d2a258]" />
      </main>
    </>
  );
}
