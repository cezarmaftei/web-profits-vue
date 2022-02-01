import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createGtm } from '@gtm-support/vue-gtm'

import '@/assets/css/global.css'

createApp(App)
  .use(router)
  /*
  .use(
    createGtm({
      id: 'GTM-P2K3QJ',
      defer: 'defer'
    })
  )
  */
  .mount('#webprofits-website')