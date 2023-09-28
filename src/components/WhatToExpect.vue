<template>
    <div class="section section-width what-to-expect-container" id="what-to-expect">
      <h2>What to Expect?</h2>
      <div>
        <p>The Hole Crew is your trusted partner for residential cleaning services throughout Sydney, specializing in serving house cleaning. With over 10 years of experience, our dedicated cleaning teams are available for repeat or one-time spring cleanings, perfect for refreshing your space as the seasons change.</p>
        <p>Additionally, we're experts in maintaining a clean and sanitary environment in gyms, offices or stores and can provide customized deep cleaning solutions for both indoor and outdoor areas at competitive rates</p>
        <p>If you ever find our services not meeting your expectations, please don't hesitate to inform us. We are committed to promptly addressing and resolving any issues related to our team's work.</p>
      </div>
    </div>
    <div class="section section-width equipment-detergents-container">
      <div class="text-container">
        <h2 class="text-left">Cleaning Equipment & Detergents</h2>
        <div class="text-left">
          <p>At The Hole Crew, we are sensitive to your allergy concerns and can provide products tailored to your specific requirements, ensuring a healthy environment for your family.</p>
          <p>Our dedicated house cleaners in Sydney come fully prepared to deliver. When you request a quote, you can trust that we will be equipped with the necessary tools and materials to handle the task effectively, whether it's residential, commercial, or post-construction cleaning.</p>
          <ul>
            <li>Vacuum Cleaners</li>
            <li>Brooms and Dustpans</li>
            <li>Mops and Buckets</li>
            <li>Microfiber Cloths and Dusters</li>
            <li>Sponges and Scrub Brushes</li>
            <li>Cleaning Agents</li>
            <li>Squeegees</li>
            <li>Steam Cleaners</li>
            <li>Pressure Washers</li>
            <li>Safety Gear</li>
            <li>Trash Bags and Bins</li>
            <li>Extension Poles</li>
            <li>Rotary machines for tile and grout cleaning, etc.</li>
          </ul>
          <p class="italics">*Surcharge for rubbish collection</p>
        </div>
      </div>
      <img src="img/cleaning-services/mopping.svg" alt="Mopping" class="mopping-image">
    </div>
    <div class="section section-width we-care-container">
      <h2>We care about your health!</h2>
      <div>We prioritize your well-being and safety. Our cleaning agents can be tailored to your environment. We have on hand products that are pet-friendly, non-toxic, and rigorously tested for domestic use.</div>
      <div class="icon-group">
        <div class="group-item">
          <div class="icon-container eco-blue">
            <img src="img/icons/eco.svg" alt="Eco-Friendly" class="icon">
          </div>
          <h3>Eco Friendly</h3>
        </div>
        <div class="group-item">
          <div class="icon-container safe-pink">
            <img src="img/icons/child-safe.svg" alt="Child Safe" class="icon">
          </div>
          <h3>Child Safe</h3>
        </div>
        <div class="group-item">
          <div class="icon-container friendly-yellow">
            <img src="img/icons/pet-friendly.svg" alt="Pet Friendly" class="icon">
          </div>
          <h3>Pet Friendly</h3>
        </div>
      </div>
    </div>
</template>

<script lang="ts">

export default {

}

</script>

<style lang="scss">

@import '../assets/scss/variables.scss';

.what-to-expect-container{
  display: flex;
  flex-direction: column;
  text-align: center;
  h2{
    color: $hole-crew-navy;
  }
}

.equipment-detergents-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 550px;
  align-items: center;
}

.text-container{
  max-width: 50%;
  h2{
    color: $hole-crew-navy;
  }
}

.mopping-image{
  max-height: 100%;
}

.we-care-container{
  margin-top: 70px;
  h3{
    font-size: 17px;
  }
}

.icon-container{
  height: 115px;
  width: 115px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group-item{
  flex-direction: column;
  display: flex;
  align-items: center;
}

.icon-group{
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
}

@media screen and (max-width: 999px){
  .equipment-detergents-container{
    height: unset;
    flex-direction: column;
  }
  .mopping-image{
    max-height: 450px;
    max-width: 80vw;
  }
  .text-container{
    max-width: unset;
  }

  .icon-group{
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
  .icon-container{
    height: 65px;
    width: 65px;
    .icon{
      max-width: 30px;
      max-height: 30px;
    }
  }
}

.eco-blue{
  background-color: #DEF4FF;
}
.safe-pink{
  background-color: #FFEBDF;
}
.friendly-yellow{
  background-color: #FFF6D0;
}

.icon{
  max-width: 59px;
  width: 100%;
  max-height: 59px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
