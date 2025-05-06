import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // your project root (index.html is here)
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // tell Vite what the entry point is
    },
  },
})
