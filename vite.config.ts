import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from "dns";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 8080,
  },
});
