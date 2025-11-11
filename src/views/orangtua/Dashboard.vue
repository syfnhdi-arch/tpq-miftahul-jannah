  <div class="ortu-dashboard">
    <!-- Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-content">
        <h2>Assalamu'alaikum 👋</h2>
        <p>Selamat datang di dashboard orang tua</p>
        <div class="children-info">
          <span class="children-count">Anak: {{ children.length }}</span>
          <span class="last-update">Update terakhir: {{ currentDate }}</span>
        </div>
      </div>
      <div class="welcome-actions">
        <button class="quick-btn" @click="$router.push('/orangtua/children')">
          <span class="btn-icon">👦</span>
          <span>Lihat Anak</span>
        </button>
        <button class="quick-btn" @click="$router.push('/orangtua/progress')">
          <span class="btn-icon">📈</span>
          <span>Progress</span>
        </button>
      </div>
    </div>

    <!-- Children Overview -->
    <div class="children-overview">
      <h3>Anak Saya</h3>
      <div class="children-grid">
        <div v-for="child in children" :key="child.id" class="child-card">
          <div class="child-avatar">
            <img :src="child.photo" :alt="child.name" class="child-photo">
          </div>
          <div class="child-info">
            <h4>{{ child.name }}</h4>
            <p>{{ child.class }}</p>
            <span class="child-status" :class="child.status">{{ child.statusText }}</span>
          </div>
          <div class="child-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: child.attendance + '%' }"></div>
            </div>
            <span>Kehadiran: {{ child.attendance }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-info">
          <h3>Rata-rata Nilai</h3>
          <p class="stat-number">{{ averageGrade }}</p>
          <span class="stat-desc">Semua anak</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <h3>Kehadiran</h3>
          <p class="stat-number">{{ averageAttendance }}%</p>
          <span class="stat-desc">Bulan ini</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-info">
          <h3>Hafalan</h3>
          <p class="stat-number">{{ totalMemorization }}</p>
          <span class="stat-desc">Ayat terkumpul</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💬</div>
        <div class="stat-info">
          <h3>Pesan</h3>
          <p class="stat-number">{{ unreadMessages }}</p>
          <span class="stat-desc">Belum dibaca</span>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="recent-activities">
      <div class="section-header">
        <h3>📝 Aktivitas Terbaru</h3>
        <router-link to="/orangtua/progress" class="view-all">Lihat Semua →</router-link>
      </div>
      <div class="activities-list">
        <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
          <div class="activity-icon" :class="activity.type">
            {{ activity.type === 'attendance' ? '✅' : 
               activity.type === 'grade' ? '📊' : 
               activity.type === 'memorization' ? '📖' : '💬' }}
          </div>
          <div class="activity-content">
            <p><strong>{{ activity.childName }}</strong> - {{ activity.message }}</p>
            <span class="activity-time">{{ activity.time }}</span>
          </div>
          <div class="activity-class">
            {{ activity.class }}
          </div>
        </div>
      </div>
    </div>

    <!-- Important Announcements -->
    <div class="announcements">
      <div class="section-header">
        <h3>📢 Pengumuman Penting</h3>
      </div>
      <div class="announcement-list">
        <div v-for="announcement in announcements" :key="announcement.id" class="announcement-item">
          <div class="announcement-icon">📌</div>
          <div class="announcement-content">
            <h4>{{ announcement.title }}</h4>
            <p>{{ announcement.message }}</p>
            <span class="announcement-date">{{ announcement.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const currentDate = ref('')

// Sample data dengan path dari public folder
const children = ref([
  {
    id: 1,
    name: 'Muhammad Daffa Rafif Wibowo',
    class: 'Kelas Al-Quran A',
    photo: '/pasfoto/Muhammad Daffa Rafif Wibowo.png',
    attendance: 95,
    status: 'active',
    statusText: 'Aktif'
  },
  {
    id: 2, 
    name: 'Asyifa Zafira Putri Ramadhani',
    class: 'Kelas Tajwid B',
    photo: '/pasfoto/Asyifa Zafira Putri Ramadhani.png',
    attendance: 88,
    status: 'active',
    statusText: 'Aktif'
  }
])

const recentActivities = ref([
  {
    id: 1,
    type: 'grade',
    childName: 'Muhammad Daffa Rafif Wibowo',
    message: 'Mendapat nilai 90 untuk hafalan Surah Al-Fatihah',
    time: '2 jam yang lalu',
    class: 'Kelas A'
  },
  {
    id: 2,
    type: 'attendance',
    childName: 'Asyifa Zafira Putri Ramadhani', 
    message: 'Hadir tepat waktu hari ini',
    time: '1 hari yang lalu',
    class: 'Kelas B'
  },
  {
    id: 3,
    type: 'memorization',
    childName: 'Muhammad Daffa Rafif Wibowo',
    message: 'Menyelesaikan hafalan 3 ayat baru',
    time: '2 hari yang lalu',
    class: 'Kelas A'
  }
])

const announcements = ref([
  {
    id: 1,
    title: 'Libur Semester',
    message: 'TPA akan libur semester mulai 15 Desember 2025',
    date: '5 Des 2025'
  },
  {
    id: 2,
    title: 'Pembagian Raport',
    message: 'Pembagian raport semester ganjil akan dilaksanakan pada 20 Desember 2025',
    date: '3 Des 2025'
  }
])

// Computed properties
const averageGrade = computed(() => {
  return '85'
})

const averageAttendance = computed(() => {
  const total = children.value.reduce((sum, child) => sum + child.attendance, 0)
  return Math.round(total / children.value.length)
})

const totalMemorization = computed(() => {
  return '45'
})

const unreadMessages = computed(() => {
  return '3'
})

onMounted(() => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
/* Welcome Section */
.welcome-section {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.welcome-content p {
  opacity: 0.9;
  margin-bottom: 1rem;
}

.children-info {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
}

.children-count, .last-update {
  background: rgba(255,255,255,0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.welcome-actions {
  display: flex;
  gap: 0.75rem;
}

.quick-btn {
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

.quick-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

/* Children Overview */
.children-overview {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.children-overview h3 {
  margin-bottom: 1rem;
  color: #1f2937;
  font-size: 1.2rem;
}

.children-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.child-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.child-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #8b5cf6;
  flex-shrink: 0;
}

.child-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.child-info {
  flex: 1;
}

.child-info h4 {
  margin: 0 0 0.25rem 0;
  color: #1f2937;
  font-size: 1rem;
}

.child-info p {
  margin: 0 0 0.25rem 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.child-status {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.child-status.active {
  background: #dcfce7;
  color: #166534;
}

.child-progress {
  text-align: right;
  min-width: 100px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-bottom: 0.25rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #10b981;
  border-radius: 3px;
  transition: width 0.3s;
}

.child-progress span {
  font-size: 0.8rem;
  color: #6b7280;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 kolom di desktop */
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 2rem;
  opacity: 0.8;
}

.stat-info h3 {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.stat-desc {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* Recent Activities & Announcements */
.recent-activities, .announcements {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-header h3 {
  color: #1f2937;
  font-size: 1.2rem;
  margin: 0;
}

.view-all {
  color: #8b5cf6;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.view-all:hover {
  text-decoration: underline;
}

.activities-list, .announcement-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item, .announcement-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: background 0.3s;
}

.activity-item:hover, .announcement-item:hover {
  background: #f1f5f9;
}

.activity-icon {
  font-size: 1.2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.announcement-icon {
  font-size: 1.2rem;
  background: #fef3c7;
  padding: 0.5rem;
  border-radius: 8px;
  flex-shrink: 0;
}

.activity-content, .announcement-content {
  flex: 1;
}

.activity-content p, .announcement-content p {
  margin: 0 0 0.5rem 0;
  color: #374151;
  line-height: 1.4;
}

.activity-time, .announcement-date {
  font-size: 0.8rem;
  color: #9ca3af;
}

.activity-class {
  font-size: 0.8rem;
  color: #8b5cf6;
  font-weight: 500;
  background: #ede9fe;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
}

.announcement-content h4 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
  font-size: 1rem;
}

/* Responsive Design */
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
  
  .children-grid {
    grid-template-columns: 1fr;
  }
  
  .child-card {
    flex-direction: column;
    text-align: center;
  }
  
  .child-avatar {
    width: 80px;
    height: 80px;
  }
  
  /* Quick Stats jadi 2 kolom di mobile */
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 kolom di mobile */
    gap: 0.75rem;
  }
  
  .stat-card {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .stat-icon {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  .stat-info h3 {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }
  
  .stat-number {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }
  
  .stat-desc {
    font-size: 0.75rem;
  }
  
  .activity-item, .announcement-item {
    flex-direction: column;
    text-align: center;
  }
  
  .activity-class {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* Tetap 2 kolom di ≤480px */
    gap: 0.5rem;
  }
  
  .stat-card {
    padding: 0.875rem;
    gap: 0.5rem;
  }
  
  .stat-icon {
    font-size: 1.5rem;
  }
  
  .stat-number {
    font-size: 1.2rem;
  }
  
  .stat-info h3 {
    font-size: 0.75rem;
  }
  
  .stat-desc {
    font-size: 0.7rem;
  }
  
  .children-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 360px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr); /* Tetap 2 kolom di very small */
    gap: 0.4rem;
  }
  
  .stat-card {
    padding: 0.75rem;
    gap: 0.4rem;
  }
  
  .stat-icon {
    font-size: 1.4rem;
  }
  
  .stat-number {
    font-size: 1.1rem;
  }
  
  .stat-info h3 {
    font-size: 0.7rem;
  }
  
  .stat-desc {
    font-size: 0.65rem;
  }
}
</style>
