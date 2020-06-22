<template>
  <div id="app">
    <div class="router__wave-transition"></div>
    <div class="router__wave-transition--looper"></div>
    <div class="max-bound">
      <div class="home__main-container">
        <div class="home__outer-content">
          <div class="main-nav__toggle"></div>
          <div class="social"></div>
        </div>
        <img class="logo" alt="Aura Bravo logo" src="../public/assets/img/Recurso1logo.png" />
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        </div>-->
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #222222;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul,
li {
  list-style: none;
  padding: 0;
  padding-left: 0;
}
.max-bound {
  margin: 0 auto;
  max-width: 1440px;
  width: 70vw;
}

.logo {
  position: absolute;
  width: 120px;
  left: 50%;
  transform: translateX(-50%);
}
.logo::before {
  content: "";
  display: block;
  position: relative;
  width: 100%;
  padding-top: 50px;
}

/* .home__outer-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
} */
.main-nav__toggle,
.social {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  background-color: black;
  border-radius: 50%;
}
.main-nav__toggle {
  left: 3.75vw;
}
.social {
  right: 3.75vw;
}
</style>