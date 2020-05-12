<style lang="scss" src="../styles/home.scss" scoped></style>
<template>
  <div class="home__main-container">
    <div class="max-bound">
      <img
        class="logo"
        alt="Aura Bravo logo"
        src="../../public/assets/img/Recurso1logo.png"
      />
      <section class="section-spacer section-spacer--large">
        <div class="home__hero-wrapper">
          <div class="home__hero-info__wrapper">
            <h1>Aura Bravo.</h1>
            <p>
              Hi, my name is Aura Bravo. I'm an Industrial Designer passionate
              about digital media and interfaces, it's design and development.
              Here is some of my work.
            </p>
          </div>
          <div class="home__hero-image__wrapper">
            <div class="home__hero-background-image"></div>
          </div>
        </div>
      </section>
      <section class="section-spacer section-spacer--large" ref="projectSectionRef" v-for="(data, index, key) in projectData" :index="index" :key="key">
        <div class="home__project-wrapper" :class="{'home__project-wrapper--reverse': !index % 2 == 0}">
          <p class="home__project__extra-info">
            Diseño Web - 2020 - Dayvo Sistemas
          </p>
          <div class="home__project-image__wrapper" :class="{'background-image__wrapper--opened': imageReleased == true}">
            <div class="home__project-background-image" :style="{backgroundImage: 'url(' + data.previewImage + ')'}"></div>
          </div>
          <div class="home__project-info__wrapper">
            <h2 class="h1">{{data.title}}</h2>
            <div class="home__project-number__wrapper">
              <p class="home__project-number">0{{index + 1}}</p>
              <div class="home__project-line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import Axios from "axios";
let dataJson = require("../../public/assets/data.json");
export default {
  name: "Home",
  data() {
    return {
      projectData: dataJson,
      imageReleased: false,
    };
  },
  components: {},
  mounted() {
    this.releaseImage();
  },  
  methods: {
    getData() {
      Axios.get("");
    },
    releaseImage() {
      window.addEventListener('scroll', () => {
        this.sectionCatcher();
      })
    },
    sectionCatcher() {
      for (let i = 0; i < this.$refs.projectSectionRef.length; i++) {
        const element = this.$refs.projectSectionRef[i];
        const projectNameText = element.querySelector('.home__project-info__wrapper h2').innerHTML;
        console.log(projectNameText);
        if (!element.classList.contains('scrolled__to-project')) {
          if (window.scrollY > element.offsetTop - window.innerHeight / 3) {
            element.classList.add('scrolled__to-project');
          }
        }
      }
    }
  },
};
</script>
