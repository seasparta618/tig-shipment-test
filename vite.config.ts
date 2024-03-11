import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [react(), viteCompression()],
  cacheDir: '.vite_cache',
  build: {
    outDir: 'build',
    assetsInlineLimit: 4096,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString();
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
    alias: {
      '~': resolve(__dirname, 'src/'),
      '~/graphql': resolve(__dirname, 'src/graphql'),
      '~/type': resolve(__dirname, 'src/types'),
      '~/utils': resolve(__dirname, 'src/utils'),
      '~/mock': resolve(__dirname, 'src/mock'),
    },
  },
});
