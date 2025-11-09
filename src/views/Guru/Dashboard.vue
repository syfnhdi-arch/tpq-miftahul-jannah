<template>
  <Gurulayout>
    <div class="guru-dash">
      <h1>👨‍🏫 Dashboard Guru</h1>
      
      <div class="stats">
        <div class="stat-card">
          <h3>Santri di Kelas</h3>
          <div class="number">12</div>
        </div>
        <div class="stat-card">
          <h3>Hadir Hari Ini</h3>
          <div class="number">10</div>
        </div>
        <div class="stat-card">
          <h3>Level Kelas</h3>
          <div class="number">2</div>
        </div>
      </div>

      <div class="quick-actions">
        <h3>Menu Cepat</h3>
        <div class="actions">
          <router-link to="/guru/class" class="action-btn">👥 Kelas Saya</router-link>
          <router-link to="/guru/attendance" class="action-btn">✅ Input Absensi</router-link>
          <router-link to="/guru/progress" class="action-btn">📈 Progress Santri</router-link>
        </div>
      </div>
    </div>
  </Gurulayout>
</template>

<script setup lang="ts">
import Gurulayout from '../Gurulayout.vue'
</script>

<style scoped>
.guru-dash h1 {
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
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #dcfce7;
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
  color: #16a34a;
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
  background: #16a34a;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.action-btn:hover {
  background: #22c55e;
}
</style>