import Head from "next/head";
import synapse from "../../public/synapse.png";
import lightSynapse from "../../public/synapse.jpeg";
import digitopia from "../../public/digitopia.jpeg";
import sami from "../../public/sami.jpg";
import memoji from "../../public/memoji.png";
import Konan from "../../public/konan2.png";
import Konan2 from "../../public/konan3.png";
import Konan4 from "../../public/konan5.png";
import Konan5 from "../../public/konan6.png";
import Konan6 from "../../public/konan7.png";
import cailogo from "../../public/cailogo.png";
import aly from "../../public/aly.png";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./home.module.css";

import MiniCard from "~/components/MiniCard";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getSortedPostsData } from "~/lib/posts";
import { greetings } from "~/fixtures";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

type SwiperProps = {
  archives: Array<StaticImageData>;
  link: string;
  title: string;
  imgClassName: string;
  number: number;
};

// Add a custom CSS file or <style> block
<style jsx>{`
  .swiper-container,
  .swiper-slide,
  .swiper {
    overflow: visible !important;
    width: 100% !important; /* Override any default width */
    max-width: 100%; /* Ensure the slide does not exceed the parent width */
  }

  .swiper-slide {
    width: 100% !important; /* Override any default width */
    max-width: 100%; /* Ensure the slide does not exceed the parent width */
  }
`}</style>;

export async function getStaticProps() {
  const latestTwoBlogs = getSortedPostsData()?.slice(0, 2); // Get only the latest 3 posts
  return {
    props: {
      latestTwoBlogs,
    },
  };
}

const ImageWithAmbientBackground = (props: SwiperProps) => {
  const { archives, link, title, imgClassName, number } = props;
  const swiperRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensure that Swiper reinitializes properly on first load
    setTimeout(() => {
      if (swiperRef.current) {
        setReady(true);
      }
    }, 10);
  }, []);

  return (
    <div className="relative mt-8 max-w-[100%] overflow-visible md:mt-12 md:w-full">
      {number === 1 && (
        <h2 className="mb-2 text-lg font-extrabold md:text-xl">
          Selected Work.
        </h2>
      )}
      <h2 className="mb-2 text-lg font-extrabold text-[#7A7B77] md:text-xl">
        {number}.
      </h2>

      <div
        className={`w-full rounded-lg bg-gradient-to-b from-[rgb(248,248,248)] to-[rgb(248,248,248)] p-4 dark:bg-gradient-to-b dark:from-white/20 dark:to-[#1C1C1A]`}
      >
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          slidesPerView={1}
          modules={[EffectFade, Navigation, A11y, Autoplay, FreeMode]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor
        >
          {ready &&
            archives.map((image, index) => (
              <SwiperSlide key={index} className="flex w-full justify-center">
                <Link href={link} target="_blank">
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    className={`h-auto w-full ${imgClassName}`}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL}
                    priority
                    alt={title}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default function Home({
  latestTwoBlogs,
}: {
  latestTwoBlogs: any[];
}): React.ReactElement {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [greeting, setGreeting] = useState(greetings[0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      setTheme("dark");
    }
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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-[#111110]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fomt-inter mx-auto flex  w-full flex-col items-center    md:mt-14"
        >
          <div className="mt-10 flex w-5/6 max-w-[800px] justify-between md:mt-0">
            <div>
              <div className="inline-flex">
                {" "}
                <h3 className="mr-1 text-2xl font-extrabold md:text-4xl">
                  Hello, I'm Osama Khalil
                </h3>{" "}
                <Image
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    imageRendering: "crisp-edges",
                  }}
                  src={memoji}
                  alt="memoji"
                />
              </div>
              <p className="-mt-1 text-lg text-[#7A7B77] md:text-xl">
                Software engineer
              </p>{" "}
              <div className="mb-4 mt-2 flex flex-col justify-end md:hidden md:content-end md:align-bottom">
                <button className="h-8 w-32 rounded-full bg-blue-700 px-6 font-bold text-white hover:bg-blue-600 ">
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
              <button className="h-8 w-full rounded-full bg-blue-700 px-6 font-bold text-white hover:bg-blue-600 ">
                <a
                  className=" font-bold text-white "
                  href="mailto:osadx35@gmail.com"
                >
                  Email
                </a>{" "}
              </button>
            </div>
          </div>

          <div className="mt-16  w-5/6 md:mt-24">
            <h2 className="mb-1 text-2xl font-extrabold md:text-4xl">
              5+ years of experience in Software Engineering.{" "}
            </h2>
            <p
              className={`shine text-md mb-4 text-2xl font-extrabold text-[#7A7B77] md:text-4xl ${
                isMounted && (theme === "light" || theme !== "dark")
                  ? "light-mode"
                  : ""
              }`}
            >
              AI Engineer in the making.
            </p>
            <div className="mb-4 flex w-full  flex-col justify-between gap-5 md:flex-row">
              <MiniCard
                src={digitopia}
                description="digitopia"
                title="Jr. Frontend Engineer"
                subTitle="Services discovery & Sharing"
                size={50}
                workYear="2022"
              />{" "}
              <MiniCard
                src={isMounted && theme !== "light" ? lightSynapse : synapse}
                description="synapse"
                title="Frontend Engineer ||"
                subTitle="SME & Consumer Lending"
                size={isMounted && theme !== "light" ? 50 : 120}
                workYear="2022 - 2024"
              />{" "}
              <MiniCard
                src={sami}
                description="sami"
                title="Sr. Software Engineer"
                subTitle="Government platforms"
                size={70}
                workYear="2024 - Present"
              />{" "}
              <MiniCard
                src={cailogo}
                description="digitopia"
                title="M.Sc. Student - FGSSR"
                subTitle="Future Data/AI Engineer.. :)"
                size={60}
                workYear="2025 - Present"
              />{" "}
            </div>
            <p className="-mt-1 text-xs text-[#7A7B77]">
              This is my career timeline. Most of my work up until now is web
              development, espically frontend development. Currently pursuing a
              M.Sc. in Data Science & AI at Cairo University.
            </p>{" "}
          </div>

          {/** Selected work */}
          <div
            className={`${styles.animateCustom} mt-8 w-5/6 max-w-[800px]  md:mt-12`}
          >
            {/**KONAN */}
            <ImageWithAmbientBackground
              title="KONAN"
              link="https://www.synapse-analytics.io/konan"
              imgClassName="transition-transform overflow-visible duration-500 hover:-rotate-1 hover:scale-125 md:hover:scale-105 cursor-pointer w-full  transform-origin: center center;"
              archives={[Konan, Konan2, Konan4, Konan5, Konan6]}
              number={1}
            />

            <div className="mb-2 mt-4 flex w-full max-w-[1000px] flex-col justify-between gap-3 md:flex-row">
              <div className="flex w-full flex-col  gap-y-1 rounded-lg bg-[#F8F8F8] p-4 shadow-sm dark:bg-[#1C1C1A]">
                <h2 className="text-lg font-bold md:text-xl">Konan AI</h2>
                <p className="text-[#7A7B77]">
                  AI credit decisioning for risk officers
                </p>
              </div>

              <div className="flex w-full flex-col justify-start gap-y-1 rounded-lg bg-[#F8F8F8] p-4 shadow-sm dark:bg-[#1C1C1A]">
                <h2 className="text-lg font-bold md:text-xl">Tech I've used</h2>
                <p className="text-[#7A7B77]">
                  TS - React + Vite - Zustand + ReduxTK + React-Query -
                  Storybook - Django
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.animateCustom} mb-12 mt-8 w-5/6 max-w-[800px] md:mt-12`}
          >
            {/**ALY */}
            <ImageWithAmbientBackground
              title="ALY"
              link="https://www.aly.ma/"
              imgClassName="transition-transform overflow-visible duration-500 hover:rotate-1 hover:scale-125 md:hover:scale-105 cursor-pointer w-full  transform-origin: center center;"
              archives={[aly]}
              number={2}
            />

            <div className="mb-4 mt-4 flex w-full max-w-[1000px] flex-col justify-between gap-3 md:flex-row">
              <div className="flex w-full flex-col  gap-y-1 rounded-lg bg-[#F8F8F8] p-4 shadow-sm dark:bg-[#1C1C1A]">
                <h2 className="text-lg font-bold md:text-xl">ALY</h2>
                <p className="text-[#7A7B77]">
                  Platform for discovering, sharing and rating various services
                  in morroco
                </p>
              </div>

              <div className="flex w-full flex-col justify-start gap-y-1 rounded-lg bg-[#F8F8F8] p-4 shadow-sm dark:bg-[#1C1C1A]">
                <h2 className="text-lg font-bold md:text-xl">Tech I've used</h2>
                <p className="text-[#7A7B77]">
                  Next.js - Redux - graphQL Apollo client - SCSS
                </p>
              </div>
            </div>
          </div>

          {/** mini-blog section */}
          <section
            className={`${styles.animateCustom} mb-12 mt-8 w-5/6 max-w-[800px] md:mt-12`}
          >
            <h2 className="mb-2 text-lg font-extrabold md:text-xl">
              latest blogs.
            </h2>
            {latestTwoBlogs?.map(({ id, title, description, date }) => {
              return (
                <div
                  key={id}
                  className="mb-5 flex w-full flex-col justify-between gap-3 rounded-lg bg-[#F8F8F8] p-6 text-[#7A7B77] shadow-sm transition duration-500 hover:scale-105 dark:bg-[#1C1C1A]"
                >
                  <Link href={`/blog/${id}`}>
                    <h3 className="text-xl font-bold text-blue-500">{title}</h3>
                    <div className="flex justify-between">
                      <p className="text-md font-light text-[#7A7B77]">
                        {date}
                      </p>
                    </div>
                    <p className="text-md mt-4 font-light text-[#7A7B77]">
                      {description}
                    </p>
                  </Link>
                </div>
              );
            })}

            <Link
              href={`/blog/`}
              className="text-center text-lg font-bold text-gray-500 hover:underline"
            >
              Explore All Blogs {"->"}
            </Link>
          </section>

          {/** more about me */}
          {/* <div
            className={`${styles.animateCustom} mb-12 mt-8 w-5/6 max-w-[800px] md:mt-12`}
          >
            <h2 className="mb-2 text-lg font-extrabold md:text-xl">
              More About me..
            </h2>
            <ul className="list-inside rounded-lg bg-[#F8F8F8] p-4 text-[#7A7B77] shadow-sm dark:bg-[#1C1C1A]">
              <li className="mb-4">
                I believe that you'll never know your actual capabilities until
                you work with a great team in a great environment.
              </li>
              <li className="mb-4">
                Things i like: Photography, Watching movies, Watching football
                and Chill nights with friends.
              </li>
              <li>
                I've never seriously learned regex, and it's likely that i'll
                never do due to ai, does that make me a lazy developer or a
                normal person?
              </li>
            </ul>
          </div> */}

          {/** Contact */}
          <div className="mb-20 mt-8  w-5/6 max-w-[800px] md:mt-12">
            <h2 className="mb-2 text-lg font-extrabold md:text-xl">
              What's next?
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ lineHeight: 2 }}
              className="-mt-1 mb-0 rounded-lg bg-black p-4 font-inter text-xl font-medium text-[#d7dad2] dark:bg-[#1C1C1A] "
            >
              If you have anything to tell me, whether it's a Question,{" "}
              <strong>Job offer</strong> or <em>just wanna get in touch</em>.
              Feel free to say{" "}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {/* This is the clickable trigger with the dotted border */}
                  <button className="outline-none focus:outline-none">
                    <span className="relative inline-block cursor-pointer border-b border-dotted align-middle text-green-400">
                      {/* Framer Motion for the animation */}
                      <AnimatePresence mode="wait">
                        <motion.span
                          // The key is crucial for AnimatePresence to detect changes
                          key={greeting}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.25 }}
                          className="inline-block" // Ensures transforms work correctly
                        >
                          {greeting}!
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="right" // 2. Set the side to "right"
                  sideOffset={8} // Optional: Adds a small gap
                  className="w-48 rounded-lg border-none  bg-[#F8F8F8] text-neutral-200 shadow-lg dark:bg-[#404040]"
                >
                  {/* 3. Add the arrow component and style it to match the menu */}
                  <DropdownMenuArrow
                    className="fill-neutral-900"
                    width={10}
                    height={5}
                    asChild
                  />
                  {greetings.map((currentGreeting) => (
                    <DropdownMenuItem
                      key={currentGreeting}
                      className={`cursor-pointer text-[#7A7B77] focus:bg-[#5e5f5c] focus:text-white dark:focus:text-[#7A7B77] ${
                        currentGreeting === greeting
                          ? "bg-[#7A7B77] text-white dark:text-[#3f3f3e]"
                          : ""
                      }`}
                      // The onSelect event handler updates the state
                      onSelect={() => setGreeting(currentGreeting)}
                    >
                      {currentGreeting}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <br />
              <p className="mx-auto mb-6 mt-4 text-center  text-4xl md:text-6xl">
                👋🏽
              </p>
              <div className="m-auto mt-2 text-center">
                <a
                  className="m-0 border-b border-dotted text-center font-extrabold text-green-400"
                  href="mailto:osadx35@gmail.com"
                >
                  Email
                </a>{" "}
                |{" "}
                <a
                  className="space-x-3 border-b border-dotted font-extrabold  text-green-400"
                  href="https://www.linkedin.com/in/osama-khalil98"
                >
                  Linkedin
                </a>
              </div>
            </motion.p>
          </div>
        </motion.div>
      </main>

      <style jsx>{`
        @keyframes shineSweep {
          0% {
            background-position: 92% 0, 0 0;
          }
          92% {
            background-position: -92% 0, 0 0;
          } /* tiny linger */
          100% {
            background-position: -92% 0, 0 0;
          }
        }

        .shine {
          background-size: 220% 100%, 100% 100%; /* larger travel = slower sweep */
          animation: shineSweep 3.5s linear infinite; /* was ~2.75s */

          display: inline-block; /* one painting box */
          white-space: nowrap; /* avoid line fragments */
          line-height: 1.2;
          padding-bottom: 0.15em; /* keep descenders visible */

          /* Layer 1: moving highlight; Layer 2: solid base (currentColor) */
          background-image: linear-gradient(
              100deg,
              transparent 0%,
              rgba(255, 255, 255, 0.25) 48%,
              rgba(255, 255, 255, 0.9) 50%,
              rgba(255, 255, 255, 0.25) 52%,
              transparent 100%
            ),
            linear-gradient(0deg, currentColor, currentColor);

          background-position: 400% 0, 0 0;
          background-repeat: no-repeat;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Darker shimmer for light theme */

        /* LIGHT THEME: brighter, thinner beam for extra "shine" */
        .shine.light-mode {
          background-image: linear-gradient(
              100deg,
              transparent 0%,
              rgba(255, 255, 255, 0.4) 49.2%,
              rgba(255, 255, 255, 0.98) 50%,
              rgba(255, 255, 255, 0.4) 50.8%,
              transparent 100%
            ),
            linear-gradient(0deg, currentColor, currentColor);
        }

        /* MOBILE: put sentence on its own line, allow wrapping safely */
        @media (max-width: 640px) {
          .shine {
            display: block; /* its own line */
            white-space: normal; /* can wrap within the line if needed */
            margin-top: 0.25rem; /* tiny gap from previous text */
          }
        }
      `}</style>
    </>
  );
}
