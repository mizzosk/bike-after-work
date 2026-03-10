import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Use SWC for faster builds

export default defineConfig(({ mode }) => {
  return {
    base: '/bike-after-work/',
    plugins: [react()],
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            icons: ['lucide-react'],
          },
        },
      },
      sourcemap: mode === 'production' ? 'hidden' : true,
      minify: 'esbuild',
      target: 'es2020',
      chunkSizeWarningLimit: 1000,
    },
    preview: {
      port: 4173,
      host: 'localhost',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
