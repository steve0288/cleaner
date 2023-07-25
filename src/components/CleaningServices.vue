<template>
  <div class="section">
      <h2 class="cta-h2">Check some of our top-rated cleaning services.</h2>
      <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </div>
  <div class="section flex center-flext-content">
    <div class="services-container flex flex-row relative  ">
        <div class="overlay main-image"></div>
        <span class="overlay-text">Housekeeping</span>
        <img src="img/cleaning-services/housekeeping.png" alt="housekeeping" class="flex-g-2 max-w-440 housekeping main-image"/>
      <div class="flex-column flex-g-2">
        <div class="flex flex-row relative">
          <div class="relative">
            <div class="sub-image-overlay"></div>
            <span class="sub-image-overlay-text">Window Cleaning</span>
            <img src="img/cleaning-services/window.png" class="max-w-200 sub-image window"/>
          </div>
          <div class="relative">
            <div class="sub-image-overlay"></div>
            <span class="sub-image-overlay-text">Carpet Cleaning</span>
            <img src="img/cleaning-services/vacuuming.png" class="max-w-200 sub-image carpet"/>
          </div>
        </div>
        <div class="flex flex-row relative">
          <div class="relative">
            <div class="sub-image-overlay"></div>
            <span class="sub-image-overlay-text">Commercial Cleaning</span>
            <img src="img/cleaning-services/cleaning.png" class="max-w-200 sub-image commercial"/>
          </div>
          <div class="relative">
            <div class="sub-image-overlay"></div>
            <span class="sub-image-overlay-text">Upholstery Cleaning</span>
            <img src="img/cleaning-services/upholstery.png" class="max-w-200 sub-image upholstery"/>
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

  .overlay-text{
    font-size: 18px;
    position: absolute;
    color: white;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-grow: unset;
    width: 360px;
    bottom: 30px;
    font-weight: 500;
  }

  .sub-image-overlay-text{
    font-size: 14px;
    position: absolute;
    color: white;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-grow: unset;
    width: 169px;
    bottom: 25px;
    font-weight: 500;
    margin-left: 8px;
    margin-right: 8px;
  }

  .services-container{
    flex-direction: row;
  }

  .main-image{
    height: 400px;
    flex-grow: unset;
    width: 360px;
    height: 368px;
    padding: 7px;
  }

  .sub-image{
    height: 169px;
    margin: 10px;
    border-radius: 15px;
  }

  .overlay{
    position: absolute;
    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%);
    left: 7px;
    padding: 0;
    bottom: 13px;
    right: 7px;
    border-radius: 20px;
  }

  .sub-image-overlay{
    position: absolute;
    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%);
    left: 10px;
    padding: 0;
    bottom: 14px;
    right: 10px;
    border-radius: 20px;
    height: 165px;
  }

</style>
