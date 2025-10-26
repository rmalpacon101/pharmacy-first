import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Relative paths - works everywhere!
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contraception: resolve(__dirname, 'contraception.html'),
        earache: resolve(__dirname, 'earache.html'),
        emergencyContraception: resolve(__dirname, 'emergency-contraception.html'),
        impetigo: resolve(__dirname, 'impetigo.html'),
        infectedInsectBites: resolve(__dirname, 'infected-insect-bites.html'),
        services: resolve(__dirname, 'services.html'),
        shingles: resolve(__dirname, 'shingles.html'),
        sinusitis: resolve(__dirname, 'sinusitis.html'),
        soreThroat: resolve(__dirname, 'sore-throat.html'),
        uti: resolve(__dirname, 'uti.html')
      }
    }
  },
  publicDir: 'public'
})