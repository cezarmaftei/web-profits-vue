import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Collapse } from 'bootstrap'

import '@/assets/css/global.css'

createApp(App).use({ Collapse }).use(router).mount('#webprofits-website')