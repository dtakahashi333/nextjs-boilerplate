// Add the `"use client"` directive at the top
"use client";

import { usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);
  return (
    <div className="relative flex h-full">
      <section className="flex-1">
        <div className="relative flex flex-col h-full">
          <div className="relative flex justify-start items-center p-4">
            <Link href="/" className="block px-2 py-1 rounded-full hover:text-blue-500 hover:bg-gray-200">
              <HomeIcon className="w-5 h-5"></HomeIcon>
            </Link>
            {paths.map((path, index) => (
              <div key={index} className="relative flex items-center">
                <div className="text-sm px-2 py-1">&gt;</div>
                <div
                  className={`text-sm px-2 py-1 ${
                    index === paths.length - 1 ? "rounded-full bg-gray-200" : ""
                  }`}
                >
                  {path}
                </div>
              </div>
            ))}
          </div>
          <article className="flex-1">{children}</article>
        </div>
      </section>
      <section className="w-64 h-full border-l overflow-y-auto"></section>
    </div>
  );
}
