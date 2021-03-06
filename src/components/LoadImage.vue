<template>
  <picture v-if="!lazy">
    <source
      v-for="(srcset, ext) in sourceElements.sources"
      :key="ext"
      :srcset="srcset"
      :type="`image/${ext}`"
    />
    <img @load="loadHandler" :alt="alt" :src="sourceElements.default" />
  </picture>
  <picture
    v-else-if="lazy && sourceElements.default"
    class="lazy-loading-image"
  >
    <source
      v-for="(srcset, ext) in sourceElements.sources"
      :key="ext"
      :srcset="srcset"
      :type="`image/${ext}`"
    />
    <img @load="loadHandler" :alt="alt" :src="sourceElements.default" />
  </picture>
  <div v-else-if="lazy" ref="observedElement" :data-lazy-src="src" />
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'LoadImage',
  props: {
    src: String,
    alt: String,
    lazy: {
      default: true,
      type: Boolean
    }
  },
  setup (props) {
    // 1. Get image sizes from global.config.json
    const globalConfig = require('./../../global.config.json')
    const maxWidths = globalConfig.imgMaxWidths.value

    // image file extension
    const imgFileExt = props.src.split('.').pop()

    // image file name
    const imgFileName = props.src.split('.').shift()

    // defaul <source> elements
    const sourceElements = ref({
      default: false,
      sources: {
        webp: [],
        [imgFileExt]: []
      }
    })

    // Get all images
    const getImages = () => {
      // Use for loop to exit if the images are not found
      // Usually if an image is not found it doesn't make sense to continue the loop
      for (let i = 0; i < maxWidths.length; i++) {
        const width = maxWidths[i]
        try {
          // Check if .webp exists
          const webpFile = require(`@/assets/images/${imgFileName}-w${width}.webp`)

          if (webpFile) {
            // Add this file to webp srcset
            sourceElements.value.sources.webp.push(`${webpFile} w${width}`)

            // Also add default extension file, because if webp exists that exists aswell
            const defaultFile = require(`@/assets/images/${imgFileName}-w${width}.${imgFileExt}`)
            sourceElements.value.sources[imgFileExt].push(
              `${defaultFile} w${width}`
            )
          }
        } catch (e) {
          // exit loop
          break
        }
      }

      // Set default value
      sourceElements.value.default = require(`@/assets/images/${props.src}`)

      // if sourceElements.value.sources[imgFileExt].length > 0 means there are other variants
      if (sourceElements.value.sources[imgFileExt].length > 0) {
        // Stringify source elements
        sourceElements.value.sources.webp =
          sourceElements.value.sources.webp.join(', ')
        sourceElements.value.sources[imgFileExt] =
          sourceElements.value.sources[imgFileExt].join(', ')
      } else {
        // Set default .webp value
        sourceElements.value.sources = {
          webp: require(`@/assets/images/${imgFileName}.webp`)
        }
      }
    }

    // Load images if lazy is false
    if (!props.lazy) {
      getImages()
    }

    const loadImages = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load images
          getImages()

          // Unobserve
          observer.unobserve(entry.target)
        }
      })
    }

    // The lazy-loading-image element
    const observedElement = ref(null)

    onMounted(() => {
      if (observedElement.value) {
        // Observe
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0
        }
        const observer = new IntersectionObserver(loadImages, observerOptions)

        observer.observe(observedElement.value)
      }
    })

    const loadHandler = (event) => {
      event.target.parentNode.classList.add('lazy-loaded-complete')
    }

    return { globalConfig, sourceElements, observedElement, loadHandler }
  }
}
</script>

<style scoped lang="scss">
.lazy-loading-image {
  opacity: 0;
  @include transition(opacity 0.5s ease-out);

  &.lazy-loaded-complete {
    opacity: 1;
  }
}
</style>