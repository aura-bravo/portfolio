
<style lang="scss" src="../styles/about.scss"></style>
s<template>
  <div class="about">
    <section class="section-spacer section-spacer--large scrolled__to" ref="sectionRef">
      <div class="hero-wrapper">
        <div class="numeration__wrapper">
          <p class="home__project-number">01</p>
        </div>
        <div class="hero-info__wrapper">
          <h2 class="h1 title__wrapper">
            <div class="title-animation">About me</div>
          </h2>
           <h2> I'm Aura Bravo, an Industrial Designer passionate about interface design.</h2>
          <p>
            I lived in Mexico City for six months, where I worked as a design intern in Moises Hernandez Design Studio. 
            After finishing my internship I became more intrested in digital interfaces, it’s design and development.
          </p>
          <p>After graduating College in 2018 I dedicated myself to do two things I love, studying and learning new things, and traveling. 
            Then I moved to Medellín where I work as an UI Designer.
          </p>
          <p>I love challenging myself and be constantly exploring and learning new stuff.
          </p>
          <div class="subsection-info__wrapper">
            <div class="subsection-info__content">
              <h3>Experience</h3>
               <p>UX / UI Designer at Dayvo Sistemas<br>Medellín, Colombia<br><em>AGOSTO 2019 - JUNIO 2020</em></p>
               <p>Designer at ORiGEN by Mary Rocío Pérez<br>Cali, Colombia<br><em>MARZO 2019 - MAYO 2020</em></p>
               <p>Designer at Moises Hernández Design Studio<br>Mexico City, Mexico<br><em>ENERO 2018- JULIO 2018</em></p>
               <p>Innlab assistant at Universidad Icesi<br>Cali, Colombia<br><em>JULIO 2017- DICEIMBRE 2017</em></p>
            </div>  
            <div class="subsection-info__content">
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
  export default {
    name: "About",
    mixins: [Mixin, routerTransition],
  }
</script>