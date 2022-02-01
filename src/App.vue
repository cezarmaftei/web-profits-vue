<template>
  <PageHeader />

  <!-- page content via router -->
  <router-view v-slot="{ Component, route }">
    <transition
      :name="route.meta.transition || 'route-fade'"
      :mode="route.meta.mode || 'out-in'"
    >
      <component :is="Component"></component>
    </transition>
  </router-view>

  <PageFooter />
  <ThemeFonts />
</template>

<script>
// import { defineAsyncComponent, ref, provide } from 'vue'
import { ref, provide } from 'vue'

// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

// const ThemeFonts = defineAsyncComponent(() => import('@/assets/css/fonts.css'))

export default {
  name: 'Home',
  setup () {
    // Define headerHeight for later use in child components
    // PageHeader.vue, SectionBanner.vue, CaseStudies.vue
    const headerHeight = ref(0)

    const updateHeaderHeight = () => {
      headerHeight.value = document.getElementById('site-header').clientHeight
    }

    window.addEventListener('resize', updateHeaderHeight)

    const clients = [
      {
        slug: 'logitech',
        name: 'Logitech',
        backgroundImage: 'img-work-logitech.jpg',
        clientLogo: 'logo-logitech-blue',
        title: 'Transforming global <br />digital strategy',
        content:
          '<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make atype specimen book.<strong>It has survived not only five centuries</strong>,but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.</p><img class="img-fluid" src="/images/img-work-lj-hooker.jpg"alt="Work LJ Hooker"/><h3>Why do we use it?</h3><p>It is a long established fact that a reader will bedistracted by the readable content of a page when looking atits layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed tousing \'Content here, content here\', making it look likereadable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default modeltext, and a search for \'lorem ipsum\' will uncover many websites still in their infancy. Various versions have evolvedover the years, sometimes by accident, sometimes on purpose(injected humour and the like).</p><h5>Where does it come from?</h5><p>Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literaturefrom 45 BC, making it over 2000 years old. RichardMcClintock, a Latin professor at Hampden-Sydney College inVirginia, looked up one of the more obscure Latin words,consectetur, from a Lorem Ipsum passage, and going throughthe cites of the word in classical literature, discoveredthe undoubtable source. Lorem Ipsum comes from sections1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (TheExtremes of Good and Evil) by Cicero, written in 45 BC. Thisbook is a treatise on the theory of ethics, very popularduring the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s isreproduced below for those interested. Sections 1.10.32 and1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied byEnglish versions from the 1914 translation by H. Rackham.</p><h3>Where can I get some?</h3><p>There are many variations of passages of Lorem Ipsumavailable, but the majority have suffered alteration in someform, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use apassage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeatpredefined chunks as necessary, making this the first truegenerator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentencestructures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free fromrepetition, injected humour, or non-characteristic wordsetc.</p>'
      },
      {
        slug: 'lj-hooker',
        name: 'LJ Hooker',
        backgroundImage: 'img-work-lj-hooker.jpg',
        clientLogo: 'logo-lj-hooker-coloured',
        title: '3x enquiries in 12 months',
        content:
          '<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make atype specimen book.<strong>It has survived not only five centuries</strong>,but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.</p><img class="img-fluid" src="/images/img-work-lj-hooker.jpg"alt="Work LJ Hooker"/><h3>Why do we use it?</h3><p>It is a long established fact that a reader will bedistracted by the readable content of a page when looking atits layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed tousing \'Content here, content here\', making it look likereadable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default modeltext, and a search for \'lorem ipsum\' will uncover many websites still in their infancy. Various versions have evolvedover the years, sometimes by accident, sometimes on purpose(injected humour and the like).</p><h5>Where does it come from?</h5><p>Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literaturefrom 45 BC, making it over 2000 years old. RichardMcClintock, a Latin professor at Hampden-Sydney College inVirginia, looked up one of the more obscure Latin words,consectetur, from a Lorem Ipsum passage, and going throughthe cites of the word in classical literature, discoveredthe undoubtable source. Lorem Ipsum comes from sections1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (TheExtremes of Good and Evil) by Cicero, written in 45 BC. Thisbook is a treatise on the theory of ethics, very popularduring the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s isreproduced below for those interested. Sections 1.10.32 and1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied byEnglish versions from the 1914 translation by H. Rackham.</p><h3>Where can I get some?</h3><p>There are many variations of passages of Lorem Ipsumavailable, but the majority have suffered alteration in someform, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use apassage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeatpredefined chunks as necessary, making this the first truegenerator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentencestructures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free fromrepetition, injected humour, or non-characteristic wordsetc.</p>'
      },
      {
        slug: 'aussie-broadband',
        name: 'Aussie Broadband',
        backgroundImage: 'img-work-aussie-broadband.jpg',
        clientLogo: 'logo-aussie-broadband-green',
        title: 'Boosting revenue from <br />$25m to $200m',
        content:
          '<h3>What is Lorem Ipsum?</h3><p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make atype specimen book.<strong>It has survived not only five centuries</strong>,but also the leap into electronic typesetting, remainingessentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsumpassages, and more recently with desktop publishing softwarelike Aldus PageMaker including versions of Lorem Ipsum.</p><img class="img-fluid" src="/images/img-work-lj-hooker.jpg"alt="Work LJ Hooker"/><h3>Why do we use it?</h3><p>It is a long established fact that a reader will bedistracted by the readable content of a page when looking atits layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed tousing \'Content here, content here\', making it look likereadable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default modeltext, and a search for \'lorem ipsum\' will uncover many websites still in their infancy. Various versions have evolvedover the years, sometimes by accident, sometimes on purpose(injected humour and the like).</p><h5>Where does it come from?</h5><p>Contrary to popular belief, Lorem Ipsum is not simply randomtext. It has roots in a piece of classical Latin literaturefrom 45 BC, making it over 2000 years old. RichardMcClintock, a Latin professor at Hampden-Sydney College inVirginia, looked up one of the more obscure Latin words,consectetur, from a Lorem Ipsum passage, and going throughthe cites of the word in classical literature, discoveredthe undoubtable source. Lorem Ipsum comes from sections1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (TheExtremes of Good and Evil) by Cicero, written in 45 BC. Thisbook is a treatise on the theory of ethics, very popularduring the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section1.10.32.</p><p>The standard chunk of Lorem Ipsum used since the 1500s isreproduced below for those interested. Sections 1.10.32 and1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied byEnglish versions from the 1914 translation by H. Rackham.</p><h3>Where can I get some?</h3><p>There are many variations of passages of Lorem Ipsumavailable, but the majority have suffered alteration in someform, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use apassage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeatpredefined chunks as necessary, making this the first truegenerator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentencestructures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free fromrepetition, injected humour, or non-characteristic wordsetc.</p>'
      }
    ]

    // Used for simple pages like /contact and /privacy-policy
    const bannerContent = ref('')

    provide('headerHeight', headerHeight)
    provide('clients', clients)
    provide('bannerContent', bannerContent)

    return { bannerContent }
  },
  components: {
    PageHeader,
    PageFooter,
    ThemeFonts
  },
  provide: {
    socialMedia: {
      0: {
        name: 'Facebook',
        icon: 'logo-facebook',
        link: 'https://www.facebook.com/Webprofits/'
      },
      1: {
        name: 'Twitter',
        icon: 'logo-twitter',
        link: 'https://twitter.com/webprofits'
      },
      2: {
        name: 'LinkedIn',
        icon: 'logo-linkedin',
        link: 'https://www.linkedin.com/company/webprofits/'
      },
      3: {
        name: 'Instagram',
        icon: 'logo-instagram',
        link: 'https://www.instagram.com/webprofits/'
      },
      4: {
        name: 'YouTube',
        icon: 'logo-youtube-podcast',
        link: 'https://www.youtube.com/webprofitsau'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.route-slide-enter-from {
  opacity: 1;
  transform: translateX(100px);
}

.route-slide-enter-active {
  transition: all 0.25s cubic-bezier(0.75, 0.25, 0.13, 0.92);
}

.route-slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.75, 0.25, 0.13, 0.92);
}

.route-fade-enter-from {
  opacity: 1;
}

.route-fade-enter-active {
  transition: all 0.25s cubic-bezier(0.75, 0.25, 0.13, 0.92);
}

.route-fade-leave-to {
  opacity: 0;
}

.route-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.75, 0.25, 0.13, 0.92);
}
</style>