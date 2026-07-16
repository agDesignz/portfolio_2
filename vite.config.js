import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    port: 3001,
    host: true, // accessible through other devices
    open: true, // Opens automatically
  },
});
