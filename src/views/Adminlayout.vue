<template>
  <div class="admin-layout">
    <!-- Website Header -->
    <header class="web-header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h1>TPA Miftahul Jannah</h1>
            <p>Bandar Lampung</p>
          </div>
        </div>
        <nav class="nav desktop-only">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
          <router-link to="/program" class="nav-link" :class="{ active: $route.path === '/program' }">Program</router-link>
          <router-link to="/galeri" class="nav-link" :class="{ active: $route.path === '/galeri' }">Galeri</router-link>
          <router-link to="/info" class="nav-link" :class="{ active: $route.path === '/info' }">Info</router-link>
          <router-link to="/kontak" class="nav-link" :class="{ active: $route.path === '/kontak' }">Kontak</router-link>
          <button @click="handleLogout" class="nav-link logout-btn">
            Logout
          </button>
        </nav>
      </div>
    </header>

    <div class="admin-container">
      <!-- Admin Sidebar -->
      <aside class="admin-sidebar desktop-only" :class="{ 'sidebar-open': sidebarOpen }">
        <div class="sidebar-header">
          <div class="logo">
            <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
            <div class="logo-text">
              <h2>Admin Panel</h2>
              <p>TPA Miftahul Jannah</p>
            </div>
          </div>
          <button class="close-sidebar mobile-only" @click="toggleSidebar">
            ✕
          </button>
        </div>

        <nav class="sidebar-nav">
          <router-link to="/admin/dashboard" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">📊</span>
            <span class="nav-text">Dashboard</span>
          </router-link>
          
          <router-link to="/admin/students" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">👨‍🎓</span>
            <span class="nav-text">Data Santri</span>
          </router-link>
          
          <router-link to="/admin/teachers" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">👨‍🏫</span>
            <span class="nav-text">Data Guru</span>
          </router-link>
          
          <router-link to="/admin/classes" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">🏫</span>
            <span class="nav-text">Kelas</span>
          </router-link>
          
          <router-link to="/admin/reports" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">📈</span>
            <span class="nav-text">Laporan</span>
          </router-link>
          
          <!-- MENU BARU: Pengaturan Web -->
          <router-link to="/admin/websettings" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">🌐</span>
            <span class="nav-text">Pengaturan Web</span>
          </router-link>
          
          <!-- MENU LAMA: Ganti nama jadi Pengaturan Sistem -->
          <router-link to="/admin/settings" class="nav-item" @click="closeSidebarMobile">
            <span class="nav-icon">⚙️</span>
            <span class="nav-text">Pengaturan Sistem</span>
          </router-link>
        </nav>
      </aside>

      <!-- Overlay for mobile -->
      <div 
        v-if="sidebarOpen" 
        class="sidebar-overlay mobile-only" 
        @click="toggleSidebar"
      ></div>

      <!-- Main Content -->
      <div class="admin-main">
        <!-- Admin Header -->
        <header class="admin-header">
          <div class="header-left">
            <button class="sidebar-toggle mobile-only" @click="toggleSidebar">
              ☰
            </button>
            <h1>{{ currentPageTitle }}</h1>
          </div>
          
          <div class="header-right">
            <div class="user-info desktop-only">
              <span class="user-name">{{ userFullName }}</span>
              <span class="user-role">Admin</span>
            </div>
          </div>
        </header>

        <!-- Content Area -->
        <main class="admin-content">
          <router-view />
        </main>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav mobile-only">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </router-link>
      <router-link to="/program" class="nav-item" :class="{ active: $route.path === '/program' }">
        <span class="nav-icon">📚</span>
        <span class="nav-label">Program</span>
      </router-link>
      <router-link to="/galeri" class="nav-item" :class="{ active: $route.path === '/galeri' }">
        <span class="nav-icon">📸</span>
        <span class="nav-label">Galeri</span>
      </router-link>
      <router-link to="/info" class="nav-item" :class="{ active: $route.path === '/info' }">
        <span class="nav-icon">ℹ️</span>
        <span class="nav-label">Info</span>
      </router-link>
      <button @click="handleLogout" class="nav-item logout">
        <span class="nav-icon">🚪</span>
        <span class="nav-label">Logout</span>
      </button>
    </nav>

    <!-- Mobile Sidebar -->
    <aside class="mobile-sidebar mobile-only" :class="{ 'sidebar-open': sidebarOpen }">
      <div class="sidebar-header">
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h2>Admin Panel</h2>
            <p>TPA Miftahul Jannah</p>
          </div>
        </div>
        <button class="close-sidebar" @click="toggleSidebar">
          ✕
        </button>
      </div>

      <nav class="sidebar-nav">
        <router-link to="/admin/dashboard" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">📊</span>
          <span class="nav-text">Dashboard</span>
        </router-link>
        
        <router-link to="/admin/students" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">👨‍🎓</span>
          <span class="nav-text">Data Santri</span>
        </router-link>
        
        <router-link to="/admin/teachers" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">👨‍🏫</span>
          <span class="nav-text">Data Guru</span>
        </router-link>
        
        <router-link to="/admin/classes" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">🏫</span>
          <span class="nav-text">Kelas</span>
        </router-link>
        
        <router-link to="/admin/reports" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">📈</span>
          <span class="nav-text">Laporan</span>
        </router-link>
        
        <!-- MENU BARU: Pengaturan Web -->
        <router-link to="/admin/websettings" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">🌐</span>
          <span class="nav-text">Pengaturan Web</span>
        </router-link>
        
        <!-- MENU LAMA: Ganti nama jadi Pengaturan Sistem -->
        <router-link to="/admin/settings" class="nav-item" @click="closeSidebarMobile">
          <span class="nav-icon">⚙️</span>
          <span class="nav-text">Pengaturan Sistem</span>
        </router-link>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useSupabase'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const { signOut } = useAuth()
const authStore = useAuthStore()

const sidebarOpen = ref(false)
const userFullName = ref('Administrator')

const pageTitles: any = {
  '/admin/dashboard': 'Dashboard',
  '/admin/students': 'Data Santri',
  '/admin/teachers': 'Data Guru',
  '/admin/classes': 'Manajemen Kelas',
  '/admin/reports': 'Laporan',
  '/admin/websettings': 'Pengaturan Web',
  '/admin/websettings/home': 'Pengaturan Home',
  '/admin/websettings/program': 'Pengaturan Program',
  '/admin/websettings/galeri': 'Pengaturan Galeri',
  '/admin/websettings/info': 'Pengaturan Info',
  '/admin/websettings/kontak': 'Pengaturan Kontak',
  '/admin/settings': 'Pengaturan Sistem'
}

const currentPageTitle = computed(() => {
  return pageTitles[route.path] || 'Dashboard'
})

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebarMobile = () => {
  if (window.innerWidth <= 768) {
    sidebarOpen.value = false
  }
}

const handleLogout = async () => {
  if (confirm('Yakin ingin logout?')) {
    await signOut()
    router.push('/login')
  }
}

onMounted(() => {
  const user = authStore.getUserFullName()
  if (user) userFullName.value = user
})
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: #f8fafc;
}

/* ===== WEBSITE HEADER ===== */
.web-header {
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 2px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1100;
}

.web-header .container {
  max-width: 1920px; /* ← DIUBAH JADI 1920px BIAR SEJAJAR */
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.web-header .logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.web-header .logo-img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid #1e40af;
  object-fit: contain;
}

.web-header .logo-text h1 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

.web-header .logo-text p {
  font-size: 0.9rem;
  color: #1e40af;
  margin: 0;
  font-weight: 600;
}

.web-header .nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.web-header .nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.web-header .nav-link:hover,
.web-header .nav-link.router-link-active {
  color: #1e40af;
}

.web-header .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1e40af;
  border-radius: 1px;
}

.web-header .logout-btn {
  background: #ef4444;
  color: white !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.web-header .logout-btn:hover {
  background: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
}

/* ===== ADMIN CONTAINER ===== */
.admin-container {
  display: flex;
  min-height: calc(100vh - 80px);
  max-width: 1920px; /* ← SUDAH 1920px */
  margin: 0 auto;
}

/* ===== ADMIN SIDEBAR ===== */
.admin-sidebar {
  width: 280px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  flex-shrink: 0;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-sidebar {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;
}

.close-sidebar:hover {
  opacity: 0.8;
}

.sidebar-header .logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-header .logo-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid white;
  object-fit: contain;
}

.sidebar-header .logo-text h2 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.sidebar-header .logo-text p {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1rem 1.5rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
  margin: 0.25rem 0;
}

.nav-item:hover {
  background: rgba(255,255,255,0.1);
  color: white;
  transform: translateX(4px);
}

.nav-item.router-link-active {
  background: rgba(255,255,255,0.15);
  color: white;
  border-left-color: white;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.1);
}

.nav-icon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-icon {
  transform: scale(1.1);
}

.nav-text {
  font-weight: 500;
  font-size: 0.95rem;
}

/* ===== ADMIN MAIN CONTENT ===== */
.admin-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #f8fafc;
}

.admin-header {
  background: white;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sidebar-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: #6b7280;
}

.sidebar-toggle:hover {
  background: #f3f4f6;
  color: #374151;
}

.admin-header h1 {
  margin: 0;
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 700;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-info {
  text-align: right;
  padding: 0.5rem 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.user-name {
  display: block;
  font-weight: 600;
  color: #1f2937;
  font-size: 0.9rem;
}

.user-role {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.admin-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background: #f8fafc;
  min-height: calc(100vh - 180px);
}

/* ===== MOBILE BOTTOM NAVIGATION ===== */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid #e5e7eb;
  padding: 0.5rem;
  z-index: 1000;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
}

.mobile-bottom-nav .nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: #374151;
  transition: all 0.3s ease;
  border-radius: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
}

.mobile-bottom-nav .nav-item:hover,
.mobile-bottom-nav .nav-item.active {
  color: #1e40af;
  background: #eff6ff;
  transform: translateY(-2px);
}

.mobile-bottom-nav .nav-item.logout {
  background: #ef4444;
  color: white;
  border-radius: 8px;
}

.mobile-bottom-nav .nav-item.logout:hover {
  background: #dc2626;
  color: white;
  transform: translateY(-2px);
}

.mobile-bottom-nav .nav-icon {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  transition: transform 0.3s ease;
}

.mobile-bottom-nav .nav-item:hover .nav-icon {
  transform: scale(1.1);
}

.mobile-bottom-nav .nav-label {
  font-size: 0.75rem;
  font-weight: 600;
}

/* ===== MOBILE SIDEBAR ===== */
.mobile-sidebar {
  display: none;
  position: fixed;
  top: 0;
  left: -320px;
  bottom: 0;
  width: 280px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  z-index: 1200;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 20px rgba(0,0,0,0.3);
  padding: 0 20px;
}

.mobile-sidebar.sidebar-open {
  left: 0;
}

/* ===== OVERLAY ===== */
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1100;
  backdrop-filter: blur(4px);
}

/* ===== RESPONSIVE DESIGN ===== */

/* Desktop First - Default untuk desktop/widescreen */
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
}

/* Large Desktop (1920px+) */
@media (min-width: 1920px) {
  .admin-container {
    max-width: 1920px;
  }
  
  .admin-content {
    padding: 3rem;
  }
  
  .admin-sidebar {
    width: 300px;
  }
}

/* Tablet (769px - 1024px) */
@media (max-width: 1024px) {
  .web-header .nav {
    gap: 1.5rem;
  }
  
  .web-header .nav-link {
    font-size: 0.9rem;
  }
  
  .admin-header {
    padding: 1rem 1.5rem;
  }
  
  .admin-content {
    padding: 1.5rem;
  }
}

/* MOBILE BREAKPOINT (768px ke bawah) */
@media (max-width: 768px) {
  .mobile-only {
    display: block !important;
  }
  
  .desktop-only {
    display: none !important;
  }
  
  /* Website Header Mobile */
  .web-header {
    padding: 0.75rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: white;
  }
  
  .web-header .container {
    padding: 0 1rem;
  }
  
  .web-header .logo-img {
    width: 40px;
    height: 40px;
  }
  
  .web-header .logo-text h1 {
    font-size: 1.1rem;
  }
  
  .web-header .logo-text p {
    font-size: 0.8rem;
  }
  
  /* Admin Container Mobile */
  .admin-container {
    flex-direction: column;
    min-height: 100vh;
    margin-top: 60px;
  }
  
  .admin-main {
    width: 100%;
  }
  
  /* Admin Header Mobile */
  .admin-header {
    padding: 1rem;
    position: sticky;
    top: 60px;
    z-index: 900;
    background: white;
  }
  
  .admin-header h1 {
    font-size: 1.2rem;
  }
  
  /* Content Area Mobile */
  .admin-content {
    padding: 1rem;
    margin-bottom: 70px;
    min-height: calc(100vh - 130px);
  }
  
  /* Bottom Navigation Mobile */
  .mobile-bottom-nav {
    display: flex !important;
    height: 60px;
  }
  
  /* Mobile Sidebar */
  .mobile-sidebar {
    display: block;
  }
  
  .sidebar-overlay {
    display: block;
  }
  
  .sidebar-toggle {
    display: block;
  }
}

/* Small Mobile (480px ke bawah) */
@media (max-width: 480px) {
  .web-header .logo-text h1 {
    font-size: 1rem;
  }
  
  .web-header .logo-text p {
    font-size: 0.7rem;
  }
  
  .admin-header {
    padding: 0.75rem 1rem;
  }
  
  .admin-header h1 {
    font-size: 1.1rem;
  }
  
  .admin-content {
    padding: 0.75rem;
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.7rem;
  }
  
  .mobile-bottom-nav .nav-icon {
    font-size: 1.1rem;
  }
  
  .mobile-sidebar {
    width: 85vw;
    left: -85vw;
  }
}

/* Very Small Mobile (360px ke bawah) */
@media (max-width: 360px) {
  .web-header .logo {
    gap: 8px;
  }
  
  .web-header .logo-img {
    width: 35px;
    height: 35px;
  }
  
  .web-header .logo-text h1 {
    font-size: 0.9rem;
  }
  
  .admin-header h1 {
    font-size: 1rem;
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.65rem;
  }
}

/* ===== DARK MODE SUPPORT ===== */
@media (prefers-color-scheme: dark) {
  .admin-layout {
    background: #111827;
  }

  /* Website Header Dark */
  .web-header {
    background: #1f2937;
    border-bottom-color: #374151;
  }

  .web-header .logo-text h1 {
    color: white;
  }

  .web-header .logo-text p {
    color: #60a5fa;
  }

  .web-header .nav-link {
    color: #d1d5db;
  }

  .web-header .nav-link:hover,
  .web-header .nav-link.router-link-active {
    color: #60a5fa;
  }

  .web-header .logout-btn {
    background: #dc2626;
  }

  .web-header .logout-btn:hover {
    background: #b91c1c;
  }

  /* Admin Sidebar Dark */
  .admin-sidebar {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  }

  /* Admin Main Content Dark */
  .admin-main {
    background: #111827;
  }

  .admin-header {
    background: #1f2937;
    border-bottom-color: #374151;
  }

  .admin-header h1 {
    color: white;
  }

  .sidebar-toggle {
    color: #d1d5db;
  }

  .sidebar-toggle:hover {
    background: #374151;
    color: white;
  }

  .user-info {
    background: #374151;
    border-color: #4b5563;
  }

  .user-info .user-name {
    color: white;
  }

  .user-info .user-role {
    color: #9ca3af;
  }

  .admin-content {
    background: #111827;
  }

  /* Mobile Bottom Nav Dark */
  .mobile-bottom-nav {
    background: #1f2937;
    border-top-color: #374151;
  }

  .mobile-bottom-nav .nav-item {
    color: #d1d5db;
  }

  .mobile-bottom-nav .nav-item:hover,
  .mobile-bottom-nav .nav-item.active {
    color: #60a5fa;
    background: #374151;
  }

  .mobile-bottom-nav .nav-item.logout {
    background: #dc2626;
  }

  .mobile-bottom-nav .nav-item.logout:hover {
    background: #b91c1c;
  }

  /* Mobile Sidebar Dark */
  .mobile-sidebar {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  }
}

/* Smooth transitions untuk semua element */
.admin-layout * {
  transition: all 0.2s ease;
}

/* Custom scrollbar untuk desktop */
@media (min-width: 769px) {
  .admin-content::-webkit-scrollbar {
    width: 6px;
  }
  
  .admin-content::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  .admin-content::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  .admin-content::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
}

/* Dark mode scrollbar */
@media (prefers-color-scheme: dark) and (min-width: 769px) {
  .admin-content::-webkit-scrollbar-track {
    background: #374151;
  }
  
  .admin-content::-webkit-scrollbar-thumb {
    background: #6b7280;
  }
  
  .admin-content::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
}
</style>