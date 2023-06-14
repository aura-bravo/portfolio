<script>
import gsap from 'gsap';
export default {
  mounted() {
    this.scrollMeasurer = document.querySelector('.scroll-measurer span');
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
      this.bottomScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const mapResult = this.mathMapping(
        window.scrollY,
        this.topScroll,
        this.bottomScroll,
        this.minValue,
        this.maxValue,
        true
      );
      gsap.set(this.scrollMeasurer, { scaleX: 1 });
      gsap.to(this.scrollMeasurer, {
        scaleY: mapResult,
        duration: 0.8,
        ease: 'power3.out'
      });
    },
    resetValues() {
      if (this.$route.path != '/contact') {
        this.scrollMeasurer.style.transform = 'scale(0)';
      } else {
        this.scrollMeasurer.style.transform = 'scale(1)';
      }
      this.bottomScroll =
        document.documentElement.scrollHeight - window.innerHeight;
    },
    mathMapping(n, start1, stop1, start2, stop2, withinBounds) {
      const newval =
        ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
      if (!withinBounds) {
        return newval;
      }
      if (start2 < stop2) {
        return this.constrain(newval, start2, stop2);
      } else {
        return this.constrain(newval, stop2, start2);
      }
    },

    constrain(n, low, high) {
      return Math.max(Math.min(n, high), low);
    },

    addScrollEvent(funcToExecute) {
      window.addEventListener('scroll', () => {
        if (this.$route.path != '/contact') {
          this.setHeight();
          if (funcToExecute) funcToExecute();
        }
      });
    }
  }
};
</script>
