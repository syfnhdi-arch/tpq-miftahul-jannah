<template>
  <div class="dashboard">
    <h1>🛠️ Guru Dashboard</h1>
    <div class="user-info">
      <p><strong>Nama:</strong> {{ auth.getUserFullName() }}</p>
      <p><strong>Role:</strong> {{ auth.getUserRole() }}</p>
      <p><strong>Email:</strong> {{ auth.getUserEmail() }}</p>
    </div>
    <div class="actions">
      <button @click="goToHome" class="btn">🏠 Ke Home</button>
      <button @click="handleLogout" class="btn logout">🚪 Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useAuth } from '@/composables/useSupabase'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const { signOut } = useAuth()
const router = useRouter()

const handleLogout = async () => {
  await signOut()
  await auth.init()
  router.push('/')
}

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.user-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.logout {
  background: #ef4444;
  color: white;
}
</style>