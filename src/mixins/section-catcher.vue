<script>
import * as debounce from "lodash.debounce";
export default {
  created() {},
  mounted() {
    this.sections = document.querySelectorAll("section");
  },
  data() {
    return {
      sections: undefined,
    };
  },
  methods: {
    sectionCatcher: debounce(function() {
      this.sections.forEach((section) => {
        if (!section.classList.contains("scrolled__to")) {
          if (window.scrollY > section.offsetTop - window.innerHeight / 1.2) {
            section.classList.add("scrolled__to");
            this.sectionAnimatedCount += 1;
          }
        }
      });
    }, 100),
    addScrolledClass() {
      window.addEventListener("scroll", () => {
        this.sectionCatcher();
      });
    },
  },
};
</script>
