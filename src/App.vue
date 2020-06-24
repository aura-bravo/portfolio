<template>
  <div id="app">
    <div class="pointer-circle" ref="circleRef"></div>
    <div class="pointer" ref="pointer"></div>
    <div class="router__wave-transition"></div>
    <div class="router__wave-transition--looper"></div>
    <div class="scroll-measurer">
      <p>Scroll</p>
      <span></span>
      <p>Done</p>
    </div>
    <div class="max-bound">
      <div class="main-container" :class="{ 'main-container--not-home': $route.path != '/' }">
        <!-- <div class="home__outer-content">
          <div class="main-nav__toggle"></div>
          <div class="social"></div>
        </div>-->
        <header>
          <img class="logo" alt="Aura Bravo logo" src="../public/assets/img/Recurso1logo.png" />
          <div
            class="nav-menu__trigger"
            @click="openMenu"
            :class="{
              'nav-menu__trigger--triggered': $store.state.isMenuOpened,
            }"
          >
            <span></span>
          </div>
          <nav class="nav" :class="{ 'nav--opened': $store.state.isMenuOpened }">
            <router-link to="/contact">Contact</router-link>
            <span></span>
            <router-link to="/about">About</router-link>
            <span></span>
            <router-link to="/">Home</router-link>
          </nav>
        </header>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import routerTransitionVue from "./mixins/router-transition.vue";
import scrollMeasureVue from "./mixins/scroll-measure.vue";
import * as debounce from "lodash.debounce";
export default {
  name: "App",
  mounted() {
    /* if (this.$route.path != "/") {
      this.$router.push("/");
    } */
    this.addEvents();
    this.routerTransition();
    //this.init();
  },
  data() {
    return {
      rawX: Number,
      rawY: Number,
      halfW: Number,
      halfH: Number
    };
  },
  mixins: [routerTransitionVue, scrollMeasureVue],
  methods: {
    openMenu() {
      this.$store.commit("toggleMenu", !this.$store.state.isMenuOpened);
      if (this.$store.state.isMenuOpened) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    addEvents() {
      window.addEventListener("mousemove", event => {
        this.followPointer(event);
      });
      this.resizeEvent();
    },
    followPointer(e) {
      this.rawX = e.clientX;
      this.rawY = e.clientY;
      this.halfW = window.innerWidth / 2;
      this.halfH = window.innerHeight / 2 - window.scrollY;
      gsap.to(this.$refs.circleRef, 0.5, {
        x: this.rawX - this.halfW,
        y: this.rawY - this.halfH
      });
      gsap.to(this.$refs.pointer, 0, {
        x: this.rawX - this.halfW,
        y: this.rawY - this.halfH
      });
    },
    resizeEvent: debounce(function() {
      window.addEventListener("resize", event => {
        this.init();
        this.resetMenu();
      });
    }, 200)
  },
  watch: {
    "$route.path": function() {
      setTimeout(() => {
        this.init();
      }, 700);
    }
  }
};
</script>

<style>
#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414040;
  background-color: #f5f5f1;
  min-height: 100vh;
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
  top: 48px;
  left: 50%;
  width: 100px;
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
