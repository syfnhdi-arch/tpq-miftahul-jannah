<template>
  <Ortulayout>
    <div class="ortu-dash">
      <h1>👨‍👩‍👧‍👦 Dashboard Orang Tua</h1>
      
      <div class="child-info">
        <h3>Anak Saya</h3>
        <div class="child-card">
          <div class="child-name">Ahmad</div>
          <div class="child-details">
            <span>Level: 2</span>
            <span>Kelas: Al-Fatihah</span>
            <span>Guru: Bu Siti</span>
          </div>
        </div>
      </div>

      <div class="stats">
        <div class="stat-card">
          <h3>Kehadiran</h3>
          <div class="number">85%</div>
        </div>
        <div class="stat-card">
          <h3>Progress</h3>
          <div class="number">Iqro 4</div>
        </div>
        <div class="stat-card">
          <h3>Pesan Baru</h3>
          <div class="number">2</div>
        </div>
      </div>

      <div class="quick-actions">
        <h3>Menu Cepat</h3>
        <div class="actions">
          <router-link to="/orangtua/children" class="action-btn">👶 Data Anak</router-link>
          <router-link to="/orangtua/progress" class="action-btn">📈 Progress Belajar</router-link>
          <router-link to="/orangtua/messages" class="action-btn">💬 Pesan Guru</router-link>
        </div>
      </div>
    </div>
  </Ortulayout>
</template>

<script setup lang="ts">
import Ortulayout from '../Ortulayout.vue'
</script>

<style scoped>
.ortu-dash h1 {
  color: #000;
  margin-bottom: 2rem;
}

.child-info {
  margin-bottom: 2rem;
}

.child-info h3 {
  color: #374151;
  margin-bottom: 1rem;
}

.child-card {
  background: #fef7ed;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #fed7aa;
}

.child-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ea580c;
  margin-bottom: 0.5rem;
}

.child-details {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.child-details span {
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #374151;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: #fef7ed;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #fed7aa;
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
  color: #ea580c;
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
  background: #ea580c;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.action-btn:hover {
  background: #f97316;
}
</style>