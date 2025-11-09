<template>
  <div class="admin-layout">
    <header class="admin-header">
      <h1>TPA Miftahul Jannah - Admin</h1>
      <button @click="handleLogout" class="logout-btn">Logout</button>
    </header>
    
    <nav class="admin-nav">
      <router-link to="/admin/dashboard" class="nav-link">Dashboard</router-link>
      <router-link to="/admin/students" class="nav-link">Santri</router-link>
      <router-link to="/admin/teachers" class="nav-link">Guru</router-link>
      <router-link to="/admin/reports" class="nav-link">Laporan</router-link>
    </nav>
    
    <main class="admin-main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useSupabase'

const router = useRouter()
const { signOut } = useAuth()

const handleLogout = async () => {
  await signOut()
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
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-header h1 {
  margin: 0;
  color: #1f2937;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.admin-nav {
  background: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-link.router-link-active {
  color: #1e40af;
  border-bottom-color: #1e40af;
}

.admin-main {
  padding: 2rem;
}
</style>