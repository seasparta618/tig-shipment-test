import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build', assetsInlineLimit: 4096, minify:true },
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
