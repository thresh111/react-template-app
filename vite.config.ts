import react from "@vitejs/plugin-react-swc";
import PostCssNesting from "postcss-nesting";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    postcss: {
      plugins: [PostCssNesting],
    },
  },
});
