import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => (
    //   <h1
    //     style={{
    //       fontSize: "2.25rem",
    //       lineHeight: "calc(2.5 / 2.25)",
    //       fontWeight: "700",
    //       marginBottom: "calc(1px * 10)",
    //     }}
    //   >
    //     {children}
    //   </h1>
    // ),
    // h2: ({ children }) => (
    //   <h2
    //     style={{
    //       fontSize: "1.875rem",
    //       lineHeight: "calc(2.25 / 1.875)",
    //       fontWeight: "700",
    //       marginBottom: "calc(1px * 6)",
    //     }}
    //   >
    //     {children}
    //   </h2>
    // ),
    // p: ({ children }) => (
    //   <p style={{ marginBottom: "calc(1px * 6)" }}>{children}</p>
    // ),
    ...components,
  };
}
