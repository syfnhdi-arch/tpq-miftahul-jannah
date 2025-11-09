// views/Program.vue
<template>
  <div class="program-page">
    <header class="page-header">
      <h1>Program Belajar</h1>
      <p>4 Level Pembelajaran Terstruktur</p>
    </header>

    <div class="level-details">
      <div v-for="level in levels" :key="level.id" class="level-card">
        <div class="level-header">
          <span class="level-badge">{{ level.badge }}</span>
          <h3>{{ level.name }}</h3>
        </div>
        <p class="level-desc">{{ level.description }}</p>
        
        <div class="curriculum">
          <h4>Materi Pembelajaran:</h4>
          <ul>
            <li v-for="item in level.curriculum" :key="item">• {{ item }}</li>
          </ul>
        </div>
        
        <div class="level-info">
          <div class="info-item">
            <span>🕒</span>
            <span>{{ level.schedule }}</span>
          </div>
          <div class="info-item">
            <span>👥</span>
            <span>{{ level.ratio }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>