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
    <div class="contact-us">
    </div>
  </div>

</template>

<style lang="scss">

$hole-crew-orange: #E99600;
$hole-crew-orange-hover: #e99700c5;

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

*{
  font-family: DM Sans, Helvetica, Arial, sans-serif;
}

.cta-header-text{
  font-size: 48px;
}

.orange-text{
  color: $hole-crew-orange;
}

.flex{
  display: flex;
}

.text-left{
  text-align: left;
}

.bold{
  font-weight: bold;
}

.max-w-115{
  max-width: 115px;
}

.max-w-400{
  max-width: 400px;
}

.max-w-500{
  max-width: 500px;
}

.max-w-700{
  max-width: 700px;
}

#home{
  color: $hole-crew-orange;
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

.orange-button{
  background-color: $hole-crew-orange;
  color: white;
  border-radius: 4px;
  padding: 2px 35px;
  height: 35px;
  border: none;
  margin-left: 20px;
  font-weight: 500;
}

.about-us-button{
  margin-left: 0;
}

.orange-button:hover{
  background-color: $hole-crew-orange-hover;
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
}

@media only screen and (max-width: 999px){
  .section-width{
    max-width: 80vw;
    width: 100%;
  }
}

</style>
