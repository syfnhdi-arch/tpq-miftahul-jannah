<template>
  <div class="admin-page">
    <div class="page-header">
      <div class="header-left">
        <router-link to="/admin/websettings" class="back-btn">← Kembali</router-link>
        <h1>🏠 Pengaturan Info</h1>
      </div>
    </div>
    
    <div class="coming-soon">
      <div class="coming-soon-icon">🔧</div>
      <h2>Pengaturan Home Sedang dalam Pengembangan</h2>
      <p>Fitur untuk mengelola konten halaman utama website</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-btn {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.back-btn:hover {
  color: #1e40af;
}

.page-header h1 {
  font-size: 2rem;
  color: #1f2937;
  margin: 0;
}

.coming-soon {
  text-align: center;
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.coming-soon h2 {
  font-size: 1.8rem;
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

@media (max-width: 768px) {
  .admin-page {
    padding: 1rem;
  }
  
  .coming-soon {
    padding: 2rem 1rem;
  }
  
  .coming-soon h2 {
    font-size: 1.5rem;
  }
}
</style>