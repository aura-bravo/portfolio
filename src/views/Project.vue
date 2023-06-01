<style lang="scss" src="../styles/project.scss" scoped></style>
<template lang="pug">
  .project__container
    .project__content-section
      .project__right-aligned
        img.project__right-content(:src="project.mainImage")
    h1.project__title {{project.title}}
    .project__content-section
      .project__right-aligned
        p.project__right-content {{project.intro}}
    .project__content-section
      img.project__image.project__image--big(:src="project.contextImage")
    .project__content-section
      h3.project__title Challenge
      .project__content-divided
        .project__content-divided-block
          p 
            strong.project__content-challenge-strong {{project.challenge}}
        .project__content-divided-block
          p.project__content-challenge-text {{project.question1}}
          p.project__content-challenge-text {{project.question2}}
    .project__content-section.project__image--big
      .project__text-carousel-container
        .project__text-carousel
          .project__text-carousel-phrase(v-for="phrase of project.tasks") {{phrase}}
      .project__text-carousel-container
        .project__text-carousel
          .project__text-carousel-phrase(v-for="phrase of project.tasks") {{phrase}}
    .project__content-section
      img.project__image.project__image--big(:src="project.processImage")
    .project__content-section
      h3.project__title Result
      .project__right-aligned
        p.project__right-content {{project.result}}
    .project__content-section.project__content-section--centered
      img.project__image(:src="project.largeImage")
    .project__content-section
      .project__right-aligned.project__right-aligned--left
        img.project__right-content(:src="project.image1")
    .project__content-section
      .project__right-aligned
        img.project__right-content(:src="project.image2")
    .project__content-section
      .project__right-aligned.project__right-aligned--left
        img.project__right-content(:src="project.image3")
    .project__content-section.project__content-section--big-space
      img.project__image.project__image--big(:src="project.finalImage")

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
      store: store
    };
  },
  mounted() {
    this.$nextTick(() => this.addScrolledClass());
  },
  mixins: [Mixin, routerTransition, sectionCatcher],
  beforeRouteLeave(to, from, next) {
    this.routerTransition();
    setTimeout(() => {
      next();
    }, 1400);
  },
  computed: {
    project() {
      return this.projectData.filter(
        element => element.id === this.$route.params.name
      )[0];
    }
  }
};
</script>
