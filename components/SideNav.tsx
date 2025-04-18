// /components/SideNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebar } from "@/context/SidebarContext";

import { blogNav } from "@/posts/blog-nav";

interface SideNavProps {
  category: string;
}

export default function SideNav({ category }: SideNavProps) {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname();
  const navItems = blogNav[category] || [];
  return (
    <>
      <aside>
        <div className="sticky top-16 z-5 bg-white w-64 h-[calc(100vh-64px)] border-r p-2 overflow-y-auto lg:block hidden">
          {navItems.map(({ title, slug }, index) => {
            // Define the target URL for each post
            const targetUrl = `/blog/${category}/${slug}`;

            // Check if the current route matches the targetUrl
            const isActive = pathname === targetUrl;

            return (
              <Link
                href={targetUrl}
                key={index}
                className={`block px-2 py-1 my-1 rounded-md font-medium ${
                  isActive
                    ? "text-blue-500 bg-gray-200"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </aside>

      <div className="lg:hidden block">
        {/* Overlay */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-white w-72 z-10 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col justify-start`}
        >
          {/* Page Title */}
          <div className="w-full h-16 flex justify-between items-center p-4 border-b">
            <div className="flex-shrink-0 text-white text-lg font-semibold bg-blue-500 px-4 py-1">
              JavaScript
            </div>
            <button className="p-2" onClick={() => setIsOpen(false)}>
              <svg
                className="w-5 h-5 stroke-current text-gray-600"
                viewBox="0 0 15 15"
              >
                <path
                  d="M.75.75l13.5 13.5M14.25.75L.75 14.25"
                  strokeWidth="1.2"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-4">
            {navItems.map(({ title, slug }, index) => {
              // Define the target URL for each post
              const targetUrl = `/blog/${category}/${slug}`;

              // Check if the current route matches the targetUrl
              const isActive = pathname === targetUrl;

              return (
                <Link
                  href={targetUrl}
                  key={index}
                  className={`block px-2 py-1 my-1 rounded-md font-medium ${
                    isActive
                      ? "text-blue-500 bg-gray-200"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
