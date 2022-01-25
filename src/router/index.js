import { createRouter, createWebHistory } from 'vue-router'
import { gsap } from 'gsap'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: () => import(/* webpackChunkName: "ContactPage" */ '../views/Home.vue'),
    meta: {
      transition: 'route-fade',
      banner: 'home-page',
      title: 'Homepage'
    }
  },
  {
    path: '/contact',
    name: 'Contact Page',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ContactPage" */ '../views/Contact.vue'),
    // component: ContactPage,
    meta: {
      transition: 'route-fade',
      banner: 'simple-page',
      title: 'Contact Us'
    }
  }, {
    path: '/case-studies/:client',
    name: 'Case Studies',
    component: () => import(/* webpackChunkName: "CaseStudies" */'../views/CaseStudies.vue'),
    // component: CaseStudiesPages,
    meta: {
      transition: 'none',
      banner: 'case-study-page'
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy Page',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ContactPage" */ '../views/PrivacyPolicy.vue'),
    // component: ContactPage,
    meta: {
      transition: 'route-fade',
      banner: 'simple-page',
      title: 'Privacy Policy'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    // Scrolling on the same page
    if (to.hash && from.hash) {
      return {
        el: to.hash
      }
    }

    // Scrolling when returning from another page
    // Need to wait 350ms to complete the <transition> animations which take 250ms
    // Wait an extra 100ms to be sure that the to.hash is loaded
    // See App.vue
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el: to.hash })
        }, 350)
      })
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, behavior: 'auto' }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // Case study animation
  const clickedElement = document.querySelector('.card-work .open')
  if (clickedElement) {
    const card = clickedElement.closest('.card')

    // Get card position in viewport
    const cardPosition = card.getBoundingClientRect()

    const animateCard = card.cloneNode(true)

    // Set cloned class for removal
    animateCard.classList.add('cloned-card')

    // Set styles
    animateCard.style.opacity = 1
    animateCard.style.position = 'fixed'
    animateCard.style.top = cardPosition.top + 'px'
    animateCard.style.left = cardPosition.left + 'px'
    animateCard.style.width = card.clientWidth + 'px'
    animateCard.style.height = card.clientHeight + 'px'

    document.body.appendChild(animateCard)

    const forwardVars = {
      duration: 1,
      left: 0,
      top: 0,
      width: 'calc(100vw - (100vw - 100%))', // width without scrollbar
      height: '100vh',
      zIndex: 2100,
      ease: 'expo',
      onComplete: function () {
        next()
      }
    }

    const animationTween = gsap.to(animateCard, forwardVars)
    animationTween.play()
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // Set meta titles
  if (to.params.client) {
    document.title = to.params.client.replace('-', ' ')
  } else {
    document.title = to.meta.title
  }
})

export default router
