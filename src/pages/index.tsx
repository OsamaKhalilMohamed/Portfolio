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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-zinc-950">
        <div
          id="home"
          ref={homeRef}
          className="mt-8 flex w-5/6 max-w-[1000px] flex-col items-center justify-center  md:mt-14"
        >
          <div className="flex	 h-full w-full flex-col  items-start text-center text-2xl text-[#103090] text-transparent dark:text-white md:min-h-[45dvh]">
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
                  More than +3 years of exeperience. Currently working at{"   "}
                  <span className="text-neutral-950 dark:text-gray-200">
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
          <hr className="w-[100vw] border border-pink-100 dark:border-slate-900" />
        </div>

        {/* Projects section */}
        <div
          id="projects"
          className="mx-auto mt-8 flex w-5/6 max-w-[1000px] flex-col pb-4 text-neutral-950 dark:text-yellow-50 md:mt-16 md:justify-start"
        >
          <Projects />
        </div>

        <hr className="w-full border border-pink-100 dark:border-slate-900" />

        {/* About me section*/}
        <div
          id="about"
          className="mt-8 flex w-5/6  max-w-[1000px] flex-col  text-neutral-950 dark:text-yellow-50 md:justify-start"
        >
          <div className="text-md mb-8 flex flex-col items-start justify-between text-start font-inter leading-9 text-neutral-950 dark:text-yellow-50 md:flex-row ">
            <div className="mr-2 w-full text-justify ">
              Hi, I'm a passionate front-end engineer from Cairo, Egypt,
              dedicated to crafting interactive and engaging user interfaces.
              With a bachelor's degree in Computer Science (Class of 2020) and
              over three years of experience, including leading front-end
              projects, I have a solid understanding of the complete software
              development lifecycle, particularly in web development. Embracing
              the ever-evolving JavaScript ecosystem, I adopt a "student for
              life" mindset to stay current with the latest technologies.
              <Link href={"/Tech"} className="h-fit w-fit ">
                {" "}
                <span className="border border-pink-100 text-neutral-950 dark:border-slate-900  dark:text-yellow-50">
                  Tech + Tools{" "}
                </span>
              </Link>{" "}
              Hobbies When I'm not coding, you can find me listening to music,
              watching movies, gaming, or creatively avoiding writing regex. I
              aspire to become a JavaScript ninja, mastering the art of
              front-end development.
            </div>
          </div>
          <div className="my-4 flex-col justify-start ">
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
        <hr className="w-full border border-pink-100 dark:border-slate-900" />
      </main>
    </>
  );
}
