import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rajeev-portfolio/', // ✅ this line is critical for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'],
  },
  server: {
    port: 5173,
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: true,
  },
  cacheDir: 'node_modules/.vite',
});
