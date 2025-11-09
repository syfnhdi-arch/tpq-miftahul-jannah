<template>
  <div class="login-page">
    <div class="container">
      <router-link to="/" class="back-btn">← Kembali</router-link>
      
      <div class="login-card">
        <div class="logo">📚</div>
        <h2>Login TPA</h2>
        <p>Masuk ke sistem TPA Miftahul Jannah</p>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label>Username</label>
            <input 
              v-model="form.username" 
              type="text" 
              placeholder="Masukkan username" 
              required
              :disabled="loading"
            >
          </div>
          
          <div class="form-group">
            <label>Password</label>
            <input 
              v-model="form.password" 
              type="password" 
              placeholder="••••••••" 
              required
              :disabled="loading"
            >
          </div>
          
          <button 
            type="submit" 
            class="login-btn"
            :disabled="loading"
          >
            <span v-if="loading">Memproses...</span>
            <span v-else>Login</span>
          </button>

          <div v-if="error" class="error-message">
            {{ error }}
          </div>
        </form>
        
        <div class="demo-accounts">
          <h4>Akun Demo:</h4>
          <div class="demo-account" @click="fillDemo('admin')">
            <strong>Admin:</strong> admin / password123
          </div>
          <div class="demo-account" @click="fillDemo('guru')">
            <strong>Guru:</strong> guru / password123  
          </div>
          <div class="demo-account" @click="fillDemo('orangtua')">
            <strong>Orang Tua:</strong> orangtua / password123
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useSupabase'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { signIn } = useAuth()
const authStore = useAuthStore()

const form = ref({
  username: '',
  password: ''
})

const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    error.value = ''

    const { error: authError } = await signIn(form.value.username, form.value.password)
    
    if (authError) throw authError

    // Refresh auth store to get user profile
    await authStore.init()

    // Show success message
    alert(`Login berhasil! Selamat datang ${authStore.getUserFullName()}`)
    
    // 🔥 REDIRECT BERDASARKAN ROLE
    const role = authStore.getUserRole()
    console.log('🎯 Redirect berdasarkan role:', role)
    
    switch (role) {
      case 'super_admin':
        router.push('/admin')
        break
      case 'pengajar':
        router.push('/guru')
        break
      case 'orangtua':
        router.push('/orangtua')
        break
      default:
        router.push('/')
    }

  } catch (err: any) {
    error.value = err.message || 'Login gagal. Cek username dan password Anda.'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}

const fillDemo = (role: string) => {
  const accounts: any = {
    admin: { username: 'admin', password: 'password123' },
    guru: { username: 'guru', password: 'password123' },
    orangtua: { username: 'orangtua', password: 'password123' }
  }
  
  form.value = accounts[role]
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f3ff 100%);
  padding: 2rem 0;
  display: flex;
  align-items: center;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-btn {
  color: #4a5568;
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
}

.logo {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.login-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.login-card p {
  color: #718096;
  margin-bottom: 2rem;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #4299e1;
}

.login-btn {
  width: 100%;
  background: #4299e1;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.login-btn:hover {
  background: #3182ce;
}

.login-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.error-message {
  background: #fed7d7;
  color: #c53030;
  padding: 12px;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}

.demo-accounts {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.demo-accounts h4 {
  color: #4a5568;
  margin-bottom: 1rem;
}

.demo-account {
  background: #f7fafc;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
  border: 1px solid #e2e8f0;
}

.demo-account:hover {
  background: #edf2f7;
}

.demo-account:last-child {
  margin-bottom: 0;
}
</style>