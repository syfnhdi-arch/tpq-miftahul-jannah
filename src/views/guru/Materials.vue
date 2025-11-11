[file name]: Materials.vue
[file content begin]
<template>
  <div class="guru-page">
    <div class="page-header">
      <h1>📚 Materi Ajar</h1>
      <p>Kelola materi pembelajaran untuk santri</p>
    </div>
    
    <div class="coming-soon">
      <div class="coming-soon-icon">📖</div>
      <h2>Fitur Materi Ajar Sedang dalam Pengembangan</h2>
      <p>Kami sedang mempersiapkan sistem manajemen materi ajar untuk guru</p>
      <div class="features-list">
        <div class="feature-item">✓ Upload materi PDF/Dokumen</div>
        <div class="feature-item">✓ Kelola materi per kelas</div>
        <div class="feature-item">✓ Bagikan materi ke santri</div>
        <div class="feature-item">✓ Arsip materi pembelajaran</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.guru-page {
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

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.feature-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-weight: 500;
}

@media (max-width: 768px) {
  .guru-page {
    padding: 1rem;
  }
  
  .coming-soon {
    padding: 2rem 1rem;
  }
  
  .coming-soon h2 {
    font-size: 1.5rem;
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>
[file content end]