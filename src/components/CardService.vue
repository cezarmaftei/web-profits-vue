<template>
  <div class="card card-service text-start py-5 px-6">
    <h6 class="mb-1">{{ content.smallTitle }}</h6>

    <h3 class="mb-2">{{ content.title }}</h3>

    <p class="mb-4" v-html="content.description"></p>

    <div class="card-cta mt-auto">
      <a :href="content.buttonLink" class="btn-inline-link secondary">more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
.card-service {
  border: 2px solid $secondary;
  height: 100%;

  h6 {
    font-size: 1.2rem;
    color: $primary;
  }
}
</style>
