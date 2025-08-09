import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: must be your repo name with slashes
  base: "/portfolio-frontend/",
});