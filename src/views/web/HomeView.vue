<template>
  <div class="home">
    <!-- Desktop Header -->
    <header class="header desktop-header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="TPA Miftahul Jannah" class="logo-img">
          <div class="logo-text">
            <h1>TPA Miftahul Jannah</h1>
            <p>Bandar Lampung</p>
          </div>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link active">Home</router-link>
          <router-link to="/program" class="nav-link">Program</router-link>
          <router-link to="/about" class="nav-link">Tentang</router-link>
          <router-link to="/contact" class="nav-link">Kontak</router-link>
          <router-link to="/login" class="nav-link login-btn">Login</router-link>
        </nav>
      </div>
    </header>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav">
      <router-link to="/" class="nav-item active">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Home</span>
      </router-link>
      <router-link to="/program" class="nav-item">
        <span class="nav-icon">📚</span>
        <span class="nav-label">Program</span>
      </router-link>
      <router-link to="/about" class="nav-item">
        <span class="nav-icon">🏫</span>
        <span class="nav-label">Tentang</span>
      </router-link>
      <router-link to="/contact" class="nav-item">
        <span class="nav-icon">📞</span>
        <span class="nav-label">Kontak</span>
      </router-link>
      <router-link to="/login" class="nav-item login">
        <span class="nav-icon">🔐</span>
        <span class="nav-label">Login</span>
      </router-link>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">🎓 TPA/TPQ Terpadu</div>
          <h1>Membangun <span class="text-gradient">Generasi Qur'ani</span> Berakhlak Mulia</h1>
          <p class="hero-subtitle">Sistem pembelajaran terstruktur sejak 2009 di Bandar Lampung</p>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="number">4</span>
              <span class="label">Level Belajar</span>
            </div>
            <div class="stat">
              <span class="number">6</span>
              <span class="label">Guru Ahli</span>
            </div>
            <div class="stat">
              <span class="number">60+</span>
              <span class="label">Santri Aktif</span>
            </div>
            <div class="stat">
              <span class="number">14+</span>
              <span class="label">Tahun</span>
            </div>
          </div>

          <div class="cta-buttons">
            <router-link to="/program" class="btn btn-primary">
              <span class="btn-icon">📚</span>
              Lihat Program
            </router-link>
            <a href="https://wa.me/6289507980791" class="btn btn-whatsapp" target="_blank">
              <span class="btn-icon">💬</span>
              Chat WhatsApp
            </a>
          </div>
        </div>
        
        <!-- Hero Image/Illustration -->
        <div class="hero-visual">
          <div class="floating-card card-1">
            <span>📖</span>
            <p>Iqro & Quran</p>
          </div>
          <div class="floating-card card-2">
            <span>🎯</span>
            <p>Tahsin</p>
          </div>
          <div class="floating-card card-3">
            <span>⭐</span>
            <p>Tahfidz</p>
          </div>
          <div class="main-visual">
            <div class="visual-content">
              <span>🕌</span>
              <p>TPA Miftahul Jannah</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Keunggulan Sistem Kami</h2>
          <p>Metode pembelajaran yang terbukti efektif</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Tes Penempatan</h3>
            <p>Penempatan berdasarkan kemampuan, bukan usia</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Laporan bulanan untuk pantau perkembangan</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👨‍🏫</div>
            <h3>Guru Specialist</h3>
            <p>Guru ahli setiap level dengan rasio ideal</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Fleksibel</h3>
            <p>Naik level kapan saja setelah lulus tes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Level Preview -->
    <section class="level-preview">
      <div class="container">
        <div class="section-header">
          <h2>4 Level Pembelajaran</h2>
          <p>Sistem terstruktur dari dasar hingga tahfidz</p>
        </div>
        
        <div class="level-cards">
          <div class="level-card" v-for="level in levels" :key="level.id">
            <div class="level-header">
              <div class="level-badge">{{ level.badge }}</div>
              <h3>{{ level.name }}</h3>
              <p class="level-desc">{{ level.description }}</p>
            </div>
            <ul class="level-features">
              <li v-for="feature in level.features" :key="feature">✓ {{ feature }}</li>
            </ul>
            <div class="level-meta">
              <span class="meta-item">👥 {{ level.ratio }}</span>
              <span class="meta-item">🕒 {{ level.schedule }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Bergabunglah dengan Keluarga Besar TPA Miftahul Jannah</h2>
          <p>Mulai perjalanan Quran buah hati Anda dengan sistem terbaik di Bandar Lampung</p>
          
          <div class="cta-buttons">
            <a href="https://wa.me/6289507980791" class="btn btn-whatsapp-lg" target="_blank">
              <span class="btn-icon">💬</span>
              Chat Sekarang
            </a>
            <router-link to="/program" class="btn btn-outline-white">
              <span class="btn-icon">📚</span>
              Pelajari Program
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
            <p class="footer-desc">Membangun generasi Qur'ani berakhlak mulia sejak 2009</p>
          </div>
          
          <div class="footer-section">
            <h4>Menu Cepat</h4>
            <router-link to="/">Home</router-link>
            <router-link to="/program">Program</router-link>
            <router-link to="/about">Tentang</router-link>
            <router-link to="/contact">Kontak</router-link>
          </div>
          
          <div class="footer-section">
            <h4>Kontak</h4>
            <div class="contact-info">
              <a href="https://wa.me/6289507980791" class="contact-link">
                <span class="contact-icon">📱</span>
                +62 895-0798-0791
              </a>
              <div class="contact-link">
                <span class="contact-icon">📍</span>
                JL. Keramat Gg. Dahlia III, Bandar Lampung
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
const levels = [
  {
    id: 1,
    badge: "LEVEL 1",
    name: "DASAR",
    description: "Pemula Total - Iqro 1-2",
    features: ["Pengenalan huruf Hijaiyah", "Iqro jilid 1-2", "Hafalan doa harian", "Praktek wudhu & sholat"],
    ratio: "1:5-8",
    schedule: "Sesi Pagi"
  },
  {
    id: 2,
    badge: "LEVEL 2", 
    name: "LANJUTAN",
    description: "Iqro 3-5 - Quran Pemula",
    features: ["Iqro jilid 3-5", "Hafalan juz Amma", "Tajwid dasar", "Sholat berjamaah"],
    ratio: "1:8-12",
    schedule: "Sesi Pagi"
  },
  {
    id: 3,
    badge: "LEVEL 3",
    name: "TAHSIN", 
    description: "Quran Lancar - Perbaikan Tajwid",
    features: ["Tahsin sistematis", "Tajwid lengkap", "Hafalan surat pilihan", "Fiqh ibadah"],
    ratio: "1:10-15",
    schedule: "Sesi Sore"
  },
  {
    id: 4,
    badge: "LEVEL 4",
    name: "TAHFIDZ",
    description: "Persiapan Hafalan Quran", 
    features: ["Metode menghafal", "Setoran rutin", "Murojaah harian", "Leadership"],
    ratio: "1:6-10",
    schedule: "Sesi Sore"
  }
]
</script>

<style scoped>
/* ===== VARIABLES - SUPER CLEAR ===== */
:root {
  --primary: #1e40af;       /* Dark Blue - High contrast */
  --primary-light: #3b82f6; /* Medium Blue */
  --secondary: #dc2626;     /* Red - For alerts */
  --accent: #059669;        /* Green - For success */
  --warning: #d97706;       /* Orange */
  
  --text-dark: #000000;     /* Pure Black - Max contrast */
  --text-gray: #374151;     /* Dark Gray */
  --text-light: #6b7280;    /* Medium Gray */
  
  --bg-white: #ffffff;      /* Pure White */
  --bg-light: #f9fafb;      /* Very Light Gray */
  --bg-blue: #eff6ff;       /* Light Blue */
  
  --border: #e5e7eb;        /* Light Border */
  
  --shadow: 0 4px 12px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
}

/* ===== BASE STYLES ===== */
.home {
  min-height: 100vh;
  background: var(--bg-white);
  color: var(--text-dark);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ===== DESKTOP HEADER ===== */
.desktop-header {
  background: var(--bg-white);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 2px solid var(--border);
}

.desktop-header .container {
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
  border: 2px solid var(--primary);
  border-radius: 8px;
}

.logo-text h1 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
  line-height: 1.2;
}

.logo-text p {
  font-size: 0.9rem;
  color: var(--primary);
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
  color: var(--text-gray);
  font-weight: 600;
  transition: color 0.3s;
  padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary);
}

.nav-link.login-btn {
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: background 0.3s;
}

.nav-link.login-btn:hover {
  background: var(--primary-light);
}

/* ===== MOBILE BOTTOM NAV ===== */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-white);
  border-top: 2px solid var(--border);
  padding: 0.5rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  text-decoration: none;
  color: var(--text-gray);
  transition: color 0.3s;
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.nav-label {
  font-size: 0.75rem;
  font-weight: 600;
}

/* ===== HERO SECTION ===== */
.hero {
  padding: 8rem 0 4rem;
  background: var(--bg-blue);
  border-bottom: 2px solid var(--border);
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  color: var(--text-dark);
}

.hero-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-gray);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.stat {
  background: var(--bg-white);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
}

.stat .number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.stat .label {
  font-size: 0.9rem;
  color: var(--text-gray);
  font-weight: 600;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-light);
}

.btn-whatsapp {
  background: #25D366;
  color: white;
}

.btn-whatsapp:hover {
  background: #128C7E;
}

.btn-icon {
  font-size: 1.1rem;
}

/* ===== HERO VISUAL ===== */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-placeholder {
  background: var(--bg-white);
  padding: 3rem;
  border-radius: 12px;
  border: 2px solid var(--border);
  text-align: center;
  box-shadow: var(--shadow);
}

.visual-placeholder span {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
  color: var(--primary);
}

.visual-placeholder p {
  font-size: 1.1rem;
  color: var(--text-gray);
  font-weight: 600;
  margin: 0;
}

/* ===== FEATURES SECTION ===== */
.features {
  padding: 4rem 0;
  background: var(--bg-white);
  border-bottom: 2px solid var(--border);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-gray);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

.feature-card h3 {
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-card p {
  color: var(--text-gray);
  line-height: 1.6;
}

/* ===== LEVEL PREVIEW ===== */
.level-preview {
  padding: 4rem 0;
  background: var(--bg-light);
  border-bottom: 2px solid var(--border);
}

.level-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.level-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
}

.level-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.level-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.level-card h3 {
  font-size: 1.4rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.level-desc {
  color: var(--text-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.level-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.level-features li {
  padding: 0.5rem 0;
  color: var(--text-dark);
  border-bottom: 1px solid var(--border);
  font-weight: 500;
}

.level-features li:last-child {
  border-bottom: none;
}

.level-meta {
  display: flex;
  justify-content: space-between;
  color: var(--text-gray);
  font-size: 0.9rem;
  font-weight: 600;
}

/* ===== CTA SECTION ===== */
.cta-section {
  padding: 4rem 0;
  background: var(--primary);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .cta-buttons {
  justify-content: center;
}

.btn-whatsapp-lg {
  background: white;
  color: var(--primary);
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.btn-outline-white {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline-white:hover {
  background: white;
  color: var(--primary);
}

/* ===== FOOTER ===== */
.footer {
  background: var(--text-dark);
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
  font-size: 1.2rem;
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
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #d1d5db;
  text-decoration: none;
}

.contact-icon {
  font-size: 1.1rem;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1rem;
  text-align: center;
  color: #9ca3af;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .desktop-header {
    display: none;
  }
  
  .mobile-bottom-nav {
    display: flex;
  }
  
  .hero {
    padding: 6rem 0 2rem;
  }
  
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}
</style>