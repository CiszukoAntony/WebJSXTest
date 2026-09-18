import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/WebJSXTest/", // <--- Cambia esto por el nombre exacto de tu repositorio en GitHub
})