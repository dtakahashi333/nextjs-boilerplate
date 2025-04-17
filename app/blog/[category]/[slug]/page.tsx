// /app/blog/[category]/[slug]/page.tsx
import { use } from "react";
import fs from "fs";
import path from "path";

import MdxWrapper from "@/components/MdxWrapper";

export default function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = use(params);
  const { default: Post } = use(import(`@/content/${category}/${slug}.mdx`));
  return (
    <MdxWrapper>
      <Post />
    </MdxWrapper>
  );
}

export function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "content");
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
