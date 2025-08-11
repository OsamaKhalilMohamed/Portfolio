import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return { props: { postData: await getPostData(params.slug) } };
}

export async function getStaticPaths() {
  return { paths: getAllPostIds(), fallback: false };
}

export default function Post({
  postData,
}: {
  postData: {
    slug: string;
    contentHtml: string;
    description: string;
    image: string;
    date: string;
    title: string;
    duration?: string;
  };
}) {
  return (
    <>
      <Head>
        <title>Osama Khalil - {postData.title}</title>

        <meta name="description" content={postData.description} />

        {/* Open Graph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${postData.image}`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/blog/${postData.slug}`}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${postData.image}`}
        />
      </Head>

      <div className="mx-auto flex min-h-screen w-full max-w-[100%] justify-center py-10 dark:bg-[#111110]">
        <div className="w-5/6 max-w-[800px]">
          <h1 className="mb-2 text-3xl font-bold md:text-5xl">
            {postData.title}
          </h1>
          <hr className="mb-1" />
          <div className="flex justify-between text-sm text-gray-500">
            <p>{postData.date}</p>
            {postData.duration && <p>{postData.duration}</p>}
          </div>

          <article
            className="prose prose-neutral mt-6 max-w-none leading-7 md:prose-lg lg:prose-xl prose-a:border-b prose-a:border-dotted prose-a:no-underline prose-img:w-full prose-img:rounded-xl
 dark:prose-h1:text-gray-300 dark:prose-h2:text-gray-300 dark:prose-h3:text-gray-400 dark:prose-p:text-gray-400 dark:prose-a:text-gray-300 dark:prose-strong:text-gray-300 dark:prose-code:text-gray-300 dark:prose-li:text-gray-400 md:leading-10"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </div>
    </>
  );
}
