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

    // ===== ADMIN ROUTES ONLY =====
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
          component: () => import('../views/admin/DashboardAdmin.vue'),
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

// Navigation Guard buat authentication
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  
  // Check kalo route butuh auth
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated()) {
      // Kalo belum login, redirect ke login
      next('/login')
    } else {
      // Check role-based access
      const userRole = authStore.getUserRole()
      const requiredRole = to.meta.role
      
      if (requiredRole && userRole !== requiredRole) {
        // Kalo role ga sesuai, redirect ke home
        next('/')
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router