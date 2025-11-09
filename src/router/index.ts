import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ===== PUBLIC WEBSITE ROUTES ONLY =====
    {
      path: '/',
      name: 'home',
      component: () => import('../views/web/HomeView.vue'),
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/web/Program.vue'),
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import('../views/web/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/web/Contact.vue'),
    },

    // ===== AUTHENTICATION ROUTE =====
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },

    // ===== ADMIN ROUTES =====
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Adminlayout.vue'),
      meta: { requiresAuth: true, role: 'super_admin' },
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('@/views/admin/AdminPanel.vue'), // ← PATH ABSOLUTE
          meta: { requiresAuth: true, role: 'super_admin' }
        }
      ]
    },

    // ===== FALLBACK 404 ROUTE =====
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router