<template>
  <section
    class="section-banner"
    :style="{ 'padding-top': headerHeight + 'px' }"
  >
    <div class="container">
      <div
        :style="{ 'min-height': 'calc( 100vh - ' + headerHeight + 'px )' }"
        class="banner-content d-flex flex-column justify-content-center py-7"
      >
        <div class="banner-fix mb-auto"></div>
        <div class="banner-top">
          <h1 class="mb-5">
            Digital growth for
            <small
              ><span id="headline-text-swap"></span
              ><span class="headline-cursor" :class="{ invisible: hideCursor }"
                >&nbsp;</span
              ></small
            >
          </h1>
          <p class="mb-10">
            You are looking to start growing, so
            <a class="btn-inline-link primary" href="/contact"
              >talk to us today</a
            >
          </p>
        </div>
        <div class="banner-bottom d-flex flex-column mt-auto">
          <div class="scroll-down d-flex align-items-center ms-auto">
            <div class="scroll-text me-2">Scroll down</div>
            <i class="icon-mouse"></i>
          </div>

          <div class="row row-clients align-items-center mt-8">
            <div
              v-for="value in clientLogos"
              :key="value"
              class="col-4 col-sm-2 text-center"
            >
              <SvgIcons :icon="value" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'

import SvgIcons from '@/components/SvgIcons.vue'

gsap.registerPlugin(TextPlugin)

export default {
  name: 'Banner',
  components: {
    SvgIcons
  },
  setup () {
    const clientLogos = ref([
      'logo-logitech',
      'logo-cannon',
      'logo-lj-hooker',
      'logo-aussie-broadband',
      'logo-rackspace',
      'logo-nexon'
    ])

    const hideCursor = ref(false)
    const headlineTextSwaps = [
      'established businesses.',
      'challengers.',
      'funded startups.'
    ]

    onMounted(() => {
      const repeatDelay = 3
      const headlineTextTimeline = gsap.timeline({
        defaults: {
          repeat: 0,
          ease: 'none',
          repeatDelay: repeatDelay,
          duration: 0.5,
          yoyo: true
        }
      })

      // Show the cursor fo 1 second after load
      setTimeout(() => {
        hideCursor.value = true

        for (let $i = 0; $i <= headlineTextSwaps.length; $i++) {
          if (headlineTextSwaps[$i]) {
            headlineTextTimeline.to('#headline-text-swap', {
              delay: $i === 0 ? 0 : 3,
              text: {
                value: headlineTextSwaps[$i]
              }
            })
          } else {
            // hack to delay the animation restart with 3 seconds
            headlineTextTimeline.set('#headline-text-swap', {
              delay: 3,
              text: {
                value: headlineTextSwaps[$i - 1]
              }
            })
          }
        }

        setTimeout(() => {
          headlineTextTimeline.repeat(-1)
        }, repeatDelay * 1000)
      }, 1000)
    })

    // headerHeight is declared in App.vue AND
    // initiated in PageHeader.vue
    const headerHeight = inject('headerHeight')

    return { headerHeight, hideCursor, clientLogos }
  }
}
</script>

<style scoped lang="scss">
@keyframes cursor {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes drip-mouse {
  50% {
    height: 10px;
    top: 5px;
  }

  65% {
    top: 13px;
  }

  85% {
    top: 18px;
    height: 5px;
  }

  100% {
    top: 23px;
    height: 0px;
  }
}

.section-banner {
  background: #252727;
  background: radial-gradient(at 15% 20%, #252727, #131515);
  color: $white;

  h1 {
    @include font-size(14rem);

    small {
      display: block;
      @include font-size(13rem);
    }
  }

  p {
    @include font-size($font-size-lg);
    font-weight: $font-weight-medium;
  }

  .scroll-down {
    font-size: 1.6rem;
    font-weight: $font-weight-medium;
    color: $gray-500;

    ::v-deep svg {
      width: 2.2rem;
      height: auto;
      fill: $white;
    }
  }

  .row-clients {
    > div {
      @include media-breakpoint-up(sm) {
        &:first-child {
          text-align: left !important;
        }

        &:last-child {
          text-align: right !important;
        }
      }
    }

    ::v-deep {
      .svg-icon {
        display: inline-block;
        max-width: 80%;
      }
      svg {
        fill: $white;
      }
    }
  }

  .headline-cursor {
    display: inline-block;
    width: 4px;
    background: $white;
    animation: cursor 0.7s cubic-bezier(0.75, 0.25, 0.13, 0.92) infinite;
  }

  .icon-mouse {
    position: relative;
    display: inline-block;
    width: 22px;
    height: 32px;
    border: 2px solid $white;
    border-radius: 1rem;

    &:before {
      content: "";
      display: block;
      width: 2px;
      height: 0;
      border-radius: 1px;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 5px;
      background: $white;
      animation: drip-mouse 3s linear infinite;
    }
  }
}
</style>