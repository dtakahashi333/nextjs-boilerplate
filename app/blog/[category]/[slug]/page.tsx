// /app/blog/[category]/[slug]/page.tsx
import { use } from "react";

import Wrapper from "@/components/Wrapper";

export default function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = use(params);
  const { default: Post } = use(import(`@/content/${category}/${slug}.mdx`));
  return (
    <Wrapper>
      <Post />
    </Wrapper>
  );
}

export function generateStaticParams() {
  return [
    { category: "javascript", slug: "introduction" },
    { category: "javascript", slug: "closure" },
  ];
}

export const dynamicParams = false;
