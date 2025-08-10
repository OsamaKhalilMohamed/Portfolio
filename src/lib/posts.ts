import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostIds() {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => ({ params: { slug: fileName.replace(/\.md$/, "") } }));
}

export type PostMeta = {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  date: string; // ISO in front-matter
  year: number;
};

export function getSortedPostsData(): PostMeta[] {
  const list = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data } = matter(raw);
      const date = String((data as any).date);
      const year = new Date(date).getFullYear();

      return {
        id,
        title: (data as any).title,
        description: (data as any).description,
        duration: (data as any).duration,
        date,
        year,
      } as PostMeta;
    });

  // sort by date desc
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function cleanMarkdown(md: string) {
  return md
    .replace(/^\s*(Copy|Edit)\s*$/gim, "")
    .replace(/([^\n])\n```/g, "$1\n\n```");
}

const schema: Parameters<typeof rehypeSanitize>[0] = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    pre: [...(defaultSchema.attributes?.pre || []), ["className"]],
    code: [...(defaultSchema.attributes?.code || []), ["className"]],
    a: [...(defaultSchema.attributes?.a || []), ["id", "href", "name"]],
    span: [...(defaultSchema.attributes?.span || []), ["className"]],
    h1: [...(defaultSchema.attributes?.h1 || []), ["id"]],
    h2: [...(defaultSchema.attributes?.h2 || []), ["id"]],
    h3: [...(defaultSchema.attributes?.h3 || []), ["id"]],
    h4: [...(defaultSchema.attributes?.h4 || []), ["id"]],
    h5: [...(defaultSchema.attributes?.h5 || []), ["id"]],
    h6: [...(defaultSchema.attributes?.h6 || []), ["id"]],
  },
};

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    // convert mdast -> hast, keep raw HTML as `raw` nodes
    .use(remarkRehype, { allowDangerousHtml: true })
    // process inline raw HTML
    .use(rehypeRaw)
    .use(rehypeSlug) // also auto-add ids to headings
    .use(rehypeHighlight)
    .use(rehypeSanitize, schema) // keep classes from highlight.js
    .use(rehypeStringify)
    .process(cleanMarkdown(content));

  return {
    slug,
    contentHtml: String(file),
    ...(data as {
      date: string;
      title: string;
      description?: string;
      duration?: string;
    }),
  };
}
