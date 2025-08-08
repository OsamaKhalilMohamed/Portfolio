import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({
  postData,
}: {
  postData: {
    slug: string;
    contentHtml: string;
    date: string;
    title: string;
    duration: string;
  };
}) {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full  max-w-[100%] justify-center py-10 dark:bg-[#111110]">
      <div className="w-5/6 max-w-[800px] ">
        <Head>
          <title>{postData.title}</title>
        </Head>
        <h1 className="mb-2 text-3xl font-bold">{postData.title}</h1>
        <hr className="mb-1" />
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">{postData.date}</p>
          <p className="text-sm text-gray-500">{postData.duration}</p>
        </div>

        <article
          className="mt-6 max-w-none leading-8 text-[#7A7B77]  prose-img:mx-auto prose-img:w-full prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </div>
  );
}
