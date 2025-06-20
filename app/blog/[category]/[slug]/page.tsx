// /app/blog/[category]/[slug]/page.tsx
import { use } from "react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

// import MdxWrapper from "@/components/MdxWrapper";

import "prism-themes/themes/prism-one-light.css";

export default function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = use(params);
  const source = fs.readFileSync(
    path.join(process.cwd(), "posts", category, `${slug}.mdx`),
    { encoding: "utf-8" }
  );
  return (
    <div className="prose !max-w-4xl !p-10">
      <MDXRemote
        source={source}
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

export function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "posts");
  const categories = fs.readdirSync(contentPath);
  const params: { category: string; slug: string }[] = [];
  for (const category of categories) {
    const categoryPath = path.join(contentPath, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);
      files.forEach((file) => {
        const slug = file.replace(/\.mdx$/, "");
        params.push({ category, slug });
      });
    }
  }
  return params;
}

export const dynamicParams = false;
