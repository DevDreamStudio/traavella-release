import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),],
  css: {
    devSourcemap: true,
  },
  server: {
    host: true,
    port: 7777,
  },
})
