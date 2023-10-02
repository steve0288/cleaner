<template>
  <div class="categories">
    <div class="housekeeping" @click="selectCategory('Housekeeping')">Housekeeping</div>
    <div class="bathroom-cleaning" @click="selectCategory('Bathroom Cleaning')">Bathroom Cleaning</div>
    <div class="window-cleaning" @click="selectCategory('Window Cleaning')">Window Cleaning</div>
    <div class="wall-cleaning" @click="selectCategory('Wall Cleaning')">Wall Cleaning</div>
    <div class="commercial-cleaning" @click="selectCategory('Commercial Cleaning')">Commercial Cleaning</div>
  </div>
    <div class="price-container">
      <div class="row price-header">
        <div class="col"><h2>{Category}</h2></div>
        <div class="col"><h2>{Subtitle}</h2></div>
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
import { CleaningService, cleaningServices } from '@/types/Prices'

export default {
  data() {
    return {
      selectedCategory: '' as string,
      cleaningServiceData: cleaningServices as CleaningService[]
    }
  },
  created() {
    this.cleaningServiceData = cleaningServices
  },
  computed: {
    filteredServices() {
      return this.cleaningServiceData.filter((cleaningServiceData) =>
        this.selectedCategory ? cleaningServiceData.Category === this.selectedCategory : true
      )
    },
    selectedCategoryMinimumNotes() {
      const selectedService = this.cleaningServiceData.find((cleaningServiceData) => cleaningServiceData.Category === this.selectedCategory)
      return selectedService ? selectedService.MinimumNotes : ''
    }
  },
  methods: {
    selectCategory(category: string) {
      console.log('test')
    }
  }
}
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
  margin: 10vh auto;
  width: 290px;

  .col:first-child{
    width: 200px;
  }

  .col:nth-child(2){
    width: 80px;
  }

  .col{
    padding: 10px 15px;
    h2{
      margin: 10px 0;
    }
  }
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
