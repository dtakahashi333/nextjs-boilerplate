import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frontend Tutorial",
    short_name: "FrontendTutorial",
  };
}
