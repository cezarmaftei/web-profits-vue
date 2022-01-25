<template>
  <main class="page">
    <SectionServices />
    <SectionTestimonials />
    <SectionCTA />
    <SectionPodcast />
    <SectionServicesLarge />
  </main>
</template>

<script>
import SectionServices from '@/components/SectionServices.vue'
import SectionTestimonials from '@/components/SectionTestimonials.vue'
import SectionServicesLarge from '@/components/SectionServicesLarge.vue'
import SectionPodcast from '@/components/SectionPodcast.vue'
import SectionCTA from '@/components/SectionCTA.vue'

export default {
  name: 'CaseStudies',
  components: {
    SectionServices,
    SectionTestimonials,
    SectionServicesLarge,
    SectionPodcast,
    SectionCTA
  }
}
</script>