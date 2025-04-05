import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const repoName = 'your-repo-name'; // replace with actual repo name

export default defineConfig({
  base: `/${repoName}/`,
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
  },
});
