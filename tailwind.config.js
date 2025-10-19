/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        pharmacy: {
          green: '#10b981',
          blue: '#3b82f6',
          navy: '#1e40af'
        }
      },
      fontFamily: {
        sans: ['Maven Pro', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}