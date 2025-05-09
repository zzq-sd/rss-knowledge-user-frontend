import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // 假设你有一个首页

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // 稍后可以改成你的阅读器主界面
  },
  {
    path: '/login',
    name: 'login',
    // 路由级代码分割
    // 这会为此路由生成一个单独的 chunk (Login.[hash].js)
    // 当路由被访问时才会加载这个 chunk。
    component: () => import('../views/LoginView.vue') // 假设你有登录页
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue') // 假设你有注册页
  }
  // ... 其他路由 ...
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // import.meta.env.BASE_URL 是 Vite 提供的
  routes
})

export default router