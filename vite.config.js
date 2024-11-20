import { defineConfig } from "vite";

export default defineConfig({
  base: "/sass-template/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
