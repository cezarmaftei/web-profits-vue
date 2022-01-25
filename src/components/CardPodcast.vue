<template>
  <div class="card card-podcast">
    <a :href="content.link" class="card-graphic d-flex">
      <img :alt="content.guestName" :src="content.image" />
      <div class="logo-podcast">
        <SvgIcons icon="logo-the-growth-manifesto-podcast" />
      </div>
      <div class="btn-play">
        <SvgIcons icon="icon-play" />
      </div>
    </a>
    <div class="card-details mb-2">
      <div class="podcast-meta d-flex align-items-center mb-1 mt-3">
        <div class="podcast-episode">Episode {{ content.episode }}</div>
        <div v-if="content.isNew" class="podcast-new ms-2 px-2">new</div>
      </div>

      <h5>
        <a :href="content.link">{{ content.title }}</a>
      </h5>
    </div>
    <p class="mt-auto mb-0">{{ content.guestName }}</p>
  </div>
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'

export default {
  name: 'CardPodcast',
  components: {
    SvgIcons
  },
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
.card-podcast {
  height: 100%;
  max-width: 31rem;
  margin-left: auto;
  margin-right: auto;

  .logo-podcast {
    width: 7rem;
    position: absolute;
    top: 2rem;
    left: 2rem;

    :deep svg {
      fill: $white;
    }
  }

  .btn-play {
    width: 5rem;
    height: 5rem;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    @include transition(transform 0.5s cubic-bezier(.75, .25, .13, .92));
  }

  .card-graphic {
    position: relative;
    height: 18rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      .btn-play {
        transform: scale(1.1)
      }
    }
  }

  .podcast-meta {
    font-size: 1.2rem;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: $gray-500;
  }

  .podcast-new {
    background: $gray-500;
    color: $secondary;
  }

  h5 {
    a {
      color: $white;
      @include transition($transition-base);

      &:hover {
        color: $primary;
      }
    }
  }

  p {
    font-size: 1.6rem;
    color: $gray-400;
    font-weight: $font-weight-bold;
  }
}
</style>