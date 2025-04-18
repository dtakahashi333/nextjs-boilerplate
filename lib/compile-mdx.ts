// lib/compile-mdx.ts
import { compile } from "@mdx-js/mdx";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export async function compileMDX(source: string) {
  return await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  });
}
