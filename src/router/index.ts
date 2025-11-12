import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHashHistory(), // ← GANTI KE INI
  routes: [
    // ===== PUBLIC ROUTES =====
    {
      path: '/',
      name: 'home',
      component: () => import('../views/web/HomeView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('../views/web/Program.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/galeri',
      name: 'Galeri',
      component: () => import('@/views/web/Galeri.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('@/views/web/Info.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPassword.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPassword.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/pending-approval',
      name: 'pending-approval',
      component: () => import('../views/PendingApproval.vue'),
      meta: { requiresAuth: true }
    },

    // ===== ADMIN ROUTES =====
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Adminlayout.vue'),
      redirect: '/admin/dashboard',
      meta: { requiresAuth: true, requiredRole: 'super_admin' },
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('../views/admin/Dashboard.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('../views/admin/UserManagement.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'students',
          name: 'admin-students', 
          component: () => import('../views/admin/Students.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'teachers',
          name: 'admin-teachers',
          component: () => import('../views/admin/Teachers.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'classes', 
          name: 'admin-classes',
          component: () => import('../views/admin/Classes.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'reports',
          name: 'admin-reports',
          component: () => import('../views/admin/Reports.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings',
          name: 'admin-websettings',
          component: () => import('../views/admin/WebSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings/home',
          name: 'admin-websettings-home', 
          component: () => import('../views/admin/websettings/HomeSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings/program',
          name: 'admin-websettings-program',
          component: () => import('../views/admin/websettings/ProgramSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings/galeri',
          name: 'admin-websettings-galeri',
          component: () => import('../views/admin/websettings/GaleriSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings/info',
          name: 'admin-websettings-info',
          component: () => import('../views/admin/websettings/InfoSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'websettings/kontak',
          name: 'admin-websettings-kontak',
          component: () => import('../views/admin/websettings/KontakSettings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('../views/admin/Settings.vue'),
          meta: { requiresAuth: true, requiredRole: 'super_admin' }
        }
      ]
    },

    // ===== GURU ROUTES =====
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/Gurulayout.vue'),
      redirect: '/guru/dashboard',
      meta: { requiresAuth: true, requiredRole: 'pengajar' },
      children: [
        {
          path: 'dashboard',
          name: 'guru-dashboard',
          component: () => import('../views/guru/Dashboard.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        },
        {
          path: 'class',
          name: 'guru-class',
          component: () => import('../views/guru/Class.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        },
        {
          path: 'attendance',
          name: 'guru-attendance', 
          component: () => import('../views/guru/Attendance.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        },
        {
          path: 'progress',
          name: 'guru-progress',
          component: () => import('../views/guru/Progress.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        },
        {
          path: 'materials',
          name: 'guru-materials',
          component: () => import('../views/guru/Materials.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        },
        {
          path: 'schedule', 
          name: 'guru-schedule',
          component: () => import('../views/guru/Schedule.vue'),
          meta: { requiresAuth: true, requiredRole: 'pengajar' }
        }
      ]
    },

    // ===== ORANGTUA ROUTES =====
    {
      path: '/orangtua',
      name: 'orangtua',
      component: () => import('../views/Ortulayout.vue'),
      redirect: '/orangtua/dashboard',
      meta: { requiresAuth: true, requiredRole: 'orangtua' },
      children: [
        {
          path: 'dashboard',
          name: 'orangtua-dashboard',
          component: () => import('../views/orangtua/Dashboard.vue'),
          meta: { requiresAuth: true, requiredRole: 'orangtua' }
        },
        {
          path: 'children',
          name: 'orangtua-children',
          component: () => import('../views/orangtua/Children.vue'),
          meta: { requiresAuth: true, requiredRole: 'orangtua' }
        },
        {
          path: 'progress',
          name: 'orangtua-progress',
          component: () => import('../views/orangtua/Progress.vue'),
          meta: { requiresAuth: true, requiredRole: 'orangtua' }
        },
        {
          path: 'messages',
          name: 'orangtua-messages',
          component: () => import('../views/orangtua/Messages.vue'),
          meta: { requiresAuth: true, requiredRole: 'orangtua' }
        }
      ]
    },

    // ===== FALLBACK 404 ROUTE =====
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: { requiresAuth: false }
    }
  ]
})

// ROUTER GUARD (tetap sama)
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  await authStore.init()
  
  const isAuthenticated = authStore.isAuthenticated()
  const userRole = authStore.getUserRole()
  const isApproved = authStore.isApproved()
  
  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      next('/login')
    } else if (!isApproved) {
      next('/pending-approval')
    } else if (to.meta.requiredRole && userRole !== to.meta.requiredRole) {
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
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router