import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProduction ? 'https://jaimereyess.github.io/rutina/' : '',
  build: {
    outDir: 'dist'

  }
})
