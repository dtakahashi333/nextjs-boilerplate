"use client";

import root from "react-shadow";

import Introduction from "@/app/content/javascript/posts/post-1.mdx";

export default function Page() {
  return (
    <root.div>
      <div className="container">
        <Introduction />
      </div>
      <style>{`
        .container {
          padding: calc(0.25rem * 6);
        }
      `}</style>
    </root.div>
  );
}
