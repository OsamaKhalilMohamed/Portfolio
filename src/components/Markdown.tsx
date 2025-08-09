// components/Markdown.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

// NOTE: add a highlight.js theme once in your global CSS, e.g.
// @import "highlight.js/styles/github-dark.css";

type Props = { children: string };

export default function Markdown({ children }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug, rehypeHighlight]}
      // Ignore raw HTML in MD to avoid odd <a>/<div> mixes
      skipHtml
      components={{
        a({ children, ...props }) {
          return (
            <a {...props} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        },
        // Let rehype-highlight handle block code. Keep inline simple.
        code({ inline, className, children, ...props }: any) {
          if (inline) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
          return (
            <pre className={className}>
              <code {...props}>{children}</code>
            </pre>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
