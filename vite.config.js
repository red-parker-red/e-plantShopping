import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./e-plantShopping",
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite resolves .jsx files
  },
  build: {
    outDir: 'dist', // Output directory for the build
  },
})
