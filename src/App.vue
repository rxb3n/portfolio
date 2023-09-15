<template>
  <NavView/>
  <HeroView/>
  <AboutView/>
  <ServicesView/>
  <StackView/>
  <ProjectView/>
  <ContactView/>
  <FooterView/>
</template>

<script>
import NavView from './components/NavView.vue'
import HeroView from './components/HeroView.vue'
import AboutView from './components/AboutView.vue'
import ServicesView from './components/ServicesView.vue'
import StackView from './components/StackView.vue'
import ProjectView from './components/ProjectView.vue'
import ContactView from './components/ContactView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    NavView,
    HeroView,
    AboutView,
    ServicesView,
    StackView,
    ProjectView,
    ContactView,
    FooterView,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Martian+Mono:wght@400;500;700&display=swap');


:root {
  --main-color: white;
  --secondary-color: #9584E0;
  --main-font: 'Martian Mono', monospace;
  --font-secondary: 'Elsie', cursive;
}

body, h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  padding: 0;
}

</style>
