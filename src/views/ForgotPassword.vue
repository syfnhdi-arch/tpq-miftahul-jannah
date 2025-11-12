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
                :disabled="loading"
              >
            </div>
            
            <button 
              type="submit" 
              class="reset-btn"
              :disabled="loading"
            >
              <span v-if="loading">Mengirim...</span>
              <span v-else>Kirim Link Reset</span>
            </button>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <div v-if="success" class="success-message">
              {{ success }}
            </div>
          </form>
          
          <div class="login-link">
            <p>Ingat password? 
              <router-link to="/login">Login di sini</router-link>
            </p>
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

const form = ref({
  email: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')

const handleResetPassword = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = ''

    // FIX: Pakai path-based routing untuk Vercel compatibility
    const siteUrl = 'https://tpq-miftahul-jannah.vercel.app'
    const redirectTo = `${siteUrl}/reset-password`

    console.log('🔐 Sending reset password email to:', form.value.email)
    console.log('🔗 Redirect URL:', redirectTo)

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      form.value.email,
      {
        redirectTo: redirectTo,
      }
    )
    
    if (resetError) {
      console.error('❌ Reset password error:', resetError)
      throw resetError
    }

    success.value = 'Link reset password telah dikirim ke email Anda! Silakan cek inbox atau spam folder.'
    form.value.email = ''

    console.log('✅ Reset password email sent successfully')

  } catch (err: any) {
    console.error('❌ Reset password failed:', err)
    error.value = err.message || 'Gagal mengirim link reset. Silakan coba lagi.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* CSS tetap sama */
.forgot-password-page {
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #fff0f0 0%, #ffe6e6 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
}

.forgot-password-card {
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

.forgot-password-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.forgot-password-card p {
  color: #718096;
  margin-bottom: 2rem;
}

.forgot-password-form {
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

.reset-btn {
  width: 100%;
  background: #ed8936;
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
  background: #dd6b20;
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
  .forgot-password-page {
    padding: 1rem 0;
    min-height: calc(100vh - 150px);
  }
  
  .container {
    padding: 0 15px;
  }
  
  .forgot-password-card {
    padding: 1.5rem;
  }
  
  .logo {
    font-size: 2.5rem;
  }
}
</style>