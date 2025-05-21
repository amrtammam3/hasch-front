import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hasch-front/',  // مهم جداً عشان GitHub Pages يستخدم هذا المسار
  plugins: [react()],
})
