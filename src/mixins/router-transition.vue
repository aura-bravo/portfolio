<script>
import gsap from 'gsap';
export default {
  mounted() {
    this.resetMenu();
  },
  data() {
    return {
      timeline: gsap.timeline()
    };
  },
  methods: {
    setWaveAnimation() {
      const wave = document.querySelector('.router__wave-transition');
      gsap.set(wave, { transformOrigin: 'bottom center', clearProps: true });
      gsap.set(wave, { transformOrigin: 'bottom center' });
      const scaleWave = gsap.fromTo(
        wave,
        {
          scaleY: 0
        },
        {
          scaleY: 1,
          duration: 1,
          ease: 'expo.inOut',
          onComplete: () => {
            this.$store.commit('toggleTransitionState', false);
            window.scrollTo(0, 0);
          }
        }
      );
      const moveWave = gsap.to(wave, {
        yPercent: -100,
        duration: 1.5,
        ease: 'expo.inOut'
      });
      this.timeline.add(scaleWave).add(moveWave);
    },
    routerTransition() {
      this.setWaveAnimation();
      setTimeout(() => {
        this.timeline.play();
      }, 900);
      setTimeout(() => {
        this.startAnimation();
      }, 1500);
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
    startAnimation() {
      const pointer = document.querySelector('.pointer__wrapper');
      if (pointer.classList.contains('hovering')) {
        pointer.classList.remove('hovering');
      }
      setTimeout(() => {
        this.$store.commit('toggleProjectVisibility', true);
      }, 500);
      //document.body.classList.remove('animations--started');
    }
  }
};
</script>
