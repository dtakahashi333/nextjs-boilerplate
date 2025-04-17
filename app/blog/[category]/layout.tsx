// Add the `"use client"` directive at the top
"use client";

import { ReactNode, use } from "react";

import SideNav from "@/components/SideNav";

export default function CategoryLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{
    category: string;
  }>;
}) {
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
