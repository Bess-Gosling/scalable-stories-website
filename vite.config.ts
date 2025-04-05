<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/scalable-stories-website/", // 👈 this must match your GitHub repo name exactly
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: `/scalable-stories-website/`,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
>>>>>>> cd93de08b8273b741cac3c8fcde4396f72d14ee6
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
});
