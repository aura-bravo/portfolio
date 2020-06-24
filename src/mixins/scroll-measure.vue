<script>
export default {
  mounted() {
    this.scrollMeasurer = document.querySelector(".scroll-measurer span");
    this.resizeEvent();
    setTimeout(() => {
      this.init();
    }, 1000);
  },
  data() {
    return {
      scrollMeasurer: undefined,
      minValue: 0,
      maxValue: 1,
      topScroll: 0,
      bottomScroll: undefined
    };
  },
  methods: {
    init() {
      this.resetValues();
      this.addScrollEvent();
    },
    setHeight() {
      const mapResult = this.mathMapping(
        window.scrollY,
        this.topScroll,
        this.bottomScroll,
        this.minValue,
        this.maxValue
      );
      this.scrollMeasurer.style.transform = `scaleY(${mapResult})`;
    },
    resetValues() {
      if (this.$route.path != "/contact") {
        this.scrollMeasurer.style.transform = "scale(0)";
      } else {
        this.scrollMeasurer.style.transform = "scale(1)";
      }
      this.bottomScroll =
        document.documentElement.scrollHeight - window.innerHeight;
    },
    mathMapping(n, start1, stop1, start2, stop2) {
      const newval =
        ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
      return newval;
    },
    addScrollEvent() {
      window.addEventListener("scroll", () => {
        if (this.$route.path != "/contact") {
          window.requestAnimationFrame(() => this.setHeight());
        }
      });
    }
  }
};
</script>
