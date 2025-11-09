import { createApp } from 'vue'
import { createPinia } from 'pinia'  // ← IMPORT PINIA
import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)
const pinia = createPinia()  // ← CREATE PINIA

app.use(pinia)  // ← USE PINIA DULU
app.use(router)

app.mount('#app')