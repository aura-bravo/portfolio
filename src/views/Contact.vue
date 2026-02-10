<style lang="scss" src="../styles/contact.scss"></style>
<template>
  <div class="contact">
    <section
      class="section-spacer section-spacer--large scrolled__to"
      ref="sectionRef"
    >
      <div class="hero-wrapper">
        <div class="hero-info__wrapper">
          <h1 class="h1 title__wrapper">
            <div class="title-animation">Let's talk</div>
          </h1>
          <p>
            <a href="mailto:bravo.aura95@gmail.com" class="contact-info paragraph__lines-animation"
              >bravo.aura95@gmail.com</a
            >
          </p>
          <p>
            <a href="tel:+573148450663" class="contact-info paragraph__lines-animation"
              >+57 (320) 215-7085</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Mixin from '../mixins/Mixin.vue';
import routerTransition from '../mixins/router-transition.vue';
export default {
  name: 'Contact',
  mixins: [Mixin, routerTransition],
  mounted() {
    this.$nextTick(async () => {
      await this.animateTitles();
      
      requestAnimationFrame(async () => {
        await this.animateHeroText();
      });
    });
  },
  beforeRouteLeave(to, from, next) {
    this.onRouteChange();
    next();
  }
};
</script>
