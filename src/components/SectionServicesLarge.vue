<template>
  <section
    class="section-services-large text-center py-10"
    id="section-services"
  >
    <div class="container overflow-hidden">
      <div class="row">
        <div class="col-12">
          <h1 class="mb-2">One goal. One process. One team.</h1>

          <p>
            100+ full-time marketers. Offices in Australia, USA and Singapore.
            <br />
            <u>Helping challenger brands drive growth</u> since 2006.
          </p>

          <div class="row justify-content-center services mt-1 mb-7 g-5">
            <div
              v-for="service in services"
              :key="service"
              class="col-12 col-md-6 col-lg-4"
            >
              <CardService :content="service" />
            </div>
          </div>

          <div class="row align-items-center justify-content-center gy-3">
            <div class="col-auto">
              <router-link
                class="btn btn-primary"
                :to="{ name: 'Contact Page' }"
                >Talk to us today</router-link
              >
            </div>
            <div class="col-auto">
              <a href="#" class="btn btn-outline-secondary">Continue to read</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-services-large text-center bg-light py-9">
    <div class="container overflow-hidden">
      <div class="row">
        <div class="col-12">
          <h6 class="text-primary mb-2">A list of what we do</h6>
          <h1>Services we provide</h1>

          <div class="row justify-content-center g-5 mt-2">
            <div
              v-for="service in detailedServices"
              :key="service"
              class="col-12 col-lg-4"
            >
              <CardDetailedService :content="service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CardService from '@/components/CardService.vue'
import CardDetailedService from '@/components/CardDetailedService.vue'

export default {
  name: 'SectionServicesLarge',
  components: {
    CardService,
    CardDetailedService
  },
  setup () {
    const services = [
      {
        smallTitle: 'What we do',
        title: 'One goal',
        description:
          'We accelerate sustainable growth through impactful digital marketing activities.',
        buttonLink: '#'
      },
      {
        smallTitle: 'How we work',
        title: 'One process',
        description:
          'We plug directly into your team to instantly add skills and scale with our Digital Growth Framework.',
        buttonLink: '#'
      },
      {
        smallTitle: 'Who we are',
        title: 'One team',
        description:
          'An agile global group of experienced and  award-winning performance marketers.',
        buttonLink: '#'
      }
    ]

    const detailedServices = [
      {
        title: 'Consulting & Strategy',
        description:
          'Our consulting team develops effective and scalable B2B and B2C engagement strategies:',
        services: [
          'Research',
          'Planning',
          'Training',
          'Reporting',
          'Personal development',
          'Piloting new channels',
          'Analysis'
        ]
      },
      {
        title: 'Creative & Studio',
        description:
          'Working directly with you or your agency partners, our digital studio team creates program assets:',
        services: [
          'Digital brand extension',
          'Digital video',
          'Landing pages',
          'Content Creation',
          'Downloads',
          'UX design',
          'Messaging frameworks',
          'Digital campaigns',
          'Social media'
        ]
      },
      {
        title: 'Performance & Media',
        description:
          'Our performance and media team ensure projects run smoothly and continuously optimise activities: ',
        services: [
          'Performance marketing',
          'Content Marketing',
          'Multi-region campaigns',
          'Display advertising',
          'Omnichannel launches',
          'Email marketing',
          'Search marketing and SEO',
          'Marketing automation'
        ]
      }
    ]

    return { services, detailedServices }
  }
}
</script>

<style scoped lang="scss">
.section-services-large {
  p {
    color: $gray-600;
    @include font-size($font-size-lg);
    font-weight: $font-weight-medium;

    u {
      color: $black;
      text-decoration: underline;

      @include media-breakpoint-up(sm) {
        position: relative;
        display: inline-block;
        text-decoration: none;
        white-space: nowrap;

        &:before {
          content: "";
          width: 100%;
          height: 0;
          border-bottom: 2px solid $black;
          position: absolute;
          left: 0;
          top: 100%;
        }
      }
    }

    br {
      @include media-breakpoint-between(xs, lg) {
        display: none;
      }
    }
  }
}
</style>