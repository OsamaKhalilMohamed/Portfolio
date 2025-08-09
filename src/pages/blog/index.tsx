import Head from "next/head";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: { allPostsData: any[] }) {
  return (
    <>
      <Head>
        <title>Osama Khalil - Blog</title>
        <meta name="description" content="Osama Khalil - Blog" />
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

      <div className="mx-auto flex h-full min-h-screen w-full  max-w-[100%] justify-center py-10 dark:bg-[#111110]">
        <div className="w-5/6 max-w-[800px] ">
          <h1 className="m-auto mb-6  px-8 text-3xl font-bold lg:w-full">
            All Blogs.
          </h1>
          <ul className="m-auto flex  flex-col justify-center gap-3 lg:w-full">
            {allPostsData.map(({ id, date, title, description }) => (
              <li
                key={id}
                className="mb-4 cursor-pointer rounded-xl p-8 transition duration-200 hover:bg-[#F8F8F8] hover:dark:bg-[#1C1C1A]"
              >
                <Link href={`/blog/${id}`} className="text-xl text-blue-500 ">
                  {title}

                  <p className="text-sm text-gray-500">{date}</p>

                  <p className="mt-4 text-sm text-gray-500">{description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
