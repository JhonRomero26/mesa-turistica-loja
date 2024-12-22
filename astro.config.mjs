// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mesaturisloja.vercel.app",
  compressHTML: true,
  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [tailwindcss()],
  },
});
