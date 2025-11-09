<template>
  <div>
    <h1>👨‍👩‍👧‍👦 Dashboard Orangtua</h1>
    <p>Halaman dashboard untuk orangtua santri TPA Miftahul Jannah</p>
    <div class="info-cards">
      <div class="info-card">
        <h3>Anak Saya</h3>
        <p>0 Santri</p>
      </div>
      <div class="info-card">
        <h3>Kehadiran</h3>
        <p>0%</p>
      </div>
      <div class="info-card">
        <h3>Progress</h3>
        <p>0%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.info-cards {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;
  text-align: center;
}

.info-card h3 {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.info-card p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
}
</style>
