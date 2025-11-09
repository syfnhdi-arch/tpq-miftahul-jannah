<template>
  <div class="home">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h1>TPA Miftahul Jannah</h1>
            <p>Bandar Lampung</p>
          </div>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/program" class="nav-link">Program</router-link>
          <router-link to="/about" class="nav-link">Tentang</router-link>
          <router-link to="/contact" class="nav-link">Kontak</router-link>
          <router-link to="/login" class="nav-link login-btn">Login</router-link>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2>TPA/TPQ MIFTAHUL JANNAH</h2>
          <h1>Sistem Pengelolaan TPA/TPQ Terpadu</h1>
          <p>Membangun Generasi Qur'ani Berakhlak Mulia dengan Sistem Pembelajaran Terstruktur sejak 2009</p>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="number">4</span>
              <span class="label">Level Pembelajaran</span>
            </div>
            <div class="stat">
              <span class="number">6</span>
              <span class="label">Guru Berpengalaman</span>
            </div>
            <div class="stat">
              <span class="number">60+</span>
              <span class="label">Santri Aktif</span>
            </div>
            <div class="stat">
              <span class="number">14+</span>
              <span class="label">Tahun Pengalaman</span>
            </div>
          </div>

          <div class="cta-buttons">
            <router-link to="/program" class="btn btn-primary">Lihat Program</router-link>
            <router-link to="/contact" class="btn btn-secondary">Daftar Sekarang</router-link>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder">
            <span>🎨</span>
            <p>Gambar Santri Sedang Belajar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2>Keunggulan Sistem Kami</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Tes Penempatan Awal</h3>
            <p>Penempatan level berdasarkan kemampuan baca Quran, bukan usia</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Progress Terpantau</h3>
            <p>Laporan bulanan detail untuk orang tua memantau perkembangan anak</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👨‍🏫</div>
            <h3>Guru Specialist</h3>
            <p>Guru khusus setiap level dengan rasio ideal untuk perhatian maksimal</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Naik Level Fleksibel</h3>
            <p>Bisa naik level kapan saja setelah lulus tes, tidak terikat semester</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Level Preview Section -->
    <section class="level-preview">
      <div class="container">
        <h2>4 Level Pembelajaran Terstruktur</h2>
        <p>Sistem penempatan berdasarkan kemampuan, bukan usia</p>
        
        <div class="level-cards">
          <div class="level-card">
            <div class="level-badge">LEVEL 1</div>
            <h3>DASAR</h3>
            <p>Pemula Total - Iqro 1-2</p>
            <ul>
              <li>✓ Pengenalan huruf Hijaiyah</li>
              <li>✓ Iqro jilid 1-2</li>
              <li>✓ Hafalan doa harian</li>
            </ul>
            <div class="level-meta">
              <span>👥 1:5-8</span>
              <span>🕘 Pagi</span>
            </div>
          </div>

          <div class="level-card">
            <div class="level-badge">LEVEL 2</div>
            <h3>LANJUTAN</h3>
            <p>Iqro 3-5 - Quran Pemula</p>
            <ul>
              <li>✓ Iqro jilid 3-5</li>
              <li>✓ Hafalan juz Amma</li>
              <li>✓ Tajwid dasar</li>
            </ul>
            <div class="level-meta">
              <span>👥 1:8-12</span>
              <span>🕘 Pagi</span>
            </div>
          </div>

          <div class="level-card">
            <div class="level-badge">LEVEL 3</div>
            <h3>TAHSIN</h3>
            <p>Quran Lancar - Perbaikan Tajwid</p>
            <ul>
              <li>✓ Tahsin sistematis</li>
              <li>✓ Tajwid lengkap</li>
              <li>✓ Hafalan surat pilihan</li>
            </ul>
            <div class="level-meta">
              <span>👥 1:10-15</span>
              <span>🕒 Sore</span>
            </div>
          </div>

          <div class="level-card">
            <div class="level-badge">LEVEL 4</div>
            <h3>TAHFIDZ</h3>
            <p>Persiapan Hafalan Quran</p>
            <ul>
              <li>✓ Metode menghafal Quran</li>
              <li>✓ Setoran hafalan rutin</li>
              <li>✓ Murojaah harian</li>
            </ul>
            <div class="level-meta">
              <span>👥 1:6-10</span>
              <span>🕒 Sore</span>
            </div>
          </div>
        </div>

        <div class="cta-center">
          <router-link to="/program" class="btn btn-outline">Lihat Detail Semua Program</router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Bergabung dengan TPA Miftahul Jannah?</h2>
          <p>Dapatkan pendidikan Quran terbaik dengan sistem terpadu untuk masa depan buah hati Anda</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="icon">📱</div>
              <div>
                <strong>WhatsApp</strong>
                <p>+62 812-3456-7890</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="icon">🏫</div>
              <div>
                <strong>Kunjungi Kami</strong>
                <p>JL. Keramat Gg. Dahlia III, Labuhan Ratu<br>Bandar Lampung</p>
              </div>
            </div>
          </div>

          <div class="cta-buttons">
            <a href="https://wa.me/6281234567890" class="btn btn-primary" target="_blank">
              📞 Hubungi via WhatsApp
            </a>
            <router-link to="/contact" class="btn btn-secondary">
              📝 Daftar Sekarang
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img small">
              <div class="logo-text">
                <h4>TPA Miftahul Jannah</h4>
                <p>Bandar Lampung</p>
              </div>
            </div>
            <p>Membangun generasi Qur'ani yang berakhlak mulia sejak 2009</p>
          </div>
          
          <div class="footer-section">
            <h4>Menu</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/program">Program</router-link>
            <router-link to="/about">Tentang</router-link>
            <router-link to="/contact">Kontak</router-link>
          </div>
          
          <div class="footer-section">
            <h4>Kontak</h4>
            <p>📱 +62 812-3456-7890</p>
            <p>📍 JL. Keramat Gg. Dahlia III<br>Labuhan Ratu, Bandar Lampung</p>
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
// Component logic bisa ditambahkan di sini jika diperlukan
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header .container {
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
  object-fit: contain;
}

.logo-img.small {
  width: 40px;
  height: 40px;
}

.logo-text h1 {
  font-size: 1.4rem;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #2b6cb0;
}

.nav-link.login-btn {
  background: #4299e1;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
}

.nav-link.login-btn:hover {
  background: #3182ce;
  color: white;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f3ff 100%);
  padding: 4rem 0;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content h2 {
  font-size: 1.5rem;
  color: #4299e1;
  margin-bottom: 0.5rem;
}

.hero-content h1 {
  font-size: 2.8rem;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.2rem;
  color: #718096;
  margin-bottom: 2rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat {
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat .number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #4299e1;
}

.stat .label {
  display: block;
  font-size: 0.9rem;
  color: #718096;
  margin-top: 0.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.btn-primary {
  background: #4299e1;
  color: white;
}

.btn-primary:hover {
  background: #3182ce;
}

.btn-secondary {
  background: white;
  color: #4299e1;
  border-color: #4299e1;
}

.btn-secondary:hover {
  background: #4299e1;
  color: white;
}

.btn-outline {
  background: transparent;
  color: #4299e1;
  border-color: #4299e1;
}

.btn-outline:hover {
  background: #4299e1;
  color: white;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: #e2e8f0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #718096;
}

.image-placeholder span {
  font-size: 4rem;
  margin-bottom: 1rem;
}

/* Features Section */
.features {
  padding: 4rem 0;
  background: white;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  text-align: center;
  padding: 2rem 1rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #718096;
  line-height: 1.6;
}

/* Level Preview Section */
.level-preview {
  padding: 4rem 0;
  background: #f7fafc;
}

.level-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.level-preview > p {
  text-align: center;
  color: #718096;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.level-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.level-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
}

.level-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #4299e1;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.level-card h3 {
  color: #2d3748;
  margin: 1.5rem 0 0.5rem;
}

.level-card > p {
  color: #718096;
  margin-bottom: 1.5rem;
}

.level-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 1.5rem;
}

.level-card li {
  padding: 0.25rem 0;
  color: #4a5568;
}

.level-meta {
  display: flex;
  justify-content: space-between;
  color: #718096;
  font-size: 0.9rem;
}

.cta-center {
  text-align: center;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.contact-method .icon {
  font-size: 2rem;
}

.contact-method strong {
  display: block;
  margin-bottom: 0.25rem;
}

.cta-section .cta-buttons {
  justify-content: center;
}

/* Footer */
.footer {
  background: #2d3748;
  color: white;
  padding: 3rem 0 1rem;
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
}

.footer-section a {
  display: block;
  color: #cbd5e0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.footer-section p {
  color: #cbd5e0;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 1rem;
  text-align: center;
  color: #cbd5e0;
}

/* Responsive */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    gap: 1rem;
  }
  
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .level-cards {
    grid-template-columns: 1fr;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>