import Head from "next/head";
import { getSortedPostsData, PostMeta } from "../../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }: { allPostsData: PostMeta[] }) {
  // Group posts by year
  const groups = allPostsData.reduce<Record<number, PostMeta[]>>((acc, p) => {
    (acc[p.year] ||= []).push(p);
    return acc;
  }, {});

  const years = Object.keys(groups)
    .map(Number)
    .sort((a, b) => b - a); // newest year first

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

      <div className="mx-auto flex min-h-screen w-full max-w-[100%] justify-center py-10 dark:bg-[#111110]">
        <div className="w-5/6 max-w-[800px]">
          <h1 className="mb-6 px-1 text-3xl font-bold">All Blogs.</h1>

          {years.map((year) => (
            <section key={year} className="mb-10">
              <h2 className="mb-1 mt-8 px-8 text-right text-2xl font-semibold text-[#7A7B77]">
                {year}
              </h2>
              <ul className="m-auto flex flex-col justify-center gap-3 lg:w-full">
                {(groups[year] || []).map(
                  ({ id, date, title, description }) => (
                    <Link
                      href={`/blog/${id}`}
                      className="text-xl text-blue-500"
                    >
                      <li
                        key={id}
                        className="mb-4 cursor-pointer rounded-xl p-8 transition duration-200 hover:bg-[#F8F8F8] hover:dark:bg-[#1C1C1A]"
                      >
                        {title}

                        <p className="text-sm text-gray-500">{date}</p>
                        {description && (
                          <p className="mt-4 text-sm text-gray-500">
                            {description}
                          </p>
                        )}
                      </li>
                    </Link>
                  )
                )}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
