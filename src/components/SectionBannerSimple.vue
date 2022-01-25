<template>
  <section
    class="banner-contact"
    :style="{
      'padding-top': `${headerHeight}px`,
    }"
  >
    <div class="container">
      <div
        v-html="bannerContent"
        class="
          banner-content
          d-flex
          flex-column
          justify-content-center
          text-secondary
          pb-3
        "
      >
      </div>
    </div>
  </section>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'SectionBannerSimple',
  setup () {
    const headerHeight = inject('headerHeight')
    const bannerContent = inject('bannerContent')
    return { headerHeight, bannerContent }
  }
}
</script>

<style>
</style>