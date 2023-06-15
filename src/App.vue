<template>
  <div>
    <div id="app" :class="{ 'is-contact-page': $route.name === 'Contact' }">
      <div class="pointer__wrapper">
        <div class="pointer-circle" ref="circleRef"></div>
        <div class="pointer" ref="pointer"></div>
      </div>
      <nav
        class="nav"
        ref="navRef"
        :class="{ 'nav--opened': $store.state.isMenuOpened }"
      >
        <router-link class="linked" to="/contact">Contact</router-link>
        <span></span>
        <router-link class="linked" to="/about">About</router-link>
        <span></span>
        <router-link class="linked" to="/">Home</router-link>
      </nav>
      <div class="scroll-measurer">
        <p>Scroll</p>
        <span></span>
        <p>Done</p>
      </div>
      <smooth-scroll>
        <header>
          <div
            class="logo__wrapper"
            @click="handleClick"
            v-if="!$store.state.transitioning"
          >
            <img
              class="logo"
              alt="Aura Bravo logo"
              src="../public/assets/img/Recurso1logo.png"
            />
          </div>
          <div
            class="nav-menu__trigger"
            @click="openMenu"
            :class="{
              'nav-menu__trigger--triggered': $store.state.isMenuOpened
            }"
          >
            <span></span>
          </div>
        </header>
        <div class="max-bound" id="appWrapper">
          <div
            class="main-container"
            :class="{ 'main-container--not-home': $route.path != '/' }"
          >
            <div
              class="content__container"
              :class="{ transitioning: $store.state.transitioning }"
            >
              <router-view />
            </div>
          </div>
        </div>
      </smooth-scroll>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import routerTransitionVue from './mixins/router-transition.vue';
import scrollMeasure from './mixins/scroll-measure';
import * as debounce from 'lodash.debounce';
import SmoothScroll from './views/SmoothScroll.vue';
export default {
  components: { SmoothScroll },
  name: 'App',
  mounted() {
    this.addEvents();
    //this.setWaveAnimation();
    this.onRouteChange();
    this.mountMouseOverEvent();
  },
  data() {
    return {
      rawX: Number,
      rawY: Number,
      halfW: Number,
      halfH: Number,
      pointerX: Number,
      pointerY: Number,
      mousePositionBackup: {
        x: Number,
        y: Number
      }
    };
  },
  mixins: [routerTransitionVue, scrollMeasure],
  methods: {
    mountMouseOverEvent() {
      const circle = document.querySelector('.pointer__wrapper');
      document.body.addEventListener('mouseover', event => {
        event.stopPropagation();
        if (!event.target.classList.contains('linked')) {
          return;
        } else {
          circle.classList.add('hovering');
        }
      });
      document.body.addEventListener('mouseout', event => {
        event.stopPropagation();
        if (!event.target.classList.contains('linked')) {
          return;
        } else {
          circle.classList.remove('hovering');
        }
      });
    },
    handleClick() {
      this.$router.replace({ path: '/' });
    },
    openMenu() {
      this.$store.commit('toggleMenu', !this.$store.state.isMenuOpened);
      if (this.$store.state.isMenuOpened) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    },
    addEvents() {
      window.addEventListener('mousemove', this.followPointer);
      this.resizeEvent();
    },
    followPointer(e) {
      gsap.to(this.$refs.circleRef, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'sine.out'
      });
      gsap.to(this.$refs.pointer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'sine.out'
      });
    },
    resizeEvent: debounce(function() {
      window.addEventListener('resize', event => {
        this.init();
        this.resetMenu();
      });
    }, 200)
  }
};
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414040;
  background-color: #f5f5f1;
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

.logo__wrapper {
  position: absolute;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
}
.logo__wrapper .logo {
  width: 100px;
}
.logo::before {
  content: '';
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
