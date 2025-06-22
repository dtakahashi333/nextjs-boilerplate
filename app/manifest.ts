// / app/manifest.ts

import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Frontend Tutorial",
    short_name: "FrontendTutorial",
  };
};

export default manifest;
