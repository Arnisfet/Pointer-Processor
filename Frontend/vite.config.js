import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  build: {
    outDir: 'dist', // Output directory for the production build
  },
  server: {
    host: true, // Allows network access (useful for testing on other devices)
    port: 3000, // Dev server port
    open: true, // Automatically open in browser
  },
  css: {
    devSourcemap: true, // Enable source maps for easier CSS debugging
  },
});
