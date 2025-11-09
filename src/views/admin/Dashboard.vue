<template>
  <div class="admin-dashboard">
    <h1>👑 Dashboard Admin</h1>
    <p>Selamat datang di dashboard admin TPA Miftahul Jannah</p>
    
    <div class="stats">
      <div class="stat">
        <h3>Total Santri</h3>
        <p>0</p>
      </div>
      <div class="stat">
        <h3>Total Guru</h3>
        <p>0</p>
      </div>
      <div class="stat">
        <h3>Kelas Aktif</h3>
        <p>0</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.admin-dashboard {
  padding: 20px;
}

.admin-dashboard h1 {
  color: #1f2937;
  margin-bottom: 10px;
}

.admin-dashboard p {
  color: #6b7280;
  margin-bottom: 30px;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex: 1;
  text-align: center;
}

.stat h3 {
  color: #6b7280;
  margin-bottom: 10px;
  font-size: 14px;
}

.stat p {
  color: #1e40af;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
</style>