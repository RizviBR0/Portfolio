import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(import.meta.dirname, "index.html"),
        ideavault: path.resolve(import.meta.dirname, "projects/ideavault/index.html"),
        woffSpace: path.resolve(import.meta.dirname, "projects/woff-space/index.html"),
        loome: path.resolve(import.meta.dirname, "projects/loome/index.html"),
      },
    },
  },
});
