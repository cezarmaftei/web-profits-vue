<template>
  <section class="section-services">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="
              services-content
              text-center
              d-flex
              flex-column
              justify-content-center
              py-12
              overflow-hidden
            "
          >
            <h6 class="mb-3">More than 15 years of experience</h6>
            <h1>
              Since 2006, we've continued to <br />help businesses large and
              small to <br />
              challenge and grow<span class="text-primary">.</span>
            </h1>

            <div class="row justify-content-center services mt-2 g-5">
              <div
                v-for="service in services"
                :key="service"
                class="col-12 col-md-6 col-lg-4"
              >
                <CardService :content="service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardService from '@/components/CardService.vue'

export default {
  name: 'SectionServices',
  components: {
    CardService
  },
  setup () {
    const services = [
      {
        smallTitle: 'Digital growth framework for',
        title: 'Challengers',
        description:
          'When it\'s you against <a href="#">everyone</a> else and you\'re looking for the next stage of growth, you can trust us to give your marketing momentum and scale.',
        buttonLink: '#'
      },
      {
        smallTitle: 'Digital growth framework for',
        title: 'Funded startups',
        description:
          "You're the next great thing, but no one knows what you've got yet! When you want to set the world on fire, we're here to help get you out there.",
        buttonLink: '#'
      },
      {
        smallTitle: 'Digital growth framework for',
        title: 'Established business',
        description:
          "As an established business you'll be looking for new ways to innovate and grow. We'll work with you to create and realise new opportunities.",
        buttonLink: '#'
      }
    ]

    return { services }
  }
}
</script>

<style scoped lang="scss">
.section-services {
  .services-content {
    min-height: 100vh;
  }

  h1 {
    @include media-breakpoint-between(xs, lg) {
      br {
        display: none;
      }
    }
  }
}
</style>