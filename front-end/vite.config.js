import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  setupfilesafterenv: [
    './setuptests.js',
  ],
  server : {
    host: true,
    port: 5173
  }
})
