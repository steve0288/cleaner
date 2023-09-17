<template>
  <div class="section section-width">
      <h2 class="cta-h2">Simplify Cleanliness with The Hole Crew – Your Path to Effortless Cleaning!</h2>
      <p class="max-w-600 m-auto text-normal">Our experienced team is dedicated to transforming your space, ensuring a spotless and comfortable environment for you to enjoy every day.</p>
  </div>
  <div class="section flex attributes-container">
    <div class="group-container">
      <div class="container-1" :class="{ active: activeContainer === 1 }" @click="handleClick(1)">
        <div class="ellipses">
          <img src="img/icons/bonded-insured.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">We Are Bonded And Insured</h2>
        <p class="max-w-600 m-auto text-normal">Providing you with peace of mind knowing that your property and belongings are protected while we deliver top-notch cleaning services.</p>
      </div>

      <div class="container-2" :class="{ active: activeContainer === 2 }" @click="handleClick(2)">
        <div class="ellipses">
            <img src="img/icons/appointment.svg" class="icon"/>
          </div>
        <h2 class="cta-h3">Weekend Appointments</h2>
        <p class="max-w-600 m-auto text-normal">Available to accommodate your busy schedule, ensuring convenience and flexibility in experiencing our exceptional cleaning services.</p>
      </div>
    </div>
    <div class="group-container">
      <div class="container-3" :class="{ active: activeContainer === 3 }" @click="handleClick(3)">
        <div class="ellipses">
          <img src="img/icons/hotline.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">Prompt Quote Turnaround</h2>
        <p class="max-w-600 m-auto text-normal"> Count on us for swift responses, with quotes typically arriving within 24 hours, ensuring a seamless and efficient service experience.</p>
      </div>

      <div class="container-4" :class="{ active: activeContainer === 4 }" @click="handleClick(4)">
        <div class="ellipses">
          <img src="img/icons/world.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">Eco Friendly Cleaning Products</h2>
        <p class="max-w-600 m-auto text-normal">We cater to your allergies with green cleaning solutions, ensuring a safer, healthier home.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

export default defineComponent({
  data() {
    return {
      activeContainer: null as number | null,
      containerCount: 4
    }
  },
  mounted() {
    this.setInitialActiveContainer()
  },
  methods: {
    setInitialActiveContainer() {
      const containerNumber = 3
      const container = document.querySelector(`.container-${containerNumber}`)
      if (container) {
        container.classList.add('active')
        this.activeContainer = containerNumber
      }
    },
    handleClick(containerNumber: number) {
      if (this.activeContainer === containerNumber) {
        this.activeContainer = null
      } else {
        this.activeContainer = containerNumber
      }
      for (let i = 1; i <= this.containerCount; i++) {
        if (i !== containerNumber) {
          const container = document.querySelector(`.container-${i}`)
          if (container) {
            container.classList.remove('active')
          }
        }
      }
    }
  }
})
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .cta-h2{
    max-width: 600px;
    text-align: center;
    margin: 90px auto 20px auto;
    font-size: 26px;
  }

  .cta-h3{
    max-width: 600px;
    text-align: center;
    margin: 90px auto 20px auto;
    font-size: 18px;
  }

  .group-container{
    margin: 0;
    .cta-h3{
      margin-top: 20px;
    }
    .container-1,
    .container-2,
    .container-3,
    .container-4{
      text-align: center;
      min-height: 250px;
      max-width: 390px;
      width: 100%;
      box-shadow: 0px 0px 10px 0px #00000014;
      border-radius: 20px;
      padding: 50px;
    }
    .container-1.active,
    .container-2.active,
    .container-3.active,
    .container-4.active,
    .container-1:hover,
    .container-2:hover,
    .container-3:hover,
    .container-4:hover  {
      background-color: $hole-crew-orange;
      color: white;
      .ellipses{
        background-color: white;
      }
    }
  }
  .container-1{
    margin-right: 10px;
    margin-bottom: 20px;
  }
  .container-2{
    margin-top: 20px;
    margin-right: 10px;
  }
  .container-3{
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .container-4{
    margin-left: 10px;
    margin-top: 20px;
  }
  .attributes-container{
    justify-content: space-between;
  }
  @media screen and (max-width: 999px){
    .attributes-container{
      flex-direction: column;
    }
    .group-container{
      .container-1,
      .container-2,
      .container-3{
        margin: auto auto 30px auto;
      }
      .container-4{
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 600px){
    .group-container{
      .container-1,
      .container-2,
      .container-3,
      .container-4{
        width: 100%;
        max-width: calc(80vw - 60px);
        padding: 30px;
      }
    }
  }
</style>
