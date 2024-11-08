import Head from "next/head";
import synapse from "../../public/synapse.png";
import lightSynapse from "../../public/synapse.jpeg";
import digitopia from "../../public/digitopia.jpeg";
import sami from "../../public/sami.jpg";
import memoji from "../../public/memoji.png";

import MiniCard from "~/components/MiniCard";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home(): React.ReactElement {
  const { theme } = useTheme();

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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-[#111110]">
        <div className="mt-8 flex w-5/6 max-w-[800px] font-inter md:mt-14">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>
                <div className="inline-flex">
                  {" "}
                  <h3 className="mr-1 text-2xl font-extrabold md:text-3xl">
                    Hello, I'm Osama Khalil
                  </h3>{" "}
                  <Image
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                    src={memoji}
                    alt="memoji"
                  />
                </div>
                <p className="-mt-1 text-lg text-[#7A7B77] md:text-xl">
                  Software engineer
                </p>{" "}
                <div className="mb-4 mt-2 flex flex-col justify-end md:hidden md:content-end md:align-bottom">
                  <button className="h-8 w-32 rounded-full bg-blue-700 px-6 font-bold text-white shadow-lg ">
                    <a
                      className=" font-bold text-white "
                      href="mailto:osadx35@gmail.com"
                    >
                      Email
                    </a>{" "}
                  </button>
                </div>
              </div>

              <div className="mb-4 hidden flex-col justify-end md:flex md:content-end md:align-bottom">
                <button className="h-8 w-full rounded-full bg-blue-700 px-6 font-bold text-white shadow-lg ">
                  <a
                    className=" font-bold text-white "
                    href="mailto:osadx35@gmail.com"
                  >
                    Email
                  </a>{" "}
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <h2 className="mb-2 text-xl font-extrabold md:text-2xl">
                3+ years of experience in Web development.
              </h2>
              <div className="mb-4 flex w-full max-w-[1000px] flex-col justify-between gap-3 md:flex-row">
                <MiniCard
                  src={sami}
                  description="sami"
                  title="Sr. Software engineer"
                  subTitle="Government platforms"
                  size={60}
                  workYear="2024 - Present"
                />{" "}
                <MiniCard
                  src={theme !== "light" ? lightSynapse : synapse}
                  description="synapse"
                  title="Frontend engineer ||"
                  subTitle="SME & Consumer Lending"
                  size={theme !== "light" ? 40 : 100}
                  workYear="2022 - 2024"
                />{" "}
                <MiniCard
                  src={digitopia}
                  description="digitopia"
                  title="Jr. Frontend engineer"
                  subTitle="Services discovery & Sharing"
                  size={40}
                  workYear="2022"
                />{" "}
              </div>
              <p className="-mt-1 text-base text-[#7A7B77]">
                These are some of the companies & clients i've worked with. Most
                of my work up until now is web development, espically frontend
                development.
              </p>{" "}
            </div>
            {/** more about me */}
            <div className="mt-8 md:mt-12">
              <h2 className="mb-2 text-lg font-extrabold md:text-xl">
                More About me..
              </h2>
              <ul className="list-inside rounded-lg bg-[#F8F8F8] p-4 text-[#7A7B77] shadow-sm dark:bg-[#1C1C1A]">
                <li className="mb-4">
                  - I believe that you'll never know your actual capabilities
                  until you work with a great team in a great environment.
                </li>
                <li className="mb-4">
                  - My hobbies are: Photography, Watching movies, Watching
                  football and Chill nights with friends.
                </li>
                <li>
                  - I've never seriously learned regex, and it's likely that
                  i'll never do due to ai, does that make me a lazy developer or
                  a normal person?
                </li>
              </ul>
            </div>
            {/** Contact */}
            <div className="mt-8 md:mt-12">
              <h2 className="mb-2 text-lg font-extrabold md:text-xl">
                Get in contact!
              </h2>
              <p className="-mt-1 font-inter text-base text-[#7A7B77]">
                If you have anything to tell me, whether it's a Question, Job
                offer or just wanna get in touch. you can hit my {"->"}{" "}
                <a
                  className="border-b border-dotted font-extrabold text-[#7A7B77] "
                  href="mailto:osadx35@gmail.com"
                >
                  Email
                </a>{" "}
                or my{" "}
                <a
                  className="border-b border-dotted font-extrabold text-[#7A7B77]"
                  href="https://www.linkedin.com/in/osama-khalil98"
                >
                  Linkedin
                </a>
              </p>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
