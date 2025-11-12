<template>
  <Weblayout>
    <div class="reset-password-page">
      <div class="container">
        <div class="reset-password-card">
          <div class="logo">🔄</div>
          <h2>Reset Password</h2>
          <p>Masukkan password baru Anda</p>
          
          <div class="alert alert-info">
            <p><strong>INFO:</strong> Halaman ini hanya bisa diakses via link reset password dari email.</p>
          </div>
          
          <form @submit.prevent="handleResetPassword" class="reset-password-form">
            <div class="form-group">
              <label>Password Baru</label>
              <div class="password-input-container">
                <input 
                  v-model="form.password" 
                  :type="showPassword ? 'text' : 'password'" 
                  placeholder="••••••••" 
                  required
                >
                <button type="button" class="password-toggle" @click="showPassword = !showPassword">
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
              >
            </div>
            
            <button type="submit" class="reset-btn">
              Reset Password
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

const error = ref('')
const success = ref('')
const showPassword = ref(false)

// FUNCTION SANGAT SIMPLE
const checkIfCanReset = async () => {
  try {
    console.log('Checking session...')
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      error.value = 'Tidak bisa reset password. Pastikan Anda mengakses dari link reset password yang dikirim via email.'
      return false
    }
    
    console.log('Session found, can reset password')
    return true
    
  } catch (err) {
    console.error('Error checking session:', err)
    error.value = 'Error memeriksa session. Coba refresh halaman.'
    return false
  }
}

const handleResetPassword = async () => {
  try {
    error.value = ''
    
    // Validasi sederhana
    if (form.value.password !== form.value.confirmPassword) {
      error.value = 'Password dan konfirmasi password tidak sama'
      return
    }

    if (form.value.password.length < 6) {
      error.value = 'Password minimal 6 karakter'
      return
    }

    // Cek session dulu
    const canReset = await checkIfCanReset()
    if (!canReset) return

    // Reset password
    const { error: resetError } = await supabase.auth.updateUser({
      password: form.value.password
    })
    
    if (resetError) {
      error.value = 'Gagal reset password: ' + resetError.message
      return
    }

    success.value = 'Password berhasil direset! Anda akan dialihkan ke halaman login...'
    
    // Tunggu 3 detik lalu redirect
    setTimeout(() => {
      router.push('/login')
    }, 3000)

  } catch (err: any) {
    error.value = 'Terjadi error: ' + (err.message || 'Unknown error')
  }
}

// Saat komponen dimuat
onMounted(() => {
  checkIfCanReset()
})
</script>

<style scoped>
.reset-password-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 2rem;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.reset-password-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
}

.logo {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.alert {
  background: #e6f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.alert-info {
  background: #e6f3ff;
  border-color: #b3d9ff;
}

.alert p {
  margin: 0;
  color: #0066cc;
  font-size: 0.9rem;
}

.reset-password-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.reset-password-card p {
  color: #718096;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
}

.password-input-container {
  position: relative;
}

.password-input-container input {
  padding-right: 50px;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.reset-btn {
  width: 100%;
  background: #48bb78;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
}

.reset-btn:hover {
  background: #38a169;
}

.error-message {
  background: #fed7d7;
  color: #c53030;
  padding: 12px;
  border-radius: 8px;
  margin-top: 1rem;
}

.success-message {
  background: #c6f6d5;
  color: #276749;
  padding: 12px;
  border-radius: 8px;
  margin-top: 1rem;
}

.login-link {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.login-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>