import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace with your exact repo name
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-frontend/",
});
