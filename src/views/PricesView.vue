<template>
    <div class="price-container">
      <div class="categories">
        <div class="housekeeping price-button" @click="selectCategory('Housekeeping')"><img src="img/housekeeping.svg" class="price-icon"/>Housekeeping</div>
        <div class="bathroom-cleaning price-button" @click="selectCategory('Bathroom Cleaning')"><img src="img/bathroom.svg" class="price-icon"/>Bathroom Cleaning</div>
        <div class="window-cleaning price-button" @click="selectCategory('Window Cleaning')"><img src="img/window-cleaning.svg" class="price-icon"/>Window Cleaning</div>
        <div class="wall-cleaning price-button" @click="selectCategory('Wall Cleaning')"><img src="img/all-purpose.svg" class="price-icon"/>Wall Cleaning</div>
        <div class="commercial-cleaning price-button" @click="selectCategory('Commercial Cleaning')"><img src="img/commercial.svg" class="price-icon"/>Commercial Cleaning</div>
      </div>
      <div class="row price-header">
        <div class="col"><h3>{{ selectedCategory }}</h3></div>
        <div class="col"><h3>{{ selectedCategorySubtitle }}</h3></div>
      </div>
      <div class="price-body">
        <div class="row" v-for="service in filteredServices" :key="service.TaskDescription">
          <div class="col">{{ service.TaskDescription }}</div>
          <div class="col">{{ service.Price }}</div>
        </div>
      </div>
      <div class="price-footer">
        <div class="row">
          <div class="col">{{ selectedCategoryMinimumNotes }}</div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CleaningService, cleaningServices } from '@/types/Prices'

export default defineComponent({
  data() {
    return {
      selectedCategory: 'Housekeeping' as string,
      cleaningServiceData: [] as CleaningService[]
    }
  },
  computed: {
    filteredServices(): CleaningService[] {
      return this.cleaningServiceData.filter((cleaningServiceData) =>
        this.selectedCategory ? cleaningServiceData.Category === this.selectedCategory : true
      )
    },
    selectedCategorySubtitle(): string {
      const selectedService = this.cleaningServiceData.find((service) => service.Category === this.selectedCategory)
      return selectedService ? selectedService.Subtitle : ''
    },
    selectedCategoryMinimumNotes(): string {
      const selectedService = this.cleaningServiceData.find((cleaningServiceData) => cleaningServiceData.Category === this.selectedCategory)
      return selectedService ? selectedService.MinimumNotes : ''
    }
  },
  methods: {
    selectCategory(category: string) {
      this.selectedCategory = category
    }
  },
  created() {
    this.cleaningServiceData = cleaningServices as CleaningService[]
  }
})

</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.price-dialog{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 2;
}

.price-container{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  margin: auto;
  margin-top: 10px;
  max-width: 320px;

  .col:first-child{
    width: 200px;
  }

  .col:nth-child(2){
    width: 80px;
  }

  .col{
    /*padding: 10px 15px;*/
    h2{
      margin: 10px 0;
    }

    h3{
      margin: 0;
    }
  }
  .row{
    padding: 20px;
  }
}

.price-footer{
  display: block;
  max-width: 340px;
  width: 100%;
  text-align: left;
}

.price-header{
  h3{
    margin: 0;
  }
}

.price-footer .row{
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: $hole-crew-navy;
  color: white;
  .col{
    max-width: 320px;
    width: 100%;
  }
}

.price-header{
  background-color: black;
}

.price-button{
  background-color: $hole-crew-orange;
  color: white;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  margin: 7px;
  text-align: center;
  position: relative;
}

.price-button:hover{
  background-color: $hole-crew-orange-hover;
  cursor: pointer;
}

.price-icon{
  position: absolute;
  height: 20px;
  left: 10px;
}

.housekeeping{
  margin-top: 25px;
}

.commercial-cleaning{
  margin-bottom: 40px;
}

.categories{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.price-header{
  background-color: $hole-crew-navy;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0;
}

.price-body{
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.price-body .row:nth-child(odd){
  background-color: rgba(0,40,87,0.05);
}

.price-body .row:nth-child(even){
  background-color: rgba(0,40,87,0.01);
}

.row{
  display: flex;
  flex-direction: row;
  padding: 10px auto;
}

.col{
  display: flex;
  flex-direction: column;
}

</style>
