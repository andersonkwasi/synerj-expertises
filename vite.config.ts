import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'accepter les connexions externes
    port: 5173, // Assurez-vous que le port 5173 est configuré
  },
})
