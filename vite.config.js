import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Relative paths - works everywhere!
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020'
  },
  publicDir: 'public' // Copy public folder contents to dist
})