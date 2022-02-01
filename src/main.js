import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import picturefill from 'picturefill'

import '@/assets/css/global.css'

createApp(App)
  .use(picturefill)
  .use(router)
  .mount('#webprofits-website')