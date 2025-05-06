import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // <- dit dist-mappen ska hamna
    emptyOutDir: true            // rensar mappen före varje build
  }
})
