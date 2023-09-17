<template>
  <div class="section section-width">
      <h2 class="cta-h2">Explore a selection of our highest-rated cleaning solutions.</h2>
      <p class="max-w-600 m-auto text-normal">Check some of our top-rated cleaning services that exemplify our commitment to excellence and attention to detail.</p>
  </div>
  <div class="section section-width flex image-container">
    <div class="left-box relative">
      <div class="overlay main-image"></div>
      <span class="overlay-text">Housekeeping</span>
      <img src="img/cleaning-services/housekeeping.png" alt="housekeeping" class="housekeping main-image"/>
    </div>
    <div class="right-box-container">
      <div class="relative right-box">
        <div class="sub-image-overlay"></div>
        <span class="sub-image-overlay-text">Window Cleaning</span>
        <img src="img/cleaning-services/window.png" class="sub-image window"/>
      </div>
      <div class="relative right-box">
        <div class="sub-image-overlay"></div>
        <span class="sub-image-overlay-text">Grout Cleaning</span>
        <img src="img/cleaning-services/grout-cleaning.png" class="sub-image"/>
      </div>
      <div class="relative right-box">
        <div class="sub-image-overlay"></div>
        <span class="sub-image-overlay-text">Commercial Cleaning</span>
        <img src="img/cleaning-services/cleaning.png" class="sub-image commercial"/>
      </div>
      <div class="relative right-box">
        <div class="sub-image-overlay"></div>
        <span class="sub-image-overlay-text">Wall Cleaning</span>
        <img src="img/cleaning-services/wall-cleaning.webp" class="sub-image upholstery"/>
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

  .left-box{
    width: 50%;
    height: 100%;
    max-height: 480px;
    margin-top: 10px;
  }

  .right-box-container{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }

  .right-box{
    width: calc(50% - 20px);
    box-sizing: border-box;
    margin-left: 20px;
  }

  .right-box:nth-child(1),
  .right-box:nth-child(3){
    margin-left: 20px;
  }

  .overlay-text{
    font-size: 18px;
    position: absolute;
    color: white;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-grow: unset;
    width: 100%;
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
    width: 100%;
    bottom: 25px;
    font-weight: 500;
    margin-left: 8px;
    margin-right: 8px;
  }

  .main-image{
    flex-grow: unset;
    width: 100%;
    height: 100%;
    max-height: 480px;
  }

  .sub-image{
    height: 227px;
    margin: 10px;
    border-radius: 15px;
  }

  .overlay{
    position: absolute;
    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%);
    left: 0px;
    padding: 0;
    bottom: 0px;
    right: 0;
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
    height: 178px;
    width: 100%;
  }

  @media screen and (max-width: 999px){
    .image-container{
      flex-direction: column;
      align-items: center;
    }

    .left-box{
      max-width: 480px;
      width: 100%;
    }

    .right-box{
      width: unset;
      max-width: 230px;
      margin-left: unset;
    }

    .sub-image{
      height: 227px;
      margin: 10px;
      border-radius: 15px;
      margin-left: 0;
    }

    .sub-image-overlay{
      left: 0;
    }

    .sub-image-overlay-text{
      max-width: 213px;
    }

    .right-box-container{
      width: 100%;
      max-width: 480px;
      justify-content: space-evenly;
    }

    .main-image{
      margin: auto;
      max-height: 480px;
      max-width: 480px;
    }
  }
  @media screen and (max-width: 600px){
    .left-box{
      height: 100%;
      bottom: 0;
      margin: 0;
      max-width: 300px;
      max-height: 300px;
    }

    .right-box{
      max-width: 300px;
      width: 100%;
      max-height: 300px;
      height: 100%;
      bottom: 0;
    }
    .sub-image{
      max-width: 300px;
      width: 100%;
      max-height: 300px;
      height: 100%;
      bottom: 0;
      margin: 0;
    }
    .sub-image-overlay{
      bottom: 2px;
      max-width: 300px;
      width: 100%;
      max-height: 300px;
      height: 100%;
      margin: 0;
    }
    .sub-image-overlay-text{
      max-width: 300px;
      font-size: 18px;
    }
    .right-box-container{
      .right-box{
        margin: 20px 0 0 0;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .left-box.relative{
      max-height: 100%;
      max-width: 100%;
    }
  }
</style>
