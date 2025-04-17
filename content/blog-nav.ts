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
};
