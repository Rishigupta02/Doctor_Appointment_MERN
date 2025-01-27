import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://doctor-appointment-mern-znza.onrender.com', // Base URL of your backend server
        changeOrigin: true, // Ensures the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'), // Rewrites the path
      },
    },
  },
})
