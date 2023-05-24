import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: {
      entry: './lib/png.js',
      name: 'png',
      fileName: 'png',
    },

  }
})