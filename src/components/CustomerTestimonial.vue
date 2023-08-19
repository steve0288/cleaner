<template>
  <div class="section section-width">
      <h2 class="cta-h2">Testimonials</h2>
      <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </div>
  <div class="services-section flex center-flex-content">
    <div class="services-container flex relative center-flex-content">
      <div class="left-container m-50">
        <img src="img/quotation.svg" class="quote-image"/>
        <div class="what-they-say-text">What they say about the Hole Crew</div>
        <div class="more-than-text">More than 100 customers have recommended the Hole Crew</div>
      </div>
      <div class="right-container">
        <img src="img/stars.svg" class="stars"/>
        <div class="quote">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</div>
        <div class="bottom-container">
          <div class="customer-container">
            <img src="img/customers/resky.png" class="customer-icon"/>
            <div>
              <div class="bold">Resky Fernanda</div>
              <div>Liverpool Customer</div>
            </div>
          </div>
          <div class="arrow-container">
            <button class="left-arrow">&larr;</button>
            <button class="right-arrow">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  data() {
    return {

    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
  @import '../assets/scss/variables.scss';

  .cta-h2{
    color: $hole-crew-navy;
  }

  .right-container{
    border-radius: 15px;
    max-width: 590px;
    width: 100%;
    color: white;
    background-color: $hole-crew-orange;
    max-height: 250px;
    height: 100%;
    text-align: left;
    padding: 25px;
  }

  .left-container{
    max-width: 350px;
    width: 100%;
    color: white;
    text-align: left;
  }

  .services-container{
    height: 450px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    flex-direction: row;
  }

  .quote-image{
    margin-bottom: 15px;
  }

  .what-they-say-text{
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 32px;
  }

  .more-than-text{
    font-weight: 100;
    font-size: 16px;
  }

  .services-section{
    width: 100%;
    margin: 50px auto 0px auto;
    background-color: $hole-crew-navy;
    height: 450px;
    left: 0;
  }

  .quote{
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    display: flex;
    height: 65px;
    margin: 50px 0;
  }

  .stars{
    height: 20px;
  }

  .customer-container{
    height: 60px;
    width: 260px;
    display: flex;
    align-items: center;
  }

  .customer-icon{
    height: 60px;
    margin-right: 15px;
  }

  .button-container{
    max-width: 200px;
  }

  .bottom-container{
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  }

  .arrow-container{
    display: flex;
    align-items: center;
  }

  .right-arrow,
  .left-arrow{
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
    border-radius: 50px;
    padding: 10px;
    border-color: white;
    color: white;
    width: 40px;
    height: 40px;
  }

  .left-arrow{
    margin-right: 10px;
  }

  @media screen and (max-width: 999px){
    .left-container,
    .right-container{
      max-width: 80vw;
    }
    .more-than-text{
      margin-bottom: 20px;
    }
    .services-section,
    .services-container{
      height: 650px;
    }
    .services-container{
      flex-direction: column;
    }
  }

  @media screen and (max-width: 600px){
    .right-container{
      max-width: 70vw;
    }
    .left-container.m-50{
      margin-right: 0;
    }
  }
</style>
