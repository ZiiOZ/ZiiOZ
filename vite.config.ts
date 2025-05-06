import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // this tells Vite to start from project root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // explicitly declare the HTML entry
    },
  },
})
