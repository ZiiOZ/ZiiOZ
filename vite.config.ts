import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Make sure root is current directory
  build: {
    outDir: 'dist',
  },
});
