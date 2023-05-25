import { defineConfig } from "vite";


export default defineConfig({

  resolve: {
    alias: {
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      buffer: 'buffer',
    },
  },

  build: {
    minify: false,
    lib: {
      entry: './lib/Png.js',
      name: 'Png',
      fileName: 'Png',
    },
  },

})