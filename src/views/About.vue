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
            I am an Interface Designer who strongly believes in the
            transformative power of design as a catalyst for positive change in
            people's lives.
          </h2>
          <p class="subsection-info__paragraph">
            I enjoy being involved in the different stages of the creative
            process, from ideation and conceptualization to the materialization
            and delivery of a product that meets the needs of the end-users and
            the business.
          </p>
          <p class="subsection-info__paragraph">
            I have a keen eye for detail and a strong understanding of user
            experience design principles. I am comfortable conducting user
            research, creating wireframes and prototypes, designing interfaces,
            and collaborating with cross-functional teams such as engineers and
            product managers.
          </p>
          <p class="subsection-info__paragraph">
            I’m a proactive professional committed to continuous learning and
            self improving. I am always seeking to step up my skills and stay
            up-to-date on the latest design trends and technologies.
          </p>
          <div class="subsection-info__wrapper m3">
            <div class="subsection-info__content">
              <h3>Experience</h3>
              <p class="subsection-info__paragraph">
                Ilógica<br />Medellín, Colombia<br />APR 2022 - PRESENT
              </p>
              <p class="subsection-info__paragraph">
                Bancolombia<br />Medellín, Colombia<br />
                SEP 2021 - APR 2022
              </p>
              <p class="subsection-info__paragraph">
                Multiplica Talent for Bancolombia<br />Medellín, Colombia<br />
                OCT 2020 - SEP 2021
              </p>
              <p class="subsection-info__paragraph">
                Eykkon<br />Medellín, Colombia<br />OCT 2020 - SEP 2017
              </p>
              <p class="subsection-info__paragraph">
                Dayvo Sistemas<br />Medellín, Colombia<br />
                AUG 2019 - JUN 2020
              </p>
            </div>
            <div class="subsection-info__content">
              <h3>Study and Honors</h3>
              <p class="subsection-info__paragraph">
                Icesi University, Cali, Colombia<br />Bachelor of Design (BDes)
                in Industrial Design
                <br />
                2013 - 2018
              </p>
              <p class="subsection-info__paragraph">
                College Honors - Magna Cum Laude<br />GPA: 4.53/5.00
              </p>
              <p class="subsection-info__paragraph">
                Honor Roll student for five years, and 6 times winner of the
                honor roll scholarship.
              </p>
              <p class="subsection-info__paragraph">
                English advanced C1 - Cambridge
              </p>
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
              <p class="subsection-info__paragraph">
                UX / UI DESIGN | USER RESEARCH |VISUAL DESIGN | ACCESSIBILITY
              </p>
              <p class="subsection-info__paragraph">FIGMA | XD | SKETCH</p>
              <p class="subsection-info__paragraph">
                PHOTOSHOP | ILLUSTRATOR | AFTER EFFECTS
              </p>
            </div>
            <div class="subsection-info__content">
              <h3>Extracurriculars</h3>
              <p class="subsection-info__paragraph">
                Member of IxDA Medellín, a member-supported organization
                dedicated to the discipline of interaction design.<br />
                2020
              </p>
              <p class="subsection-info__paragraph">
                Archery National team<br />2013 - 2017
              </p>
              <p class="subsection-info__paragraph">Team Champion:</p>
              <ul>
                <li>Archery World Cup 2016<br />Medellín, Colombia</li>
                <li>Archery World Cup 2015<br />Medellín, Colombia</li>
                <li>Archery World Championships 2013<br />Belek, Turkey</li>
                <li>Juegos Bolivarianos 2013<br />Trujillo, Perú</li>
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
                Apart from archery, which has been a significant part of my
                life, I have a deep passion for climbing, reading, digital
                drawing, and savoring a good cup of coffee. Additionally,
                traveling is one of my great passions, and while I may not
                consider myself an expert, capturing the essence of those
                experiences and places through photography brings me immense
                joy.
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
import Mixin from '../mixins/Mixin';
import routerTransition from '../mixins/router-transition';
import sectionCatcher from '../mixins/section-catcher';
export default {
  name: 'About',
  mixins: [Mixin, routerTransition, sectionCatcher],
  mounted() {
    this.$nextTick(() => this.addScrolledClass());
    this.breakAllTitles();
    this.startAnimations();
  },
  beforeRouteLeave(to, from, next) {
    this.onRouteChange();
    next();
    setTimeout(() => {}, 1400);
  }
};
</script>
