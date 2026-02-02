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
    animateTitles() {
      // Limpiar animaciones anteriores si existen
      this.titleAnimations.forEach(split => split.revert());
      this.titleAnimations = [];

      const titles = this.$el.querySelectorAll('.title-animation');
      
      titles.forEach(title => {
        const split = new SplitText(title, {
          type: 'chars',
          charsClass: 'char'
        });
        
        this.titleAnimations.push(split);

        // Usar clipPath para reveal effect (mask)
        gsap.from(split.chars, {
          yPercent: 100,
          rotate: 20,
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
    
    animateHeroText() {
      const heroParagraphs = this.$el.querySelectorAll('.paragraph__lines-animation');
      
      heroParagraphs.forEach(p => {
        const split = new SplitText(p, {
          type: 'lines',
          linesClass: 'line'
        });
        
        this.textAnimations.push(split);

        split.lines.forEach(line => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          line.parentNode.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

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
      // Buscar todas las imágenes que necesiten animación de máscara
      gsap.utils.toArray(selector).forEach((img) => {
        const parent = img.parentElement;
        
        // Establecer estado inicial explícitamente
        gsap.set([img, parent], { xPercent: 0 });
        
        // Crear timeline para sincronizar ambas animaciones
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
      // Buscar todos los elementos que necesiten fade-in desde abajo dentro del componente
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
    
    // Alias para mantener compatibilidad
    animateHeroImage() {
      this.animateImages('.hero-background-image, .home__project-background-image', 'top 80%');
    }
  },
  beforeUnmount() {
    // Limpiar SplitText al destruir
    this.titleAnimations.forEach(split => split.revert());
    this.textAnimations.forEach(split => split.revert());
    this.titleAnimations = [];
    this.textAnimations = [];
  }
};
</script>
