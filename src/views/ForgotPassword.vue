<template>
  <Weblayout>
    <div class="forgot-password-page">
      <div class="container">
        <div class="forgot-password-card">
          <div class="logo">🔑</div>
          <h2>Lupa Password</h2>
          <p>Masukkan email Anda untuk reset password</p>
          
          <form @submit.prevent="handleResetPassword" class="forgot-password-form">
            <div class="form-group">
              <label>Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                placeholder="Masukkan email Anda" 
                required
              >
            </div>
            
            <button type="submit" class="reset-btn">
              Kirim Link Reset
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
import { ref } from 'vue'
import { supabase } from '@/composables/useSupabase'
import Weblayout from './Weblayout.vue'

const form = ref({ email: '' })
const error = ref('')
const success = ref('')

const handleResetPassword = async () => {
  try {
    error.value = ''
    success.value = ''

    // PAKAI INI AJA - PASTI WORK
    const redirectTo = `${window.location.origin}/#/reset-password`

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      form.value.email,
      { redirectTo }
    )
    
    if (resetError) throw resetError

    success.value = 'Link reset sudah dikirim! Cek email Anda.'
    form.value.email = ''

  } catch (err: any) {
    error.value = 'Gagal kirim link reset. Coba lagi.'
  }
}
</script>

<style scoped>
.forgot-password-page {
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

.forgot-password-card {
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

.forgot-password-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.forgot-password-card p {
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

.reset-btn {
  width: 100%;
  background: #667eea;
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
  background: #5a6fd8;
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