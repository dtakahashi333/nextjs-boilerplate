// /components/Wrapper.tsx
"use client";

import root from "react-shadow";

export default function MdxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <root.div>
      <div className="container">{children}</div>
      <style>{`
        .container {
          padding: calc(0.25rem * 6);
        }
      `}</style>
    </root.div>
  );
}
