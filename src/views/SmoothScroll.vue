<template lang="pug">
    #smooth-wrapper
        #smooth-content
            slot
</template>

<script>
import { gsap } from 'gsap';
import ScrollSmoother from 'gsap-bonus/package/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
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
      console.log('hello');
      if (newVal) {
        this.trigger.scroll(0);
        this.smoother.smooth(0);
      } else {
        this.smoother.smooth(2);
      }
    }
  }
};
</script>
