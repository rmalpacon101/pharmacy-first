import { defineConfig } from 'vite'

export default defineConfig({
  base: '/pharmacy-first/', // Repository name matches GitHub repo
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020'
  }
})