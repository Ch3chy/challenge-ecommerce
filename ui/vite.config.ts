import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    }
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ChechoChallengeUi",
      formats: ["es", "umd"],
      fileName: (format) => `checho-challenge-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
  },
});
