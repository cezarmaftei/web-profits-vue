<template>
  <main class="page">
    <SectionServices />
    <SectionTestimonials />
    <SectionHowWeWork />
    <SectionPodcast />
    <SectionServicesLarge />
    <SectionCTA />
  </main>
</template>

<script>
// @ is an alias to /src
import SectionServices from '@/components/SectionServices.vue'
import SectionTestimonials from '@/components/SectionTestimonials.vue'
import SectionHowWeWork from '@/components/SectionHowWeWork.vue'
import SectionServicesLarge from '@/components/SectionServicesLarge.vue'
import SectionPodcast from '@/components/SectionPodcast.vue'
import SectionCTA from '@/components/SectionCTA.vue'

export default {
  name: 'Home',
  components: {
    SectionServices,
    SectionTestimonials,
    SectionHowWeWork,
    SectionServicesLarge,
    SectionPodcast,
    SectionCTA
  }
}
</script>
