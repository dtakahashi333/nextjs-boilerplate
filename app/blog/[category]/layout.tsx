// /app/blog/[category]/layout.tsx
import { ReactNode, use } from "react";

import SideNav from "@/components/SideNav";

interface CategoryLayoutProps {
  readonly children: ReactNode;
  params: Promise<{ category: string }>;
}

export default function CategoryLayout({
  children,
  params,
}: CategoryLayoutProps) {
  const { category } = use(params);
  return (
    <div className="lg:flex w-full">
      {/* Left Section */}
      <SideNav category={category} />
      {/* Right Section */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
