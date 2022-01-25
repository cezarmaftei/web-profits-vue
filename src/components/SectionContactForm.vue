<template>
  <section class="section-contact-form pb-15">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-7">
          <div id="hubspot-form"></div>
        </div>
        <div class="col-12 col-md-6 col-xl-5">
          <div class="details_box">
            <p class="footer_title">SYDNEY</p>
            <p>L28, 161 Castlereagh Street<br />Sydney NSW 2000</p>
            <p>P: <a href="tel:+61288066800">+61 2 8806 6800</a></p>
          </div>
          <div class="details_box">
            <p class="footer_title">MELBOURNE</p>
            <p>L7, 222 Exhibition Street<br />Melbourne VIC 3000</p>
            <p>P: <a href="tel:+61384887821">+61 3 8488 7821</a></p>
          </div>
          <div class="details_box">
            <p class="footer_title">Singapore</p>
            <p>Level 10 <br />1 George Street <br />Singapore 049145</p>
          </div>
          <div class="details_box">
            <p class="footer_title">Los Angeles</p>
            <p>730 Arizona Avenue <br />Santa Monica California 90401 USA</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'SectionContactForm',
  setup () {
    const hubSpotScript = document.createElement('script')
    hubSpotScript.src = 'https://js.hsforms.net/forms/v2.js'

    onMounted(() => {
      // Load HubSpot form
      document.head.appendChild(hubSpotScript)
      hubSpotScript.addEventListener('load', () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: '2933318',
            formId: 'e8dfb3f8-f764-4ee5-8952-10c61d1cac63',
            target: '#hubspot-form'
          })
        }
      })
    })

    onUnmounted(() => {
      // Remove HubSpot script
      hubSpotScript.parentNode.removeChild(hubSpotScript)
    })
  }
}
</script>

<style>
</style>