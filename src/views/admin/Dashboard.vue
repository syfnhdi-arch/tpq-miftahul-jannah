<template>
  <div class="dashboard-admin">
    <div class="header">
      <h1>👑 Dashboard Admin</h1>
      <p>Selamat datang di dashboard admin TPA Miftahul Jannah</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <h3>Total Santri</h3>
          <p class="stat-number">0</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">👨‍🏫</div>
        <div class="stat-content">
          <h3>Total Guru</h3>
          <p class="stat-number">0</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-content">
          <h3>Kelas Aktif</h3>
          <p class="stat-number">0</p>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-content">
          <h3>Kehadiran Hari Ini</h3>
          <p class="stat-number">0%</p>
        </div>
      </div>
    </div>

    <div class="quick-actions">
      <h2>Quick Actions</h2>
      <div class="actions-grid">
        <button class="action-btn" @click="$router.push('/admin/students')">
          <span class="action-icon">➕</span>
          <span>Tambah Santri</span>
        </button>
        <button class="action-btn" @click="$router.push('/admin/teachers')">
          <span class="action-icon">👨‍🏫</span>
          <span>Kelola Guru</span>
        </button>
        <button class="action-btn" @click="$router.push('/admin/reports')">
          <span class="action-icon">📊</span>
          <span>Generate Laporan</span>
        </button>
        <button class="action-btn">
          <span class="action-icon">⚙️</span>
          <span>Pengaturan</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Router udah available globally di Adminlayout, jadi gak perlu import
</script>

<style scoped>
.dashboard-admin {
  padding: 1rem;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.header p {
  color: #6b7280;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.stat-icon {
  font-size: 2rem;
}

.stat-content h3 {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
}

.stat-number {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: #1e40af;
}

.quick-actions h2 {
  color: #1f2937;
  margin-bottom: 1rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-btn {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  border-color: #1e40af;
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.5rem;
}

.action-btn span:last-child {
  font-weight: 500;
  color: #374151;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>