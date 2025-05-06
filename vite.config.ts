import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',            // project root
  publicDir: 'public',  // static files
  build: {
    outDir: 'dist',     // compiled output here
    rollupOptions: {
      input: '/public/index.html'  // tells Vite what to build
    }
  }
});
