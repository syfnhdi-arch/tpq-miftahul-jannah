<template>
  <div>
    <header>
      <h1>TPA Miftahul Jannah - Admin</h1>
      <button @click="handleLogout">Logout</button>
    </header>
    
    <nav>
      <router-link to="/admin/dashboard">Dashboard</router-link>
      <router-link to="/admin/students">Santri</router-link>
      <router-link to="/admin/teachers">Guru</router-link>
      <router-link to="/admin/reports">Laporan</router-link>
    </nav>
    
    <main>
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
</style>