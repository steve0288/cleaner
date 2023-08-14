<template>
    <div class="section section-width what-to-expect-container">
      <h2>What to Expect?</h2>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    <div class="section section-width equipment-detergents-container">
      <div class="text-container">
        <h2 class="text-left">Cleaning Equipment & Detergents</h2>
        <div class="text-left">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul>
            <li>vacuum cleaner</li>
            <li>sponges</li>
            <li>mops</li>
            <li>broom</li>
            <li>duster</li>
            <li>squeegee for window cleaning</li>
            <li>rotary machines for tile and grout cleaning, etc.</li>
          </ul>
          <p>unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
      </div>
      <img src="img/cleaning-services/mopping.svg" alt="Mopping" class="mopping-image">
    </div>
    <div class="section section-width we-care-container">
      <h2>We care about your health!</h2>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
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
  height: 450px;
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
