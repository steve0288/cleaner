<template>
  <div class="navbar-header">
    <img class="logo" src="img/icons/hole-crew-logo.png" alt="Hole Crew Logo" />
    <img alt="Vue logo" src="assets/logo.png"/>
    <nav>
      <a href="#service">Service</a>
      <a href="#prices">Prices</a>
      <a href="#about-us">About Us</a>
      <a href="#contact-us">Contact Us</a>
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </nav>
    <router-view />
    <div class="contact-us">
    </div>
  </div>

</template>

<style lang="scss">
#app {
  font-family: DM Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
