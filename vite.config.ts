import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// username.github.io → serve from domain root
export default defineConfig({
  plugins: [react()],
  base: '/',
})
