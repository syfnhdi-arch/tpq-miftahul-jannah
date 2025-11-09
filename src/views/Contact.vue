// views/Contact.vue
<template>
  <div class="contact-page">
    <header class="page-header">
      <h1>Kontak & Lokasi</h1>
      <p>Hubungi kami untuk informasi lebih lanjut</p>
    </header>

    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-item">
          <span class="icon">📍</span>
          <div>
            <h4>Alamat</h4>
            <p>Jl. Miftahul Jannah No. 123, Jakarta</p>
          </div>
        </div>
        
        <div class="contact-item">
          <span class="icon">📱</span>
          <div>
            <h4>WhatsApp</h4>
            <p>+62 812-3456-7890</p>
          </div>
        </div>
        
        <div class="contact-item">
          <span class="icon">🕒</span>
          <div>
            <h4>Jam Operasional</h4>
            <p>Senin - Sabtu: 08.00 - 17.30 WIB</p>
          </div>
        </div>
      </div>

      <div class="map-placeholder">
        <div class="map-dummy">
          <span>🗺️</span>
          <p>Peta Lokasi TPA Miftahul Jannah</p>
          <small>[Google Maps akan diintegrasikan]</small>
        </div>
      </div>
    </div>
  </div>
</template>