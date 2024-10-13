// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.css"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
