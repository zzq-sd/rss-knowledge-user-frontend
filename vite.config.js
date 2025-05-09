import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081, // 给用户前端指定一个不同于管理端的端口，比如 8081
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': { // 拦截所有以 /api 开头的请求
        target: 'http://localhost:8080', // 代理到你的若依后端地址 (默认是8080)
        changeOrigin: true, // 需要虚拟主机站点
        // 如果你的若依后端 API 本身没有 /api 前缀 (比如直接是 /login, /knowledge/feed/list)
        // 那么你需要重写路径，去掉前端加的 /api
        // 如果若依后端接口是 /prod-api/login 这种，那么这里要配置成 target 指向后端根路径，
        // 前端请求时也带上 /prod-api
        // 假设你的若依后端接口就是 /login, /knowledge/feed/list 这样不带特定前缀的：
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  }
})