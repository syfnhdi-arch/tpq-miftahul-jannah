<template>
  <div class="guru-layout">
    <!-- Guru Header -->
    <header class="guru-header">
      <div class="container">
        <div class="header-left">
          <div class="logo">
            <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
            <div class="logo-text">
              <h2>TPA Miftahul Jannah</h2>
              <p>Dashboard Guru</p>
            </div>
          </div>
        </div>
        
        <div class="header-right">
          <!-- Quick Stats -->
          <div class="quick-stats desktop-only">
            <div class="stat">
              <span class="stat-number">3</span>
              <span class="stat-label">Kelas</span>
            </div>
            <div class="stat">
              <span class="stat-number">45</span>
              <span class="stat-label">Siswa</span>
            </div>
          </div>

          <!-- User Info & Notifications -->
          <div class="user-actions">
            <button class="notification-btn">
              <span class="notification-icon">🔔</span>
              <span class="notification-badge">3</span>
            </button>
            
            <div class="user-info">
              <span class="user-name">{{ userName }}</span>
              <span class="user-role">Guru/Pengajar</span>
            </div>
            
            <div class="profile-dropdown">
              <button class="profile-btn">
                <span class="profile-avatar">👨‍🏫</span>
              </button>
              <div class="dropdown-menu">
                <router-link to="/guru/profile" class="dropdown-item">👤 Profil Saya</router-link>
                <router-link to="/guru/settings" class="dropdown-item">⚙️ Pengaturan</router-link>
                <div class="dropdown-divider"></div>
                <button @click="handleLogout" class="dropdown-item logout">🚪 Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Guru Navigation -->
    <nav class="guru-nav desktop-only">
      <div class="container">
        <router-link to="/guru" class="nav-item" :class="{ active: $route.path === '/guru' }">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </router-link>
        <router-link to="/guru/attendance" class="nav-item" :class="{ active: $route.path.includes('/attendance') }">
          <span class="nav-icon">✅</span>
          <span class="nav-label">Absensi</span>
        </router-link>
        <router-link to="/guru/class" class="nav-item" :class="{ active: $route.path.includes('/class') }">
          <span class="nav-icon">👥</span>
          <span class="nav-label">Kelas Saya</span>
        </router-link>
        <router-link to="/guru/progress" class="nav-item" :class="{ active: $route.path.includes('/progress') }">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Progress Siswa</span>
        </router-link>
        <router-link to="/guru/materials" class="nav-item" :class="{ active: $route.path.includes('/materials') }">
          <span class="nav-icon">📚</span>
          <span class="nav-label">Materi Ajar</span>
        </router-link>
        <router-link to="/guru/schedule" class="nav-item" :class="{ active: $route.path.includes('/schedule') }">
          <span class="nav-icon">🗓️</span>
          <span class="nav-label">Jadwal</span>
        </router-link>
      </div>
    </nav>

    <!-- Mobile Header Actions -->
    <div class="mobile-actions mobile-only">
      <button class="sidebar-toggle" @click="toggleSidebar">
        ☰
      </button>
      <div class="logo-mobile">
        <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
        <div class="logo-text">
          <h2>TPA Miftahul Jannah</h2>
          <p>Dashboard Guru</p>
        </div>
      </div>
      <button class="notification-btn">
        <span class="notification-icon">🔔</span>
        <span class="notification-badge">3</span>
      </button>
    </div>

    <!-- Main Content -->
    <main class="guru-main">
      <div class="container">
        <router-view />
      </div>
    </main>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav mobile-only">
      <router-link to="/guru" class="nav-item" :class="{ active: $route.path === '/guru' }">
        <span class="nav-icon">📊</span>
        <span class="nav-label">Dashboard</span>
      </router-link>
      <router-link to="/guru/attendance" class="nav-item" :class="{ active: $route.path.includes('/attendance') }">
        <span class="nav-icon">✅</span>
        <span class="nav-label">Absensi</span>
      </router-link>
      <router-link to="/guru/class" class="nav-item" :class="{ active: $route.path.includes('/class') }">
        <span class="nav-icon">👥</span>
        <span class="nav-label">Kelas</span>
      </router-link>
      <router-link to="/guru/progress" class="nav-item" :class="{ active: $route.path.includes('/progress') }">
        <span class="nav-icon">📈</span>
        <span class="nav-label">Progress</span>
      </router-link>
    </nav>

    <!-- Mobile Sidebar -->
    <aside class="mobile-sidebar mobile-only" :class="{ 'sidebar-open': sidebarOpen }">
      <nav class="sidebar-nav">
        <!-- User Info -->
        <div class="user-profile-item">
          <div class="profile-avatar">👨‍🏫</div>
          <div class="profile-info">
            <div class="user-name">Guru Contoh</div>
            <div class="user-role">Panel Guru</div>
          </div>
        </div>

        <!-- Menu Items -->
        <router-link to="/guru" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">📊</span>
          <span class="nav-text">Dashboard</span>
        </router-link>
        <router-link to="/guru/attendance" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">✅</span>
          <span class="nav-text">Absensi</span>
        </router-link>
        <router-link to="/guru/class" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">👥</span>
          <span class="nav-text">Kelas Saya</span>
        </router-link>
        <router-link to="/guru/progress" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">📈</span>
          <span class="nav-text">Progress Siswa</span>
        </router-link>
        <router-link to="/guru/materials" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">📚</span>
          <span class="nav-text">Materi Ajar</span>
        </router-link>
        <router-link to="/guru/schedule" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">🗓️</span>
          <span class="nav-text">Jadwal</span>
        </router-link>
        <router-link to="/guru/profile" class="nav-item" @click="closeSidebar">
          <span class="nav-icon">👤</span>
          <span class="nav-text">Profil Saya</span>
        </router-link>
        
        <!-- Logout -->
        <button @click="handleLogout" class="nav-item logout">
          <span class="nav-icon">🚪</span>
          <span class="nav-text">Logout</span>
        </button>
      </nav>
    </aside>

    <!-- Overlay for mobile sidebar -->
    <div 
      v-if="sidebarOpen" 
      class="sidebar-overlay mobile-only" 
      @click="toggleSidebar"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useAuth } from '@/composables/useSupabase'

const router = useRouter()
const authStore = useAuthStore()
const { signOut } = useAuth()

const userName = computed(() => authStore.getUserFullName())
const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const handleLogout = async () => {
  if (confirm('Yakin ingin logout?')) {
    await signOut()
    await authStore.init()
    router.push('/login')
  }
}
</script>

<style scoped>
.guru-layout {
  min-height: 100vh;
  background: #f0fdf4;
}

/* Header Styles */
.guru-header {
  background: white;
  border-bottom: 2px solid #dcfce7;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.guru-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.header-left .logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #16a34a;
}

.logo-text h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #1f2937;
  font-weight: 700;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.9rem;
  margin: 0;
  color: #16a34a;
  font-weight: 500;
  line-height: 1.2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Quick Stats */
.quick-stats {
  display: flex;
  gap: 1.5rem;
  padding-right: 1.5rem;
  border-right: 1px solid #e5e7eb;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-number {
  font-size: 1.1rem;
  font-weight: 700;
  color: #16a34a;
}

.stat-label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

/* User Actions */
.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.notification-btn:hover {
  background: #f0fdf4;
}

.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  padding: 0.1rem 0.3rem;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
}

.user-info {
  text-align: right;
}

.user-name {
  display: block;
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
}

.user-role {
  display: block;
  font-size: 0.9rem;
  color: #16a34a;
  font-weight: 500;
}

/* Profile Dropdown */
.profile-dropdown {
  position: relative;
}

.profile-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.profile-btn:hover {
  background: #f0fdf4;
}

.profile-avatar {
  font-size: 1.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  min-width: 180px;
  padding: 0.5rem;
  z-index: 1000;
  display: none;
}

.profile-dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  text-decoration: none;
  color: #374151;
  border-radius: 6px;
  transition: background 0.3s;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 0.9rem;
}

.dropdown-item:hover {
  background: #f0fdf4;
  color: #16a34a;
}

.dropdown-item.logout {
  color: #ef4444;
}

.dropdown-item.logout:hover {
  background: #fef2f2;
}

.dropdown-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 0.5rem 0;
}

/* Navigation */
.guru-nav {
  background: white;
  border-bottom: 1px solid #dcfce7;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.guru-nav .container {
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  text-decoration: none;
  color: #6b7280;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  font-weight: 500;
}

.nav-item:hover {
  color: #16a34a;
}

.nav-item.active {
  color: #16a34a;
  border-bottom-color: #16a34a;
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-label {
  font-size: 0.95rem;
}

/* Mobile Actions */
.mobile-actions {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 900;
}

.sidebar-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  cursor: pointer;
  color: #374151;
}

.logo-mobile {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.logo-mobile .logo-img {
  width: 35px;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #16a34a;
}

.logo-mobile .logo-text h2 {
  font-size: 0.85rem;
  margin: 0;
  color: #1f2937;
  font-weight: 700;
  line-height: 1.1;
}

.logo-mobile .logo-text p {
  font-size: 0.65rem;
  margin: 0;
  color: #16a34a;
  font-weight: 500;
  line-height: 1.1;
}

/* Main Content */
.guru-main {
  padding: 1rem 0;
  min-height: calc(100vh - 140px);
}

.guru-main .container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #dcfce7;
  padding: 1.5rem;
  margin: 0 auto;
  width: calc(100% - 2rem);
}

/* Mobile Bottom Navigation */
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
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  height: 60px;
}

.mobile-bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mobile-bottom-nav .nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: #374151;
  transition: all 0.3s;
  border-radius: 6px;
  border: none;
  background: none;
  min-height: 50px;
}

.mobile-bottom-nav .nav-item:hover,
.mobile-bottom-nav .nav-item.active {
  color: #16a34a;
  background: #f0fdf4;
}

.mobile-bottom-nav .nav-icon {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.mobile-bottom-nav .nav-label {
  font-size: 0.75rem;
  font-weight: 600;
}

/* ========== MOBILE SIDEBAR STYLES ========== */
.mobile-sidebar {
  display: none;
  position: fixed;
  top: 0;
  left: -100%;
  bottom: 0;
  width: 280px;
  background: white;
  z-index: 1100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 20px rgba(0,0,0,0.15);
  overflow-y: auto;
}

.mobile-sidebar.sidebar-open {
  left: 0;
}

/* Sidebar Navigation */
.sidebar-nav {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

/* User Profile Item */
.user-profile-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0.5rem;
}

.profile-avatar {
  font-size: 2.5rem;
  background: #dcfce7;
  padding: 0.75rem;
  border-radius: 50%;
  border: 2px solid #16a34a;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
  min-width: 0;
}

.profile-info .user-name {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  line-height: 1.2;
}

.profile-info .user-role {
  color: #16a34a;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.2;
}

/* Menu Items */
.sidebar-nav .nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #374151;
  transition: all 0.2s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 0.95rem;
  border-right: 4px solid transparent;
  cursor: pointer;
}

.sidebar-nav .nav-item:hover {
  background: #f8fafc;
  color: #16a34a;
}

.sidebar-nav .nav-item.router-link-active {
  background: #f0fdf4;
  color: #16a34a;
  border-right-color: #16a34a;
  font-weight: 600;
}

.sidebar-nav .nav-icon {
  font-size: 1.3rem;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.sidebar-nav .nav-text {
  flex: 1;
  font-weight: 500;
  line-height: 1.4;
  font-size: 0.95rem;
}

.sidebar-nav .nav-item.logout {
  color: #ef4444;
  margin-top: 0.5rem;
}

.sidebar-nav .nav-item.logout:hover {
  background: #fef2f2;
  color: #dc2626;
  border-right-color: #ef4444;
}

/* Overlay */
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
  backdrop-filter: blur(4px);
}

/* ========== RESPONSIVE DESIGN ========== */

/* Desktop - TETAP BAGUS (No Changes) */
@media (min-width: 769px) {
  .header-left .logo h2 {
    font-size: 1.2rem;
  }
  
  .header-left .logo p {
    font-size: 0.9rem;
  }
}

/* Tablet & Mobile (768px ke bawah) */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-only {
    display: flex !important;
  }
  
  .mobile-actions {
    display: flex;
  }
  
  .mobile-bottom-nav {
    display: flex;
  }
  
  .mobile-sidebar {
    display: block;
  }
  
  .sidebar-overlay {
    display: block;
  }
  
  .guru-main {
    padding: 0.5rem 0;
    min-height: calc(100vh - 120px);
    margin-bottom: 60px;
  }
  
  .guru-main .container {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
    width: calc(100% - 1rem);
  }
  
  .logo-mobile .logo-text h2 {
    font-size: 0.85rem;
  }
  
  .logo-mobile .logo-text p {
    font-size: 0.65rem;
  }
}

/* Mobile Small (480px ke bawah) */
@media (max-width: 480px) {
  .guru-main .container {
    padding: 0.75rem;
    margin: 0 0.25rem;
    width: calc(100% - 0.5rem);
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.7rem;
  }
  
  .mobile-bottom-nav .nav-item {
    padding: 0.4rem;
  }
  
  .mobile-sidebar {
    width: 85vw;
    max-width: 300px;
  }
  
  .user-profile-item {
    padding: 1.25rem 1.25rem 0.75rem 1.25rem;
  }
  
  .sidebar-nav .nav-item {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .sidebar-nav .nav-icon {
    font-size: 1.2rem;
    width: 22px;
  }
  
  .sidebar-nav .nav-text {
    font-size: 0.9rem;
  }
  
  .profile-avatar {
    font-size: 2.2rem;
    padding: 0.6rem;
  }
  
  .profile-info .user-name {
    font-size: 1rem;
  }
  
  .profile-info .user-role {
    font-size: 0.8rem;
  }
  
  .logo-mobile .logo-text h2 {
    font-size: 0.8rem;
  }
  
  .logo-mobile .logo-text p {
    font-size: 0.6rem;
  }
  
  .logo-mobile .logo-img {
    width: 35px;
    height: 35px;
  }
}

/* Very Small Mobile (360px ke bawah) */
@media (max-width: 360px) {
  .guru-main .container {
    padding: 0.5rem;
    margin: 0 0.25rem;
    width: calc(100% - 0.5rem);
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.65rem;
  }
  
  .mobile-bottom-nav .nav-icon {
    font-size: 1.1rem;
  }
  
  .user-profile-item {
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 0.75rem;
  }
  
  .sidebar-nav .nav-item {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    gap: 0.75rem;
  }
  
  .sidebar-nav .nav-icon {
    font-size: 1.1rem;
    width: 20px;
  }
  
  .sidebar-nav .nav-text {
    font-size: 0.85rem;
  }
  
  .profile-avatar {
    font-size: 2rem;
    padding: 0.5rem;
  }
  
  .profile-info .user-name {
    font-size: 0.9rem;
  }
  
  .profile-info .user-role {
    font-size: 0.75rem;
  }
  
  .logo-mobile .logo-text h2 {
    font-size: 0.75rem;
  }
  
  .logo-mobile .logo-text p {
    font-size: 0.55rem;
  }
  
  .logo-mobile .logo-img {
    width: 35px;
    height: 35px;
  }
  
  .logo-mobile {
    gap: 6px;
  }
}

/* Extra Small Mobile (320px ke bawah) */
@media (max-width: 320px) {
  .logo-mobile .logo-text h2 {
    font-size: 0.7rem;
  }
  
  .logo-mobile .logo-text p {
    font-size: 0.5rem;
  }
  
  .mobile-actions {
    padding: 0.5rem 0.75rem;
  }
  
  .user-profile-item {
    padding: 0.875rem 0.875rem 0.5rem 0.875rem;
  }
  
  .sidebar-nav .nav-item {
    padding: 0.7rem 0.875rem;
    font-size: 0.8rem;
  }
  
  .sidebar-nav .nav-icon {
    font-size: 1rem;
    width: 18px;
  }
  
  .sidebar-nav .nav-text {
    font-size: 0.8rem;
  }
  
  .profile-avatar {
    font-size: 1.8rem;
    padding: 0.4rem;
  }
}
</style>