<template>
  <header class="site-header" id="site-header">
    <nav class="navbar container d-flex align-items-center">
      <router-link to="/" class="navbar-brand d-block"
        ><SvgIcons icon="logo-webprofits"
      /></router-link>

      <button
        class="navbar-toggler d-lg-none ms-auto"
        :class="{ 'menu-black': watchMenu }"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-menu-collapse"
        aria-expanded="false"
        aria-controls="main-menu-collapse"
      >
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>

      <div
        class="collapse main-menu-collapse d-lg-flex"
        id="main-menu-collapse"
      >
        <div
          class="
            main-menu-container
            d-flex
            flex-column
            align-items-center
            justify-content-center justify-content-lg-end
          "
          :style="mainMenuContainerStyle"
        >
          <ul
            class="main-menu d-flex flex-column flex-lg-row align-items-lg-end"
            :class="{ 'menu-black': watchMenu }"
          >
            <li v-for="menuItem in menuItems" :key="menuItem">
              <router-link
                :to="{ path: menuItem.path, hash: menuItem.hash }"
                :class="{ 'btn btn-primary': menuItem.isButton }"
                @click="closeMobileCollapse"
                ><small v-if="menuItem.smallText">{{
                  menuItem.smallText
                }}</small
                >{{ menuItem.title }}</router-link
              >
            </li>
          </ul>

          <ul class="list-unstyled row gx-1 mt-3 align-items-center d-lg-none">
            <li v-for="social in socialMedia" :key="social" class="col-auto">
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
    </nav>
  </header>

  <SectionBannerHome v-if="$route.meta.banner === 'home-page'" />
  <SectionBannerCaseStudies v-if="$route.meta.banner === 'case-study-page'" />
  <SectionBannerSimple v-if="$route.meta.banner === 'simple-page'" />
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'
import SectionBannerHome from '@/components/SectionBannerHome.vue'
import SectionBannerCaseStudies from '@/components/SectionBannerCaseStudies.vue'
import SectionBannerSimple from '@/components/SectionBannerSimple.vue'
import { inject, onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { Collapse } from 'bootstrap'

export default {
  name: 'PageHeader',
  components: {
    SvgIcons,
    SectionBannerHome,
    SectionBannerCaseStudies,
    SectionBannerSimple
  },
  setup () {
    // Social media data
    const socialMedia = inject('socialMedia')

    // headerHeight is declared in App.vue AND
    // initiated in PageHeader.vue
    const headerHeight = inject('headerHeight')

    onMounted(() => {
      // Update headerHeight
      headerHeight.value = document.getElementById('site-header').clientHeight

      const mainMenuCollapse = document.getElementById('main-menu-collapse')

      // Hamburger active class -> .main-menu-open
      mainMenuCollapse.addEventListener('show.bs.collapse', function () {
        document.getElementById('site-header').classList.add('main-menu-open')
      })

      mainMenuCollapse.addEventListener('hide.bs.collapse', function () {
        document
          .getElementById('site-header')
          .classList.remove('main-menu-open')
      })
    })

    const route = useRoute()
    const watchMenu = ref(null)
    const mainMenuContainerStyle = ref(null)

    watchEffect(() => {
      // Swap between white and black menu with the .menu-black class
      watchMenu.value = route.meta.banner === 'simple-page'

      // Set mobile menu paddings
      mainMenuContainerStyle.value = {
        'padding-top': headerHeight.value + 'px',
        'padding-bottom': headerHeight.value / 2 + 'px'
      }
    })

    const menuItems = [
      {
        path: '/',
        hash: '#section-services',
        smallText: 'one goal',
        isButton: false,
        title: 'What we do'
      },
      {
        path: '/',
        hash: '#section-how-we-work',
        smallText: 'one process',
        isButton: false,
        title: 'How we work'
      },
      {
        path: '/',
        hash: '#section-who-we-are',
        smallText: 'one team',
        isButton: false,
        title: 'Who we are'
      },
      {
        path: '/',
        hash: '#section-podcast',
        smallText: false,
        isButton: false,
        title: 'Podcast'
      },
      {
        path: '/contact',
        hash: false,
        smallText: false,
        isButton: true,
        title: 'Contact Us'
      }
    ]

    const closeMobileCollapse = () => {
      new Collapse(document.getElementById('main-menu-collapse'), {
        hide: true
      })
    }

    return {
      socialMedia,
      menuItems,
      headerHeight,
      watchMenu,
      mainMenuContainerStyle,
      closeMobileCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.site-header {
  position: absolute;
  z-index: 2200;
  left: 0;
  top: 0;
  width: 100%;
  @include padding(5rem 0);
}

.navbar {
  padding-right: $grid-gutter-width * 0.5;
  padding-left: $grid-gutter-width * 0.5;

  .navbar-brand,
  .navbar-toggler {
    position: relative;
    z-index: 2200;
  }
}

.navbar-brand {
  flex: 0 0 50%;
  max-width: 330px;

  @include media-breakpoint-up(md) {
    flex: 0 0 22%;
  }

  @include media-breakpoint-up(xl) {
    flex: 0 0 26%;
  }

  ::v-deep svg {
    fill: $primary;
  }
}

.navbar-toggler {
  border: 0;
  background: none;
  height: 21px;
  @include rfs(5.8rem, width);
  padding: 15px;

  .navbar-toggler-bar {
    display: block;
    width: 100%;
    height: 1px;
    background: $white;
    position: absolute;
    left: 0;
    top: 50%;
    transition: margin-top 0.15s 0.15s linear,
      transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &:first-child {
      margin-top: -6px;
    }

    &:last-child {
      margin-top: 6px;
    }

    @include media-breakpoint-up(sm) {
      &:first-child {
        margin-top: -8px;
      }

      &:last-child {
        margin-top: 8px;
      }
    }
  }

  &.menu-black {
    .navbar-toggler-bar {
      background: $black;
    }
  }
}

.main-menu-open {
  .navbar-toggler {
    .navbar-toggler-bar {
      background: $white;
      transform: rotate(-45deg);
      transition: margin-top 0.15s linear,
        transform 0.15s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);

      &:first-child,
      &:last-child {
        margin-top: 0;
        transform: rotate(45deg);
      }
    }
  }
}

.main-menu-collapse {
  position: absolute;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;

  .main-menu-container {
    width: 100%;
    min-height: 100vh;
    background: $black;
    transition: padding 0.1s linear;
  }

  @include media-breakpoint-up(lg) {
    position: relative;

    &.show .main-menu-container {
      background: transparent;
    }

    .main-menu-container {
      padding-top: 0 !important; // override inline css
      padding-bottom: 0 !important; // override inline css
      min-height: 1px;
      background: transparent;
    }
  }
}

.main-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  @include font-size(5rem);
  font-weight: $font-weight-medium;

  @include media-breakpoint-up(lg) {
    margin-left: auto;
  }

  li {
    margin: 1rem 0;
    text-align: center;
  }

  a:not(.btn) {
    color: $white;
    display: inline-block;
    position: relative;
    line-height: 1.2;
    @include padding($input-btn-padding-y 0);

    small {
      display: block;
      white-space: nowrap;
      font-weight: $font-weight-bold;
      font-size: 1.2rem;
      color: $gray-400;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      line-height: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: $input-btn-padding-y / 2;
      height: 2px;
      width: 100%;
      background: $white;
    }
  }

  &.menu-black {
    @include media-breakpoint-up(lg) {
      a:not(.btn) {
        color: $black;

        small {
          color: $gray-700;
        }

        &:before {
          background: $gray-300;
        }
      }
    }
  }

  @include media-breakpoint-up(lg) {
    @include font-size(2rem);

    li {
      text-align: left;
      margin: 0;
      @include margin-left(3rem);
    }

    a:not(.btn) {
      small,
      &:before {
        width: 100%;
        opacity: 0;
        transform: translateY(-3px);
        @include transition($transition-base);
      }

      &:hover {
        small,
        &:before {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  @include media-breakpoint-up(xxl) {
    li {
      &:not(:first-child) {
        @include margin-left(6rem);
      }
    }
  }
}

.social-link {
  :deep {
    .svg-icon {
      height: 2rem;
      fill: $white;
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
</style>