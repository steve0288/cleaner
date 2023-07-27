<template>
  <div class="section">
      <h2 class="cta-h2">Testimonials</h2>
      <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </div>
  <div class="services-section flex center-flex-content absolute">
    <div class="services-container flex flex-row relative center-flex-content">
      <div class="left-container m-50">
        <img src="img/quotation.svg" class="quote-image"/>
        <div class="what-they-say-text">What they say about the Hole Crew</div>
        <div class="more-than-text">More than 100 customers have recommended the Hole Crew</div>
      </div>
      <div class="right-container">
        <img src="" class="stars"/>
        <div class="quote">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</div>
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
    height: 500px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
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
    height: 500px;
    left: 0;
  }

  .quote{
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    display: flex;
    height: 200px;
  }
</style>
