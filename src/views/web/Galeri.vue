[file name]: Galeri.vue
[file content begin]
<template>
  <Weblayout>
    <div class="gallery-page">
      <!-- Header Section -->
      <section class="gallery-header">
        <div class="container">
          <div class="header-content">
            <h1>📸 Galeri Kegiatan</h1>
            <p>Dokumentasi kegiatan TPA/TPQ Miftahul Jannah Bandar Lampung</p>
          </div>
        </div>
      </section>

      <!-- Gallery Content -->
      <section class="gallery-content">
        <div class="container">
          <!-- Coming Soon Notice -->
          <div class="coming-soon">
            <div class="coming-soon-icon">🔄</div>
            <h2>Galeri Sedang dalam Pengembangan</h2>
            <p>Kami sedang mempersiapkan dokumentasi foto dan video kegiatan TPA/TPQ Miftahul Jannah</p>
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">📷</span>
                <span>Foto Kegiatan Belajar Mengajar</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎥</span>
                <span>Video Proses Pembelajaran</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🏆</span>
                <span>Dokumentasi Acara & Perlombaan</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👨‍👩‍👧‍👦</span>
                <span>Aktivitas Siswa & Guru</span>
              </div>
            </div>
          </div>

          <!-- Placeholder Gallery Grid -->
          <div class="gallery-placeholder">
            <div class="placeholder-grid">
              <div class="placeholder-item" v-for="n in 6" :key="n">
                <div class="placeholder-image">
                  <span>📸</span>
                </div>
                <div class="placeholder-text">
                  <p>Foto Kegiatan {{ n }}</p>
                  <span>Segera hadir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import Weblayout from '../Weblayout.vue'
</script>

<style scoped>
.gallery-page {
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Section */
.gallery-header {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.gallery-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.gallery-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Gallery Content */
.gallery-content {
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

/* Placeholder Gallery */
.gallery-placeholder {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.placeholder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.placeholder-item {
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: transform 0.3s;
}

.placeholder-item:hover {
  transform: translateY(-2px);
}

.placeholder-image {
  height: 200px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image span {
  font-size: 3rem;
  opacity: 0.5;
}

.placeholder-text {
  padding: 1.5rem;
  text-align: center;
}

.placeholder-text p {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.placeholder-text span {
  color: #64748b;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-header h1 {
    font-size: 2rem;
  }
  
  .gallery-header p {
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
  
  .placeholder-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .gallery-header {
    padding: 2rem 0;
  }
  
  .gallery-content {
    padding: 2rem 0;
  }
}
</style>
[file content end]