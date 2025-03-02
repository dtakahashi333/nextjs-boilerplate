// Add the `"use client"` directive at the top
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /javascript/introduction when the component is mounted
    router.push("/react/introduction");
  }, [router]);

  return null; // You can return null or a loading message
}
