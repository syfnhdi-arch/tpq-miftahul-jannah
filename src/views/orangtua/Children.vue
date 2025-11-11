[file name]: Children.vue
[file content begin]
<template>
  <div class="ortu-page">
    <div class="page-header">
      <h1>👦👧 Anak Saya</h1>
      <p>Detail informasi dan progress anak-anak Anda</p>
    </div>

    <!-- Children List -->
    <div class="children-list">
      <div v-for="child in children" :key="child.id" class="child-detail-card">
        <!-- Child Header -->
        <div class="child-header">
          <div class="child-profile">
            <div class="child-avatar-large">
              <img :src="child.photo" :alt="child.name" class="child-photo-large">
            </div>
            <div class="child-basic-info">
              <h2>{{ child.name }}</h2>
              <p>{{ child.class }}</p>
              <span class="child-status-badge" :class="child.status">
                {{ child.statusText }}
              </span>
            </div>
          </div>
          <div class="child-actions">
            <button class="action-btn primary" @click="viewProgress(child.id)">
              <span class="btn-icon">📈</span>
              <span>Lihat Progress</span>
            </button>
            <button class="action-btn secondary" @click="sendMessage(child.id)">
              <span class="btn-icon">💬</span>
              <span>Kirim Pesan</span>
            </button>
          </div>
        </div>

        <!-- Child Stats -->
        <div class="child-stats-grid">
          <div class="stat-item">
            <div class="stat-icon">✅</div>
            <div class="stat-content">
              <h4>Kehadiran</h4>
              <p class="stat-value">{{ child.attendance }}%</p>
              <span class="stat-desc">Bulan ini</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">📊</div>
            <div class="stat-content">
              <h4>Nilai Rata-rata</h4>
              <p class="stat-value">{{ child.averageGrade }}</p>
              <span class="stat-desc">Semester ini</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">📚</div>
            <div class="stat-content">
              <h4>Hafalan</h4>
              <p class="stat-value">{{ child.memorization }}</p>
              <span class="stat-desc">Ayat terkumpul</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">⭐</div>
            <div class="stat-content">
              <h4>Prestasi</h4>
              <p class="stat-value">{{ child.achievements }}</p>
              <span class="stat-desc">Penghargaan</span>
            </div>
          </div>
        </div>

        <!-- Progress Section -->
        <div class="progress-section">
          <h3>📈 Progress Belajar</h3>
          <div class="progress-items">
            <div class="progress-item" v-for="progress in child.progress" :key="progress.id">
              <div class="progress-subject">
                <span class="subject-icon">{{ progress.icon }}</span>
                <div class="subject-info">
                  <h4>{{ progress.subject }}</h4>
                  <p>{{ progress.description }}</p>
                </div>
              </div>
              <div class="progress-level">
                <div class="level-bar">
                  <div class="level-fill" :style="{ width: progress.level + '%' }"></div>
                </div>
                <span class="level-text">{{ progress.level }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activities -->
        <div class="recent-child-activities">
          <h3>📝 Aktivitas Terbaru</h3>
          <div class="activity-timeline">
            <div v-for="activity in child.recentActivities" :key="activity.id" class="timeline-item">
              <div class="timeline-icon">{{ activity.icon }}</div>
              <div class="timeline-content">
                <p>{{ activity.message }}</p>
                <span class="timeline-time">{{ activity.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Sample data - nanti diganti dengan data real dari API
const children = ref([
  {
    id: 1,
    name: 'Muhammad Daffa Rafif Wibowo',
    class: 'Kelas Al-Quran A',
    photo: '/pasfoto/Muhammad Daffa Rafif Wibowo.png',
    attendance: 95,
    averageGrade: '85',
    memorization: '45',
    achievements: '3',
    status: 'active',
    statusText: 'Aktif',
    progress: [
      {
        id: 1,
        subject: 'Hafalan Quran',
        description: 'Surah Al-Fatihah dan Juz 30',
        icon: '📖',
        level: 75
      },
      {
        id: 2,
        subject: 'Tajwid',
        description: 'Makhraj Huruf dan Hukum Nun Sukun',
        icon: '🎵',
        level: 60
      },
      {
        id: 3,
        subject: 'Akhlak',
        description: 'Adab kepada Orang Tua dan Guru',
        icon: '❤️',
        level: 90
      },
      {
        id: 4,
        subject: 'Fiqih',
        description: 'Tata Cara Wudhu dan Shalat',
        icon: '🕌',
        level: 80
      }
    ],
    recentActivities: [
      {
        id: 1,
        icon: '📖',
        message: 'Menyelesaikan hafalan Surah Al-Falaq',
        time: '2 jam yang lalu'
      },
      {
        id: 2,
        icon: '✅',
        message: 'Hadir tepat waktu di kelas pagi',
        time: '1 hari yang lalu'
      },
      {
        id: 3,
        icon: '📊',
        message: 'Mendapat nilai 90 untuk tes tajwid',
        time: '3 hari yang lalu'
      },
      {
        id: 4,
        icon: '⭐',
        message: 'Mendapat penghargaan siswa teladan',
        time: '1 minggu yang lalu'
      }
    ]
  },
  {
    id: 2,
    name: 'Asyifa Zafira Putri Ramadhani',
    class: 'Kelas Tajwid B',
    photo: '/pasfoto/Asyifa Zafira Putri Ramadhani.png',
    attendance: 88,
    averageGrade: '82',
    memorization: '38',
    achievements: '2',
    status: 'active',
    statusText: 'Aktif',
    progress: [
      {
        id: 1,
        subject: 'Hafalan Quran',
        description: 'Surah An-Nas dan Al-Falaq',
        icon: '📖',
        level: 65
      },
      {
        id: 2,
        subject: 'Tajwid',
        description: 'Hukum Mim Sukun dan Idgham',
        icon: '🎵',
        level: 70
      },
      {
        id: 3,
        subject: 'Akhlak',
        description: 'Adab Berteman dan Berbicara',
        icon: '❤️',
        level: 85
      },
      {
        id: 4,
        subject: 'Fiqih',
        description: 'Tata Cara Shalat Berjamaah',
        icon: '🕌',
        level: 75
      }
    ],
    recentActivities: [
      {
        id: 1,
        icon: '📖',
        message: 'Menyelesaikan hafalan Surah An-Nas',
        time: '1 hari yang lalu'
      },
      {
        id: 2,
        icon: '✅',
        message: 'Aktif berpartisipasi dalam diskusi kelompok',
        time: '2 hari yang lalu'
      },
      {
        id: 3,
        icon: '📊',
        message: 'Meningkatkan nilai akhlak menjadi 85',
        time: '1 minggu yang lalu'
      }
    ]
  }
])

const viewProgress = (childId: number) => {
  router.push(`/orangtua/progress?child=${childId}`)
}

const sendMessage = (childId: number) => {
  router.push(`/orangtua/messages?child=${childId}`)
}
</script>

<style scoped>
.ortu-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: #6b7280;
  font-size: 1.1rem;
}

/* Children List */
.children-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.child-detail-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

/* Child Header */
.child-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e5e7eb;
}

.child-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.child-avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #8b5cf6;
  flex-shrink: 0;
}

.child-photo-large {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.child-basic-info h2 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.5rem;
}

.child-basic-info p {
  margin: 0 0 0.5rem 0;
  color: #6b7280;
  font-size: 1rem;
}

.child-status-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.child-status-badge.active {
  background: #dcfce7;
  color: #166534;
}

.child-actions {
  display: flex;
  gap: 0.75rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.action-btn.primary {
  background: #8b5cf6;
  color: white;
}

.action-btn.primary:hover {
  background: #7c3aed;
  transform: translateY(-2px);
}

.action-btn.secondary {
  background: white;
  color: #6b7280;
  border: 1px solid #d1d5db;
}

.action-btn.secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

/* Child Stats */
.child-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.stat-icon {
  font-size: 1.8rem;
  opacity: 0.8;
}

.stat-content h4 {
  margin: 0 0 0.25rem 0;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 600;
}

.stat-value {
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.stat-desc {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Progress Section */
.progress-section {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.progress-section h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.progress-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.progress-subject {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.subject-icon {
  font-size: 1.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.subject-info h4 {
  margin: 0 0 0.25rem 0;
  color: #1f2937;
  font-size: 1rem;
}

.subject-info p {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.progress-level {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 120px;
}

.level-bar {
  width: 80px;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: #10b981;
  border-radius: 3px;
  transition: width 0.3s;
}

.level-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  min-width: 40px;
}

/* Recent Activities */
.recent-child-activities {
  padding: 1.5rem;
}

.recent-child-activities h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.activity-timeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.timeline-icon {
  font-size: 1.2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-content p {
  margin: 0 0 0.5rem 0;
  color: #374151;
  line-height: 1.4;
}

.timeline-time {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ortu-page {
    padding: 1rem;
  }
  
  .child-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .child-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .action-btn {
    flex: 1;
    justify-content: center;
  }
  
  .child-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .progress-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .progress-level {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .child-stats-grid {
    grid-template-columns: 1fr;
  }
  
  .child-profile {
    flex-direction: column;
    text-align: center;
  }
  
  .child-basic-info {
    text-align: center;
  }
}
</style>
[file content end]