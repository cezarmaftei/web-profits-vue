<template>
  <section
    class="section-podcast text-center bg-white pt-8 pb-15"
    id="section-podcast"
  >
    <div class="container overflow-hidden">
      <div class="row">
        <div class="col-12">
          <h6 class="mb-3">THE COMPANY WE KEEP</h6>
          <h1 class="mb-2">The Growth Manifesto Podcast</h1>
          <p>
            Australia's leading multi-award-winning business, marketing, tech
            and <br />entrepreneurship podcast. Brought to you by Webprofits
          </p>
          <ul
            class="
              list-unstyled
              row
              gx-3
              mt-5
              align-items-center
              justify-content-center
            "
          >
            <li
              v-for="social in socialMedia"
              :key="social"
              class="col-auto mb-3"
            >
              <a
                :href="social.link"
                target="_blank"
                rel="noopener nofollow"
                class="social-link d-flex align-items-center"
                :title="social.name"
              >
                <SvgIcons :icon="social.icon" />
                <span class="d-inline-block ms-2">{{ social.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="section-podcast bg-secondary pb-15">
    <div class="container overflow-hidden">
      <div class="row justify-content-center gx-4 gy-6">
        <div
          v-for="podcast in podcasts"
          :key="podcast"
          class="col-12 col-sm-6 col-md-4 col-xl-auto"
        >
          <CardPodcast :content="podcast" />
        </div>
        <div class="col-12">
          <div class="row gy-3 justify-content-center">
            <div class="col-auto">
              <a
                href="https://www.growthmanifesto.com/"
                target="_blank"
                rel="noopener"
                class="btn btn-white"
                >See all episodes</a
              >
            </div>
            <div class="col-auto">
              <router-link
                class="btn btn-outline-white"
                :to="{ name: 'Contact Page' }"
                >Talk to us today</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'
import CardPodcast from '@/components/CardPodcast.vue'

export default {
  name: 'SectionPodcast',
  components: {
    SvgIcons,
    CardPodcast
  },
  setup () {
    const socialMedia = [
      {
        name: 'YouTube',
        icon: 'logo-youtube-podcast',
        link: '#'
      },
      {
        name: 'ApplePodcasts',
        icon: 'logo-apple-podcasts',
        link: '#'
      },
      {
        name: 'SoundCloud',
        icon: 'logo-soundcloud',
        link: '#'
      },
      {
        name: 'Spotify',
        icon: 'logo-spotify',
        link: '#'
      }
    ]

    const podcasts = [
      {
        episode: 43,
        title: 'How Super Coffee went from $0 to $400m valuation in 5 years',
        image: '/images/img-podcast-jimmy-decicco.jpg',
        isNew: true,
        guestName: 'Jimmy DeCicco',
        link: '#'
      },
      {
        episode: 42,
        title: 'How to develop a strategy that wins in competitive markets',
        image: '/images/img-podcast-roger-martin.jpg',
        isNew: false,
        guestName: 'Roger Martin',
        link: '#'
      },
      {
        episode: 41,
        title: 'Shipping Creative Work with Seth Godin',
        image: '/images/img-podcast-seth-godin.jpg',
        isNew: false,
        guestName: 'Seth Godin',
        link: '#'
      }
    ]
    return { socialMedia, podcasts }
  }
}
</script>

<style scoped lang="scss">
.section-podcast {
  position: relative;
  @include font-size($font-size-lg);

  p br {
    @include media-breakpoint-between(xs, lg) {
      display: none;
    }
  }

  &.bg-secondary {
    @include media-breakpoint-up(xl) {
      margin-top: -9rem;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 9rem;
      background: $white;
    }
  }
}

.social-link {
  color: $secondary;
  font-size: 1.4rem;
  font-weight: $font-weight-bold;

  @include media-breakpoint-up(md) {
    font-size: 1.6rem;
  }

  .svg-icon :deep svg {
    max-width: 5rem;
    width: auto;
    height: 3rem;
  }

  span {
    position: relative;

    &:before {
      content: "";
      width: 100%;
      height: 0;
      border-bottom: 2px solid $black;
      position: absolute;
      left: 0;
      top: 100%;
      @include transition(border-color 0.25s ease-out);
    }
  }

  &:hover {
    span {
      &:before {
        border-color: transparent;
      }
    }
  }
}
</style>
