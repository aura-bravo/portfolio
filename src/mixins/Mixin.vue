<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default {
  data() {
    return {
      titleAnimations: [],
      textAnimations: []
    };
  },
  methods: {
    async animateTitles() {
      this.titleAnimations.forEach(split => split.revert());
      this.titleAnimations = [];

      const titles = this.$el.querySelectorAll('.title-animation');
      
      gsap.set(titles, { opacity: 0 });
      
      await document.fonts.ready;
      
      titles.forEach(title => {
        const split = new SplitText(title, {
          type: 'chars',
          charsClass: 'char'
        });
        
        this.titleAnimations.push(split);

        gsap.set(title, { opacity: 1 });
        
        gsap.from(split.chars, {
          yPercent: 100,
          rotate: 10,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: title.closest('section') || title,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        });
      });
    },
    
    async animateHeroText() {
      const heroParagraphs = this.$el.querySelectorAll('.paragraph__lines-animation');
      
      gsap.set(heroParagraphs, { opacity: 0 });
      
      await document.fonts.ready;
      
      heroParagraphs.forEach(p => {
        const split = SplitText.create(p, {
          type: 'lines',
          linesClass: 'line',
          autoSplit: true
        });
        
        this.textAnimations.push(split);

        split.lines.forEach(line => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.set(p, { opacity: 1 });

        gsap.from(split.lines, {
          yPercent: 100,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.5,
          scrollTrigger: {
            trigger: p.closest('section') || p,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        });
      });
    },

    animateImages(selector = '.hero-background-image, .home__project-background-image, .image__element', startTrigger = 'top 80%') {
      gsap.utils.toArray(selector).forEach((img) => {
        const parent = img.parentElement;
        
        gsap.set([img, parent], { xPercent: 0 });
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: startTrigger,
            toggleActions: 'play none none none',
          }
        });
        
        tl.fromTo(img, 
          { xPercent: 100 },
          { xPercent: 0, duration: 1, ease: 'power2.out' },
          0
        );
        
        tl.fromTo(parent, 
          { xPercent: -100 },
          { xPercent: 0, duration: 1, ease: 'power2.out' },
          0
        );
      });
    },
    
    animateFadeInUp(selector = '.container__fade-in-animation', startTrigger = 'top 80%') {
      const elements = gsap.utils.toArray(selector);
      
      if (elements.length === 0) return;
      
      elements.forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: startTrigger,
            toggleActions: 'play none none none',
          }
        });
      });
    },
    
    animateHeroImage() {
      this.animateImages('.hero-background-image, .home__project-background-image', 'top 80%');
    }
  },
  beforeUnmount() {
    this.titleAnimations.forEach(split => split.revert());
    this.textAnimations.forEach(split => split.revert());
    this.titleAnimations = [];
    this.textAnimations = [];
  }
};
</script>
