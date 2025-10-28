import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { widgetConfigPlugin } from './src/plugins/widget-config';

export default defineConfig({
  plugins: [react(), widgetConfigPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        widget: path.resolve(__dirname, 'widget.html'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'widget' ? 'widget.js' : 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
