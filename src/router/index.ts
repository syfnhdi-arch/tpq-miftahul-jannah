import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ===== PUBLIC WEBSITE ROUTES =====
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

    // ===== ADMIN DASHBOARD ROUTES =====
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'super_admin' }
    },
    {
      path: '/admin/students',
      name: 'admin-students',
      component: () => import('../views/admin/Students.vue'),
      meta: { requiresAuth: true, role: 'super_admin' }
    },
    {
      path: '/admin/teachers',
      name: 'admin-teachers',
      component: () => import('../views/admin/Teachers.vue'),
      meta: { requiresAuth: true, role: 'super_admin' }
    },
    {
      path: '/admin/reports',
      name: 'admin-reports',
      component: () => import('../views/admin/Reports.vue'),
      meta: { requiresAuth: true, role: 'super_admin' }
    },

    // ===== GURU DASHBOARD ROUTES =====
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/guru/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'pengajar' }
    },
    {
      path: '/guru/class',
      name: 'guru-class',
      component: () => import('../views/guru/MyClass.vue'),
      meta: { requiresAuth: true, role: 'pengajar' }
    },
    {
      path: '/guru/attendance',
      name: 'guru-attendance',
      component: () => import('../views/guru/Attendance.vue'),
      meta: { requiresAuth: true, role: 'pengajar' }
    },
    {
      path: '/guru/progress',
      name: 'guru-progress',
      component: () => import('../views/guru/Progress.vue'),
      meta: { requiresAuth: true, role: 'pengajar' }
    },

    // ===== ORANG TUA DASHBOARD ROUTES =====
    {
      path: '/orangtua',
      name: 'orangtua',
      component: () => import('../views/orangtua/Dashboard.vue'),
      meta: { requiresAuth: true, role: 'orangtua' }
    },
    {
      path: '/orangtua/children',
      name: 'orangtua-children',
      component: () => import('../views/orangtua/MyChildren.vue'),
      meta: { requiresAuth: true, role: 'orangtua' }
    },
    {
      path: '/orangtua/progress',
      name: 'orangtua-progress',
      component: () => import('../views/orangtua/Progress.vue'),
      meta: { requiresAuth: true, role: 'orangtua' }
    },
    {
      path: '/orangtua/messages',
      name: 'orangtua-messages',
      component: () => import('../views/orangtua/Messages.vue'),
      meta: { requiresAuth: true, role: 'orangtua' }
    },

    // ===== FALLBACK 404 ROUTE =====
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
    
    // Redirect berdasarkan role user yang sebenarnya
    const userRole = authStore.profile?.role
    switch (userRole) {
      case 'super_admin':
        console.log('🔄 [ROUTER] Redirecting to admin dashboard')
        next('/admin')
        break
      case 'pengajar':
        console.log('🔄 [ROUTER] Redirecting to guru dashboard')
        next('/guru')
        break
      case 'orangtua':
        console.log('🔄 [ROUTER] Redirecting to orangtua dashboard')
        next('/orangtua')
        break
      default:
        console.log('🔄 [ROUTER] Redirecting to home')
        next('/')
    }
    return
  }

  // Jika semua kondisi terpenuhi
  console.log('✅ [ROUTER] Access granted')
  next()
})

export default router