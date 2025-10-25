import { defineConfig } from 'vite'

export default defineConfig({
  base: '/pharmacy-first/', // Replace with your actual repository name
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020'
  }
})