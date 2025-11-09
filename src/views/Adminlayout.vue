<template>
  <div class="admin-layout">
    <!-- Admin Header -->
    <header class="admin-header">
      <div class="container">
        <div class="header-left">
          <div class="logo">
            <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
            <div class="logo-text">
              <h2>TPA Miftahul Jannah</h2>
              <p>Dashboard Admin</p>
            </div>
          </div>
        </div>
        
        <div class="header-right">
          <div class="user-info">
            <span class="user-name">{{ userName }}</span>
            <span class="user-role">Super Admin</span>
          </div>
          <button @click="handleLogout" class="logout-btn">🚪 Logout</button>
        </div>
      </div>
    </header>

    <!-- Admin Navigation -->
    <nav class="admin-nav">
      <div class="container">
        <router-link to="/admin" class="nav-item" :class="{ active: $route.path === '/admin' }">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </router-link>
        <router-link to="/admin/students" class="nav-item" :class="{ active: $route.path === '/admin/students' }">
          <span class="nav-icon">👥</span>
          <span class="nav-label">Data Santri</span>
        </router-link>
        <router-link to="/admin/teachers" class="nav-item" :class="{ active: $route.path === '/admin/teachers' }">
          <span class="nav-icon">👨‍🏫</span>
          <span class="nav-label">Data Guru</span>
        </router-link>
        <router-link to="/admin/reports" class="nav-item" :class="{ active: $route.path === '/admin/reports' }">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Laporan</span>
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="admin-main">
      <div class="container">
        <slot></slot>
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

const userName = computed(() => authStore.getUserFullName())

const handleLogout = async () => {
  await signOut()
  await authStore.init()
  router.push('/login')
}
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: #f8fafc;
}

.admin-header {
  background: white;
  border-bottom: 2px solid #e5e7eb;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.admin-header .container {
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
  border: 2px solid #1e40af;
}

.logo-text h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #1f2937;
  font-weight: 700;
}

.logo-text p {
  font-size: 0.9rem;
  margin: 0;
  color: #6b7280;
  font-weight: 500;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
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
  color: #6b7280;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #dc2626;
}

.admin-nav {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.admin-nav .container {
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
  color: #1e40af;
}

.nav-item.active {
  color: #1e40af;
  border-bottom-color: #1e40af;
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-label {
  font-size: 0.95rem;
}

.admin-main {
  padding: 2rem 0;
  min-height: calc(100vh - 140px);
}

.admin-main .container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .admin-header .container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .header-right {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .admin-nav .container {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .nav-item {
    padding: 0.5rem 1rem;
  }
  
  .admin-main .container {
    padding: 1rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .admin-nav .container {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-item {
    justify-content: center;
    padding: 0.75rem;
  }
  
  .logo-text h2 {
    font-size: 1.1rem;
  }
  
  .user-name {
    font-size: 0.9rem;
  }
}
</style>