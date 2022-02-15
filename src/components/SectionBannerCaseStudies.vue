<template>
  <section
    :style="{
      'padding-top': `${headerHeight}px`,
    }"
    class="banner-case-study"
  >
    <LoadImage
      class="banner-background"
      :src="currentClient[0].backgroundImage"
      :alt="currentClient[0].name"
      :lazy="false"
    />
    <div
      class="container"
      :style="{ 'min-height': 'calc( 100vh - ' + headerHeight + 'px )' }"
    >
      <div
        :style="{
          'min-height': 'calc( 100vh - ' + headerHeight + 'px )',
        }"
        class="banner-content d-flex flex-column justify-content-center py-7"
      >
        <SvgIcons class="mb-5" :icon="currentClient[0].clientLogo" />

        <h1 v-html="currentClient[0].title"></h1>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import LoadImage from '@/components/LoadImage.vue'
import SvgIcons from '@/components/SvgIcons.vue'

export default {
  name: 'SectionBannerCaseStudies',
  components: {
    SvgIcons,
    LoadImage
  },
  setup () {
    // headerHeight is declared in App.vue AND
    // initiated in PageHeader.vue
    const headerHeight = inject('headerHeight')

    const bannerContentStyles = {
      minHeight: '100vh',
      marginTop: 0
    }

    const route = useRoute()
    const clients = inject('clients')
    const currentClient = computed(() =>
      clients.filter((client) => client.slug === route.params.client)
    )

    const clonedCard = document.querySelector('.cloned-card')

    onMounted(() => {
      const showBannerTimeout = setInterval(function () {
        const scrollPosition = document.documentElement.scrollTop
        const bannerContent = document.querySelector(
          '.banner-case-study .banner-content'
        )
        let isShown = false

        if (clonedCard && scrollPosition === 0) {
          clonedCard.remove()
          bannerContent.classList.add('banner-fade-in')
          isShown = true
        } else if (!clonedCard) {
          bannerContent.classList.add('banner-fade-in')
          isShown = true
        }

        if (isShown) clearInterval(showBannerTimeout)
      }, 250)
    })

    return { headerHeight, currentClient, bannerContentStyles }
  }
}
</script>

<style scoped lang="scss">
.banner-case-study {
  background-size: cover;
  background-position: center center;
  min-height: -webkit-fill-available;

  .banner-background {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    :deep * {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .banner-content {
    color: $white;
    opacity: 0;
    transition: opacity 1.5s ease-out;

    &.banner-fade-in {
      opacity: 1;
    }

    :deep .svg-icon {
      max-width: 50%;

      @include media-breakpoint-up(md) {
        max-width: 30%;
      }

      @include media-breakpoint-up(xl) {
        max-width: 24rem;
      }
    }
  }
}
</style>