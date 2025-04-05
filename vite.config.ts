import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/scalable-stories-website/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
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
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://nbmjitoxmrklflyvdbkv.supabase.co'),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibWppdG94bXJrbGZseXZkYmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MTA4OTIsImV4cCI6MjA1OTM4Njg5Mn0.E7YhWmPbO6-asCJo2GTOtUOn-sUmii-AOqKYYwRaznQ'),
  },
});
