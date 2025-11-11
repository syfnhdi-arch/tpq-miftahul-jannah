<template>
  <div class="admin-dashboard">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-text">
        <h1>Assalamu'alaikum 👑</h1>
        <p>Selamat datang di Dashboard Admin TPA Miftahul Jannah</p>
        <div class="date-info">
          <span class="date">{{ currentDate }}</span>
          <span class="time">{{ currentTime }}</span>
        </div>
      </div>
      <div class="welcome-image">
        <span class="emoji">🎯</span>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card primary">
        <div class="stat-icon">👨‍🎓</div>
        <div class="stat-info">
          <h3>Total Santri</h3>
          <p class="stat-number">55</p>
          <span class="stat-change">+5 dari bulan lalu</span>
        </div>
      </div>
      
      <div class="stat-card success">
        <div class="stat-icon">👨‍🏫</div>
        <div class="stat-info">
          <h3>Total Guru</h3>
          <p class="stat-number">3</p>
          <span class="stat-change">+2 guru baru</span>
        </div>
      </div>
      
      <div class="stat-card warning">
        <div class="stat-icon">🏫</div>
        <div class="stat-info">
          <h3>Kelas Aktif</h3>
          <p class="stat-number">4</p>
          <span class="stat-change">Semua berjalan</span>
        </div>
      </div>
      
      <div class="stat-card info">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
          <h3>Kehadiran Hari Ini</h3>
          <p class="stat-number">100%</p>
          <span class="stat-change">60/60 santri</span>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
      <h2>⚡ Quick Actions</h2>
      <div class="actions-grid">
        <button class="action-btn" @click="$router.push('/admin/students')">
          <span class="action-icon">➕</span>
          <span>Tambah Santri</span>
        </button>
        <button class="action-btn" @click="$router.push('/admin/teachers')">
          <span class="action-icon">👨‍🏫</span>
          <span>Data Guru</span>
        </button>
        <button class="action-btn" @click="$router.push('/admin/classes')">
          <span class="action-icon">🏫</span>
          <span>Kelola Kelas</span>
        </button>
        <button class="action-btn" @click="$router.push('/admin/reports')">
          <span class="action-icon">📈</span>
          <span>Generate Laporan</span>
        </button>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="recent-activity">
      <h2>📝 Aktivitas Terbaru</h2>
      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-icon">🎓</div>
          <div class="activity-content">
            <p><strong>5 santri baru</strong> mendaftar hari ini</p>
            <span class="activity-time">2 jam yang lalu</span>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-icon">📚</div>
          <div class="activity-content">
            <p><strong>Laporan bulanan</strong> telah di-generate</p>
            <span class="activity-time">1 hari yang lalu</span>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-icon">👨‍🏫</div>
          <div class="activity-content">
            <p><strong>Guru Ahmad</strong> mengupdate jadwal mengajar</p>
            <span class="activity-time">2 hari yang lalu</span>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-icon">✅</div>
          <div class="activity-content">
            <p><strong>Presensi harian</strong> telah diinput</p>
            <span class="activity-time">Hari ini</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentDate = ref('')
const currentTime = ref('')
const interval = ref<number | null>(null)

const updateDateTime = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  currentTime.value = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateDateTime()
  interval.value = window.setInterval(updateDateTime, 60000)
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value)
  }
})
</script>

<style scoped>
.admin-dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

/* Welcome Section */
.welcome-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-text h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.welcome-text p {
  opacity: 0.9;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.date-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.date, .time {
  background: rgba(255,255,255,0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  text-align: center;
}

.welcome-image .emoji {
  font-size: 3rem;
  opacity: 0.8;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stat-card.primary {
  border-left: 4px solid #3b82f6;
}

.stat-card.success {
  border-left: 4px solid #10b981;
}

.stat-card.warning {
  border-left: 4px solid #f59e0b;
}

.stat-card.info {
  border-left: 4px solid #8b5cf6;
}

.stat-icon {
  font-size: 1.8rem;
  opacity: 0.8;
}

.stat-info h3 {
  color: #6b7280;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.stat-number {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
  color: #1f2937;
}

.stat-change {
  font-size: 0.7rem;
  color: #9ca3af;
}

/* Quick Actions */
.quick-actions {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
}

.quick-actions h2 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.1rem;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.action-btn {
  background: #f8fafc;
  border: 2px dashed #e2e8f0;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-weight: 500;
  font-size: 0.8rem;
  min-height: 70px;
}

.action-btn:hover {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.3rem;
}

/* Recent Activity */
.recent-activity {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.recent-activity h2 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.1rem;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: background 0.3s;
}

.activity-item:hover {
  background: #f1f5f9;
}

.activity-icon {
  font-size: 1rem;
  background: white;
  padding: 0.4rem;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.activity-content p {
  margin: 0 0 0.2rem 0;
  color: #374151;
  font-size: 0.85rem;
  line-height: 1.3;
}

.activity-time {
  font-size: 0.7rem;
  color: #9ca3af;
}

/* ===== RESPONSIVE BREAKPOINTS ===== */

/* Tablet */
@media (min-width: 481px) and (max-width: 768px) {
  .welcome-section {
    padding: 2rem;
  }
  
  .welcome-text h1 {
    font-size: 1.8rem;
  }
  
  .date-info {
    flex-direction: row;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  .stat-card {
    padding: 1.25rem;
  }
  
  .actions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 769px) {
  .welcome-section {
    padding: 2rem;
  }
  
  .welcome-text h1 {
    font-size: 2rem;
  }
  
  .date-info {
    flex-direction: row;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .actions-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .action-btn {
    padding: 1.5rem 1rem;
    font-size: 0.9rem;
    min-height: auto;
  }
  
  .action-icon {
    font-size: 1.5rem;
  }
}

/* Very small phones */
@media (max-width: 360px) {
  .welcome-section {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
  
  .welcome-image .emoji {
    font-size: 2.5rem;
  }
}
</style>