<script>
export default {
  created() {
    this.routerTransition();
  },
  methods: {
    routerTransition() {
      const wave = document.querySelector(".router__wave-transition");
      const waveLoop = document.querySelector(
        ".router__wave-transition--looper"
      );
      if (!wave.classList.contains("router__wave-transition--entering")) {
        wave.classList.add("router__wave-transition--entering");
      } else {
        waveLoop.classList.add("router__wave-transition--looper--looping");
        setTimeout(() => {
          waveLoop.classList.remove("router__wave-transition--looper--looping");
        }, 2500);
      }
    }
  }
};
</script>