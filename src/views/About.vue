
<style lang="scss" src="../styles/about.scss"></style>
s<template>
  <div class="about">
    <section class="section-spacer section-spacer--large scrolled__to" ref="sectionRef">
      <div class="about__wrapper">
        <div class="nueration__wrapper">
        </div>
        <div class="about-info__wrapper">
          <h1 class="title__wrapper">
            <div class="title-animation">About me</div>
          </h1>
           <h2> I'm Aura Bravo, an Industrial Designer passionate about interface design.</h2>
          <p>
            I lived in Mexico City for six months, where I worked as a design intern in Moises Hernandez Design Studio. After finishing my internship I became more intrested in digital interfaces, it’s design and development.

After graduating College in 2018 I dedicated myself to do two things I love, studying and learning new things, and traveling. Then I moved to Medellín where I work as an UI Designer.

I love challenging myself and be constantly exploring and learning new stuff.
          </p>
        </div>
        <div class="hero-image__wrapper">
          <div class="hero-background-image section-image"></div>
        </div>
      </div>
    </section>
    <section
      class="section-spacer section-spacer--large"
      ref="sectionRef"
      v-for="(data, index, key) in projectData"
      :index="index"
      :key="key"
    >
      <div class="home__project-router" @click="setProject(index)">
        <div
          class="home__project-wrapper"
          :class="{'home__project-wrapper--reverse': !index % 2 == 0}"
        >
          <p class="home__project__extra-info">Diseño Web - 2020 - Dayvo Sistemas</p>
          <div
            class="home__project-image__wrapper section-image"
            :class="{'background-image__wrapper--opened': imageReleased == true}"
          >
            <div
              class="home__project-background-image"
              :style="{backgroundImage: 'url(' + data.previewImage + ')'}"
            ></div>
          </div>
          <div class="home__project-info__wrapper">
            <h2 class="h1 title__wrapper">
              <div class="title-animation">{{data.title}}</div>
            </h2>
            <div class="home__project-number__wrapper">
              <p class="home__project-number">0{{index + 1}}</p>
              <div class="home__project-line"></div>
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