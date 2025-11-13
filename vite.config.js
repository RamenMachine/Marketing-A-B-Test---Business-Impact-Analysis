import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Marketing-A-B-Test---Business-Impact-Analysis/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

