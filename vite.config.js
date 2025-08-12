import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Local Development API (localhost:4040/api/endpoints)
      '/api': {
        target: 'https://testapi.prepseed.com',
        changeOrigin: true,
        secure: false,
      },
      // Live API (testapi.prepseed.com/endpoints - no /api prefix)
      '/live': {
        target: 'https://testapi.prepseed.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/live/, '')
      }
    }
  }
})

// Alternative: Switch between APIs based on environment
// export default defineConfig(({ mode }) => ({
//   plugins: [vue()],
//   server: {
//     proxy: {
//       '/api': {
//         target: mode === 'development' 
//           ? 'http://localhost:4040' 
//           : 'https://testapi.prepseed.com',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// }))
