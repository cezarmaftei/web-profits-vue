<template>
  <footer class="site-footer py-10" id="site-footer">
    <div class="container overflow-hidden">
      <div class="row gx-4 gy-5">
        <div class="col-12 col-sm-6 col-lg-2 col-xl-1 col-footer-first">
          <router-link to="/" class="footer-brand"
            ><SvgIcons icon="logo-webprofits-w"
          /></router-link>
        </div>
        <div class="col-12 col-sm-6 col-lg-15">
          <h6 class="mb-3">SYDNEY</h6>
          <p>
            Level 28 <br />161 Castlereagh Street<br />
            Sydney NSW 2000
          </p>
          <p><a href="https://www.webprofits.com.au/">webprofits.com.au</a></p>
        </div>
        <div class="col-12 col-sm-6 col-lg-15">
          <h6 class="mb-3">MELBOURNE</h6>
          <p>
            Level 7 <br />222 Exhibition Street<br />
            Melbourne VIC 3000
          </p>
          <p><a href="https://www.webprofits.com.au/">webprofits.com.au</a></p>
        </div>
        <div class="col-12 col-sm-6 col-lg-15">
          <h6 class="mb-3">SINGAPORE</h6>
          <p>
            Level 10 <br />1 George Street<br />
            Singapore 049145
          </p>
          <p><a href="https://www.webprofits.com.sg/">webprofits.com.sg</a></p>
        </div>
        <div class="col-12 col-sm-6 col-lg-15">
          <h6 class="mb-3">LOS ANGELES</h6>
          <p>
            730 Arizona Avenue<br />
            Santa Monica California 90401 USA
          </p>
          <p><a href="https://www.webprofits.agency/">webprofits.agency</a></p>
        </div>
        <div class="col-12 d-none d-lg-block mt-3"></div>
        <div class="col-lg-2 col-xl-1 d-none d-lg-block"></div>
        <div class="col-12 col-sm-6 col-lg-9">
          <p class="m-0">
            &copy; {{ currentYear }} Webprofits. All Rights Reserved.
            <router-link :to="'/privacy-policy'">Privacy Policy</router-link>
          </p>
          <ul class="list-unstyled row gx-1 mt-3 mb-0 align-items-center">
            <li
              v-for="social in this.socialMedia"
              :key="social"
              class="col-auto"
            >
              <a
                target="_blank"
                rel="nofollow noopener"
                :href="social.link"
                class="social-link d-block p-1"
                :title="social.name"
              >
                <SvgIcons :icon="social.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'

export default {
  name: 'PageFooter',
  components: {
    SvgIcons
  },
  inject: ['socialMedia'],
  setup () {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  }
}
</script>

<style scoped lang="scss">
.site-footer {
  @include font-size($font-size-lg);
  font-weight: $font-weight-medium;

  h6 {
    @include font-size($font-size-lg);
    color: $secondary;
  }

  .col-lg-15 {
    @include media-breakpoint-up(lg) {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }

  .footer-brand {
    :deep {
      .svg-icon {
        width: 8rem;
        max-width: 100%;
      }

      svg {
        fill: $primary;
      }
    }
  }

  a:not(.social-link):not(.footer-brand) {
    position: relative;
    display: inline-block;
    color: $secondary;

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 0;
      border-bottom: 2px solid $secondary;
      @include transition($transition-base);
      position: absolute;
      left: 0;
      bottom: 0;
    }

    &:hover {
      &:before {
        border-color: transparent;
      }
    }
  }

  .social-link {
    :deep {
      .svg-icon {
        height: 2rem;
        fill: $black;
        @include transition($transition-base);

        svg {
          width: auto;
          height: 100%;
        }
      }
    }

    &:hover {
      :deep {
        .svg-icon {
          transform: scale(1.2);
          fill: $primary;
        }
      }
    }
  }

  @include media-breakpoint-between(lg, xl) {
    br {
      display: none;
    }
  }
}
</style>