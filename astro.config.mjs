import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  adapter: vercel({
    analytics: true,
    imagesConfig: {
      sizes: [],
      domains: [],
    },
  }),
});
