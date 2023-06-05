<script>
export default {
  mounted() {
    this.resetMenu();
  },
  methods: {
    routerTransition() {
      const wave = document.querySelector('.router__wave-transition');
      const waveLoop = document.querySelector(
        '.router__wave-transition--looper'
      );
      if (!wave.classList.contains('router__wave-transition--entering')) {
        wave.classList.add('router__wave-transition--entering');
      } else {
        waveLoop.classList.add('router__wave-transition--looper--looping');
        setTimeout(() => {
          waveLoop.classList.remove('router__wave-transition--looper--looping');
        }, 3000);
      }
      setTimeout(() => {
        this.startAnimation();
      }, 900);
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
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.$store.commit('toggleProjectVisibility', true);
      }, 500);
      //document.body.classList.remove('animations--started');
    }
  }
};
</script>
