// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.

import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const dev = process.argv.includes("dev");

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: "dist",
        assets: "dist",
        fallback: null,
        precompress: false,
        strict: true
      }),
      paths: { base: dev ? "" : process.env.BASE_PATH, relative: false }
    })
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}", "test/**/*.{test,spec}.{js,ts}"],
  },
});
