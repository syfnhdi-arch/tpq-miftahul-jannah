<template>
  <div class="ortu-layout">
    <!-- Desktop Layout -->
    <div class="desktop-layout">
      <header class="ortu-header">
        <div class="container">
          <div class="header-left">
            <div class="logo">
              <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
              <div class="logo-text">
                <h2>TPA Miftahul Jannah</h2>
                <p>Dashboard Orang Tua</p>
              </div>
            </div>
          </div>
          
          <div class="header-right">
            <div class="user-info">
              <span class="user-name">{{ userName }}</span>
              <span class="user-role">Orang Tua</span>
            </div>
            <button @click="handleLogout" class="logout-btn">🚪 Logout</button>
          </div>
        </div>
      </header>

      <nav class="ortu-nav">
        <div class="container">
          <router-link to="/orangtua" class="nav-item" :class="{ active: $route.path === '/orangtua' }">
            <span class="nav-icon">📊</span>
            <span class="nav-label">Dashboard</span>
          </router-link>
          <router-link to="/orangtua/children" class="nav-item" :class="{ active: $route.path.includes('/children') }">
            <span class="nav-icon">👶</span>
            <span class="nav-label">Anak Saya</span>
          </router-link>
          <router-link to="/orangtua/progress" class="nav-item" :class="{ active: $route.path.includes('/progress') }">
            <span class="nav-icon">📈</span>
            <span class="nav-label">Progress</span>
          </router-link>
          <router-link to="/orangtua/messages" class="nav-item" :class="{ active: $route.path.includes('/messages') }">
            <span class="nav-icon">💬</span>
            <span class="nav-label">Pesan</span>
          </router-link>
        </div>
      </nav>
    </div>

    <!-- Mobile Layout -->
    <div class="mobile-layout">
      <div class="mobile-header">
        <div class="mobile-logo">
          <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h2>TPA Miftahul Jannah</h2>
            <p>Orang Tua</p>
          </div>
        </div>
        <!-- Hapus tombol logout dari header mobile -->
      </div>

      <nav class="mobile-bottom-nav">
        <router-link to="/orangtua" class="nav-item" :class="{ active: $route.path === '/orangtua' }">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </router-link>
        <router-link to="/orangtua/children" class="nav-item" :class="{ active: $route.path.includes('/children') }">
          <span class="nav-icon">👶</span>
          <span class="nav-label">Anak</span>
        </router-link>
        <router-link to="/orangtua/progress" class="nav-item" :class="{ active: $route.path.includes('/progress') }">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Progress</span>
        </router-link>
        <router-link to="/orangtua/messages" class="nav-item" :class="{ active: $route.path.includes('/messages') }">
          <span class="nav-icon">💬</span>
          <span class="nav-label">Pesan</span>
        </router-link>
        <!-- Tambah tombol logout di bottom nav -->
        <button @click="handleLogout" class="nav-item logout-btn-mobile">
          <span class="nav-icon">🚪</span>
          <span class="nav-label">Logout</span>
        </button>
      </nav>
    </div>

    <!-- Main Content (Shared) -->
    <main class="ortu-main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useAuth } from '@/composables/useSupabase'

const router = useRouter()
const authStore = useAuthStore()
const { signOut } = useAuth()

const userName = computed(() => authStore.getUserFullName() || 'Orang Tua Contoh')

const handleLogout = async () => {
  if (confirm('Yakin ingin logout?')) {
    await signOut()
    await authStore.init()
    router.push('/login')
  }
}
</script>

<style scoped>
.ortu-layout {
  min-height: 100vh;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== DESKTOP LAYOUT ===== */
.desktop-layout {
  display: block;
}

.mobile-layout {
  display: none;
}

/* Desktop Header - FIXED */
.ortu-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px; /* Fixed height for consistent spacing */
}

.ortu-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 100%;
}

.header-left .logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: 2px solid #ea580c;
}

.logo-text h2 {
  font-size: 1.3rem;
  margin: 0;
  color: #1f2937;
  font-weight: 700;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.85rem;
  margin: 0;
  color: #ea580c;
  font-weight: 500;
  line-height: 1.2;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.user-info {
  text-align: right;
}

.user-name {
  display: block;
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
  margin-bottom: 0.1rem;
}

.user-role {
  display: block;
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 500;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.logout-btn:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

/* Desktop Navigation - FIXED */
.ortu-nav {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  position: fixed;
  top: 70px; /* Below header */
  left: 0;
  right: 0;
  z-index: 999;
  height: 60px; /* Fixed height for consistent spacing */
}

.ortu-nav .container {
  display: flex;
  gap: 3rem;
  padding: 0 1.5rem;
  height: 100%;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem 0;
  text-decoration: none;
  color: #6b7280;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-item:hover {
  color: #ea580c;
  transform: translateY(-1px);
}

.nav-item.active {
  color: #ea580c;
  border-bottom-color: #ea580c;
  font-weight: 600;
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-label {
  font-size: 0.95rem;
}

/* ===== MOBILE LAYOUT ===== */
.mobile-layout {
  display: none;
}

/* Mobile Header - FIXED */
.mobile-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  height: 60px; /* Fixed height for consistent spacing */
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-logo .logo-img {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 2px solid #ea580c;
}

.mobile-logo .logo-text h2 {
  font-size: 0.95rem;
  margin: 0;
  color: #1f2937;
  font-weight: 700;
  line-height: 1.1;
}

.mobile-logo .logo-text p {
  font-size: 0.75rem;
  margin: 0;
  color: #ea580c;
  font-weight: 500;
  line-height: 1.1;
}

/* Mobile Bottom Navigation - FIXED */
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 0.5rem;
  z-index: 1000;
  box-shadow: 0 -1px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
}

.mobile-bottom-nav .nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: #6b7280;
  transition: all 0.3s;
  border-radius: 8px;
  border: none;
  background: none;
  min-height: 50px;
  gap: 0.25rem;
  cursor: pointer;
}

.mobile-bottom-nav .nav-item:hover,
.mobile-bottom-nav .nav-item.active {
  color: #ea580c;
  background: #fef7ed;
}

.mobile-bottom-nav .nav-icon {
  font-size: 1.3rem;
  margin-bottom: 0.1rem;
}

.mobile-bottom-nav .nav-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.1;
}

/* Tombol Logout di Mobile Bottom Nav */
.logout-btn-mobile {
  color: #ef4444 !important;
}

.logout-btn-mobile:hover,
.logout-btn-mobile:active {
  color: #dc2626 !important;
  background: #fef2f2 !important;
}

/* Main Content - Adjust padding for fixed headers */
.ortu-main {
  padding: 2rem 0;
  background: #f8fafc;
}

.ortu-main .container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 2rem;
  max-width: 1200px;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .desktop-layout {
    display: none;
  }
  
  .mobile-layout {
    display: block;
  }
  
  .ortu-main {
    padding: 1rem 0;
    margin-bottom: 70px;
    background: #f8fafc;
    /* Adjust for mobile header height */
    margin-top: 60px;
    min-height: calc(100vh - 130px);
  }
  
  .ortu-main .container {
    padding: 1.5rem;
    margin: 0 1rem;
    border-radius: 12px;
  }
}

/* Desktop: Adjust main content padding for fixed header + nav */
@media (min-width: 769px) {
  .ortu-main {
    margin-top: 130px; /* header (70px) + nav (60px) */
    min-height: calc(100vh - 130px);
  }
}

@media (max-width: 480px) {
  .mobile-header {
    padding: 0.6rem 0.8rem;
    height: 55px;
  }
  
  .mobile-logo .logo-text h2 {
    font-size: 0.85rem;
  }
  
  .mobile-logo .logo-text p {
    font-size: 0.7rem;
  }
  
  .mobile-logo .logo-img {
    width: 34px;
    height: 34px;
  }
  
  .mobile-bottom-nav {
    height: 65px;
    padding: 0.4rem;
  }
  
  .mobile-bottom-nav .nav-item {
    padding: 0.4rem 0.2rem;
    min-height: 45px;
  }
  
  .mobile-bottom-nav .nav-icon {
    font-size: 1.2rem;
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.65rem;
  }
  
  .ortu-main {
    margin-top: 55px; /* Adjusted for smaller mobile header */
    min-height: calc(100vh - 120px);
  }
  
  .ortu-main .container {
    padding: 1.25rem;
    margin: 0 0.75rem;
  }
}

@media (max-width: 360px) {
  .mobile-logo .logo-text h2 {
    font-size: 0.8rem;
  }
  
  .mobile-logo .logo-text p {
    font-size: 0.65rem;
  }
  
  .mobile-bottom-nav .nav-label {
    font-size: 0.6rem;
  }
  
  .mobile-bottom-nav .nav-icon {
    font-size: 1.1rem;
  }
  
  .ortu-main .container {
    padding: 1rem;
    margin: 0 0.5rem;
  }
}

/* Large screens */
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>
