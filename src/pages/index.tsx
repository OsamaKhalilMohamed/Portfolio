import Head from "next/head";
import Link from "next/link";
import osama2 from "../../public/osama2.jpeg";
import Image from "next/image";
import Projects from "~/components/Projects";
import aime from "../../public/aime.png";
import { useRef } from "react";
import { renderTextWithRandomClasses } from "~/utils/helpers";
import ExternalIcon from "~/components/ExternalIcon";

export default function Home(): React.ReactElement {
  const homeRef = useRef(null);

  const textBeforeLink = `Hi, I'm a passionate front-end engineer from Cairo, Egypt,
  dedicated to crafting interactive and engaging user interfaces.
  With a bachelor's degree in Computer Science (Class of 2020) and
  over three years of experience, including leading front-end
  projects, I have a solid understanding of the complete software
  development lifecycle, particularly in web development. Embracing
  the ever-evolving JavaScript ecosystem, I adopt a "student for
  life" mindset to stay current with the latest technologies. You can check out my`;

  const textAfterLink = `When I'm not coding, you can find me listening to music,
  watching movies, gaming, or creatively avoiding writing regex. I
  aspire to become a JavaScript ninja.`;

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
              {renderTextWithRandomClasses(textBeforeLink)}
              <Link href="/Tech" className="h-fit w-fit">
                <span className="border-b border-pink-100 text-neutral-950 dark:border-slate-900 dark:text-yellow-50">
                  most used tech and tools
                </span>
              </Link>
              {", "}
              {renderTextWithRandomClasses(textAfterLink)}
            </div>
          </div>
          <h3 className="md:text-md my-4 text-sm">
            Feel free to email me at{" "}
            <span className="border-b border-pink-100 text-neutral-950 dark:border-slate-900 dark:text-yellow-50">
              <a href="mailto:osadx35@gmail.com">osadx35@gmail.com</a>
            </span>
          </h3>
          <div className="my-2 mb-4 flex w-full flex-col justify-start gap-2 md:flex-row md:justify-center">
            {/* IMAGES */}
            <Image
              src={osama2}
              alt="A picture of myself :)"
              width="800"
              height="510"
              placeholder="blur"
              className="w-full rounded-lg  md:w-3/6"
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
