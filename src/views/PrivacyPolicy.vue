<template>
  <main class="page">
    <SectionContentPrivacyPolicy />
  </main>
</template>

<script>

import { inject } from 'vue'
import SectionContentPrivacyPolicy from '@/components/SectionContentPrivacyPolicy.vue'

export default {
  name: 'PrivacyPolicy',
  components: {
    SectionContentPrivacyPolicy
  },
  setup () {
    const bannerContent = inject('bannerContent')
    bannerContent.value = '<h1>Privacy Policy</h1>'
    return { bannerContent }
  }
}
</script>