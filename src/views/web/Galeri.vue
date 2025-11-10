<template>
  <Weblayout>
    <div class="gallery-page">
      <!-- Header Section -->
      <section class="gallery-header">
        <div class="container">
          <div class="header-content">
            <h1>📸 Galeri Kegiatan</h1>
            <p>Dokumentasi kegiatan TPA/TPQ Miftahul Jannah Bandar Lampung</p>
          </div>
        </div>
      </section>

      <!-- Gallery Content -->
      <section class="gallery-content">
        <div class="container">
          <!-- Gallery Grid -->
          <div class="gallery-grid">
            <div class="gallery-item" v-for="(image, index) in galleryImages" :key="index">
              <div class="image-container">
                <img 
                  :src="image.src" 
                  :alt="image.alt"
                  @click="openLightbox(index)"
                  class="gallery-image"
                />
                <div class="image-overlay">
                  <span class="view-icon">👁️</span>
                </div>
              </div>
              <div class="image-info">
                <p>{{ image.title }}</p>
                <span>{{ image.description }}</span>
              </div>
            </div>
          </div>

          <!-- Lightbox Modal -->
          <div class="lightbox" v-if="showLightbox" @click="closeLightbox">
            <div class="lightbox-content" @click.stop>
              <button class="lightbox-close" @click="closeLightbox">✕</button>
              <button class="lightbox-nav prev" @click="prevImage" v-if="galleryImages.length > 1">‹</button>
              <button class="lightbox-nav next" @click="nextImage" v-if="galleryImages.length > 1">›</button>
              
              <img 
                :src="currentImage.src" 
                :alt="currentImage.alt"
                class="lightbox-image"
              />
              
              <div class="lightbox-info">
                <h3>{{ currentImage.title }}</h3>
                <p>{{ currentImage.description }}</p>
                <div class="image-counter">
                  {{ currentIndex + 1 }} / {{ galleryImages.length }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Weblayout>
</template>

<script setup lang="ts">
import Weblayout from '../Weblayout.vue'
import { ref, computed } from 'vue'

// Gallery images data
const galleryImages = [
  {
    src: new URL('@/assets/galeri/1.jpg', import.meta.url).href,
    alt: 'Momen Kebersamaan ',
    title: 'Momen Kebersamaan ',
    description: 'Momen kebersamaan para santri cilik dengan asatidz (guru) yang selalu sabar membimbing mereka dalam belajar Al-Quran.'
  },
  {
    src: new URL('@/assets/galeri/2.jpg', import.meta.url).href,
    alt: 'Mengasah Kreativitas',
    title: 'Mengasah Kreativitas',
    description: 'Selain mengaji, para santri juga mengasah kreativitas dan motorik halus melalui kegiatan mewarnai yang seru.'
  },
  {
    src: new URL('@/assets/galeri/3.jpg', import.meta.url).href,
    alt: 'Keluarga Besar TPA Miftahul Jannah',
    title: 'Keluarga Besar TPA Miftahul Jannah',
    description: 'Foto bersamaantri, asatidz (guru), dan sebagian pengurus dalam momen kebersamaan.'
  },
  {
    src: new URL('@/assets/galeri/4.jpg', import.meta.url).href,
    alt: 'Sesi Halaqah',
    title: 'Sesi Halaqah',
    description: 'Suasana Kegiatan Belajar Mengajar (KBM) dalam format halaqah, agar santri lebih fokus menyimak pelajaran.'
  },
  {
    src: new URL('@/assets/galeri/5.jpg', import.meta.url).href,
    alt: 'Praktek Sholat',
    title: 'Praktek Tata Cara Sholat',
    description: 'Para santri dibimbing untuk mempraktikkan setiap gerakan sholat, dari takbir hingga salam, dengan benar dan tuma\'ninah.'
  },
  {
    src: new URL('@/assets/galeri/6.jpg', import.meta.url).href,
    alt: 'Keceriaan Santriwati',
    title: 'Keceriaan Santriwati',
    description: 'Potret keceriaan dan kebersamaan para santriwati TPA Miftahul Jannah. Menjalin ukhuwah (persaudaraan) yang erat.'
  }
]

// Lightbox functionality
const showLightbox = ref(false)
const currentIndex = ref(0)

const currentImage = computed(() => galleryImages[currentIndex.value])

const openLightbox = (index: number) => {
  currentIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden' // Prevent background scroll
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = 'auto' // Restore scroll
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + galleryImages.length) % galleryImages.length
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!showLightbox.value) return
  
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

// Add event listener for keyboard
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.gallery-page {
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header Section */
.gallery-header {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.gallery-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.gallery-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Gallery Content */
.gallery-content {
  padding: 4rem 0;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.gallery-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.view-icon {
  font-size: 2rem;
  color: white;
}

.image-info {
  padding: 1.5rem;
}

.image-info p {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.image-info span {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;
}

.lightbox-close:hover {
  color: #3b82f6;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-nav.prev {
  left: -70px;
}

.lightbox-nav.next {
  right: -70px;
}

.lightbox-info {
  background: white;
  padding: 1.5rem;
  border-radius: 0 0 8px 8px;
  text-align: center;
  width: 100%;
}

.lightbox-info h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.lightbox-info p {
  color: #64748b;
  margin-bottom: 1rem;
}

.image-counter {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-header h1 {
    font-size: 2rem;
  }
  
  .gallery-header p {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .lightbox {
    padding: 1rem;
  }
  
  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .lightbox-nav.prev {
    left: -50px;
  }
  
  .lightbox-nav.next {
    right: -50px;
  }
  
  .lightbox-close {
    top: -40px;
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .gallery-header {
    padding: 2rem 0;
  }
  
  .gallery-content {
    padding: 2rem 0;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .lightbox-nav {
    position: static;
    transform: none;
    margin: 1rem 0.5rem;
  }
  
  .lightbox-content {
    max-width: 95vw;
  }
}
</style>