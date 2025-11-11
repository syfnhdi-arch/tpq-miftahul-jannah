<template>
  <div class="admin-page">
    <div class="page-header">
    </div>
    <div class="web-settings-nav">
      <router-link to="/admin/websettings/home" class="nav-card">
        <div class="nav-icon">🏠</div>
        <div class="nav-content">
          <h3>Home</h3>
          <p>Kelola konten halaman utama</p>
        </div>
        <div class="nav-arrow">→</div>
      </router-link>
      
      <router-link to="/admin/websettings/program" class="nav-card">
        <div class="nav-icon">📚</div>
        <div class="nav-content">
          <h3>Program</h3>
          <p>Kelola informasi program TPA</p>
        </div>
        <div class="nav-arrow">→</div>
      </router-link>
      
      <router-link to="/admin/websettings/galeri" class="nav-card">
        <div class="nav-icon">📸</div>
        <div class="nav-content">
          <h3>Galeri</h3>
          <p>Kelola foto dan video kegiatan</p>
        </div>
        <div class="nav-arrow">→</div>
      </router-link>
      
      <router-link to="/admin/websettings/info" class="nav-card">
        <div class="nav-icon">ℹ️</div>
        <div class="nav-content">
          <h3>Info</h3>
          <p>Kelola informasi dan pengumuman</p>
        </div>
        <div class="nav-arrow">→</div>
      </router-link>
      
      <router-link to="/admin/websettings/kontak" class="nav-card">
        <div class="nav-icon">📞</div>
        <div class="nav-content">
          <h3>Kontak</h3>
          <p>Kelola informasi kontak dan lokasi</p>
        </div>
        <div class="nav-arrow">→</div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.admin-page {
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #6b7280;
  font-size: 1.1rem;
}

.web-settings-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
}

.nav-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.nav-card:hover {
  transform: translateY(-2px);
  border-color: #1e40af;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eff6ff;
  border-radius: 12px;
}

.nav-content {
  flex: 1;
}

.nav-content h3 {
  font-size: 1.3rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.nav-content p {
  color: #6b7280;
  margin: 0;
}

.nav-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  transition: transform 0.3s ease;
}

.nav-card:hover .nav-arrow {
  transform: translateX(4px);
  color: #1e40af;
}

@media (max-width: 768px) {
  .admin-page {
    padding: 1rem;
  }
  
  .nav-card {
    gap: 1rem;
    padding: 1.25rem;
  }
  
  .nav-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
  }
  
  .nav-content h3 {
    font-size: 1.1rem;
  }
}
</style>