<template>
  <div class="card card-work py-5 px-7">
    <LoadImage
      class="card-graphic"
      :src="client.backgroundImage"
      :alt="`Work ${client.name}`"
    />

    <div class="card-header">
      <div class="container">
        <SvgIcons :icon="client.clientLogo" />
      </div>
    </div>

    <div class="card-content">
      <div class="container">
        <h2 class="mb-1" v-html="client.title"></h2>

        <div
          class="card-content-collapse collapse"
          v-html="client.content"
        ></div>
      </div>

      <router-link
        class="btn btn-bullet btn-bullet-primary"
        :class="isTouchScreen"
        :to="'/case-studies/' + client.slug"
        @click="handleClick"
        ><span>Click here to read more</span></router-link
      >
    </div>
  </div>
</template>

<script>
import LoadImage from '@/components/LoadImage.vue'
import SvgIcons from '@/components/SvgIcons.vue'

export default {
  name: 'CardWork',
  props: {
    client: Object
  },
  components: {
    LoadImage,
    SvgIcons
  },
  computed: {
    isTouchScreen: function () {
      let isTouch = null

      if (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      ) {
        isTouch = 'btn-is-touch'
      }

      return isTouch
    }
  },
  methods: {
    handleClick: function (event) {
      if (event) {
        // Add .open class to select it in router/index.js
        event.target.classList.add('open')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-work {
  position: relative;
  height: 100%;
  min-height: 50vh;
  color: $white;

  :deep .svg-icon {
    max-width: 50%;

    @include media-breakpoint-up(xl) {
      max-width: 24rem;
    }
  }

  .card-graphic {
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    :deep * {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-header,
  .card-content {
    position: relative;
    z-index: 10;
  }

  .card-content {
    margin-top: auto;
  }

  h2 {
    :deep br {
      @include media-breakpoint-between(xs, xxl) {
        display: none;
      }
    }
  }

  &.cloned-card {
    .card-header,
    .card-content,
    .btn {
      display: none;
    }
  }
}
</style>