<template>
  <div>
    <h1>👨‍🏫 Dashboard Guru</h1>
    <p>Halaman dashboard untuk guru TPA Miftahul Jannah</p>
    <div class="stats">
      <div class="stat-card">
        <h3>Kelas Saya</h3>
        <p>0 Kelas</p>
      </div>
      <div class="stat-card">
        <h3>Santri Aktif</h3>
        <p>0 Santri</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.stats {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;
  text-align: center;
}

.stat-card h3 {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.stat-card p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
}
</style>