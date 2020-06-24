<script>
export default {
  mounted() {
    this.scrollMeasurer = document.querySelector(".scroll-measurer span");
    this.bottomScroll = document.body.clientHeight - window.innerHeight;
    window.requestAnimationFrame(() => this.setHeight());
  },
  data() {
    return {
      scrollMeasurer: undefined,
      minValue: 0,
      maxValue: 1,
      topScroll: 0,
      bottomScroll: undefined,
    };
  },
  methods: {
    setHeight() {
      this.scrollMeasurer.style.transform = `scaleY(${this.mathMapping(
        window.scrollY,
        this.topScroll,
        this.bottomScroll,
        this.minValue,
        this.maxValue
      )})`;
      window.requestAnimationFrame(() => this.setHeight());
    },
    mathMapping(n, start1, stop1, start2, stop2) {
      const newval =
        ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
      return newval;
    },
  },
};
</script>
