import Head from "next/head";
import memoji from "../../public/memoji.png";
import Image from "next/image";

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

      <main className="flex h-full min-h-screen w-full max-w-[100%] flex-col items-center justify-start overflow-hidden scroll-smooth pb-8 dark:bg-[#111110]">
        <div className="mt-8 flex w-5/6 max-w-[800px] font-inter md:mt-14">
          <div className="flex flex-col">
            <div className="inline-flex">
              <h3 className="mr-1 text-lg font-extrabold md:text-xl">
                Hi, I'm Osama Khalil
              </h3>{" "}
              <Image
                src={memoji}
                alt="memoji"
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
            </div>
            <p className="-mt-1 text-[#7A7B77]">Software engineer</p>{" "}
          </div>
        </div>
      </main>
    </>
  );
}
