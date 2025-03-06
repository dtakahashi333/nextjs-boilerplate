"use client";

import Link from "next/link";
import React from "react";
import { useSidebarContext } from "./context/SidebarContext";

const contents = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "JavaScript",
    path: "/javascript",
  },
  {
    title: "React",
    path: "/react",
  },
  {
    title: "アルゴリズム",
    path: "/algorithms",
  },
];

// Functional component with TypeScript.
const PageBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setIsOpen } = useSidebarContext();
  return (
    <>
      {/* Top Navigation */}
      <nav className="sticky top-0 z-10 bg-white flex lg:justify-between justify-start items-center w-full h-16 px-4 border-b">
        {/* Hamburger Menu */}
        <button
          className="lg:hidden block text-2xl px-2 py-1 mr-2"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {/* Page Title */}
        <div className="flex-shrink-0 text-white text-xl font-semibold bg-blue-500 px-4 py-1">
          Webフロントエンド入門
        </div>

        {/* Navigation Links */}
        <div className="lg:block hidden ml-6">
          <div className="flex space-x-4">
            {contents.map((content, index) => (
              <Link
                key={index}
                href={`${content.path}`}
                className="block text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300"
              >
                {content.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Main Content (Right Section) */}
      <div>{children}</div>
      {/* Footer with Copyright */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Daisuke Takahashi. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default PageBody;
