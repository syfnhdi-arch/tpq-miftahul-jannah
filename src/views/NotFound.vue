<template>
  <div class="not-found">
    <h1>404 - Halaman Tidak Ditemukan</h1>
    <p>Halaman yang Anda cari tidak exists.</p>
    <router-link to="/" class="back-home">Kembali ke Home</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

.back-home {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>