<template>
  <picture>
    <img :src="require(`@/assets/images/${image}`)" />
  </picture>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    image: String
  },
  setup (props) {
    console.log(require('@/assets/images/' + props.image))
  }
}
</script>

<style>
</style>