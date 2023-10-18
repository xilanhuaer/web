import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";


// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {
      '/v1': {
        target: 'http://172.17.0.2:8989',
        changeOrigin: true,
      },
    }
  },


  plugins: [

    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      eslintrc: { enabled: true }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],//可能会出现‘process is not defined’报错，但并不影响
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
