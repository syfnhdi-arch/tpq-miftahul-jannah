<template>
  <Adminlayout>
    <div class="admin-dash">
      <h1>👑 Dashboard Admin</h1>
      
      <div class="stats">
        <div class="stat-card">
          <h3>Total Santri</h3>
          <div class="number">60</div>
        </div>
        <div class="stat-card">
          <h3>Total Guru</h3>
          <div class="number">6</div>
        </div>
        <div class="stat-card">
          <h3>Kelas Aktif</h3>
          <div class="number">4</div>
        </div>
      </div>

      <div class="quick-actions">
        <h3>Quick Actions</h3>
        <div class="actions">
          <router-link to="/admin/students" class="action-btn">👥 Kelola Santri</router-link>
          <router-link to="/admin/teachers" class="action-btn">👨‍🏫 Kelola Guru</router-link>
          <router-link to="/admin/reports" class="action-btn">📈 Lihat Laporan</router-link>
        </div>
      </div>
    </div>
  </Adminlayout>
</template>

<script setup lang="ts">
import Adminlayout from '../Adminlayout.vue'
</script>

<style scoped>
.admin-dash h1 {
  color: #000;
  margin-bottom: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  text-align: center;
}

.stat-card h3 {
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.number {
  font-size: 2rem;
  font-weight: 800;
  color: #1e40af;
}

.quick-actions h3 {
  color: #374151;
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  background: #1e40af;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.action-btn:hover {
  background: #3b82f6;
}
</style>