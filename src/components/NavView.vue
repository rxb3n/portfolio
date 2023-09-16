<template>
  <div class="nav-container" :class="{ 'dark-mode': isDarkMode }">
    <a href="/"><h1 style="font-size: 1.5em; font-family: var(--font-secondary);color: var(--secondary-color);;">Ruben KONAN</h1></a>
    <div class="nav-elements">
        <a href="#about"><p class="nav">About</p></a>
        <a href="#services"><p class="nav">Services</p></a>
        <a href="#projects"><p class="nav">Projects</p></a>
        <a href="#contact"><p class="nav nav-button">Contact</p></a>

        <button class="toggle-mode" @click="toggleDarkMode">
      <img :src="isDarkMode ? require('../assets/light-mode.png') : require('../assets/night-mode.png')" alt="">
    </button>

    </div>
  </div>

</template>

<script>
import { useDarkModeStore } from '@/store/index.js';
import { watch, ref } from 'vue';

export default {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  font-family: var(--main-font);
  display: flex;
  width: 100%;
  margin: auto;
  height: 8dvh;
  font-size: 1.15em;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  scroll-behavior: smooth !important;
  transition: .5s;
}

.nav-container img {
  height: 5dvh;
  transition: .2s;
}

h1 {
  margin-left: 25%;
}

.nav-container button {
  background-color: transparent;
  border: none;
  transition: .1s;
  padding: 3px;
  height: 6dvh;
  width: 4vw;
}

.nav-container button:hover {
  border-radius: 40px;
  background-color: black;
}

.nav-container button:hover img {
  filter: invert();
}


.nav-elements {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}

.nav {
  transition: 0.25s;
}

.nav:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

a{
  text-decoration: none;
  color: black;
}

.toggle-mode {
  background-color: transparent;
  border: none;
  padding: 3px;
  height: 6dvh;
  width: 4vw;
  transition: .1s;
}

.toggle-mode:hover {
  border-radius: 40px;
  background-color: black;
}

.toggle-mode img {
  height: 100%;
  transition: .1s;
}

.dark-mode {
  background-color: black;
}

.dark-mode p {
  color: var(--font-color-dark);
}

.dark-mode p:hover {
  color: var(--secondary-color-dark);
}

.dark-mode h1 {
  color: var(--secondary-color-dark) !important;
}

.dark-mode button {
  transition: .2s;
  filter: invert();
}

</style>
