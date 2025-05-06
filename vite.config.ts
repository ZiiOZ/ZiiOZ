import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // point to src as root (where index.html is)
  plugins: [react()],
  build: {
    outDir: '../dist', // output to root-level dist
    emptyOutDir: true
  }
});
