<template>
  <section class="section-testimonials">
    <div class="bg-secondary py-15">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              ref="testimonialsCarousel"
              id="testimonialsCarousel"
              class="carousel slide"
            >
              <div class="carousel-inner" :style="carouselStyle">
                <div
                  class="carousel-item"
                  :class="{ active: index == 0 }"
                  v-for="(testimonial, index) in testimonials"
                  :key="testimonial"
                >
                  <blockquote>
                    <div class="row">
                      <div
                        class="col-12 col-md-6 col-lg-4 mb-5 testimonial-logo"
                      >
                        <SvgIcons :icon="testimonial.logo" />
                      </div>

                      <div class="col-12 col-md-6 col-lg-8 testimonial-content">
                        <q class="d-block mb-8">{{
                          testimonial.testimonial
                        }}</q>

                        <h6>{{ testimonial.name }}</h6>

                        <p>
                          {{ testimonial.role }} &bull;
                          {{ testimonial.company }}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container testimonials-carousel-controls overflow-hidden py-7">
      <div class="row">
        <div class="col-12 col-md-4 mb-3">
          <h6>Some of the <br />businesses we've helped</h6>
        </div>
        <div class="col-12 col-md-8">
          <div class="row align-items-center justify-content-center g-4 g-sm-6">
            <div
              class="col-4 col-md-3 testimonial-logo"
              v-for="testimonial in testimonials"
              :key="testimonial"
            >
              <SvgIcons :icon="testimonial.logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'
import { Carousel } from 'bootstrap'
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'SectionTestimonials',
  components: {
    SvgIcons
  },
  setup () {
    const testimonialsCarousel = ref(null)
    const carouselStyle = ref({
      height: 'auto'
    })

    const testimonials = [
      {
        logo: 'logo-logitech',
        testimonial:
          "Webprofits have been outstanding in their collaboration with Logitech to not only deliver some of the best results we've seen, but in being a strategic partner who advise and inspire us across a number of facets of digital marketing.",
        name: 'Reagan Freyer',
        role: 'Director Of Marketing & Innovations',
        company: 'Logitech EMEA'
      },
      {
        logo: 'logo-bellamys-organic',
        testimonial:
          'There are many variations of passages of Lorem Ipsum available.',
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Bellamys Organic'
      },
      {
        logo: 'logo-lj-hooker',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'LJ Hooker'
      },
      {
        logo: 'logo-airtasker',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Airtasker'
      },
      {
        logo: 'logo-aif',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Australian Institute of Fitness'
      },
      {
        logo: 'logo-hr-connect',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'HR Connect'
      },
      {
        logo: 'logo-super-obvious',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Super Obvious'
      },
      {
        logo: 'logo-nexon',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Nexon'
      },
      {
        logo: 'logo-sealand',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Sealand'
      },
      {
        logo: 'logo-australian-ethical',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Australian Ethical'
      },
      {
        logo: 'logo-brighten',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Brighten'
      },
      {
        logo: 'logo-cua',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'CUA'
      },
      {
        logo: 'logo-spintel',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Spintel'
      },
      {
        logo: 'logo-rose-mary',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Rose Mary'
      },
      {
        logo: 'logo-click-energy',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Click Energy'
      },
      {
        logo: 'logo-outforce',
        testimonial:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: 'Lorem Ipsum',
        role: 'Dolor Sit Amet',
        company: 'Outforce'
      }
    ]

    let carousel = null

    onMounted(() => {
      // Initiate carousel
      carousel = new Carousel(testimonialsCarousel.value, {
        ride: 'carousel',
        interval: 5000
      })

      carouselStyle.value.height = `${testimonialsCarousel.value.clientHeight}px`

      // Start carousel autoplay
      carousel.cycle()

      // Autoheight
      testimonialsCarousel.value.addEventListener(
        'slid.bs.carousel',
        function (event) {
          carouselStyle.value.height = `${event.relatedTarget.clientHeight}px`
        }
      )
    })

    onUnmounted(() => {
      // Destroy carousel
      carousel.dispose()
    })

    return { testimonials, testimonialsCarousel, carouselStyle }
  }
}
</script>

<style scoped lang="scss">
.section-testimonials {
  color: $white;

  blockquote {
    @include media-breakpoint-up(lg) {
      .testimonial-content {
        @include padding-left(13rem);
      }
    }

    q {
      font-family: $font-family-futura-pt;
      font-style: normal;
      @include font-size(4.4rem);
      font-weight: $font-weight-light;
      line-height: 1.22;
    }

    h6 {
      color: $white;
    }

    p {
      font-size: 1.6rem;
      color: $gray-600;
    }

    :deep {
      .svg-icon {
        display: flex;
        align-items: flex-end;

        svg {
          max-width: none;
          width: auto;
          max-height: 6rem;
          fill: $white;
        }

        &:after {
          content: "";
          display: block;
          width: 35%;
          margin-left: 5%;
          height: 2px;
          background: $white;
          margin-bottom: 4%;
        }
      }
    }
  }

  .testimonials-carousel-controls {
    h6 {
      color: $black;
    }
  }

  .carousel-inner {
    @include transition(height 0.5s ease-out);
  }
}
</style>