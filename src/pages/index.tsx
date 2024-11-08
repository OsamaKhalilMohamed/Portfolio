import Head from "next/head";
import synapse from "../../public/synapse.png";
import lightSynapse from "../../public/synapse.jpeg";
import digitopia from "../../public/digitopia.jpeg";
import sami from "../../public/sami.jpg";

import MiniCard from "~/components/MiniCard";
import { useTheme } from "next-themes";

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
            <h3 className="mr-1 text-lg font-extrabold md:text-xl">
              Hi, I'm Osama Khalil
            </h3>{" "}
            <p className="-mt-1 text-[#7A7B77]">Software engineer</p>{" "}
            <div className="mt-8 md:mt-12">
              <h2 className="mb-2 text-xl font-extrabold md:text-2xl">
                4+ years of experience in Web development
              </h2>
              <div className="flex w-full max-w-[1000px] flex-col justify-between gap-3 md:flex-row">
                <MiniCard
                  src={sami}
                  description="sami"
                  title="Senior SWE"
                  subTitle="Defense technology"
                  size={70}
                />{" "}
                <MiniCard
                  src={theme === "dark" ? lightSynapse : synapse}
                  description="synapse"
                  title="Frontend engineer ||"
                  subTitle="SME & Consumer Lending"
                  size={theme === "dark" ? 40 : 100}
                />{" "}
                <MiniCard
                  src={digitopia}
                  description="digitopia"
                  title="Jr. Frontend engineer"
                  subTitle="Services discovery & Sharing"
                  size={40}
                />{" "}
              </div>
              <p className="-mt-1 text-lg text-[#7A7B77]">
                I'm passionate about web development, espically the frontend
                development. I have more than +4 years of experience in this
                field. I really feel good when i can deliver meaningful,
                helpeful and pretty UIs
              </p>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
