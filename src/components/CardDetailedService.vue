<template>
  <div class="card card-detailed-service text-start">
    <h3 class="mb-2">{{ content.title }}</h3>

    <p class="mb-4" v-html="content.description"></p>

    <ul class="list-unstyled row g-1">
      <li v-for="service in content.services" :key="service" class="col-auto">
        <span
          class="d-block m-0 badge rounded-pill bg-white text-dark py-1 px-3"
          >{{ service }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardDetailedService',
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
.card-detailed-service {
  height: 100%;

  h6 {
    font-size: 1.2rem;
    color: $primary;
  }

  .rounded-pill {
    font-size: 1.4rem;
    font-weight: $font-weight-medium;

    @include media-breakpoint-up(md) {
        font-size: 1.6rem;
    }
  }
}
</style>