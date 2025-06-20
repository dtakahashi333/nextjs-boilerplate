export interface BlogPostMeta {
  title: string;
  slug: string;
}

export interface BlogNav {
  [category: string]: BlogPostMeta[];
}

export const blogNav: BlogNav = {
  javascript: [
    { title: "はじめに", slug: "introduction" },
    { title: "DOM", slug: "dom" },
    { title: "クロージャ", slug: "closure" },
    { title: "スコープ", slug: "scope" },
    { title: "var, let, const", slug: "var-let-const" },
    {
      title: "関数・関数式・アロー関数",
      slug: "function-function-expression-arrow-function",
    },
    { title: "this", slug: "this" },
    { title: "ジェネレータ", slug: "generator" },
  ],
  react: [{ title: "はじめに", slug: "introduction" }],
  algorithms: [
    { title: "はじめに", slug: "introduction" },
    { title: "Rotate Array", slug: "rotate-array" },
    { title: "Pruduct of Array Except Self", slug: "product-except-self" },
    { title: "Gas Station", slug: "gas-station" },
  ],
  typescript: [
    { title: "設定", slug: "configuration" },
    { title: "リント", slug: "lint" },
  ],
  netlify: [
    { title: "設定", slug: "configuration" },
    { title: "ログ", slug: "logging" },
  ],
};
