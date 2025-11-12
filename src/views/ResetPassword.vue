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

// CEK SESSION - SIMPLE AJA
const checkSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    error.value = 'Session tidak valid. Request reset password lagi.'
  }
}

const handleResetPassword = async () => {
  try {
    error.value = ''
    
    if (form.value.password !== form.value.confirmPassword) {
      throw new Error('Password tidak sama')
    }

    if (form.value.password.length < 6) {
      throw new Error('Password minimal 6 karakter')
    }

    const { error: resetError } = await supabase.auth.updateUser({
      password: form.value.password
    })
    
    if (resetError) throw resetError

    success.value = 'Password berhasil direset!'
    
    setTimeout(() => {
      router.push('/login')
    }, 2000)

  } catch (err: any) {
    error.value = err.message || 'Gagal reset password'
  }
}

onMounted(() => {
  checkSession()
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