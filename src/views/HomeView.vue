<template>
  <div class="home">
    <header class="header">
      <div class="container">
        <div class="logo">
          <span>📚</span>
          <h1>TPA Miftahul Jannah</h1>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/login" class="nav-link">Login</router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="hero">
          <h2>Selamat Datang di TPA Miftahul Jannah</h2>
          <p>Membangun generasi Qur'ani yang berakhlak mulia</p>
          
          <div class="features">
            <div class="feature">
              <h3>📖 Kelas Mengaji</h3>
              <p>Belajar membaca Al-Qur'an dari dasar</p>
            </div>
            <div class="feature">
              <h3>🎯 Kelas Tahsin</h3>
              <p>Perbaikan bacaan dan tajwid</p>
            </div>
            <div class="feature">
              <h3>⭐ Kelas Tahfidz</h3>
              <p>Program menghafal Al-Qur'an</p>
            </div>
          </div>

          <div class="cta">
            <router-link to="/login" class="btn btn-primary">Login Sekarang</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f3ff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo h1 {
  font-size: 1.5rem;
  color: #2d3748;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
}

.nav-link:hover {
  color: #2b6cb0;
}

.main {
  padding: 3rem 0;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #718096;
  margin-bottom: 3rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.feature h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.feature p {
  color: #718096;
}

.cta {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary {
  background: #4299e1;
  color: white;
}

.btn-primary:hover {
  background: #3182ce;
}

/* Responsive */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>