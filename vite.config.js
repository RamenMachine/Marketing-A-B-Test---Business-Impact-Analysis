import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Marketing-Analysis-ABTest/',  // Updated to match new repository name
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

