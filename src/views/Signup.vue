<template>
  <Weblayout>
    <div class="signup-page">
      <div class="container">
        <div class="signup-card">
          <div class="logo">📚</div>
          <h2>Daftar Akun TPA</h2>
          <p>Bergabung dengan TPA Miftahul Jannah</p>
          
          <form @submit.prevent="handleSignup" class="signup-form">
            <div class="form-group">
              <label>Nama Lengkap *</label>
              <input 
                v-model="form.full_name" 
                type="text" 
                placeholder="Masukkan nama lengkap" 
                required
                :disabled="loading"
              >
            </div>

            <div class="form-group">
              <label>Email *</label>
              <input 
                v-model="form.email" 
                type="email" 
                placeholder="Masukkan email" 
                required
                :disabled="loading"
              >
            </div>

            <div class="form-group">
              <label>Nomor Telepon</label>
              <input 
                v-model="form.phone" 
                type="tel" 
                placeholder="Contoh: 081234567890" 
                :disabled="loading"
              >
            </div>
            
            <div class="form-group">
              <label>Password *</label>
              <input 
                v-model="form.password" 
                type="password" 
                placeholder="••••••••" 
                required
                :disabled="loading"
              >
              <small class="password-hint">Minimal 6 karakter</small>
            </div>

            <div class="form-group">
              <label>Konfirmasi Password *</label>
              <input 
                v-model="form.confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                required
                :disabled="loading"
              >
            </div>

            <div class="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="terms"
                v-model="form.agreeTerms"
                required
                :disabled="loading"
              >
              <label for="terms">
                Saya menyetujui 
                <a href="#" @click.prevent="showTerms = true">syarat dan ketentuan</a>
              </label>
            </div>
            
            <button 
              type="submit" 
              class="signup-btn"
              :disabled="loading || !form.agreeTerms"
            >
              <span v-if="loading">Mendaftarkan...</span>
              <span v-else>Daftar Sekarang</span>
            </button>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <div v-if="success" class="success-message">
              {{ success }}
            </div>
          </form>
          
          <div class="login-link">
            <p>Sudah punya akun? 
              <router-link to="/login">Login di sini</router-link>
            </p>
          </div>
        </div>
      </div>

      <!-- Terms Modal -->
      <div v-if="showTerms" class="modal-overlay" @click="showTerms = false">
        <div class="modal-content" @click.stop>
          <div class="modal-header">
            <h3>Syarat dan Ketentuan</h3>
            <button class="close-btn" @click="showTerms = false">✕</button>
          </div>
          <div class="modal-body">
            <p>Dengan mendaftar, Anda menyetujui:</p>
            <ul>
              <li>Data yang diberikan adalah benar dan valid</li>
              <li>TPA Miftahul Jannah berhak memverifikasi data pendaftaran</li>
              <li>Akun akan aktif setelah proses verifikasi</li>
              <li>Menjaga kerahasiaan password akun</li>
              <li>Tidak menyalahgunakan sistem untuk kegiatan ilegal</li>
            </ul>
          </div>
          <div class="modal-footer">
            <button class="agree-btn" @click="showTerms = false">Saya Mengerti</button>
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
// HAPUS useAuthStore kalo ga dipake
import Weblayout from './Weblayout.vue'

const router = useRouter()
const { signUp } = useAuth()
// HAPUS baris ini: const authStore = useAuthStore()

const form = ref({
  full_name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const loading = ref(false)
const error = ref('')
const success = ref('')
const showTerms = ref(false)

const handleSignup = async () => {
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

    if (!form.value.agreeTerms) {
      throw new Error('Anda harus menyetujui syarat dan ketentuan')
    }

    // Panggil signup function
    const { error: signupError } = await signUp( // HAPUS 'data' kalo ga dipake
      form.value.email,
      form.value.password,
      form.value.full_name,
      form.value.phone
    )
    
    if (signupError) throw signupError

    success.value = 'Pendaftaran berhasil! Silakan login dengan akun Anda.'
    
    // Reset form
    form.value = {
      full_name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    }

    // Redirect ke login setelah 2 detik
    setTimeout(() => {
      router.push('/login')
    }, 2000)

  } catch (err: any) {
    error.value = err.message || 'Pendaftaran gagal. Silakan coba lagi.'
    console.error('Signup error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.signup-page {
  min-height: calc(100vh - 200px);
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f3ff 100%);
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.container {
  max-width: 450px;
  margin: 0 auto;
  padding: 0 20px;
}

.signup-card {
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

.signup-card h2 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.signup-card p {
  color: #718096;
  margin-bottom: 2rem;
}

.signup-form {
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

.password-hint {
  color: #718096;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin-top: 0.25rem;
}

.checkbox-group label {
  margin-bottom: 0;
  font-size: 0.9rem;
}

.checkbox-group a {
  color: #4299e1;
  text-decoration: none;
}

.checkbox-group a:hover {
  text-decoration: underline;
}

.signup-btn {
  width: 100%;
  background: #10b981;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.signup-btn:hover:not(:disabled) {
  background: #059669;
}

.signup-btn:disabled {
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  margin: 0;
  color: #2d3748;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #718096;
  padding: 0.25rem;
}

.close-btn:hover {
  color: #4a5568;
}

.modal-body {
  padding: 1.5rem;
}

.modal-body ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.modal-body li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #e2e8f0;
  text-align: right;
}

.agree-btn {
  background: #4299e1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.agree-btn:hover {
  background: #3182ce;
}

/* Responsive Design */
@media (max-width: 480px) {
  .signup-page {
    padding: 1rem 0;
    min-height: calc(100vh - 150px);
  }
  
  .container {
    padding: 0 15px;
  }
  
  .signup-card {
    padding: 1.5rem;
  }
  
  .logo {
    font-size: 2.5rem;
  }

  .modal-content {
    margin: 1rem;
  }
}
</style>