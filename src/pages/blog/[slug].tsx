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
    <div className="mx-auto max-w-3xl py-10">
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
        className="prose prose-neutral mt-6"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
