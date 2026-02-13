import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  base: "/",
  publicDir: "public",

  server: {
    port: 3000,
    open: true,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "tailwindcss/base"; @import "tailwindcss/components"; @import "tailwindcss/utilities";`,
        //additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },

  plugins: [tailwindcss()],

  define: {
    __APP_VERSION__: JSON.stringify("1.0.0"),
  },
});
