// /app/blog/[category]/[slug]/page.tsx

import fs from "fs";
import path from "path";
import React, { use } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
// import InlineCode from "@/components/InlineCode";
import remarkGfm from "remark-gfm";
// import remarkSlug from "remark-slug";
import rehypePrism from "rehype-prism-plus";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeHighlight from "rehype-highlight";

import "prism-themes/themes/prism-one-light.css";
import "github-markdown-css/github-markdown.css";
import "./page.scss";

interface PageProps {
  category: string;
  slug: string;
}

const Page = ({ params }: { params: Promise<PageProps> }) => {
  const { category, slug } = use(params);
  const source = fs.readFileSync(
    path.join(process.cwd(), "posts", category, `${slug}.mdx`),
    { encoding: "utf-8" }
  );
  return (
    <article className="markdown-body max-w-4xl p-10">
      <MDXRemote
        source={source}
        // components={{ code: InlineCode }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypePrism],
          },
        }}
      />
    </article>
  );
};
export default Page;

export function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "posts");
  const categories = fs.readdirSync(contentPath);
  const params: { category: string; slug: string }[] = [];
  for (const category of categories) {
    const categoryPath = path.join(contentPath, category);
    const stat = fs.statSync(categoryPath);
    if (stat.isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      for (const file of files) {
        if (file.endsWith(".mdx")) {
          const slug = file.replace(/\.mdx$/, "");
          params.push({ category, slug });
        }
      }
    }
  }
  return params;
}

export const dynamicParams = false;
