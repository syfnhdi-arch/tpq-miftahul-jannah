<template>
  <div class="guru-dashboard">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-text">
        <h1>Assalamu'alaikum 👨‍🏫</h1>
        <p>Selamat datang di Dashboard Guru TPA Miftahul Jannah</p>
        <div class="date-info">
          <span class="date">{{ currentDate }}</span>
          <span class="time">{{ currentTime }}</span>
        </div>
      </div>
      <div class="welcome-actions">
        <button class="quick-action-btn" @click="$router.push('/guru/attendance')">
          <span class="action-icon">✅</span>
          <span>Input Absensi</span>
        </button>
        <button class="quick-action-btn" @click="$router.push('/guru/class')">
          <span class="action-icon">👥</span>
          <span>Lihat Kelas</span>
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card primary">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <h3>Total Siswa</h3>
          <p class="stat-number">{{ stats.totalStudents }}</p>
          <span class="stat-change">Aktif: {{ stats.activeStudents }}</span>
        </div>
      </div>
      
      <div class="stat-card success">
        <div class="stat-icon">🏫</div>
        <div class="stat-info">
          <h3>Kelas yang Diampu</h3>
          <p class="stat-number">{{ stats.totalClasses }}</p>
          <span class="stat-change">{{ stats.classesToday }} kelas hari ini</span>
        </div>
      </div>
      
      <div class="stat-card warning">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <h3>Kehadiran Hari Ini</h3>
          <p class="stat-number">{{ stats.todayAttendance }}%</p>
          <span class="stat-change">{{ stats.presentStudents }}/{{ stats.totalStudents }} hadir</span>
        </div>
      </div>
      
      <div class="stat-card info">
        <div class="stat-icon">📚</div>
        <div class="stat-info">
          <h3>Materi Terbaru</h3>
          <p class="stat-number">{{ stats.recentMaterials }}</p>
          <span class="stat-change">7 hari terakhir</span>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
      <h2>⚡ Akses Cepat</h2>
      <div class="actions-grid">
        <button class="action-btn" @click="$router.push('/guru/attendance')">
          <span class="action-icon">✅</span>
          <span>Absensi</span>
          <span class="action-desc">Input kehadiran</span>
        </button>
        <button class="action-btn" @click="$router.push('/guru/class')">
          <span class="action-icon">👥</span>
          <span>Kelas Saya</span>
          <span class="action-desc">Lihat daftar kelas</span>
        </button>
        <button class="action-btn" @click="$router.push('/guru/progress')">
          <span class="action-icon">📈</span>
          <span>Progress</span>
          <span class="action-desc">Input nilai</span>
        </button>
        <button class="action-btn" @click="$router.push('/guru/materials')">
          <span class="action-icon">📚</span>
          <span>Materi</span>
          <span class="action-desc">Upload materi</span>
        </button>
      </div>
    </div>

    <div class="dashboard-content">
      <!-- Today's Schedule -->
      <div class="content-section">
        <div class="section-header">
          <h2>🗓️ Jadwal Hari Ini</h2>
          <router-link to="/guru/schedule" class="view-all">Lihat Semua →</router-link>
        </div>
        <div class="schedule-list">
          <div v-for="schedule in todaysSchedule" :key="schedule.id" class="schedule-item">
            <div class="schedule-time">
              <span class="time">{{ schedule.time }}</span>
              <span class="duration">{{ schedule.duration }}</span>
            </div>
            <div class="schedule-details">
              <h4>{{ schedule.className }}</h4>
              <p>{{ schedule.subject }}</p>
              <span class="class-info">{{ schedule.students }} siswa • {{ schedule.room }}</span>
            </div>
            <div class="schedule-status" :class="schedule.status">
              {{ schedule.status === 'completed' ? '✓ Selesai' : 
                 schedule.status === 'ongoing' ? '▶ Berlangsung' : '⏰ Akan Datang' }}
            </div>
          </div>
          <div v-if="todaysSchedule.length === 0" class="empty-state">
            <span class="empty-icon">📅</span>
            <p>Tidak ada jadwal mengajar hari ini</p>
          </div>
        </div>
      </div>

      <!-- Recent Activities -->
      <div class="content-section">
        <div class="section-header">
          <h2>📝 Aktivitas Terbaru</h2>
          <router-link to="/guru/activities" class="view-all">Lihat Semua →</router-link>
        </div>
        <div class="activity-list">
          <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
            <div class="activity-icon" :class="activity.type">
              {{ activity.type === 'attendance' ? '✅' : 
                 activity.type === 'progress' ? '📈' : 
                 activity.type === 'material' ? '📚' : '💬' }}
            </div>
            <div class="activity-content">
              <p>{{ activity.message }}</p>
              <span class="activity-time">{{ activity.time }}</span>
            </div>
            <div class="activity-class">
              {{ activity.class }}
            </div>
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

// Sample data - nanti bisa diganti dengan data real dari API
const stats = ref({
  totalStudents: 45,
  activeStudents: 42,
  totalClasses: 3,
  classesToday: 2,
  todayAttendance: 93,
  presentStudents: 39,
  recentMaterials: 5
})

const todaysSchedule = ref([
  {
    id: 1,
    time: '08:00',
    duration: '90 menit',
    className: 'Kelas Al-Quran A',
    subject: 'Hafalan Surah Al-Fatihah',
    students: 15,
    room: 'Ruang A1',
    status: 'completed'
  },
  {
    id: 2,
    time: '10:00',
    duration: '90 menit',
    className: 'Kelas Tajwid B',
    subject: 'Makhraj Huruf',
    students: 14,
    room: 'Ruang B2',
    status: 'upcoming'
  },
  {
    id: 3,
    time: '13:00',
    duration: '60 menit',
    className: 'Kelas Akhlak C',
    subject: 'Adab kepada Orang Tua',
    students: 13,
    room: 'Ruang C1',
    status: 'upcoming'
  }
])

const recentActivities = ref([
  {
    id: 1,
    type: 'attendance',
    message: 'Input absensi Kelas Al-Quran A',
    time: '2 jam yang lalu',
    class: 'Kelas A'
  },
  {
    id: 2,
    type: 'progress',
    message: 'Update nilai hafalan untuk 5 siswa',
    time: '1 hari yang lalu',
    class: 'Kelas B'
  },
  {
    id: 3,
    type: 'material',
    message: 'Upload materi pembelajaran baru',
    time: '2 hari yang lalu',
    class: 'Kelas C'
  },
  {
    id: 4,
    type: 'message',
    message: 'Menerima pesan dari orang tua siswa',
    time: '3 hari yang lalu',
    class: 'Kelas A'
  }
])

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
.guru-dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

/* Welcome Section */
.welcome-section {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

.welcome-actions {
  display: flex;
  gap: 0.75rem;
}

.quick-action-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.quick-action-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

/* Stats Grid - Desktop 4 kolom */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

/* Quick Actions - Desktop 4 kolom */
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
  grid-template-columns: repeat(4, 1fr);
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
  background: #f0fdf4;
  border-color: #10b981;
  color: #10b981;
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.3rem;
}

.action-desc {
  font-size: 0.7rem;
  opacity: 0.7;
}

/* Dashboard Content */
.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.content-section {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h2 {
  color: #1f2937;
  font-size: 1.1rem;
  margin: 0;
}

.view-all {
  color: #10b981;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
}

/* Schedule List */
.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: background 0.3s;
}

.schedule-item:hover {
  background: #f1f5f9;
}

.schedule-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}

.schedule-time .time {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.9rem;
}

.schedule-time .duration {
  font-size: 0.7rem;
  color: #6b7280;
}

.schedule-details {
  flex: 1;
}

.schedule-details h4 {
  margin: 0 0 0.25rem 0;
  color: #1f2937;
  font-size: 0.9rem;
}

.schedule-details p {
  margin: 0 0 0.25rem 0;
  color: #6b7280;
  font-size: 0.8rem;
}

.class-info {
  font-size: 0.7rem;
  color: #9ca3af;
}

.schedule-status {
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
}

.schedule-status.completed {
  background: #dcfce7;
  color: #166534;
}

.schedule-status.ongoing {
  background: #fef3c7;
  color: #92400e;
}

.schedule-status.upcoming {
  background: #e0e7ff;
  color: #3730a3;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
}

.empty-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

/* Activity List */
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

.activity-content {
  flex: 1;
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

.activity-class {
  font-size: 0.7rem;
  color: #10b981;
  font-weight: 500;
  background: #dcfce7;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
}

/* ========== RESPONSIVE DESIGN ========== */

/* Tablet & Mobile (768px ke bawah) */
@media (max-width: 768px) {
  .welcome-section {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .welcome-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  
  /* Stats Grid jadi 2 baris (2x2) untuk mobile */
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .stat-card {
    padding: 0.75rem;
    min-height: 80px;
  }
  
  .stat-icon {
    font-size: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.1rem;
  }
  
  .stat-info h3 {
    font-size: 0.75rem;
    margin-bottom: 0.2rem;
  }
  
  .stat-change {
    font-size: 0.65rem;
  }
  
  /* Quick Actions jadi 2 baris (2x2) untuk mobile */
  .actions-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .action-btn {
    padding: 0.75rem 0.25rem;
    min-height: 60px;
    font-size: 0.75rem;
  }
  
  .action-icon {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
  }
  
  .action-desc {
    font-size: 0.65rem;
    line-height: 1.2;
  }
}

/* Mobile Small (480px ke bawah) */
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* Tetap 2 kolom */
    gap: 0.5rem;
  }
  
  .actions-grid {
    grid-template-columns: repeat(2, 1fr); /* Tetap 2 kolom */
    gap: 0.4rem;
  }
  
  .stat-card {
    padding: 0.6rem;
    min-height: 70px;
  }
  
  .stat-icon {
    font-size: 1.3rem;
  }
  
  .stat-number {
    font-size: 1rem;
  }
  
  .stat-info h3 {
    font-size: 0.7rem;
  }
  
  .stat-change {
    font-size: 0.6rem;
  }
  
  .action-btn {
    padding: 0.6rem 0.2rem;
    min-height: 55px;
    font-size: 0.7rem;
  }
  
  .action-icon {
    font-size: 1rem;
  }
  
  .action-desc {
    font-size: 0.6rem;
  }
  
  .schedule-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .schedule-time {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .welcome-text h1 {
    font-size: 1.3rem;
  }
  
  .welcome-text p {
    font-size: 0.8rem;
  }
  
  .quick-action-btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
}

/* Very Small Mobile (360px ke bawah) */
@media (max-width: 360px) {
  .welcome-section {
    padding: 1rem;
  }
  
  .welcome-text h1 {
    font-size: 1.2rem;
  }
  
  .date-info {
    font-size: 0.7rem;
  }
  
  .quick-action-btn {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
  }
  
  .stat-card {
    padding: 0.5rem;
    min-height: 65px;
  }
  
  .stat-icon {
    font-size: 1.1rem;
  }
  
  .stat-number {
    font-size: 0.9rem;
  }
  
  .action-btn {
    padding: 0.5rem 0.1rem;
    min-height: 50px;
    font-size: 0.65rem;
  }
  
  .action-icon {
    font-size: 0.9rem;
  }
  
  .action-desc {
    font-size: 0.55rem;
  }
}

/* Desktop & Widescreen (769px ke atas) - TETAP 4 KOLOM */
@media (min-width: 769px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr); /* Tetap 4 kolom di desktop */
  }
  
  .actions-grid {
    grid-template-columns: repeat(4, 1fr); /* Tetap 4 kolom di desktop */
  }
}

/* Large Desktop (1200px ke atas) */
@media (min-width: 1200px) {
  .guru-dashboard {
    max-width: 1400px;
  }
  
  .stats-grid {
    gap: 1.5rem;
  }
  
  .stat-card {
    padding: 1.25rem;
  }
  
  .actions-grid {
    gap: 1rem;
  }
  
  .action-btn {
    padding: 1.25rem 0.75rem;
    min-height: 80px;
  }
}
</style>