import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

function resolvePath (des) {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  return path.resolve(__dirname, des)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('./src/packages')
    },
  },
  plugins: [react()],
})
