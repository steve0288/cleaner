<template>
  <div class="navbar-header">
    <div class="navbar">
      <img class="logo" src="img/icons/the-hole-crew-icon.png" alt="Hole Crew Logo" />
      <nav>
        <a href="#home" id="home">Home</a>
        <a href="#service">Service</a>
        <a href="#prices">Prices</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
      <div class="nav-contact-container">
        <img src="img/icons/phone-icon.svg" alt="Hole Crew Contact" />
        <p> 0401705339 </p>
        <button class="orange-button">Book Online</button>
      </div>
    </div>
    <div class="navbar-mobile">
      <img class="logo" src="img/icons/the-hole-crew-icon.png" alt="Hole Crew Logo" />
      <nav>
        <ul>
          <li><a href="#home" id="home">Home</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#prices">Prices</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
      <div class="nav-contact-container">
        <p><img src="img/icons/phone-icon.svg" alt="Hole Crew Contact" />0401705339 </p>
        <button class="orange-button">Book Online</button>
      </div>
    </div>
  </div>
  <router-view />

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
  margin: 8px auto auto auto;
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
    margin: 10px;
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

.full-section{
  margin: 50px auto 0px auto;
  max-width: 100%;
}

@media only screen and (max-width: 999px){
  .section-width{
    max-width: 80vw;
    width: 100%;
  }
  .navbar-mobile{
    display: flex;
    position: absolute;
    background-color: white;
    height: 100vh;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    ul{
      list-style: none;
      text-align: center;
      padding: 0;
      li{
        margin: 7px;
      }
    }
    .logo{
      max-width: 180px;
    }
    .nav-contact-container{
      flex-direction: column;
      p{
        display: flex;
      }
      img{
        margin-right: 5px;
      }
    }
    a:hover{
      color: $hole-crew-orange;
    }
    a{
      text-decoration: none;
    }
  }
  .navbar{
    display: none;
  }

  form.appointment-form{
    max-width: 390px;
    position: relative;
    z-index: 2;
    flex-direction: column;
    padding: 30px;
    label{
      max-width: 100%;
      margin-bottom: 20px;
    }
    input, select{
      margin-bottom: 15px;
    }
  }

  //Allows the mobile version to scale on smaller screens
  .home-section .cta-widget-container{
    display: none;
  }
}

@media only screen and (min-width: 1000px){
  .navbar-mobile{
    display: none;
  }
  .navbar{
    display: flex;
  }
}

@media only screen and (max-width: 600px) {
  form.appointment-form{
    max-width: calc(80vw - 50px);
  }
}

</style>
