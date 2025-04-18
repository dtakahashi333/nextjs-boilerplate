import type { NextConfig } from "next";
// import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  compiler: {
    styledComponents: true, // Enable styled-components support
  },
  transpilePackages: ["next-mdx-remote"],
};

// const withMDX = createMDX({});
// const withMDX = createMDX(async () => {
//   const rehypeHighlight = (await import("rehype-highlight")).default;
//   return {
//     extension: /\.mdx?$/,
//     options: {
//       rehypePlugins: [rehypeHighlight],
//       format: "mdx",
//     },
//   };
// });

// Merge MDX config with Next.js config
// export default withMDX(nextConfig);
export default nextConfig;
