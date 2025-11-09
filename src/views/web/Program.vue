<template>
  <Weblayout>
    <div class="program-page">
      <!-- Header Section -->
      <section class="program-header">
        <div class="container">
          <div class="header-content">
            <h1>Sistem Pengelolaan TPA/TPQ Terpadu</h1>
            <p class="subtitle">TPA/TPQ Miftahul Jannah - Bandar Lampung</p>
          </div>
        </div>
      </section>

      <!-- Structure Section -->
      <section class="structure-section">
        <div class="container">
          <div class="section-header">
            <h2>Struktur dan Pengelolaan</h2>
          </div>
          <div class="structure-grid">
            <div class="structure-card">
              <div class="structure-icon">👥</div>
              <h3>3 Unsur Utama</h3>
              <ul>
                <li>Pembina</li>
                <li>Guru</li>
                <li>peserta</li>
              </ul>
            </div>
            <div class="structure-card">
              <div class="structure-icon">👨‍👩‍👧‍👦</div>
              <h3>Unsur Pendukung</h3>
              <ul>
                <li>Orang Tua/Wali</li>
              </ul>
            </div>
            <div class="structure-card">
              <div class="structure-icon">💬</div>
              <h3>Koordinasi</h3>
              <ul>
                <li>Komunikasi aktif antar semua pihak</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Level System Section -->
      <section class="level-system">
        <div class="container">
          <div class="section-header">
            <h2>Sistem Level Pembelajaran</h2>
            <p>4 level terstruktur dari dasar hingga tahfidz</p>
          </div>
          
          <div class="levels-container">
            <div class="level-detail" v-for="level in levels" :key="level.id">
              <div class="level-header">
                <span class="level-badge">{{ level.badge }}</span>
                <h3>{{ level.name }}</h3>
                <p class="level-description">{{ level.description }}</p>
              </div>
              
              <div class="level-content">
                <div class="curriculum">
                  <h4>Kurikulum & Materi:</h4>
                  <ul>
                    <li v-for="material in level.materials" :key="material">{{ material }}</li>
                  </ul>
                </div>
                
                <div class="schedule-info">
                  <div class="info-item">
                    <span class="info-icon">👥</span>
                    <span>Rasio: {{ level.ratio }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-icon">🕒</span>
                    <span>Jadwal: {{ level.schedule }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-icon">📊</span>
                    <span>Setoran: {{ level.recitation }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Placement System -->
      <section class="placement-system">
        <div class="container">
          <div class="section-header">
            <h2>Sistem Penempatan peserta</h2>
          </div>
          
          <div class="placement-steps">
            <div class="step">
              <div class="step-number">1</div>
              <h4>Tes Awal Baca Quran</h4>
              <p>Penilaian kemampuan membaca untuk penempatan level</p>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <h4>Kelompok Kemampuan</h4>
              <p>Pengelompokan berdasarkan kemampuan, bukan usia</p>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <h4>Naik Level Fleksibel</h4>
              <p>Bisa naik level kapan saja setelah lulus tes</p>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <h4>Nama Kelompok</h4>
              <p>Al-Fatihah, An-Naba, Yasin, Al-Kahfi</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Schedule Section -->
      <section class="schedule-section">
        <div class="container">
          <div class="section-header">
            <h2>Jadwal Pembelajaran</h2>
          </div>
          
          <div class="schedule-grid">
            <div class="schedule-card morning">
              <div class="schedule-icon">🌅</div>
              <h3>Sesi Pagi</h3>
              <p class="time">08.00 - 10.00 WIB</p>
              <p class="classes">Kelas Dasar & Menengah</p>
              <ul>
                <li>Level 1 - Dasar</li>
                <li>Level 2 - Lanjutan</li>
              </ul>
            </div>
            
            <div class="schedule-card afternoon">
              <div class="schedule-icon">🌇</div>
              <h3>Sesi Sore</h3>
              <p class="time">15.30 - 17.30 WIB</p>
              <p class="classes">Kelas Lanjut & Tahfidz</p>
              <ul>
                <li>Level 3 - Tahsin</li>
                <li>Level 4 - Tahfidz</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Report System -->
      <section class="report-system">
        <div class="container">
          <div class="section-header">
            <h2>Sistem Pelaporan</h2>
          </div>
          
          <div class="report-types">
            <div class="report-type">
              <h4>Laporan Bulanan Orang Tua</h4>
              <div class="report-example">
                <div class="example-content">
                  <p><strong>LAPORAN BULANAN [NAMA ANAK]</strong></p>
                  <p>Kehadiran: [20/24 pertemuan]</p>
                  <p>Progress: [Iqro jilid 3 → jilid 4]</p>
                  <p>Hafalan: [Al-Falaq & An-Nas]</p>
                  <p>Catatan: [Semangat belajar meningkat!]</p>
                </div>
              </div>
            </div>
            
            <div class="report-list">
              <h4>Jenis Laporan yang Tersedia:</h4>
              <ul>
                <li>Laporan Administrasi peserta</li>
                <li>Laporan Akademik peserta</li>
                <li>Laporan untuk Orang Tua</li>
                <li>Laporan Guru & Pengajar</li>
                <li>Laporan Kegiatan</li>
                <li>Laporan Evaluasi Program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Teacher System -->
      <section class="teacher-system">
        <div class="container">
          <div class="section-header">
            <h2>Sistem Pengajaran</h2>
          </div>
          
          <div class="teacher-requirements">
            <div class="requirement-card">
              <h4>Kebutuhan Guru Ideal</h4>
              <div class="ratio-list">
                <div class="ratio-item" v-for="ratio in teacherRatios" :key="ratio.level">
                  <span class="level">{{ ratio.level }}</span>
                  <span class="ratio">{{ ratio.ratio }}</span>
                </div>
              </div>
            </div>
            
            <div class="teaching-methods">
              <h4>Metode Pengajaran</h4>
              <ul>
                <li>Metode mengajar variatif</li>
                <li>Pendidikan karakter islami</li>
                <li>Manajemen kelas yang baik</li>
                <li>Lingkungan belajar kondusif</li>
                <li>Sinergi dengan orang tua</li>
                <li>Evaluasi berkala</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import Weblayout from '../Weblayout.vue'

const levels = [
  {
    id: 1,
    badge: "LEVEL 1",
    name: "DASAR",
    description: "Pemula Total - Iqro 1-2",
    materials: [
      "Pengenalan huruf Hijaiyah",
      "Iqro jilid 1-2", 
      "Hafalan doa harian",
      "Praktek wudhu dan sholat"
    ],
    ratio: "1:5-8",
    schedule: "Sesi Pagi (08.00-10.00)",
    recitation: "1-2x/minggu (hafalan dasar)"
  },
  {
    id: 2,
    badge: "LEVEL 2",
    name: "LANJUTAN", 
    description: "Iqro 3-5 - Quran Pemula",
    materials: [
      "Iqro jilid 3-5",
      "Hafalan juz Amma (An-Nas - Al-Qoriah)",
      "Tajwid dasar", 
      "Praktek sholat berjamaah"
    ],
    ratio: "1:8-12",
    schedule: "Sesi Pagi (08.00-10.00)",
    recitation: "2-3x/minggu (surat pendek)"
  },
  {
    id: 3,
    badge: "LEVEL 3",
    name: "TAHSIN",
    description: "Quran Lancar - Perbaikan Tajwid", 
    materials: [
      "Tahsin sistematis",
      "Tajwid lengkap",
      "Hafalan surat pilihan", 
      "Fiqh ibadah dasar"
    ],
    ratio: "1:10-15", 
    schedule: "Sesi Sore (15.30-17.30)",
    recitation: "Setiap pertemuan (tahsin + hafalan)"
  },
  {
    id: 4,
    badge: "LEVEL 4", 
    name: "TAHFIDZ",
    description: "Persiapan Hafalan Quran",
    materials: [
      "Metode menghafal Quran",
      "Setoran hafalan rutin", 
      "Murojaah harian",
      "Leadership dasar"
    ],
    ratio: "1:6-10",
    schedule: "Sesi Sore (15.30-17.30)", 
    recitation: "SETIAP HARI (hafalan baru + murojaah)"
  }
]

const teacherRatios = [
  { level: "Level 1 - Dasar", ratio: "1 guru : 5-8 anak" },
  { level: "Level 2 - Lanjutan", ratio: "1 guru : 8-12 anak" },
  { level: "Level 3 - Tahsin", ratio: "1 guru : 10-15 anak" },
  { level: "Level 4 - Tahfidz", ratio: "1 guru : 6-10 anak" }
]
</script>

<style scoped>
.program-page {
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Section */
.program-header {
  background: #1e40af;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.program-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: #64748b;
}

/* Structure Section */
.structure-section {
  padding: 4rem 0;
  background: white;
}

.structure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.structure-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.structure-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.structure-card h3 {
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.structure-card ul {
  list-style: none;
  padding: 0;
}

.structure-card li {
  padding: 0.5rem 0;
  color: #475569;
}

/* Level System */
.level-system {
  padding: 4rem 0;
  background: #f1f5f9;
}

.levels-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.level-detail {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.level-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.level-badge {
  background: #1e40af;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.level-detail h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.level-description {
  color: #64748b;
}

.level-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.curriculum h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.curriculum ul {
  list-style: none;
  padding: 0;
}

.curriculum li {
  padding: 0.5rem 0;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
}

.curriculum li:last-child {
  border-bottom: none;
}

.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
  color: #475569;
}

.info-icon {
  font-size: 1.1rem;
}

/* Placement System */
.placement-system {
  padding: 4rem 0;
  background: white;
}

.placement-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #1e40af;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 auto 1rem;
}

.step h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.step p {
  color: #64748b;
  line-height: 1.5;
}

/* Schedule Section */
.schedule-section {
  padding: 4rem 0;
  background: #f1f5f9;
}

.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.schedule-card {
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
  background: white;
}

.schedule-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.schedule-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.time {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e40af;
}

.classes {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #64748b;
}

.schedule-card ul {
  list-style: none;
  padding: 0;
}

.schedule-card li {
  padding: 0.5rem 0;
  color: #475569;
}

/* Report System */
.report-system {
  padding: 4rem 0;
  background: white;
}

.report-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.report-type h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.report-example {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1.5rem;
}

.example-content {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.example-content p {
  margin: 0.5rem 0;
  color: #475569;
  font-size: 0.9rem;
}

.report-list h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.report-list ul {
  list-style: none;
  padding: 0;
}

.report-list li {
  padding: 0.5rem 0;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
}

.report-list li:last-child {
  border-bottom: none;
}

/* Teacher System */
.teacher-system {
  padding: 4rem 0;
  background: #f1f5f9;
}

.teacher-requirements {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.requirement-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.requirement-card h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.ratio-list {
  margin-bottom: 1rem;
}

.ratio-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.ratio-item:last-child {
  border-bottom: none;
}

.level {
  color: #475569;
}

.ratio {
  color: #1e40af;
  font-weight: 500;
}

.total-teachers {
  background: #dbeafe;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  color: #1e40af;
}

.teaching-methods {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.teaching-methods h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.teaching-methods ul {
  list-style: none;
  padding: 0;
}

.teaching-methods li {
  padding: 0.5rem 0;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
}

.teaching-methods li:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .program-header h1 {
    font-size: 1.8rem;
  }
  
  .section-header h2 {
    font-size: 1.6rem;
  }
  
  .level-content {
    grid-template-columns: 1fr;
  }
  
  .report-types {
    grid-template-columns: 1fr;
  }
  
  .teacher-requirements {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .program-header {
    padding: 2rem 0;
  }
  
  .structure-grid,
  .placement-steps,
  .schedule-grid {
    grid-template-columns: 1fr;
  }
}
</style>