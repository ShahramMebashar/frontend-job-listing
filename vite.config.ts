import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-job-listing/',
  plugins: [
    react({
      // jsxImportSource: "@emotion/react",
      // babel: {
      //   plugins: ["@emotion/babel-plugin"],
      // },
    }),
  ],
});
