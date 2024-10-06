import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://hndrkm.github.io/Travel_OrreryTraveler',
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
})
