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
      path: '/galeri',
      name: 'Galeri',
      component: () => import('@/views/web/Galeri.vue')
    },
    {
      path: '/info',
      name: 'Info',
      component: () => import('@/views/web/Info.vue')
    },

    // ===== AUTHENTICATION ROUTES =====
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue'),
    },
    {
      path: '/pending-approval',
      name: 'pending-approval', 
      component: () => import('../views/PendingApproval.vue')
    },

    // ===== ADMIN ROUTES =====
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Adminlayout.vue'),
      redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: () => import('../views/admin/Dashboard.vue')
        },
        {
          path: 'users',
          name: 'admin-users',
          component: () => import('../views/admin/UserManagement.vue')
        },
        {
          path: 'students',
          name: 'admin-students', 
          component: () => import('../views/admin/Students.vue')
        },
        {
          path: 'teachers',
          name: 'admin-teachers',
          component: () => import('../views/admin/Teachers.vue')
        },
        {
          path: 'classes', 
          name: 'admin-classes',
          component: () => import('../views/admin/Classes.vue')
        },
        {
          path: 'reports',
          name: 'admin-reports',
          component: () => import('../views/admin/Reports.vue')
        },
        // WEBSETTINGS - FLAT STRUCTURE
        {
          path: 'websettings',
          name: 'admin-websettings',
          component: () => import('../views/admin/WebSettings.vue')
        },
        {
          path: 'websettings/home',
          name: 'admin-websettings-home', 
          component: () => import('../views/admin/websettings/HomeSettings.vue')
        },
        {
          path: 'websettings/program',
          name: 'admin-websettings-program',
          component: () => import('../views/admin/websettings/ProgramSettings.vue')
        },
        {
          path: 'websettings/galeri',
          name: 'admin-websettings-galeri',
          component: () => import('../views/admin/websettings/GaleriSettings.vue')
        },
        {
          path: 'websettings/info',
          name: 'admin-websettings-info',
          component: () => import('../views/admin/websettings/InfoSettings.vue')
        },
        {
          path: 'websettings/kontak',
          name: 'admin-websettings-kontak',
          component: () => import('../views/admin/websettings/KontakSettings.vue')
        },
        {
          path: 'settings',
          name: 'admin-settings',
          component: () => import('../views/admin/Settings.vue')
        }
      ]
    },

    // ===== GURU ROUTES =====
    {
      path: '/guru',
      name: 'guru',
      component: () => import('../views/Gurulayout.vue'),
      redirect: '/guru/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'guru-dashboard',
          component: () => import('../views/guru/Dashboard.vue')
        },
        {
          path: 'class',
          name: 'guru-class',
          component: () => import('../views/guru/Class.vue')
        },
        {
          path: 'attendance',
          name: 'guru-attendance', 
          component: () => import('../views/guru/Attendance.vue')
        },
        {
          path: 'progress',
          name: 'guru-progress',
          component: () => import('../views/guru/Progress.vue')
        },
        {
          path: 'materials',
          name: 'guru-materials',
          component: () => import('../views/guru/Materials.vue')
        },
        {
          path: 'schedule', 
          name: 'guru-schedule',
          component: () => import('../views/guru/Schedule.vue')
        }
      ]
    },

    // ===== ORANGTUA ROUTES =====
    {
      path: '/orangtua',
      name: 'orangtua',
      component: () => import('../views/Ortulayout.vue'),
      redirect: '/orangtua/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'orangtua-dashboard',
          component: () => import('../views/orangtua/Dashboard.vue')
        },
        {
          path: 'children',
          name: 'orangtua-children',
          component: () => import('../views/orangtua/Children.vue')
        },
        {
          path: 'progress',
          name: 'orangtua-progress',
          component: () => import('../views/orangtua/Progress.vue')
        },
        {
          path: 'messages',
          name: 'orangtua-messages',
          component: () => import('../views/orangtua/Messages.vue')
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