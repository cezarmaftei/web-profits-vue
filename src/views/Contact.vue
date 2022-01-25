<template>
  <main class="page">
    <SectionContactForm />
    <SectionTestimonials />
    <SectionPodcast />
    <SectionServicesLarge />
  </main>
</template>

<script>
import SectionContactForm from '@/components/SectionContactForm.vue'
import SectionTestimonials from '@/components/SectionTestimonials.vue'
import SectionServicesLarge from '@/components/SectionServicesLarge.vue'
import SectionPodcast from '@/components/SectionPodcast.vue'
import { inject } from 'vue'

export default {
  name: 'Contact',
  components: {
    SectionContactForm,
    SectionTestimonials,
    SectionServicesLarge,
    SectionPodcast
  },
  setup () {
    const bannerContent = inject('bannerContent')
    bannerContent.value = '<h1>Contact Us</h1>'
    return { bannerContent }
  }
}
</script>