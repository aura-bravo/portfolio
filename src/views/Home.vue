<style lang="scss" src="../styles/home.scss"></style>
<template>
  <div>
    <section
      class="section-spacer section-spacer--large scrolled__to"
      ref="sectionRef"
    >
      <div class="hero-wrapper">
        <div class="hero-info__wrapper">
          <h1 class="title__wrapper">
            <div class="title-animation">Aura Bravo.</div>
          </h1>
          <p>
            Hi, my name is Aura Bravo. I'm an Industrial Designer passionate
            about digital media and interfaces, it's design and development.
            Here is some of my work.
          </p>
        </div>
        <div class="hero-image__wrapper">
          <div class="hero-background-image section-image"></div>
        </div>
      </div>
    </section>
    <section
      class="section-spacer section-spacer--large"
      ref="sectionRef"
      v-for="(data, index) in projectData"
      :index="index"
      :key="data.id"
    >
      <router-link :to="`/${data.id}`">
        <div class="home__project-router">
          <div
            class="home__project-wrapper"
            :class="{ 'home__project-wrapper--reverse': !(index % 2 == 0) }"
          >
            <div
              class="home__project-image__wrapper section-image"
              :class="{
                'background-image__wrapper--opened': imageReleased == true,
              }"
            >
              <div
                class="home__project-background-image"
                :style="{ backgroundImage: 'url(' + data.previewImage + ')' }"
              ></div>
            </div>
            <div class="home__project-info__wrapper">
              <h2 class="h1 title__wrapper">
                <div class="title-animation">{{ data.title }}</div>
              </h2>
              <div class="home__project-number__wrapper">
                <p class="home__project-number">0{{ index + 1 }}</p>
                <div class="home__project-line"></div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import store from "./../store/index";
/* import router from "./../router/index"; */
import Mixin from "../mixins/Mixin";
import routerTransition from "../mixins/router-transition";
import sectionCatcher from "../mixins/section-catcher";
export default {
  name: "Home",
  data() {
    return {
      projectData: this.$store.state.data,
      imageReleased: false,
      store: store,
    };
  },
  mixins: [Mixin, routerTransition, sectionCatcher],
  components: {},
  mounted() {
    this.$nextTick(() => this.addScrolledClass());
  },
  beforeRouteLeave(to, from, next) {
    this.routerTransition();
    setTimeout(() => {
      next();
    }, 1400);
  },
};
</script>
