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
            <a href="mailto:bravo.aura95@gmail.com" class="contact-info"
              >bravo.aura95@gmail.com</a
            >
          </p>
          <p>
            <a href="tel:+573148450663" class="contact-info"
              >+57 314 845 0663</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Mixin from '../mixins/Mixin';
import routerTransition from '../mixins/router-transition';
export default {
  name: 'Contact',
  mixins: [Mixin, routerTransition],
  beforeRouteLeave(to, from, next) {
    this.onRouteChange();
    setTimeout(() => {
      next();
    }, 1400);
  }
};
</script>
