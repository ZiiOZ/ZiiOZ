import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Make sure Vite starts at the root where index.html is
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html' // Explicitly tell Vite what the entry file is
    }
  }
});
