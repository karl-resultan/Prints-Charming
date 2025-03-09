import { createRouter, createWebHistory } from 'vue-router'
import HeroView from '@/views/HeroView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CustomerDashboardView from '@/views/CustomerDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: HeroView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: CustomerDashboardView,
    },
  ],
})

export default router
