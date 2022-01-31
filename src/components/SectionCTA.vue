<template>
  <section class="section-cta bg-secondary text-white py-13">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 col-xl-9">
          <h1>{{ content }}</h1>
        </div>
        <div class="section-button col-12 col-lg-4 col-xl-3">
          <router-link class="btn btn-primary" :to="{ name: 'Contact Page' }"
            >Talk to us today</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCTA',
  setup () {
    const content =
      'Start addressing your business growth problems with our digital marketing solutions.'

    return { content }
  }
}
</script>

<style scoped lang="scss">
.section-cta {
  .section-button {
    @include padding-top(2.5rem);

    @include media-breakpoint-up(lg) {
      text-align: right;
    }
  }
}
</style>