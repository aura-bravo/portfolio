<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
  name: 'SmoothScroll',
  data() {
    return {
      smoother: undefined,
      trigger: undefined
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    this.trigger = ScrollTrigger.create({
      normalizeScroll: true
    });
    this.smoother = ScrollSmoother.create({
      smooth: 2 // how long (in seconds) it takes to "catch up" to the native scroll position
    });
  },
  watch: {
    '$store.state.transitioning'(newVal, oldVal) {
      if (!newVal) {
        if (this.smoother) {
          //this.smoother.scrollTo(0, true);
        }
      }
    }
  },
  beforeUnmount() {
    if (this.smoother) {
      this.smoother.kill();
      this.smoother = null;
    }
    if (this.trigger) {
      this.trigger.kill();
      this.trigger = null;
    }
  }
};
</script>
