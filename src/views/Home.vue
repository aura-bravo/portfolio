<style lang="scss" src="../styles/home.scss"></style>
<template>
  <div>
    <section class="section-spacer section-spacer--large scrolled__to" ref="sectionRef">
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
    <section class="section-spacer section-spacer--large" ref="sectionRef" v-for="(data, index, key) in projectData" :index="index" :key="key">
      <div class="home__project-router" @click="setProject(index)">
        <div class="home__project-wrapper" :class="{'home__project-wrapper--reverse': !index % 2 == 0}">
          <p class="home__project__extra-info">
            Diseño Web - 2020 - Dayvo Sistemas
          </p>
          <div class="home__project-image__wrapper section-image" :class="{'background-image__wrapper--opened': imageReleased == true}">
            <div class="home__project-background-image" :style="{backgroundImage: 'url(' + data.previewImage + ')'}"></div>
          </div>
          <div class="home__project-info__wrapper">
            <h2 class="h1 title__wrapper">
              <div class="title-animation">
                {{data.title}}
              </div>
            </h2>
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
import * as debounce from 'lodash.debounce';
export default {
  name: "Home",
  data() {
    return {
      projectData: this.$store.state.data,
      imageReleased: false,
      store: store,
      sections: undefined,
      sectionAnimatedCount: 0
    };
  },
  components: {},
  mounted() {
    this.releaseImage();
    this.breakAllTitles();
    this.sections = document.querySelectorAll('section');
  },  
  methods: {
    setProject(index) {
      this.$store.commit("setProject", index);
      router.push(this.projectData[index].id);
    },
    releaseImage() {
      window.addEventListener("scroll", () => {
        if (this.sectionAnimatedCount < this.sections.length) {
          this.sectionCatcher();
        }
      })
    },
    sectionCatcher: debounce(function() {
      this.sections.forEach(section => {
        if (!section.classList.contains("scrolled__to")) {
          if (window.scrollY > section.offsetTop - window.innerHeight / 1.5) {
            section.classList.add('scrolled__to');
            this.sectionAnimatedCount += 1;
          }
        }
      })
    }, 100),
    breakAllTitles() {
      const titles = document.querySelectorAll('.title-animation');
      for (let i = 0; i < titles.length; i++) {
        const element = titles[i];
        this.createWords(element);  
      }
    },
    createWords(title) {
      let titleWrapper = title;
      let sentence = titleWrapper.innerHTML;
      let words = sentence.split(" ");
      let delayValue = 0.3;
      titleWrapper.innerHTML = '';
      for (let j = 0; j < words.length; j++) {
        if (!words[j] == "") {
          let letters = words[j].split("");
          console.log(letters, j);
          const wordWrapper = document.createElement('span');
          const wordSpaceWrapper = document.createElement('span');
          wordWrapper.style.display = "inline-block";
          const wordSpaceChar = document.createTextNode(' ');
          for (let n = 0; n < letters.length; n++) {
            const letter = letters[n];
            const letterSpan = document.createElement('span');
            const letterChar = document.createTextNode(letter);
            letterSpan.appendChild(letterChar);
            wordWrapper.appendChild(letterSpan);
            this.addDelay(letterSpan, delayValue);
            delayValue += 0.075;
          }
          wordSpaceWrapper.appendChild(wordSpaceChar);
          titleWrapper.appendChild(wordWrapper);
          titleWrapper.appendChild(wordSpaceWrapper);
        }
      }
      this.startAnimations();
    },
    addDelay(letterDiv, delayFactor) {
      letterDiv.style.transitionDelay = delayFactor + 's';
    },
    startAnimations() {
      setTimeout(() => {
        document.body.classList.add('animations--started');
      }, 400);
    },
  },
};
</script>
