import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vitt-landing-page/',
  server: {
    port: 3000,
    host: true
  }
});
