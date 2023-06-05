<script>
import * as debounce from 'lodash.debounce';
export default {
  created() {},
  mounted() {
    this.sections = document.querySelectorAll('section');
    this.removeScrolledTo();
    if (this.sections.length) {
      this.sectionCatcher();
    }
  },
  data() {
    return {
      sections: undefined
    };
  },
  methods: {
    sectionCatcher: debounce(function() {
      this.sections.forEach(section => {
        if (!section.classList.contains('scrolled__to')) {
          if (window.scrollY > section.offsetTop - window.innerHeight / 1.6) {
            section.classList.add('scrolled__to');
          }
        }
      });
    }, 100),
    removeScrolledTo() {
      this.sections.forEach(section => {
        if (section.classList.contains('scrolled__to')) {
          section.classList.remove('scrolled__to');
        }
      });
    },
    addScrolledClass() {
      window.addEventListener('scroll', () => {
        this.sectionCatcher();
      });
    }
  }
};
</script>
