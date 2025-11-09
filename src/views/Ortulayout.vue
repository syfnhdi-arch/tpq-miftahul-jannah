<template>
  <div class="ortu-layout">
    <!-- Orang Tua Header -->
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

    <!-- Orang Tua Navigation -->
    <nav class="ortu-nav">
      <div class="container">
        <router-link to="/orangtua" class="nav-item" :class="{ active: $route.path === '/orangtua' }">
          <span class="nav-icon">📊</span>
          <span class="nav-label">Dashboard</span>
        </router-link>
        <router-link to="/orangtua/children" class="nav-item" :class="{ active: $route.path === '/orangtua/children' }">
          <span class="nav-icon">👶</span>
          <span class="nav-label">Anak Saya</span>
        </router-link>
        <router-link to="/orangtua/progress" class="nav-item" :class="{ active: $route.path === '/orangtua/progress' }">
          <span class="nav-icon">📈</span>
          <span class="nav-label">Progress</span>
        </router-link>
        <router-link to="/orangtua/messages" class="nav-item" :class="{ active: $route.path === '/orangtua/messages' }">
          <span class="nav-icon">💬</span>
          <span class="nav-label">Pesan</span>
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="ortu-main">
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
.ortu-layout {
  min-height: 100vh;
  background: #fef7ed;
}

.ortu-header {
  background: white;
  border-bottom: 2px solid #fed7aa;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.ortu-header .container {
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
  border: 2px solid #ea580c;
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
  color: #ea580c;
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
  color: #ea580c;
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

.ortu-nav {
  background: white;
  border-bottom: 1px solid #fed7aa;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.ortu-nav .container {
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
  color: #ea580c;
}

.nav-item.active {
  color: #ea580c;
  border-bottom-color: #ea580c;
  font-weight: 600;
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-label {
  font-size: 0.95rem;
}

.ortu-main {
  padding: 2rem 0;
  min-height: calc(100vh - 140px);
}

.ortu-main .container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #fed7aa;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ortu-header .container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .header-right {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .ortu-nav .container {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .nav-item {
    padding: 0.5rem 1rem;
  }
  
  .ortu-main .container {
    padding: 1rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .ortu-nav .container {
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