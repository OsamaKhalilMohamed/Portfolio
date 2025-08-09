import Head from "next/head";
import synapse from "../../public/synapse.png";
import lightSynapse from "../../public/synapse.jpeg";
import digitopia from "../../public/digitopia.jpeg";
import sami from "../../public/sami.jpg";
import memoji from "../../public/memoji.png";
import Konan from "../../public/konan2.png";
import Konan2 from "../../public/konan3.png";
// import Konan3 from "../../public/konan4.png";
import Konan4 from "../../public/konan5.png";
import Konan5 from "../../public/konan6.png";
import Konan6 from "../../public/konan7.png";
import cailogo from "../../public/cailogo.png";
import aly from "../../public/aly.png";

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
  const firstThreeBlogs = getSortedPostsData()?.slice(0, 3); // Get only the latest 3 posts
  return {
    props: {
      firstThreeBlogs,
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
  firstThreeBlogs,
}: {
  firstThreeBlogs: any[];
}): React.ReactElement {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

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
        <div className="fomt-inter mx-auto flex  w-full flex-col items-center    md:mt-14">
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

          <div className="mt-20  w-5/6 md:mt-12">
            <h2 className="mb-2 text-xl font-extrabold md:text-2xl">
              4+ years of experience in Web development.{" "}
              <span
                className={`shine-animation relative inline-block text-[#7A7B77] ${
                  isMounted && (theme === "light" || theme !== "dark")
                    ? "light-mode"
                    : ""
                }`}
              >
                AI Engineer in the making.
              </span>
            </h2>
            <div className="mb-4 flex w-full  flex-col justify-between gap-3 md:flex-row">
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
                title="M.Sc. Student"
                subTitle="Future Data/AI Engineer.. :)"
                size={60}
                workYear="2025 - Present"
              />{" "}
            </div>
            <p className="-mt-1 text-base text-[#7A7B77]">
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
          {/* <section
            className={`${styles.animateCustom} mb-12 mt-8 w-5/6 max-w-[800px] md:mt-12`}
          >
            <h2 className="mb-2 text-lg font-extrabold md:text-xl">
              latest blogs.
            </h2>
            {firstThreeBlogs?.map(({ id, title, description, date }) => {
              return (
                <div
                  key={id}
                  className="mb-5 flex w-full flex-col justify-between gap-3 rounded-lg bg-[#F8F8F8] p-4 shadow-sm transition duration-500 hover:scale-105 dark:bg-[#1C1C1A]"
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
          </section> */}

          {/** more about me */}
          <div
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
          </div>

          {/** Contact */}
          <div className="mt-8 w-5/6 max-w-[800px] md:mt-12">
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
      </main>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .shine-animation {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
        }

        /* Ensure visibility in light mode */
        .shine-animation.light-mode {
          position: relative;
          display: inline-block;
          background: linear-gradient(
            90deg,
            rgba(50, 50, 50, 0.1) 0%,
            rgba(50, 50, 50, 0.4) 50%,
            rgba(50, 50, 50, 0.1) 100%
          );
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
        }
      `}</style>
    </>
  );
}
