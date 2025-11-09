import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/Program.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    // Protected routes - Dashboard berdasarkan role
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'super_admin' }
    },
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/Guru/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'pengajar' }
    },
    {
      path: '/orangtua',
      name: 'orangtua',
      component: () => import('../views/OrangTua/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'orangtua' }
    },
    // Fallback route untuk 404
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

// Route guard untuk authentication dan authorization
router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore()
  
  console.log('🛡️ [ROUTER] Navigation guard triggered')
  console.log('📍 [ROUTER] To:', to.name)
  console.log('🔐 [ROUTER] Requires auth:', to.meta.requiresAuth)
  console.log('🎭 [ROUTER] Required role:', to.meta.role)
  console.log('👤 [ROUTER] Current user:', authStore.user?.email)
  console.log('📋 [ROUTER] Current profile:', authStore.profile)

  // Initialize auth store jika belum
  if (!authStore.user && authStore.loading) {
    console.log('🔄 [ROUTER] Initializing auth store...')
    await authStore.init()
  }

  // Jika route protected tapi belum login
  if (to.meta.requiresAuth && !authStore.user) {
    console.log('🚫 [ROUTER] Access denied - not authenticated')
    next('/login')
    return
  }

  // Jika role tidak sesuai
  if (to.meta.role && authStore.profile?.role !== to.meta.role) {
    console.log('🚫 [ROUTER] Access denied - role mismatch')
    console.log('❌ [ROUTER] User role:', authStore.profile?.role)
    console.log('✅ [ROUTER] Required role:', to.meta.role)
    
    // Redirect berdasarkan role user
    const userRole = authStore.profile?.role
    switch (userRole) {
      case 'super_admin':
        next('/admin')
        break
      case 'pengajar':
        next('/guru')
        break
      case 'orangtua':
        next('/orangtua')
        break
      default:
        next('/')
    }
    return
  }

  // Jika semua kondisi terpenuhi
  console.log('✅ [ROUTER] Access granted')
  next()
})

export default router