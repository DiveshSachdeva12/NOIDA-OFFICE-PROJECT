import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Set the alias for @ to point to the src directory
    },
  },
  server: {
    host:'0.0.0.0',
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
