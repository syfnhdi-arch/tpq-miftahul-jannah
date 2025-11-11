<template>
  <div class="ortu-page">
    <div class="page-header">
      <h1>📈 Progress Anak</h1>
      <p>Monitoring perkembangan belajar anak-anak Anda</p>
    </div>

    <!-- Child Selector -->
    <div class="child-selector">
      <label for="childSelect">Pilih Anak:</label>
      <select id="childSelect" v-model="selectedChildId" @change="loadChildProgress">
        <option v-for="child in children" :key="child.id" :value="child.id">
          {{ child.name }} - {{ child.class }}
        </option>
      </select>
    </div>

    <!-- Progress Overview -->
    <div v-if="selectedChild" class="progress-overview">
      <!-- Child Info -->
      <div class="child-info-card">
        <div class="child-avatar">
          <img :src="selectedChild.photo" :alt="selectedChild.name" class="child-photo">
        </div>
        <div class="child-details">
          <h2>{{ selectedChild.name }}</h2>
          <p>{{ selectedChild.class }}</p>
          <div class="child-stats">
            <div class="stat">
              <span class="stat-value">{{ selectedChild.attendance }}%</span>
              <span class="stat-label">Kehadiran</span>
            </div>
            <div class="stat">
              <span class="stat-value">{{ selectedChild.averageGrade }}</span>
              <span class="stat-label">Nilai Rata-rata</span>
            </div>
            <div class="stat">
              <span class="stat-value">{{ selectedChild.memorization }}</span>
              <span class="stat-label">Ayat Hafalan</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Charts -->
      <div class="progress-charts">
        <!-- Subject Progress -->
        <div class="chart-card">
          <h3>📚 Progress Mata Pelajaran</h3>
          <div class="subject-progress">
            <div v-for="subject in selectedChild.progress" :key="subject.id" class="subject-item">
              <div class="subject-header">
                <span class="subject-icon">{{ subject.icon }}</span>
                <div class="subject-info">
                  <h4>{{ subject.subject }}</h4>
                  <p>{{ subject.description }}</p>
                </div>
                <span class="progress-percent">{{ subject.level }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: subject.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Attendance Chart -->
        <div class="chart-card">
          <h3>✅ Kehadiran Bulan Ini</h3>
          <div class="attendance-chart">
            <div v-for="week in attendanceData" :key="week.week" class="week-attendance">
              <div class="week-label">Minggu {{ week.week }}</div>
              <div class="attendance-bars">
                <div v-for="day in week.days" :key="day.day" class="day-attendance">
                  <div class="day-label">{{ day.day }}</div>
                  <div class="attendance-bar" :class="{ present: day.present, absent: !day.present }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grade History -->
      <div class="grade-history">
        <h3>📊 Riwayat Nilai</h3>
        <div class="grades-table">
          <div class="table-header">
            <div class="header-cell">Mata Pelajaran</div>
            <div class="header-cell">Nilai</div>
            <div class="header-cell">Keterangan</div>
            <div class="header-cell">Tanggal</div>
          </div>
          <div v-for="grade in selectedChild.grades" :key="grade.id" class="table-row">
            <div class="cell">{{ grade.subject }}</div>
            <div class="cell grade-value" :class="getGradeClass(grade.score)">
              {{ grade.score }}
            </div>
            <div class="cell">{{ grade.description }}</div>
            <div class="cell">{{ grade.date }}</div>
          </div>
        </div>
      </div>

      <!-- Memorization Progress -->
      <div class="memorization-progress">
        <h3>📖 Progress Hafalan Quran</h3>
        <div class="memorization-stats">
          <div class="memorization-item">
            <div class="surah-info">
              <h4>Juz 30 (Amma)</h4>
              <p>Progress hafalan surah-surah pendek</p>
            </div>
            <div class="memorization-level">
              <div class="level-bar">
                <div class="level-fill" :style="{ width: selectedChild.memorizationProgress + '%' }"></div>
              </div>
              <span class="level-text">{{ selectedChild.memorizationProgress }}%</span>
            </div>
          </div>
          <div class="surah-list">
            <div v-for="surah in selectedChild.surahList" :key="surah.id" class="surah-item">
              <span class="surah-name">{{ surah.name }}</span>
              <span class="surah-status" :class="surah.status">
                {{ surah.status === 'completed' ? '✓' : '○' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Teacher Comments -->
      <div class="teacher-comments">
        <h3>💬 Komentar Guru</h3>
        <div class="comments-list">
          <div v-for="comment in selectedChild.teacherComments" :key="comment.id" class="comment-item">
            <div class="comment-header">
              <span class="teacher-name">{{ comment.teacher }}</span>
              <span class="comment-date">{{ comment.date }}</span>
            </div>
            <p class="comment-text">{{ comment.message }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <div class="empty-icon">👦</div>
      <h3>Pilih anak untuk melihat progress</h3>
      <p>Silakan pilih salah satu anak dari dropdown di atas</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const selectedChildId = ref<number | null>(null)

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
    memorizationProgress: 75,
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
    grades: [
      { id: 1, subject: 'Hafalan Quran', score: 90, description: 'Tes Surah Al-Fatihah', date: '10 Nov 2025' },
      { id: 2, subject: 'Tajwid', score: 85, description: 'Ujian Makhraj Huruf', date: '8 Nov 2025' },
      { id: 3, subject: 'Akhlak', score: 95, description: 'Observasi Perilaku', date: '5 Nov 2025' },
      { id: 4, subject: 'Fiqih', score: 80, description: 'Praktik Wudhu', date: '3 Nov 2025' },
      { id: 5, subject: 'Hafalan Quran', score: 88, description: 'Tes Juz 30', date: '1 Nov 2025' }
    ],
    surahList: [
      { id: 1, name: 'Al-Fatihah', status: 'completed' },
      { id: 2, name: 'An-Nas', status: 'completed' },
      { id: 3, name: 'Al-Falaq', status: 'completed' },
      { id: 4, name: 'Al-Ikhlas', status: 'completed' },
      { id: 5, name: 'Al-Lahab', status: 'in-progress' },
      { id: 6, name: 'An-Nasr', status: 'pending' },
      { id: 7, name: 'Al-Kafirun', status: 'pending' },
      { id: 8, name: 'Al-Kautsar', status: 'pending' }
    ],
    teacherComments: [
      {
        id: 1,
        teacher: 'Ustadz Ahmad',
        date: '10 Nov 2025',
        message: 'Daffa menunjukkan perkembangan yang baik dalam hafalan. Terus semangat menghafal!'
      },
      {
        id: 2,
        teacher: 'Ustadzah Aisyah',
        date: '8 Nov 2025',
        message: 'Sangat aktif dalam diskusi kelompok dan membantu teman yang kesulitan.'
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
    memorizationProgress: 65,
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
    grades: [
      { id: 1, subject: 'Hafalan Quran', score: 85, description: 'Tes Surah An-Nas', date: '9 Nov 2025' },
      { id: 2, subject: 'Tajwid', score: 88, description: 'Ujian Hukum Mim Sukun', date: '7 Nov 2025' },
      { id: 3, subject: 'Akhlak', score: 90, description: 'Observasi Perilaku', date: '4 Nov 2025' },
      { id: 4, subject: 'Fiqih', score: 78, description: 'Praktik Shalat', date: '2 Nov 2025' }
    ],
    surahList: [
      { id: 1, name: 'Al-Fatihah', status: 'completed' },
      { id: 2, name: 'An-Nas', status: 'completed' },
      { id: 3, name: 'Al-Falaq', status: 'completed' },
      { id: 4, name: 'Al-Ikhlas', status: 'in-progress' },
      { id: 5, name: 'Al-Lahab', status: 'pending' },
      { id: 6, name: 'An-Nasr', status: 'pending' },
      { id: 7, name: 'Al-Kafirun', status: 'pending' }
    ],
    teacherComments: [
      {
        id: 1,
        teacher: 'Ustadzah Aisyah',
        date: '9 Nov 2025',
        message: 'Asyifa sangat rajin dan tekun dalam belajar. Pertahankan!'
      },
      {
        id: 2,
        teacher: 'Ustadz Ahmad',
        date: '6 Nov 2025',
        message: 'Perkembangan tajwidnya sangat baik. Terus berlatih!'
      }
    ]
  }
])

// Attendance data sample
const attendanceData = ref([
  {
    week: 1,
    days: [
      { day: 'Sen', present: true },
      { day: 'Sel', present: true },
      { day: 'Rab', present: true },
      { day: 'Kam', present: false },
      { day: 'Jum', present: true }
    ]
  },
  {
    week: 2,
    days: [
      { day: 'Sen', present: true },
      { day: 'Sel', present: true },
      { day: 'Rab', present: true },
      { day: 'Kam', present: true },
      { day: 'Jum', present: true }
    ]
  },
  {
    week: 3,
    days: [
      { day: 'Sen', present: true },
      { day: 'Sel', present: true },
      { day: 'Rab', present: false },
      { day: 'Kam', present: true },
      { day: 'Jum', present: true }
    ]
  },
  {
    week: 4,
    days: [
      { day: 'Sen', present: true },
      { day: 'Sel', present: true },
      { day: 'Rab', present: true },
      { day: 'Kam', present: true },
      { day: 'Jum', present: true }
    ]
  }
])

const selectedChild = computed(() => {
  return children.value.find(child => child.id === selectedChildId.value) || null
})

const loadChildProgress = () => {
  // In real app, this would fetch data from API
  console.log('Loading progress for child:', selectedChildId.value)
}

const getGradeClass = (score: number) => {
  if (score >= 90) return 'excellent'
  if (score >= 80) return 'good'
  if (score >= 70) return 'average'
  return 'poor'
}

onMounted(() => {
  // Auto-select first child
  if (children.value.length > 0) {
    selectedChildId.value = children.value[0].id
  }
})
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

/* Child Selector */
.child-selector {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.child-selector label {
  font-weight: 600;
  color: #374151;
}

.child-selector select {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 1rem;
  min-width: 300px;
}

/* Progress Overview */
.progress-overview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Child Info Card */
.child-info-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.child-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #8b5cf6;
  flex-shrink: 0;
}

.child-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.child-details h2 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.5rem;
}

.child-details p {
  margin: 0 0 1rem 0;
  color: #6b7280;
  font-size: 1rem;
}

.child-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

/* Progress Charts */
.progress-charts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

.chart-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.chart-card h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

/* Subject Progress */
.subject-progress {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subject-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.subject-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.subject-icon {
  font-size: 1.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.subject-info {
  flex: 1;
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

.progress-percent {
  font-weight: 600;
  color: #1f2937;
  min-width: 50px;
  text-align: right;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #10b981;
  border-radius: 4px;
  transition: width 0.3s;
}

/* Attendance Chart */
.attendance-chart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.week-attendance {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.week-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  min-width: 80px;
}

.attendance-bars {
  display: flex;
  gap: 0.5rem;
  flex: 1;
}

.day-attendance {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
}

.day-label {
  font-size: 0.7rem;
  color: #6b7280;
}

.attendance-bar {
  width: 100%;
  height: 20px;
  border-radius: 4px;
  transition: background 0.3s;
}

.attendance-bar.present {
  background: #10b981;
}

.attendance-bar.absent {
  background: #ef4444;
}

/* Grade History */
.grade-history {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.grade-history h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.grades-table {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
}

.header-cell {
  padding: 1rem;
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  border-bottom: 1px solid #e5e7eb;
}

.table-row:last-child {
  border-bottom: none;
}

.cell {
  padding: 1rem;
  color: #374151;
  font-size: 0.9rem;
}

.grade-value {
  font-weight: 600;
  text-align: center;
}

.grade-value.excellent {
  color: #10b981;
}

.grade-value.good {
  color: #3b82f6;
}

.grade-value.average {
  color: #f59e0b;
}

.grade-value.poor {
  color: #ef4444;
}

/* Memorization Progress */
.memorization-progress {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.memorization-progress h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.memorization-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.memorization-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.surah-info h4 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1.1rem;
}

.surah-info p {
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.memorization-level {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 150px;
}

.level-bar {
  width: 100px;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: #8b5cf6;
  border-radius: 4px;
  transition: width 0.3s;
}

.level-text {
  font-weight: 600;
  color: #1f2937;
  min-width: 40px;
}

.surah-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
}

.surah-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
}

.surah-status {
  font-weight: 600;
}

.surah-status.completed {
  color: #10b981;
}

.surah-status.in-progress {
  color: #f59e0b;
}

.surah-status.pending {
  color: #6b7280;
}

/* Teacher Comments */
.teacher-comments {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
}

.teacher-comments h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment-item {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.teacher-name {
  font-weight: 600;
  color: #374151;
}

.comment-date {
  font-size: 0.8rem;
  color: #6b7280;
}

.comment-text {
  margin: 0;
  color: #374151;
  line-height: 1.5;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #6b7280;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  margin-bottom: 0.5rem;
  color: #374151;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ortu-page {
    padding: 1rem;
  }
  
  .child-selector {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .child-selector select {
    min-width: 100%;
  }
  
  .child-info-card {
    flex-direction: column;
    text-align: center;
  }
  
  .child-stats {
    justify-content: center;
  }
  
  .progress-charts {
    grid-template-columns: 1fr;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .header-cell,
  .cell {
    padding: 0.5rem;
  }
  
  .memorization-item {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .memorization-level {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .surah-list {
    grid-template-columns: 1fr;
  }
  
  .attendance-bars {
    flex-wrap: wrap;
  }
  
  .day-attendance {
    flex: 0 0 calc(33.333% - 0.5rem);
  }
}
</style>
