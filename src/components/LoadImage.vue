<template>
  <picture v-if="sourceElements.default" class="lazy-loaded">
    <source
      v-for="(srcset, ext) in sourceElements.sources"
      :key="ext"
      :srcset="srcset"
      :type="`image/${ext}`"
    />
    <img :alt="alt" :src="sourceElements.default" />
  </picture>
  <div v-else ref="lazyElement" class="lazy-img-loading" :data-src="src" />
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'LoadImage',
  props: {
    src: String,
    alt: String
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

    const loadImages = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Unobserve
          observer.unobserve(entry.target)

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

          sourceElements.value.default = require(`@/assets/images/${props.src}`)

          // if sourceElements.value.sources[imgFileExt].length > 0 means there are other variants
          if (sourceElements.value.sources[imgFileExt].length > 0) {
            console.log(imgFileName)
            console.log('====')
            // Stringify source elements
            sourceElements.value.sources.webp =
              sourceElements.value.sources.webp.join(', ')
            sourceElements.value.sources[imgFileExt] =
              sourceElements.value.sources[imgFileExt].join(', ')
          } else {
            sourceElements.value.sources = {
              webp: require(`@/assets/images/${imgFileName}.webp`)
            }
          }
        }
      })
    }

    // The lazy-load element
    const lazyElement = ref(null)

    onMounted(() => {
      // Observe
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
      const observer = new IntersectionObserver(loadImages, observerOptions)

      observer.observe(lazyElement.value)
    })

    return { globalConfig, sourceElements, lazyElement }
  }
}
</script>

<style>
</style>