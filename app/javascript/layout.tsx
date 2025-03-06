// Add the `"use client"` directive at the top
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "../context/SidebarContext";

const contents = [
  {
    title: "はじめに",
    path: "introduction",
  },
  {
    title: "クロージャ",
    path: "closure",
  },
  {
    title: "スコープ",
    path: "scope",
  },
  {
    title: "var・let・const",
    path: "var-let-const",
  },
  {
    title: "関数・関数式・アロー関数",
    path: "function-function-expression-arrow-function",
  },
  {
    title: "this",
    path: "this",
  },
  {
    title: "ジェネレータ",
    path: "generator",
  },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useSidebarContext();
  const pathname = usePathname();
  return (
    <div className="lg:flex w-full">
      {/* Left Section */}
      <aside>
        <div className="sticky top-16 z-5 bg-white w-64 h-[calc(100vh-64px)] border-r p-2 overflow-y-auto lg:block hidden">
          {contents.map((content, index) => {
            // Define the target URL for each content
            const targetUrl = `/javascript/${content.path}`;

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
            {contents.map((content, index) => {
              // Define the target URL for each content
              const targetUrl = `/javascript/${content.path}`;

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
                  onClick={() => setIsOpen(false)}
                >
                  {content.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
