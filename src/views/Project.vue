<style lang="scss" src="../styles/project.scss" scoped></style>
<template lang="pug">
.project__container(:class="{'content--hidden': !$store.state.showProject}")
  .project__content-section
    .project__right-aligned 
      .image__wrapper.image__wrapper--hero-image
        img.image__element.project__right-content(:src="project.mainImageColor")
  section.project__content-section
    .title__wrapper
      h1.project__title {{project.title}}
  section.project__content-section
    .project__right-aligned
      p.project__right-content {{project.intro}}
  section.project__content-section
    .image__wrapper
      img.image__element.project__image.project__image--big(:src="project.contextImage")
  section.project__content-section
    h3.project__title Challenge
    .project__content-divided
      .project__content-divided-block
        p 
          strong.project__content-challenge-strong {{project.challenge}}
      .project__content-divided-block
        p.project__content-challenge-text {{project.question1}}
        p.project__content-challenge-text {{project.question2}}
  section.project__content-section.project__content-section--big-space.project__image--big
    .project__text-carousel-container
      .project__text-carousel(ref="projectTextCarousel")
        .project__text-carousel-phrase(v-for="phrase of project.tasks") {{phrase}}
    .project__text-carousel-container
      .project__text-carousel(ref="projectTextCarousel2")
        .project__text-carousel-phrase(v-for="phrase of project.tasks") {{phrase}}
  section.project__content-section
    .image__wrapper
      img.image__element.project__image.project__image--big(:src="project.processImage")
  .project__content-section.project__content-section--big-space
    h3.project__title Result
  section.project__content-section
    .project__right-aligned(v-for="projectResult of project.result")
      p.project__right-content.subsection-info__paragraph {{projectResult}}
  section.project__content-section.project__content-section--centered
    .image__wrapper.image__wrapper--vertical
      img.image__element.project__image(:src="project.largeImage")
  section.project__content-section
    .project__right-aligned.project__right-aligned--left
      .image__wrapper
        img.image__element.project__right-content(:src="project.image1")
  section.project__content-section
    .project__right-aligned
      .image__wrapper
        img.image__element.project__right-content(:src="project.image2")
  section.project__content-section
    .project__right-aligned.project__right-aligned--left
      .image__wrapper
        img.image__element.project__right-content(:src="project.image3")
  section.project__content-section.project__content-section--big-space
    .image__wrapper
      img.image__element.project__image.project__image--big(:src="project.finalImage")
  
  .project__navigation-wrapper
    router-link.project__navigation-link.h2.h2--italic(:to="prevProject.split(' ').join('').split('-').join('').toLowerCase()") {{ prevProject }}
    router-link.project__navigation-link.h2.h2--italic(:to="nextProject.split(' ').join('').split('-').join('').toLowerCase()") {{ nextProject }}
</template>

<script>
// @ is an alias to /src
/* import Project from '../components/Project.vue' */
//import styles from '../styles/home.scss'
import store from './../store/index';
import Mixin from '../mixins/Mixin';
import routerTransition from '../mixins/router-transition';
import sectionCatcher from '../mixins/section-catcher';

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
    this.breakAllTitles();
    this.startAnimations();
    this.$nextTick(() => {
      this.addScrolledClass();
      window.addEventListener('scroll', this.animateTextCarousel);
    });
  },
  mixins: [Mixin, routerTransition, sectionCatcher],
  beforeRouteLeave(to, from, next) {
    this.routerTransition();
    window.removeEventListener('scroll', this.animateTextCarousel);
    setTimeout(() => {
      next();
    }, 1400);
  },
  methods: {
    animateTextCarousel() {
      const textCarouselElement = this.$refs.projectTextCarousel;
      const textCarouselElement2 = this.$refs.projectTextCarousel2;
      const { mathMapping } = this;

      const transformVal = mathMapping(
        window.scrollY,
        0,
        document.documentElement.scrollHeight - window.innerHeight,
        0,
        30,
        true
      );
      textCarouselElement.style.transform = `translateX(${transformVal}%)`;
      textCarouselElement2.style.transform = `translateX(${transformVal *
        -1}%)`;
    },
    mathMapping(n, start1, stop1, start2, stop2) {
      const newval =
        ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
      return newval;
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
    }
  },
  computed: {
    project() {
      return this.projectData.filter(
        element => element.id === this.$route.params.name
      )[0];
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
    this.$store.commit('toggleProjectVisibility', false);
    this.routerTransition();
    this.removeScrolledTo();
    setTimeout(() => {
      this.startAnimations();
    }, 400);
    setTimeout(() => {
      next();
    }, 800);
  }
};
</script>
