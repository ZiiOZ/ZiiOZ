import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // this points to your project root (where index.html is in public/)
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html',
    },
  },
})
