<template>
  <Weblayout>
    <div class="reset-password-page">
      <div class="container">
        <div class="reset-password-card">
          <div class="logo">🔄</div>
          <h2>Reset Password</h2>
          <p>Masukkan password baru Anda</p>
          
          <form @submit.prevent="handleResetPassword" class="reset-password-form">
            <div class="form-group">
              <label>Password Baru</label>
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

            <div class="form-group">
              <label>Konfirmasi Password Baru</label>
              <input 
                v-model="form.confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                required
                :disabled="loading"
              >
            </div>
            
            <button 
              type="submit" 
              class="reset-btn"
              :disabled="loading"
            >
              <span v-if="loading">Mengupdate...</span>
              <span v-else>Reset Password</span>
            </button>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <div v-if="success" class="success-message">
              {{ success }}
            </div>
          </form>
          
          <div class="login-link">
            <router-link to="/login">← Kembali ke Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/composables/useSupabase'
import Weblayout from './Weblayout.vue'

const router = useRouter()

const form = ref({
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')
const showPassword = ref(false)

const handleResetPassword = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = ''

    // Validasi
    if (form.value.password !== form.value.confirmPassword) {
      throw new Error('Password dan konfirmasi password tidak sama')
    }

    if (form.value.password.length < 6) {
      throw new Error('Password minimal 6 karakter')
    }

    const { error: resetError } = await supabase.auth.updateUser({
      password: form.value.password
    })
    
    if (resetError) throw resetError

    success.value = 'Password berhasil direset! Mengarahkan ke login...'
    
    // Redirect ke login setelah 2 detik
    setTimeout(() => {
      router.push('/login')
    }, 2000)

  } catch (err: any) {
    error.value = err.message || 'Gagal reset password. Coba lagi.'
    console.error('Reset password error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Cek jika user punya session yang valid untuk reset password
  supabase.auth.getUser().then(({ data: { user } }) => {
    if (!user) {
      router.push('/login')
    }
  })
})
</script>

<style scoped>
.reset-password-page {
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #f0fff0 0%, #e6ffe6 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
}

.reset-password-card {
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

.reset-password-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.reset-password-card p {
  color: #718096;
  margin-bottom: 2rem;
}

.reset-password-form {
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

.reset-btn {
  width: 100%;
  background: #38a169;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.reset-btn:hover:not(:disabled) {
  background: #2f855a;
}

.reset-btn:disabled {
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

.success-message {
  background: #c6f6d5;
  color: #276749;
  padding: 12px;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
}

.login-link {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.login-link a {
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .reset-password-page {
    padding: 1rem 0;
    min-height: calc(100vh - 150px);
  }
  
  .container {
    padding: 0 15px;
  }
  
  .reset-password-card {
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