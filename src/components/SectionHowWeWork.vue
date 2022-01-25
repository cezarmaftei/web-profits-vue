<template>
  <section class="section-how-we-work" id="section-how-we-work">
    <div class="to-element"></div>
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div
          v-for="client in largeClients"
          :key="client"
          class="col-12 col-md-6"
        >
          <CardWork :client="client" />
        </div>

        <div class="col-12 col-md-6">
          <div class="row g-0">
            <div v-for="client in smallClients" :key="client" class="col-12">
              <CardWork :client="client" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardWork from '@/components/CardWork.vue'
import { computed, inject } from 'vue'

export default {
  name: 'SectionHowWeWork',
  components: {
    CardWork
  },
  setup () {
    const clients = inject('clients')

    const largeClients = computed(() =>
      clients.filter((client, index) => index % 3 === 0)
    )

    const smallClients = computed(() =>
      clients.filter((client, index) => index % 3 !== 0)
    )

    return { largeClients, smallClients }
  }
}
</script>

<style scoped lang="scss">
.section-how-we-work {
  min-height: 100vh;
}
</style>