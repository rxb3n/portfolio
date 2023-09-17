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
import { useDarkModeStore } from '@/store/index.js';
import { watch, ref } from 'vue';


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
  },
  setup() {
    const darkModeStore = useDarkModeStore();

    const isDarkMode = ref(darkModeStore.getIsDarkMode);

    // Observer les changements dans le mode sombre
    watch(() => darkModeStore.getIsDarkMode, (newValue) => {
      isDarkMode.value = newValue;

      // Mettez à jour les styles en fonction du mode sombre
      document.body.style.backgroundColor = isDarkMode.value ? 'black' : 'white';
      document.body.style.color = isDarkMode.value ? 'white' : 'black';
    });

    const toggleDarkMode = () => {
      darkModeStore.toggleDarkMode();
    };

    return {
      isDarkMode,
      toggleDarkMode
    };
  }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Martian+Mono:wght@400;500;700&display=swap');



:root {
  --main-color: rgb(250,255,227);
  --secondary-color-dark: #9584E0;
  --secondary-color: #42B1F9;
  --main-font: 'Martian Mono', monospace;
  --font-secondary: 'Elsie', cursive;
  --font-color-dark: white;
  --background-color: white;
  --background-color-dark: black;
}

html {
  scroll-behavior: smooth;
  max-width: 100%;
  overflow-x: hidden;
}

body, h1, h2, h3, h4, h6{
  margin: 0;
  padding: 0;
  overflow-x:hidden ;
  max-width: 100%;
}


a {
  text-decoration: none;
}

.dark-mode {
  background-color: var(--background-color-dark); /* Fond sombre */
}


</style>
