<template>
  <div class="home">
    <div class="section section-width flex text-left relative home-section">
      <div>
        <h1 class="cta-header-text max-w-700">Your <span class="orange-text">Satisfaction</span> is our <span class="orange-text">Priority</span></h1>
        <p class="text-14 about-us-text">We take pride in delivering pristine spaces and unparalleled service, ensuring your complete experience is exceptional.</p>
        <div class="flex cta-widget-container">
          <img src="img/thumbs-up.png" class="thumbs-up-icon" />
          <div class="max-w-115"><span class="bold">100%</span> Recommended</div>
          <div class="max-w-115 customer-image-container">
            <img src="img/icons/customer-1.png" class="customer-icon-position customer-1"/>
            <img src="img/icons/customer-2.png" class="customer-icon-position customer-2"/>
            <img src="img/icons/customer-3.png" class="customer-icon-position customer-3"/>
            <img src="img/icons/customer-4.png" class="customer-icon-position customer-4"/>
          </div>
          <div class="max-w-115"><span class="bold">108+</span> Customers</div>
        </div>
        <button class="orange-button about-us-button" @click="scrollToWhatToExpect">More About Us</button>
      </div>
      <img src="img/cleaner-cta.png" class="cleaner-cta" alt="Professional Cleaning">
    </div>
    <OnlineAppointments />
    <BusinessAttributes />
    <CleaningServices />
    <CustomerTestimonials />
    <WhatToExpect />
  </div>
</template>

<script lang="ts">
import OnlineAppointments from '@/components/OnlineAppointments.vue'
import BusinessAttributes from '@/components/BusinessAttributes.vue'
import CleaningServices from '@/components/CleaningServices.vue'
import CustomerTestimonials from '@/components/CustomerTestimonial.vue'
import WhatToExpect from '@/components/WhatToExpect.vue'

export default {
  name: 'App',
  components: { OnlineAppointments, BusinessAttributes, CleaningServices, CustomerTestimonials, WhatToExpect },
  methods: {
    scrollToWhatToExpect() {
      const whatToExpect = document.getElementById('what-to-expect')
      if (whatToExpect) {
        whatToExpect.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}

</script>

<style lang="scss">

.customer-image-container{
  display: flex;
  position: relative;
  justify-content: left;
  width: 115px;
  .customer-1{
    position: relative;
  }
  .customer-2{
    left: 25px;
  }
  .customer-3{
    left: 50px;
  }
  .customer-4{
    left: 75px;
  }
}

.about-us-text{
  max-width: 500px;
}

@media screen and (max-width: 999px) {
  .home-section{
    height: 100vh;
  }

  form.appointment-form{
    margin-top: 0;
    max-width: 75vw;
  }
  //Allows the mobile version to scale on smaller screens
  .home-section .cta-widget-container{
    display: none;
  }

  .cleaner-cta{
    max-width: 40vw;
    right: 0px;
    bottom: 0px;
    max-height: 350px;
  }

  .about-us-text{
    max-width: 38vw;
  }

  .cta-header-text{
    max-width: 50vw;
    margin-top: 0;
  }

  .home-section{
    height: unset;
  }

  button.about-us-button{
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 450px){
  .cta-header-text{
    font-size: 30px;
    max-width: unset;
  }

  .cleaner-cta{
    max-width: 40vw;
  }

  form.appointment-form{
    max-width: 65vw;
  }
}

</style>
