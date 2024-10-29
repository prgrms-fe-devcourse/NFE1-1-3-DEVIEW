// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), mkcert()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
