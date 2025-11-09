import { createRouter, createWebHistory } from 'vue-router'

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
          component: () => import('../views/admin/Dashboard.vue'),
          meta: { requiresAuth: true, role: 'super_admin' }
        }
      ]
    },

    // ===== GURU ROUTES =====
    {
      path: '/guru',
      name: 'guru', 
      component: () => import('../views/Gurulayout.vue'),
      meta: { requiresAuth: true, role: 'guru' },
      redirect: '/guru/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'guru-dashboard',
          component: () => import('../views/guru/Dashboard.vue'),
          meta: { requiresAuth: true, role: 'guru' }
        }
      ]
    },
    
    // ===== ORANGTUA ROUTES =====
    {
      path: '/orangtua',
      name: 'orangtua',
      component: () => import('../views/Ortulayout.vue'),
      meta: { requiresAuth: true, role: 'orangtua' },
      redirect: '/orangtua/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'orangtua-dashboard', 
          component: () => import('../views/orangtua/Dashboard.vue'),
          meta: { requiresAuth: true, role: 'orangtua' }
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

export default router