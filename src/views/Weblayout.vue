<template>
  <div class="web-layout">
    <!-- Desktop Header -->
    <header class="web-header desktop-only">
      <div class="container">
        <div class="logo">
          <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h1>TPA Miftahul Jannah</h1>
            <p>Bandar Lampung</p>
          </div>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
          <router-link to="/program" class="nav-link" :class="{ active: $route.path === '/program' }">Program</router-link>
          <router-link to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">Tentang</router-link>
          <router-link to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }">Kontak</router-link>
          <router-link to="/login" class="nav-link login-btn">Login</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="web-main">
      <slot></slot>
    </main>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav mobile-only">
      <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </router-link>
      <router-link to="/program" class="nav-item" :class="{ active: $route.path === '/program' }">
        <span class="nav-icon">📚</span>
        <span class="nav-label">Program</span>
      </router-link>
      <router-link to="/about" class="nav-item" :class="{ active: $route.path === '/about' }">
        <span class="nav-icon">🏫</span>
        <span class="nav-label">Tentang</span>
      </router-link>
      <router-link to="/contact" class="nav-item" :class="{ active: $route.path === '/contact' }">
        <span class="nav-icon">📞</span>
        <span class="nav-label">Kontak</span>
      </router-link>
      <router-link to="/login" class="nav-item login" :class="{ active: $route.path === '/login' }">
        <span class="nav-icon">🔐</span>
        <span class="nav-label">Login</span>
      </router-link>
    </nav>

    <!-- Footer -->
    <footer class="web-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <img src="../assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img small">
              <div class="logo-text">
                <h3>TPA Miftahul Jannah</h3>
                <p>Bandar Lampung</p>
              </div>
            </div>
            <p class="footer-desc">Membangun generasi Qur'ani yang berakhlak mulia sejak 2009</p>
          </div>
          
          <div class="footer-section">
            <h4>Menu Cepat</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/program">Program</router-link>
            <router-link to="/about">Tentang</router-link>
            <router-link to="/contact">Kontak</router-link>
          </div>
          
          <div class="footer-section">
            <h4>Kontak Kami</h4>
            <div class="contact-info">
              <a href="https://wa.me/6289507980791" class="contact-link" target="_blank">
                <span class="contact-icon">📱</span>
                +62 895-0798-0791
              </a>
              <div class="contact-link">
                <span class="contact-icon">📍</span>
                JL. Keramat Gg. Dahlia III, Labuhan Ratu<br>Bandar Lampung
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 TPA Miftahul Jannah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Weblayout component
</script>

<style scoped>
.web-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ===== DESKTOP HEADER ===== */
.web-header {
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 2px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.web-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid #1e40af;
  object-fit: contain;
}

.logo-img.small {
  width: 40px;
  height: 40px;
}

.logo-text h1 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

.logo-text h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.9rem;
  color: #1e40af;
  margin: 0;
  font-weight: 600;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 600;
  transition: color 0.3s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: #1e40af;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1e40af;
  border-radius: 1px;
}

.nav-link.login-btn {
  background: #1e40af;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: background 0.3s;
}

.nav-link.login-btn:hover {
  background: #3b82f6;
  color: white;
}

/* ===== MOBILE BOTTOM NAVIGATION ===== */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 2px solid #e5e7eb;
  padding: 0.5rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.mobile-bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: #374151;
  transition: all 0.3s;
  border-radius: 6px;
}

.nav-item:hover,
.nav-item.active {
  color: #1e40af;
  background: #eff6ff;
}

.nav-item.login {
  background: #1e40af;
  color: white;
  border-radius: 6px;
}

.nav-item.login:hover,
.nav-item.login.active {
  background: #3b82f6;
  color: white;
}

.nav-icon {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.nav-label {
  font-size: 0.75rem;
  font-weight: 600;
}

/* ===== MAIN CONTENT ===== */
.web-main {
  flex: 1;
  padding-bottom: 60px;
}

/* ===== FOOTER ===== */
.web-footer {
  background: #1f2937;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
}

.footer-section a {
  display: block;
  color: #d1d5db;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.footer-desc {
  color: #d1d5db;
  line-height: 1.6;
  margin-top: 1rem;
  font-size: 0.95rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s;
  line-height: 1.4;
}

.contact-link:hover {
  color: white;
}

.contact-icon {
  font-size: 1.1rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-only {
    display: flex !important;
  }
  
  .web-main {
    padding-bottom: 70px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .contact-link {
    justify-content: center;
    text-align: center;
  }
  
  .logo {
    justify-content: center;
    text-align: center;
  }
}

@media (min-width: 769px) {
  .desktop-only {
    display: block !important;
  }
  
  .mobile-only {
    display: none !important;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .nav-item {
    padding: 0.4rem;
  }
  
  .nav-icon {
    font-size: 1.1rem;
  }
  
  .nav-label {
    font-size: 0.7rem;
  }
  
  .footer-content {
    gap: 1rem;
  }
  
  .web-footer {
    padding: 2rem 0 1rem;
  }
}
</style>
