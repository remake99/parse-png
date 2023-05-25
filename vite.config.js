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
    lib: {
      entry: './lib/PNG.js',
      name: 'PNG',
      fileName: 'PNG',
    },
  },

})