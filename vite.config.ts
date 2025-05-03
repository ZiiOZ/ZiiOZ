import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',                // 👈 Tells Vite where to start
  publicDir: 'public',      // 👈 Optional: sets static asset folder
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
