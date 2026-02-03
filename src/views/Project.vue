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
      <router-link class="linked project__navigation-link h2 h2--italic" :to="'/' + navigation.prev.id">{{ navigation.prev.title }}</router-link>
      <router-link class="linked project__navigation-link h2 h2--italic" :to="'/' + navigation.next.id">{{ navigation.next.title }}</router-link>
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
      store: store
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimations();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.initAnimations();
    });
  },
  mixins: [Mixin, routerTransition],
  methods: {
    initAnimations() {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      this.startAnimations();
      this.animateTextCarousel();
      
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
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
            rotate: -10,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: title,
              start: 'top 100%',
              toggleActions: 'play none none none'
            }
          });
        });

        this.animateImages('.image__element', 'top 60%');
        gsap.from('.image__wrapper-vertical', {
          yPercent: -100,
          duration: 2,
          scrollTrigger: {
            trigger: '.image__wrapper-vertical',
            start: `top+=${window.innerHeight / 1.5}`,
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
            start: `top+=${window.innerHeight / 1.5} top`,
            end: `bottom+=${window.innerHeight / 1.125}`,
            toggleActions: 'play none none none',
            markers: true,
          }
        });
      });
    },
    animateTextCarousel() {
      const carousel = document.querySelector('.project__text-carousel');
      if (!carousel) return;
      
      const setX1 = gsap.quickSetter(carousel, 'x', 'px');
      const setX2 = gsap.quickSetter('.project__text-carousel--2', 'x', 'px');
      
      const viewportHeight = window.innerHeight / 2;

      ScrollTrigger.create({
        trigger: carousel,
        start: `top-=${viewportHeight} bottom`,
        end: `bottom+=${viewportHeight} top`,
        scrub: true,
        onUpdate: self => {
          const xVal = 500 * self.progress;
          setX1(xVal);
          setX2(-xVal);
        }
      });
    },
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  },
  computed: {
    currentIndex() {
      return this.projectData.findIndex(p => p.id === this.$route.params.name);
    },
    project() {
      return this.projectData[this.currentIndex];
    },
    navigation() {
      const total = this.projectData.length;
      const next = this.projectData[(this.currentIndex + 1) % total];
      const prev = this.projectData[
        this.currentIndex === 0 ? total - 1 : this.currentIndex - 1
      ];
      
      return { prev, next };
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
