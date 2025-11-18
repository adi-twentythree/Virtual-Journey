import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https:{
      key: './3dtour-privateKey.key',
      cert: './3dtour.crt'
    }
  },
  
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.hdr']
})
