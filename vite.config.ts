import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':'/src/',
      'assets':'/src/assets',
      'components':'/src/components'
    }
  },
  plugins: [vue()],
  build:{
    lib:{
      entry:'/src/index.ts',
      name:'filmgram-ui'
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})




