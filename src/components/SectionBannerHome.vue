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
            Digital growth for <br />
            <small :style="{ height: `${headlineHeight}px` }">
              <span
                ref="textSwapWrapper"
                class="text-swap-wrapper d-inline-block"
              >
                <span
                  class="headline-text-swap d-inline-block"
                  id="headline-text-swap"
                ></span>
              </span>
            </small>
          </h1>
          <p class="mb-10">
            You are looking to start growing, so
            <router-link class="btn-inline-link primary" to="/contact"
              >talk to us today</router-link
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
import { inject, ref, onMounted, onBeforeUnmount } from 'vue'
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

    const headlineHeight = ref('none')
    const textSwapWrapper = ref(null)

    const headlineTl = gsap
      .timeline({
        repeat: -1
      })
      .pause()

    onMounted(() => {
      // Initial height - add an extra 10px because letters like "g" could be cut
      headlineHeight.value = textSwapWrapper.value.clientHeight + 10

      headlineTextSwaps.forEach((headline) => {
        const currentTl = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 3,
          onUpdate: () => {
            if (headlineHeight.value < textSwapWrapper.value.clientHeight) {
              headlineHeight.value = textSwapWrapper.value.clientHeight + 10
            }
          },
          onComplete: () => {
            if (headlineHeight.value > textSwapWrapper.value.clientHeight) {
              headlineHeight.value = textSwapWrapper.value.clientHeight + 10
            }
          }
        })
        currentTl.to('#headline-text-swap', { duration: 1, text: headline })
        headlineTl.add(currentTl)
      })

      setTimeout(() => {
        headlineTl.resume()
      }, 1500)
    })

    onBeforeUnmount(() => {
      headlineTl.clear()
    })

    // headerHeight is declared in App.vue AND
    // initiated in PageHeader.vue
    const headerHeight = inject('headerHeight')

    return {
      headerHeight,
      headlineHeight,
      textSwapWrapper,
      hideCursor,
      clientLogos
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $white;
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

  .headline-text-swap {
    &:after {
      content: "_";
      display: inline-block;
      animation: blink 0.75s linear infinite;
    }
  }

  h1 {
    @include font-size(14rem);

    small {
      display: block;
      @include font-size(13rem);
      line-height: 1.2;
      overflow: hidden;
      @include transition(height 0.25s linear);
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

    :deep svg {
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

    :deep {
      .svg-icon {
        display: inline-block;
        max-width: 80%;
      }
      svg {
        fill: $white;
      }
    }
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