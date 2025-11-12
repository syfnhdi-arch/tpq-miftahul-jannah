<template>
  <Weblayout>
    <div class="pending-page">
      <div class="container">
        <div class="pending-card">
          <div class="icon">⏳</div>
          <h2>Menunggu Approval</h2>
          <p>Akun Anda sedang menunggu persetujuan dari administrator TPA Miftahul Jannah.</p>
          <p>Silakan hubungi admin untuk mempercepat proses aktivasi akun.</p>
          
          <div class="contact-info">
            <p><strong>Kontak Admin:</strong></p>
            <p>📞 +62 895-0798-0791</p>
          </div>

          <button @click="handleLogout" class="logout-btn">
            Keluar
          </button>
        </div>
      </div>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useSupabase'
import Weblayout from './Weblayout.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { signOut } = useAuth()

const handleLogout = async () => {
  try {
    await signOut()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
    router.push('/login')
  }
}
</script>

<style scoped>
.pending-page {
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

.pending-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
}

.icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.pending-card h2 {
  color: #f59e0b;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.pending-card p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-info {
  background: #fffbeb;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  margin: 2rem 0;
  text-align: left;
}

.contact-info p {
  margin: 0.5rem 0;
  color: #92400e;
}

.contact-info strong {
  color: #d97706;
}

.logout-btn {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 12px 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.logout-btn:hover {
  background: #d97706;
}

/* Responsive Design */
@media (max-width: 480px) {
  .pending-page {
    padding: 1rem 0;
    min-height: calc(100vh - 150px);
  }
  
  .container {
    padding: 0 15px;
  }
  
  .pending-card {
    padding: 2rem 1.5rem;
  }
  
  .icon {
    font-size: 3rem;
  }
  
  .pending-card h2 {
    font-size: 1.5rem;
  }
}
</style>