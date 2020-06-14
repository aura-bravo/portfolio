<style lang="scss" src="../styles/home.scss"></style>
<template>
  <div>
    <section class="section-spacer section-spacer--large">
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
          <div class="hero-background-image"></div>
        </div>
      </div>
    </section>
    <section class="section-spacer section-spacer--large" ref="projectSectionRef" v-for="(data, index, key) in projectData" :index="index" :key="key">
      <div class="home__project-router" @click="setProject(index)">
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
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import store from './../store/index';
import router from './../router/index';
export default {
  name: "Home",
  data() {
    return {
      projectData: this.$store.state.data,
      imageReleased: false,
      store: store
    };
  },
  components: {},
  mounted() {
    this.releaseImage();
    this.runAnimation();
  },  
  methods: {
    setProject(index) {
      this.$store.commit("setProject", index);
      router.push("/project");
    },
    releaseImage() {
      window.addEventListener("scroll", () => {
        this.sectionCatcher();
      })
    },
    sectionCatcher() {
      for (let i = 0; i < this.$refs.projectSectionRef.length; i++) {
        const element = this.$refs.projectSectionRef[i];
        /* const projectNameText = element.querySelector('.home__project-info__wrapper h2').innerHTML; */
        if (!element.classList.contains("scrolled__to-project")) {
          if (window.scrollY > element.offsetTop - window.innerHeight / 2) {
            element.classList.add('scrolled__to-project');
          }
        }
      }
    },
    createWords(title) {
      let titleWrapper = document.querySelector(title);
      let sentence = titleWrapper.innerHTML;
      let words = sentence.split(" ");
      let delayValue = 0;
      titleWrapper.innerHTML = '';
      for (let j = 0; j < words.length; j++) {
        let letters = words[j].split("");
        const wordWrapper = document.createElement('span');
        const wordSpaceWrapper = document.createElement('span');
        const wordSpaceChar = document.createTextNode(' ');
        for (let n = 0; n < letters.length; n++) {
          const letter = letters[n];
          const letterSpan = document.createElement('span');
          const letterChar = document.createTextNode(letter);
          letterSpan.appendChild(letterChar);
          wordWrapper.appendChild(letterSpan);
          this.addDelay(letterSpan, delayValue);
          delayValue += 0.05;
        }
        wordSpaceWrapper.appendChild(wordSpaceChar);
        titleWrapper.appendChild(wordWrapper);
        titleWrapper.appendChild(wordSpaceWrapper);
      }
      this.startAnimation(titleWrapper);
    },
    addDelay(letterDiv, delayFactor) {
      letterDiv.style.transitionDelay = delayFactor + 's';
    },
    startAnimation(titleWrapper) {
      setTimeout(() => {
        titleWrapper.classList.add('title-animation--active');
      }, 400);
    },
    runAnimation() {
      this.createWords('.title-animation');
    }
  },
};
</script>
