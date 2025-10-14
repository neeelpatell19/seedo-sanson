import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    proxy: {
      // Development API proxy
      '/api': {
        target: 'http://localhost:4040',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      // Live API (testapi.prepseed.com/endpoints - no /api prefix)
      '/live': {
        target: 'https://testapi.prepseed.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/live/, '')
      }
    }
  },
  define: {
    // Make environment variables available
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }
}))

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
