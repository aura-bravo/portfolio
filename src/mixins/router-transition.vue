<script>
import gsap from 'gsap';
export default {
  mounted() {
    this.resetMenu();
  },
  data() {
    return {
      tl: gsap.timeline()
    };
  },
  methods: {
    setWaveAnimation() {
      const vm = this;
      const wave = document.querySelector('.router__wave-transition');
      this.tl.set(wave, { transformOrigin: 'bottom center', clearProps: true });
      this.tl.set(wave, { transformOrigin: 'bottom center' });
      const scaleWave = gsap.fromTo(
        wave,
        {
          scaleY: 0
        },
        {
          scaleY: 1,
          duration: 1,
          ease: 'expo.inOut',
          onStart: () => {
            this.$store.commit('toggleTransitionState', true);
            this.$store.commit('toggleProjectVisibility', false);
          }
        }
      );
      const moveWave = gsap.to(wave, {
        yPercent: -100,
        duration: 1.5,
        ease: 'expo.inOut',
        onUpdate: function () {
          if (this.progress() >= 0.5 && !vm.$store.state.showProject) {
            vm.$store.commit('toggleProjectVisibility', true);
          }
        },
        onComplete: () => {
          this.$store.commit('toggleTransitionState', false);
        }
      });
      this.tl.add(scaleWave).add(moveWave);
    },
    onRouteChange() {
      this.setWaveAnimation();
      this.onRouteChangeReset();
    },
    resetMenu() {
      document.body.classList.remove('no-scroll');
      const menuItem = document.querySelector('.nav');
      const navTrigger = document.querySelector('.nav-menu__trigger');
      if (menuItem.classList.contains('nav--opened')) {
        menuItem.classList.remove('nav--opened');
        navTrigger.classList.remove('nav-menu__trigger--triggered');
        this.$store.commit('toggleMenu', false);
      }
    },
    onRouteChangeReset() {
      const pointer = document.querySelector('.pointer__wrapper');
      if (pointer.classList.contains('hovering')) {
        pointer.classList.remove('hovering');
      }
    },
  },
};
</script>
