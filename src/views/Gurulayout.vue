<template>
  <div class="guru-layout">
    <!-- Guru Header -->
    <header class="guru-header">
      <div class="container">
        <div class="header-left">
          <div class="logo">
            <img src="/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
            <div class="logo-text">
              <h2>TPA Miftahul Jannah</h2>
              <p>Dashboard Guru</p>
            </div>
          </div>
        </div>
        
        <div class="header-right">
          <div class="user-info">
            <span class="user-name">{{ userName }}</span>
            <span class="user-role">Guru/Pengajar</span>
          </div>
          <button @click="handleLogout" class="logout-btn">🚪 Logout</button>
        </div>
      </div>
    </header>

    <!-- Guru Navigation -->
    <nav class="guru-nav">
      <div class="container">
        <router-link to="/guru" class="nav-item" :class="{ active: $route.path === '/guru' }">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </router-link>
        <router-link to="/guru/class" class="nav-item" :class="{ active: $route.path === '/guru/class' }">
          <span class="nav-icon">👥</span>
          <span class="nav-label">Kelas Saya</span>
        </router-link>
        <router-link to="/guru/attendance" class="nav-item" :class="{ active: $route.path === '/guru/attendance' }">
          <span class="nav-icon">✅</span>
          <span class="nav-label">Absensi</span>
        </router-link>
        <router-link to="/guru/progress" class="nav-item" :class="{ active: $route.path === '/guru/progress' }">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Progress</span>
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="guru-main">
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
.guru-layout {
  min-height: 100vh;
  background: #f0fdf4;
}

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
}

.logo-text p {
  font-size: 0.9rem;
  margin: 0;
  color: #16a34a;
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
  color: #16a34a;
  font-weight: 500;
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

.guru-main {
  padding: 2rem 0;
  min-height: calc(100vh - 140px);
}

.guru-main .container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #dcfce7;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .guru-header .container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .header-right {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .guru-nav .container {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .nav-item {
    padding: 0.5rem 1rem;
  }
  
  .guru-main .container {
    padding: 1rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .guru-nav .container {
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