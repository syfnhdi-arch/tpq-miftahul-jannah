<template>
  <Weblayout>
    <div class="info-page">
      <!-- Header Section -->
      <section class="info-header">
        <div class="container">
          <div class="header-content">
            <h1>ℹ️ Info & Berita</h1>
            <p>Informasi terbaru seputar kegiatan TPA/TPQ Miftahul Jannah Bandar Lampung</p>
          </div>
        </div>
      </section>

      <!-- Info Content -->
      <section class="info-content">
        <div class="container">
          <!-- Coming Soon Notice -->
          <div class="coming-soon">
            <div class="coming-soon-icon">📢</div>
            <h2>Halaman Info Sedang dalam Pengembangan</h2>
            <p>Kami sedang mempersiapkan sistem informasi untuk menampilkan berita, pengumuman, dan kegiatan terbaru TPA/TPQ Miftahul Jannah</p>
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">📅</span>
                <span>Jadwal Kegiatan & Acara</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📢</span>
                <span>Pengumuman Penting</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📰</span>
                <span>Berita Terkini</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎯</span>
                <span>Informasi Program</span>
              </div>
            </div>
          </div>

          <!-- Sample Info Cards (Placeholder) -->
          <div class="info-grid">
            <div class="info-card" v-for="info in sampleInfo" :key="info.id">
              <div class="info-category" :class="info.category">{{ info.category }}</div>
              <div class="info-date">{{ info.date }}</div>
              <h3 class="info-title">{{ info.title }}</h3>
              <p class="info-excerpt">{{ info.excerpt }}</p>
              <div class="info-status">Segera hadir</div>
            </div>
          </div>

          <!-- Admin Notice -->
        </div>
      </section>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import Weblayout from '../Weblayout.vue'

const sampleInfo = [
  {
    id: 1,
    category: 'Kegiatan',
    date: 'Segera',
    title: 'Pesantren Kilat Ramadan 2024',
    excerpt: 'Program pesantren kilat selama bulan Ramadan untuk peserta didik TPA/TPQ'
  },
  {
    id: 2,
    category: 'Pengumuman',
    date: 'Segera', 
    title: 'Pendaftaran peserta didik Baru Tahun Ajaran 2024/2025',
    excerpt: 'Informasi pendaftaran peserta didik baru untuk tahun ajaran mendatang'
  },
  {
    id: 3,
    category: 'Berita',
    date: 'Segera',
    title: 'Kegiatan Khataman Quran Bersama',
    excerpt: 'Acara khataman Quran untuk peserta yang telah menyelesaikan level tertentu'
  },
  {
    id: 4,
    category: 'Jadwal',
    date: 'Segera',
    title: 'Libur Semester Genap 2024',
    excerpt: 'Jadwal libur semester dan rencana pembelajaran semester berikutnya'
  },
  {
    id: 5,
    category: 'Acara',
    date: 'Segera',
    title: 'Perayaan Maulid Nabi Muhammad SAW',
    excerpt: 'Kegiatan peringatan maulid nabi dengan berbagai lomba dan acara'
  },
  {
    id: 6,
    category: 'Informasi',
    date: 'Segera',
    title: 'Update Sistem Pembelajaran',
    excerpt: 'Peningkatan sistem pembelajaran dan kurikulum terbaru'
  }
]
</script>

<style scoped>
.info-page {
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Section */
.info-header {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.info-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.info-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Info Content */
.info-content {
  padding: 4rem 0;
}

/* Coming Soon Section */
.coming-soon {
  text-align: center;
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.coming-soon h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.coming-soon p {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-item span:last-child {
  color: #475569;
  font-weight: 500;
}

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.info-category {
  position: absolute;
  top: -10px;
  left: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.info-category.Kegiatan {
  background: #3b82f6;
  color: white;
}

.info-category.Pengumuman {
  background: #10b981;
  color: white;
}

.info-category.Berita {
  background: #f59e0b;
  color: white;
}

.info-category.Jadwal {
  background: #8b5cf6;
  color: white;
}

.info-category.Acara {
  background: #ef4444;
  color: white;
}

.info-category.Informasi {
  background: #6b7280;
  color: white;
}

.info-date {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.info-title {
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.4;
}

.info-excerpt {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-status {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Admin Notice */
.admin-notice {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
}

.admin-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.admin-notice h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.admin-notice p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.admin-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.admin-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.check-icon {
  font-size: 1.1rem;
}

.admin-feature span:last-child {
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-header h1 {
    font-size: 2rem;
  }
  
  .info-header p {
    font-size: 1.1rem;
  }
  
  .coming-soon {
    padding: 2rem 1rem;
  }
  
  .coming-soon h2 {
    font-size: 1.6rem;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .admin-features {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .info-header {
    padding: 2rem 0;
  }
  
  .info-content {
    padding: 2rem 0;
  }
  
  .info-card {
    padding: 1.5rem;
  }
}
</style>
