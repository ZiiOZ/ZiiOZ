import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // keep this
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // must match file location
    },
  },
});
