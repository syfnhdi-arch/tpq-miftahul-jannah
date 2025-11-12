<template>
  <Weblayout>
    <div class="login-page">
      <div class="container">
        <div class="login-card">
          <div class="logo">📚</div>
          <h2>Login TPA</h2>
          <p>Masuk ke sistem TPA Miftahul Jannah</p>
          
          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
              <label>Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                placeholder="Masukkan email" 
                required
                :disabled="loading"
              >
            </div>
            
            <div class="form-group">
              <label>Password</label>
              <div class="password-input-container">
                <input 
                  v-model="form.password" 
                  :type="showPassword ? 'text' : 'password'" 
                  placeholder="••••••••" 
                  required
                  :disabled="loading"
                  class="password-input"
                >
                <button 
                  type="button" 
                  class="password-toggle"
                  @click="showPassword = !showPassword"
                  :disabled="loading"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
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

          <div class="signup-link">
            <p>Belum punya akun? 
              <router-link to="/signup">Daftar di sini</router-link>
            </p>
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
import Weblayout from './Weblayout.vue'

const router = useRouter()
const { signIn } = useAuth()
const authStore = useAuthStore()

const form = ref({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')
const showPassword = ref(false)

const handleLogin = async () => {
  try {
    loading.value = true
    error.value = ''

    const { error: authError } = await signIn(form.value.email, form.value.password)
    
    if (authError) throw authError

    // Init auth store
    await authStore.init()

    // CHECK STATUS & REDIRECT DI SINI - lebih efisien
    const userStatus = authStore.getUserStatus()
    const userRole = authStore.getUserRole()

    console.log('🔍 [LOGIN] User status:', userStatus)
    console.log('🔍 [LOGIN] User role:', userRole)

    // Redirect berdasarkan status dan role
    if (userStatus !== 'approved') {
      console.log('🚫 [LOGIN] User not approved, redirecting to pending...')
      router.push('/pending-approval')
      return
    }

    console.log('✅ [LOGIN] User approved, redirecting to dashboard...')
    
    // Redirect berdasarkan role
    switch (userRole) {
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
    error.value = err.message || 'Login gagal. Cek email dan password Anda.'
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f3ff 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
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

/* Password Input Container */
.password-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input {
  padding-right: 50px !important;
}

.password-toggle {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.password-toggle:hover:not(:disabled) {
  background: #f1f5f9;
}

.password-toggle:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  margin-top: 0.5rem;
}

.login-btn:hover:not(:disabled) {
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

.signup-link {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.signup-link a {
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-page {
    padding: 1rem 0;
    min-height: calc(100vh - 150px);
  }
  
  .container {
    padding: 0 15px;
  }
  
  .login-card {
    padding: 1.5rem;
  }
  
  .logo {
    font-size: 2.5rem;
  }
  
  .password-toggle {
    right: 6px;
    font-size: 1.1rem;
  }
}
</style>