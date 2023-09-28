<template>
  <div class="price-container">
    <div class="row price-header">
      <div class="col"><h2>Service</h2></div>
      <div class="col"><h2>Prices</h2></div>
    </div>
    <div class="price-body">
        <div class="row">
          <div class="col">Weekly Cleaning</div>
          <div class="col">$45</div>
        </div>
      <div class="row">
        <div class="col">Fortnightly Cleaning</div>
        <div class="col">$48</div>
      </div>
      <div class="row">
        <div class="col">Catch Up Cleaning</div>
        <div class="col">$48</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

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
  .col{
    padding: 10px 15px;
    h2{
      margin: 10px 0;
    }
  }
}

.row{
  display: flex;
  flex-direction: row;
  margin: 10px auto;
}

.col{
  display: flex;
  flex-direction: column;
}

</style>
