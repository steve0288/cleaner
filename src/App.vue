<template>
  <div class="navbar-header">

    <!--<img alt="Vue logo" src="assets/logo.png"/>-->
    <div class="navbar">
      <img class="logo" src="img/icons/the-hole-crew-icon.png" alt="Hole Crew Logo" />
      <nav>
        <a href="#home" id="home">Home</a>
        <a href="#service">Service</a>
        <a href="#prices">Prices</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
        <!--<router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>-->
      </nav>
      <div class="nav-contact-container">
        <img src="img/icons/phone-icon.svg" alt="Hole Crew Contact" />
        <p> 0401705339 </p>
        <button class="orange-button">Book Online</button>
      </div>
    </div>
    <router-view />
  </div>
  <div class="section">
      <h2 class="cta-h2">Cleaning is hard work. Use The Hole Crew to make your life easier!</h2>
      <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
  </div>
  <div class="section flex center-flext-content">
    <div class="group-container">
      <div class="container-1" @click="handleClick">
        <div class="ellipses">
          <img src="img/icons/bonded-insured.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">We Are Bonded And Insured</h2>
        <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
      </div>

      <div class="container-2" @click="handleClick">
        <div class="ellipses">
            <img src="img/icons/appointment.svg" class="icon"/>
          </div>
        <h2 class="cta-h3">Weekend Appointments</h2>
        <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
      </div>
    </div>
    <div class="group-container">
      <div class="container-3 active" @click="handleClick">
        <div class="ellipses">
          <img src="img/icons/hotline.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">Customers Hotline 24/7</h2>
        <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
      </div>

      <div class="container-4"  @click="handleClick">
        <div class="ellipses">
          <img src="img/icons/world.svg" class="icon"/>
        </div>
        <h2 class="cta-h3">Eco Friendly Cleaning Products</h2>
        <p class="max-w-600 m-auto text-normal">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
export default {
  methods: {
    handleClick() {
      // Handle the click event
    }
  }
}
</script>

<style lang="scss">

@import 'assets/scss/variables.scss';

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  src: url("assets/fonts/DMSans-Regular.woff2") format("woff2"),
    url("assets/fonts/DMSans-Regular.ttf") format("ttf");
  font-weight: 400;
}

@font-face {
  font-family: "DM Sans";
  src: url("assets/fonts/DMSans-Medium.woff2") format("woff2"),
    url("assets/fonts/DMSans-Regular.ttf") format("ttf");
  font-weight: 500;
}

@font-face {
  font-family: "DM Sans";
  src: url("assets/fonts/DMSans-Bold.woff2") format("woff2"),
    url("assets/fonts/DMSans-Regular.ttf") format("ttf");
  font-weight: 700;
}

#app {
  font-family: DM Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#home{
  color: $hole-crew-orange;
}

.ellipses{
  background-color: #E996001A;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
}

.active .ellipses{
  background-color: white;
}

.icon{
  width: 35px;
  height: auto;
}

.navbar-header{
  max-width: 1000px;
  margin: auto;
}

.navbar{
  display:  flex;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration: none;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 500;
  }
  a:hover{
    color: $hole-crew-orange;
  }
}

button.about-us-button{
  margin-left: 0;
}

.nav-contact-container{
  display: flex;
  align-items: center;
  p{
    margin-left: 10px;
    display: inline-block;
    font-weight: bold;
  }
  p:hover{
    color: $hole-crew-orange;
  }
}

.logo{
  max-width: 60px;
  width: 100%;
  height: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cleaner-cta{
  max-width: 605px;
  height: auto;
  background: url('@/../public/img/ellipse.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  max-height: 500px;
  position: absolute;
  right: 50px;
  z-index: -1;
}

.cta-widget-container{
  flex-direction: row;
  max-width: 480px;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 45px;
  align-items: center;
}

.thumbs-up-icon{
  width: 33px;
  height: 34px;
}

.customer-image-container{
  display: flex;
  position: relative;
  justify-content: left;
  width: 115px;
  .customer-1{
    position: relative;
  }
  .customer-2{
    left: 25px;
  }
  .customer-3{
    left: 50px;
  }
  .customer-4{
    left: 75px;
  }
}

.customer-icon-position{
  position: absolute;
}

.section{
  margin: 50px auto 0px auto;
  max-width: 1000px;
}

@media only screen and (max-width: 999px){
  .section-width{
    max-width: 80vw;
    width: 100%;
  }
}

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
    max-width: 350px;
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
</style>
