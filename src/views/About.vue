<style lang="scss" src="../styles/about.scss" scoped></style>
<template>
  <div class="about">
    <section class="section-spacer section-spacer--large scrolled__to">
      <div class="hero-wrapper">
        <div class="numeration__wrapper">
          <p class="home__project-number">01</p>
        </div>
        <div class="hero-info__wrapper">
          <h1 class="h1 title__wrapper">
            <div class="title-animation">About me</div>
          </h1>
          <h2>
            I'm Aura Bravo, an Industrial Designer passionate about interface
            design.
          </h2>
          <p>
            I lived in Mexico City for six months, where I worked as a design
            intern in Moises Hernandez Design Studio. After finishing my
            internship I became more intrested in digital interfaces, it’s
            design and development.
          </p>
          <p>
            After graduating College in 2018 I dedicated myself to do two things
            I love, studying and learning new things, and traveling. Then I
            moved to Medellín where I work as an UI Designer.
          </p>
          <p>
            I love challenging myself and be constantly exploring and learning
            new stuff.
          </p>
          <div class="subsection-info__wrapper m3">
            <div class="subsection-info__content">
              <h3>Experience</h3>
              <p>
                UX / UI Designer at Dayvo Sistemas<br />Medellín, Colombia<br /><em
                  >AUGUST 2019 - JUNE 2020</em
                >
              </p>
              <p>
                Designer at ORiGEN by Mary Rocío Pérez<br />Cali, Colombia<br /><em
                  >MARCH 2019 - MAY 2020</em
                >
              </p>
              <p>
                Designer at Moises Hernández Design Studio<br />Mexico City,
                Mexico<br /><em>JANUARY 2018- JULY 2018</em>
              </p>
              <p>
                Innlab assistant at Universidad Icesi<br />Cali, Colombia<br /><em
                  >JULY 2017- DECEMBER 2017</em
                >
              </p>
            </div>
            <div class="subsection-info__content">
              <h3>Study and Honors</h3>
              <p>
                Industrial Designer<br />universidad Icesi / Cali, Colombia<br /><em
                  >2013 - 2018</em
                >
              </p>
              <p>Graduated with honors<br /><em>MAGNA CUM LAUDE</em></p>
              <p>Honor Roll<br /><em>2013 - 2018</em></p>
              <p>
                Honor Scholarship<br /><em
                  >I, III, IV, V, VII and X semesters</em
                >
              </p>
              <p>Cambridge English Scale Score <em> C1</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-spacer section-spacer--large">
      <div class="hero-wrapper">
        <div class="numeration__wrapper">
          <p class="home__project-number">02</p>
        </div>
        <div class="hero-info__wrapper">
          <div class="subsection-info__wrapper">
            <div class="subsection-info__content">
              <h3>Skills and Tools</h3>
              <p>PHOTOSHOP | ILLUSTRATOR | INDESIGN | AFTER EFECTS</p>
              <p>HTML | CSS | JAVASCRIPT</p>
              <p>SOLIDWORKS | RHINOCEROS | VRAY</p>
              <p>XD | FIGMA | INVISION</p>
              <p>UX / UI DESIGN | USER RESEARCH | GRAPHIC DESIGN</p>
            </div>
            <div class="subsection-info__content">
              <h3>Extracurriculars</h3>
              <p>
                Member of IxDA Medellín, a member-supported organization
                dedicated to the discipline of interaction design.<br /><em
                  >2020</em
                >
              </p>
              <p>Archery National team<br /><em>2013 - 2017</em></p>
              <p>Team Champion:</p>
              <ul>
                <li>Archery World Cup 2016<br /><em>Medellín, Colombia</em></li>
                <li>Archery World Cup 2015<br /><em>Medellín, Colombia</em></li>
                <li>
                  Archery World Championships 2013<br /><em>Belek, Turkey</em>
                </li>
                <li>Juegos Bolivarianos 2013<br /><em>Trujillo, Perú</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-spacer section-spacer--large">
      <div class="hero-wrapper">
        <div class="numeration__wrapper">
          <p class="home__project-number">03</p>
        </div>
        <div class="hero-info__wrapper">
          <div class="subsection-info__wrapper-hobbies">
            <div class="subsection-hobbies__content">
              <h3>Hobbies</h3>
              <p>
                Besides archery - that was a huge part of my life - I love
                climbing, reading, drawing and coffee. Also one of my big
                passions is traveling and, although I'm not an expert I enjoy
                very much photographing all those experiences and places.
              </p>
            </div>
            <div class="about__images-grid">
              <div class="about__images-grid__image ">
                <img src="../assets/img/guajira.jpg" alt="" srcset="" />
              </div>
              <div class="about__images-grid__image ">
                <img src="../assets/img/puebla.jpg" alt="" srcset="" />
              </div>
            </div>
            <div class="about__images-grid">
              <div class="about__images-grid__image ">
                <img src="../assets/img/roma.jpg" alt="" srcset="" />
              </div>
              <div class="about__images-grid__image e">
                <img src="../assets/img/roma2.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Mixin from "../mixins/Mixin";
import routerTransition from "../mixins/router-transition";
import sectionCatcher from "../mixins/section-catcher";
export default {
  name: "About",
  mixins: [Mixin, routerTransition, sectionCatcher],
  mounted() {
    this.$nextTick(() => this.addScrolledClass());
  },
  beforeRouteLeave(to, from, next) {
    this.routerTransition();
    setTimeout(() => {
      next();
    }, 1400);
  },
};
</script>
