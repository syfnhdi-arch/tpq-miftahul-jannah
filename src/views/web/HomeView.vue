<template>
  <Weblayout>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">🎓 TPA/TPQ Terpadu</div>
          <h1>Membangun <span class="text-gradient">Generasi Qur'ani</span> Berakhlak Mulia</h1>
          <p class="hero-subtitle">Sistem pembelajaran terstruktur sejak 2009 di Bandar Lampung</p>
          
          <div class="hero-stats">
            <div class="stat">
              <div class="number">4</div>
              <div class="label">Level Belajar</div>
            </div>
            <div class="stat">
              <div class="number">50+</div>
              <div class="label">Pelajar Aktif</div>
            </div>
            <div class="stat">
              <div class="number">14+</div>
              <div class="label">Tahun</div>
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
        
        <!-- Hero Visual -->
        <div class="hero-visual">
          <div class="visual-placeholder">
            <img src="../../assets/img/logo.png" alt="TPA Miftahul Jannah" class="hero-logo">
            <p>TPA Miftahul Jannah</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Sistem Yang Kami Gunakan</h2>
          <p>Metode pembelajaran yang efektif</p>
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
            <h3>Guru </h3>
            <p>Guru setiap level dengan rasio ideal</p>
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
          <h2>Keluarga Besar TPA Miftahul Jannah</h2>
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
  </Weblayout>
</template>

<script setup lang="ts">
import Weblayout from '../Weblayout.vue'

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
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Hero Section */
.hero {
  padding: 2rem 0 4rem;
  background: #eff6ff;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  background: #1e40af;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #000;
}

.text-gradient {
  background: linear-gradient(135deg, #1e40af, #059669);
  -webkit-background-clip: text;
  background-clip: text; /* Tambah ini */
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
}

.stat {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e5e7eb;
}

.stat .number {
  font-size: 2rem;
  font-weight: 800;
  color: #1e40af;
  display: block;
}

.stat .label {
  color: #6b7280;
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
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.btn-primary {
  background: #1e40af;
  color: white;
}

.btn-primary:hover {
  background: #3b82f6;
}

.btn-whatsapp {
  background: #25D366;
  color: white;
}

.btn-whatsapp:hover {
  background: #128C7E;
}

/* Hero Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-placeholder {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.hero-logo {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  border: 3px solid #1e40af;
  margin-bottom: 1rem;
  object-fit: contain;
}

.visual-placeholder p {
  font-size: 1.2rem;
  font-weight: 700;
  color: #374151;
  margin: 0;
}

/* Features Section */
.features {
  padding: 4rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 800;
}

.section-header p {
  font-size: 1.2rem;
  color: #6b7280;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e5e7eb;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Level Preview */
.level-preview {
  padding: 4rem 0;
  background: #f9fafb;
}

.level-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.level-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
}

.level-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.level-badge {
  background: #1e40af;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 1rem;
}

.level-card h3 {
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.level-desc {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.level-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.level-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
}

.level-features li:last-child {
  border-bottom: none;
}

.level-meta {
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: #1e40af;
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .cta-buttons {
  justify-content: center;
}

.btn-whatsapp-lg {
  background: white;
  color: #1e40af;
}

.btn-outline-white {
  background: transparent;
  color: white;
  border-color: white;
}

.btn-outline-white:hover {
  background: white;
  color: #1e40af;
}

/* Responsive */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .hero-logo {
    width: 100px;
    height: 100px;
  }
}
</style>
