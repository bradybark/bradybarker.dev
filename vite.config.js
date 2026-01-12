import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- This handles all the Tailwind logic now
  ],
  resolve: {
    alias: {
      react: 'c:/Personal Portfolio/bark-tools/bradybarker-dev/node_modules/react',
      'react-dom': 'c:/Personal Portfolio/bark-tools/bradybarker-dev/node_modules/react-dom',
    },
  },
})