import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // already excluded by you
    include: ['react', 'react-dom'], // explicitly pre-bundle critical deps
  },
  server: {
    port: 5173, // optional: keep it fixed
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    strictPort: true, // fail if port is taken instead of searching randomly
  },
  cacheDir: 'node_modules/.vite', // default but ensure it's not deleted
});
