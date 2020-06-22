<style lang="scss" src="../styles/project.scss" scoped></style>
<template>
  <div>
    <div class="project-container" v-for="(project, index, key) of projectData" :key="key">
      <div class="project-wrapper" v-if="index == projectIndex">
        <transition name="fade">
          <section class="section-spacer section-spacer--large scrolled__to">
            <div class="hero-wrapper">  
              <div class="hero-info__wrapper">
                <h2 class="h1 title__wrapper">
                  <div class="title-animation">
                    {{project.title}}
                  </div>
                </h2>
                <p>{{project.description}}</p>
              </div>
              <div class="hero-image__wrapper">
                <div class="hero-background-image" :style="{backgroundImage: 'url(' + project.mainImage + ')'}"></div>
              </div>
            </div>
          </section>
        </transition>
        <section class="section-spacer">  
          <div class="project__cover-image__wrapper">
            <img class="project__cover-image" :src="project.coverImage"/>
          </div>
        </section>
        <section class="section-spacer">
          <div class="project-branding__wrapper">
            <div class="project-branding__color">
              <ul>
                <li v-for="(projectColor, index, key) of project.colors" :key="key">
                  <div :style="{backgroundColor: projectColor}"></div>
                  <p>{{projectColor}}</p>
                </li>
              </ul>
            </div>
            <div class="project-branding__typography__wrapper">
              <div class="project-branding__typography" v-for="(projectFont, index, key) of project.fonts" :key="key">
                <div class="project-branding__typography-title" :style="{fontFamily: projectFont + ', sans-serif'}">{{projectFont}}</div>
                <div class="project-branding__typography-text" :style="{fontFamily: projectFont + ', sans-serif'}">
                  <p :style="{fontFamily: projectFont + ', sans-serif'}">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p :style="{fontFamily: projectFont + ', sans-serif'}">abcdefghijklmnopqrstuvwxyz</p>
                </div>
              </div>
              <div class="project-branding__typography" v-for="(projectFont, index, key) of project.fonts" :key="key">
                <div class="project-branding__typography-text" :style="{fontFamily: projectFont + ', sans-serif'}" v-if="project.fonts.length < 2">
                  <p :style="{fontFamily: projectFont + ', sans-serif', fontWeight: 400}">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p :style="{fontFamily: projectFont + ', sans-serif', fontWeight: 400}">abcdefghijklmnopqrstuvwxyz</p>
                </div>
                <div v-if="project.fonts.lenght > 1" class="project-branding__typography-text project-branding__typography-text--light" :style="{fontFamily: projectFont + ', sans-serif', fontWeight: 300}"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-spacer">
          <div class="project__images-grid">
            <div class="project__images-grid__image">
              <img :src="project.collageImage1" alt="" srcset="">
            </div>
            <div class="project__images-grid__image">
              <img :src="project.collageImage2" alt="" srcset="">
            </div>
            <div class="project__images-grid__image">
              <img :src="project.collageImage3" alt="" srcset="">
            </div>
            <div class="project__images-grid__image">
              <img :src="project.collageImage4" alt="" srcset="">
            </div>
          </div>
        </section>
        <section class="section-spacer section-spacer--large">
          <div class="project__full-homepage__mockup">
            <span :style="{backgroundColor: project.colors[0]}"></span>
            <div class="project__full-homepage__image">
              <img :src="project.fullHomePage" alt="" srcset="">
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import store from "./../store/index";
import Mixin from "../mixins/Mixin";
import routerTransition from "../mixins/router-transition";
export default {
  name: "Project",
  data() {
    return {
      projectData: this.$store.state.data,
      projectIndex: this.$store.state.projectIndex,
      imageReleased: false,
      store: store
    };
  },
  mixins: [Mixin, routerTransition],
  components: {},
  mounted() {
    this.releaseImage();
  },  
  methods: {
    releaseImage() {
      window.addEventListener("scroll", () => {
        //this.sectionCatcher();
      })
    },
    sectionCatcher() {
      for (let i = 0; i < this.$refs.projectSectionRef.length; i++) {
        const element = this.$refs.projectSectionRef[i];
        /* const projectNameText = element.querySelector(".home__project-info__wrapper h2").innerHTML; */
        if (!element.classList.contains("scrolled__to-project")) {
          if (window.scrollY > element.offsetTop - window.innerHeight / 2) {
            element.classList.add("scrolled__to-project");
          }
        }
      }
    }
  },
};
</script>
