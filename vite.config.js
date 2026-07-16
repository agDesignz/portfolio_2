import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    // watch: { usePolling: true }, // helps with the flaky file-watching we mentioned earlier
    // hmr: {
    //   clientPort: 3001, // tell the browser-side client which port to reconnect on
    // },
    hmr: true,
    port: 3001,
  },
});
