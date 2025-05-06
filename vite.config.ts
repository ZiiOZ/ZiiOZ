import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // start from root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.html', // <-- corrected path
    },
  },
})
