<style lang="scss" src="../styles/project.scss" scoped></style>
<template>
  <div class="project__container">
    <div class="project__content-section">
      <div class="project__right-aligned">
        <div class="image__wrapper image__wrapper--hero-image">
          <img class="image__element project__right-content" :src="project.mainImageColor">
        </div>
      </div>
    </div>
    <section class="project__content-section">
      <div class="title__wrapper">
        <h1 class="project__title">{{project.title}}</h1>
      </div>
    </section>
    <section class="project__content-section">
      <div class="project__right-aligned">
        <p class="project__right-content">{{project.intro}}</p>
      </div>
    </section>
    <section class="project__content-section">
      <div class="image__wrapper">
        <img class="image__element project__image project__image--big" :src="project.contextImage">
      </div>
    </section>
    <section class="project__content-section">
      <h3 class="project__title">Challenge</h3>
      <div class="project__content-divided">
        <div class="project__content-divided-block">
          <p>
            <strong class="project__content-challenge-strong">{{project.challenge}}</strong>
          </p>
        </div>
        <div class="project__content-divided-block">
          <p class="project__content-challenge-text">{{project.question1}}</p>
          <p class="project__content-challenge-text">{{project.question2}}</p>
        </div>
      </div>
    </section>
    <section class="project__content-section project__content-section--big-space project__image--big">
      <div class="project__text-carousel-container">
        <div class="project__text-carousel" ref="projectTextCarousel">
          <div class="project__text-carousel-phrase" v-for="phrase of project.tasks">{{phrase}}</div>
        </div>
      </div>
      <div class="project__text-carousel-container">
        <div class="project__text-carousel project__text-carousel--2" ref="projectTextCarousel2">
          <div class="project__text-carousel-phrase" v-for="phrase of project.tasks">{{phrase}}</div>
        </div>
      </div>
    </section>
    <section class="project__content-section">
      <div class="image__wrapper">
        <img class="image__element project__image project__image--big" :src="project.processImage">
      </div>
    </section>
    <div class="project__content-section project__content-section--big-space">
      <h3 class="project__title">Result</h3>
    </div>
    <section class="project__content-section">
      <div class="project__right-aligned project__result-text" v-for="projectResult of project.result">
        <p class="project__right-content">{{projectResult}}</p>
      </div>
    </section>
    <section class="project__content-section project__content-section--centered">
      <div class="image__wrapper-vertical image__wrapper--vertical">
        <img class="image__element-vertical project__image" :src="project.largeImage">
      </div>
    </section>
    <section class="project__content-section">
      <div class="project__right-aligned project__right-aligned--left">
        <div class="image__wrapper">
          <img class="image__element project__right-content" :src="project.image1">
        </div>
      </div>
    </section>
    <section class="project__content-section">
      <div class="project__right-aligned">
        <div class="image__wrapper">
          <img class="image__element project__right-content" :src="project.image2">
        </div>
      </div>
    </section>
    <section class="project__content-section">
      <div class="project__right-aligned project__right-aligned--left">
        <div class="image__wrapper">
          <img class="image__element project__right-content" :src="project.image3">
        </div>
      </div>
    </section>
    <section class="project__content-section project__content-section--big-space">
      <div class="image__wrapper">
        <img class="image__element project__image project__image--big" :src="project.finalImage">
      </div>
    </section>
    
    <div class="project__navigation-wrapper">
      <router-link class="linked project__navigation-link h2 h2--italic" :to="prevProject.split(' ').join('').split('-').join('').toLowerCase()">{{ prevProject }}</router-link>
      <router-link class="linked project__navigation-link h2 h2--italic" :to="nextProject.split(' ').join('').split('-').join('').toLowerCase()">{{ nextProject }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
import store from './../store/index';
import Mixin from '../mixins/Mixin.vue';
import routerTransition from '../mixins/router-transition.vue';

export default {
  name: 'Project',
  data() {
    return {
      projectData: this.$store.state.data,
      projectIndex: this.$store.state.projectIndex,
      projectNavigationObj: undefined,
      currentRoute: undefined,
      store: store
    };
  },
  beforeMount() {
    this.setProjectNavigation();
  },
  mounted() {
    this.waitForImages().then(() => {
      ScrollTrigger.refresh();
      this.startAnimations();
      this.animateTextCarousel();
    });
  },
  mixins: [Mixin, routerTransition],
  methods: {
    startAnimations() {
      this.$nextTick(() => {
        gsap.utils.toArray('.project__title').forEach(title => {
          const split = new SplitText(title, {
            type: 'chars',
            linesClass: 'split-line',
            mask: 'chars'
          });

          gsap.from(split.chars, {
            yPercent: 100,
            rotate: 20,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: title,
              start: 'top 60%',
              toggleActions: 'play none none none'
            }
          });
        });

        gsap.utils.toArray('.image__element').forEach((img, index) => {
          const parent = img.parentElement;
          gsap.from(img, {
            xPercent: 100,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              toggleActions: 'play none none none',
              markers: true
            }
          });
          gsap.from(parent, {
            xPercent: -100,
            duration: 1,
            ease: 'power2.out',
            onStart: () => {
              console.log("started", img, index)
            },
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              toggleActions: 'play none none none',
              markers: true
            }
          });
        });
        gsap.from('.image__wrapper-vertical', {
          yPercent: -100,
          duration: 2,
          scrollTrigger: {
            trigger: '.image__wrapper-vertical',
            start: `top+=${window.innerHeight / 1.125}`,
            end: `bottom+=${window.innerHeight / 1.125}`,
            toggleActions: 'play none none none',
            markers: true,
          }
        });
        gsap.from('.image__element-vertical', {
          yPercent: 100,
          duration: 2,
          scrollTrigger: {
            trigger: '.image__wrapper-vertical',
            start: `top+=${window.innerHeight / 1.125}`,
            end: `bottom+=${window.innerHeight / 1.125}`,
            toggleActions: 'play none none none',
            markers: true,
          }
        });
      });
    },
    animateTextCarousel() {
      ScrollTrigger.create({
        trigger: this.$el,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none none',
        onUpdate: self => {
          const progress = self.progress;
          const maxTransform = 1200;
          const xVal = maxTransform * progress;

          gsap.to('.project__text-carousel', {
            x: xVal,
            duration: 0.5,
            overwrite: 'auto'
          });
          gsap.to('.project__text-carousel--2', {
            x: -xVal,
            duration: 0.5,
            overwrite: 'auto'
          });
        }
      });
    },
    setProjectNavigation() {
      const projectNavigationObj = this.projectData.map((element, index) => {
        const nextIndex = index + 1 !== this.projectData.length ? index + 1 : 0;
        const prevIndex =
          index - 1 < 0 ? this.projectData.length - 1 : index - 1;
        const objFormat = {
          name: element.id,
          title: element.title,
          next: nextIndex,
          prev: prevIndex
        };

        return objFormat;
      });

      this.projectNavigationObj = projectNavigationObj;
    },
    navigate(direction) {
      const currentRouteNextIndex = this.projectNavigationObj.find(
        element => element.name === this.$route.params.name
      )[direction];
      this.$router.push(
        `/${this.projectNavigationObj[currentRouteNextIndex].name}`
      );
    },
    waitForImages() {
      return new Promise(resolve => {
        const images = this.$el.querySelectorAll('img');
        let loaded = 0;

        if (images.length === 0) {
          resolve();
        }

        images.forEach(img => {
          if (img.complete) {
            loaded++;
            if (loaded === images.length) resolve();
          } else {
            img.addEventListener('load', () => {
              loaded++;
              if (loaded === images.length) resolve();
            });
            img.addEventListener('error', () => {
              loaded++;
              if (loaded === images.length) resolve();
            });
          }
        });
      });
    }
  },
  beforeDestroy() {
    console.log("destroyed");
    ScrollTrigger.killAll();
  },
  computed: {
    project() {
      return this.projectData.find(
        element => element.id === this.$route.params.name
      );
    },
    nextProject() {
      const currentRouteNextIndex = this.projectNavigationObj.find(
        element => element.name === this.$route.params.name
      ).next;
      return this.projectNavigationObj[currentRouteNextIndex].title;
    },
    prevProject() {
      const currentRouteNextIndex = this.projectNavigationObj.find(
        element => element.name === this.$route.params.name
      ).prev;
      return this.projectNavigationObj[currentRouteNextIndex].title;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.onRouteChange();
    if (this.$store.state.showProject) {
      next();
    }
  },
};
</script>
