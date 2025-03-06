// Add the `"use client"` directive at the top
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const contents = [
  {
    title: "はじめに",
    path: "introduction",
  },
  {
    title: "Rotate Array",
    path: "rotate-array",
  },
  {
    title: "Pruduct of Array Except Self",
    path: "product-except-self",
  },
  {
    title: "Gas Station",
    path: "gas-station",
  }
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="lg:flex w-full">
      {/* Left Section */}
      <aside>
        <div className="sticky top-16 z-5 bg-white w-64 h-[calc(100vh-64px)] border-r p-2 overflow-y-auto lg:block hidden">
          {contents.map((content, index) => {
            // Define the target URL for each content
            const targetUrl = `/algorithms/${content.path}`;

            // Check if the current route matches the targetUrl
            const isActive = pathname === targetUrl;

            return (
              <Link
                href={content.path}
                key={index}
                className={`block px-2 py-1 my-1 rounded-md font-medium ${
                  isActive
                    ? "text-blue-500 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {content.title}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Right Section */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
