<template>
  <Weblayout hideNav>  <!-- Tambah prop hideNav -->
    <div class="login-page">
      <div class="container">
        <router-link to="/" class="back-btn">← Kembali ke Beranda</router-link>
        
        <div class="login-card">
          <div class="logo-section">
            <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="login-logo">
            <div class="logo-text">
              <h1>TPA Miftahul Jannah</h1>
              <p>Bandar Lampung</p>
            </div>
          </div>
          
          <h2>Login Sistem</h2>
          <p>Masuk ke dashboard TPA Miftahul Jannah</p>
          
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
  </Weblayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useSupabase'
import { useAuthStore } from '@/stores/auth'
import Weblayout from './Weblayout.vue'  // Import Weblayout

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

    const { data, error: authError } = await signIn(form.value.username, form.value.password)
    
    if (authError) throw authError

    await authStore.init()
    alert(`Login berhasil! Selamat datang ${authStore.getUserFullName()}`)
    
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
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.back-btn {
  color: #4a5568;
  text-decoration: none;
  margin-bottom: 2rem;
  display: inline-block;
  font-weight: 500;
}

.back-btn:hover {
  color: #2d3748;
}

.login-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
  justify-content: center;
}

.login-logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 2px solid #1e40af;
}

.logo-text h1 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.9rem;
  color: #1e40af;
  margin: 0;
  font-weight: 600;
}

.login-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
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
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #1e40af;
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.form-group input:disabled {
  background-color: #f7fafc;
  cursor: not-allowed;
}

.login-btn {
  width: 100%;
  background: #1e40af;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;
}

.login-btn:hover:not(:disabled) {
  background: #3b82f6;
  transform: translateY(-1px);
}

.login-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
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
  font-size: 1rem;
}

.demo-account {
  background: #f8fafc;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #e2e8f0;
  text-align: left;
}

.demo-account:hover {
  background: #eff6ff;
  border-color: #1e40af;
  transform: translateY(-1px);
}

.demo-account strong {
  color: #1e40af;
}

/* Responsive */
@media (max-width: 480px) {
  .login-page {
    padding: 1rem 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .login-card {
    padding: 2rem 1.5rem;
  }
  
  .logo-section {
    flex-direction: column;
    text-align: center;
  }
}
</style>
