// /app/blog/[category]/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
// import InlineCode from "@/components/InlineCode";
import remarkGfm from "remark-gfm";
// import remarkSlug from "remark-slug";
import rehypePrism from "rehype-prism-plus";
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeHighlight from "rehype-highlight";

import "prism-themes/themes/prism-one-light.css";

export default async function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const source = await fs.readFile(
    path.join(process.cwd(), "posts", category, `${slug}.mdx`),
    { encoding: "utf-8" }
  );
  return (
    <div className="prose prose-code:before:content-none prose-code:after:content-none !max-w-4xl !p-10">
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
    </div>
  );
}

export async function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "posts");
  const categories = await fs.readdir(contentPath);
  const params: { category: string; slug: string }[] = [];
  for (const category of categories) {
    const categoryPath = path.join(contentPath, category);
    const stat = await fs.stat(categoryPath);
    if (stat.isDirectory()) {
      const files = await fs.readdir(categoryPath);
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
