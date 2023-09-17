<template>
  <div class="nav-container" :class="{ 'dark-mode': isDarkMode }">
    <a href="#"><h1 class="title-name">Ruben KONAN</h1></a>
    <img class="menu mobile" src="../assets/hamburger-menu.png" alt="" @click="toggleMenu">
    <div class="nav-elements" :class="{ 'open': isMenuOpen }">
      <a href="#about"><p class="nav">About</p></a>
      <a href="#services"><p class="nav">Services</p></a>
      <a href="#projects"><p class="nav">Projects</p></a>
      <a href="#contact"><p class="nav nav-button">Contact</p></a>

        <button class="toggle-mode nav mobile" @click="toggleDarkMode">
          <img :src="isDarkMode ? require('../assets/light-mode.png') : require('../assets/night-mode.png')" alt="">
        </button>

    </div>
  </div>

</template>

<script>
import { useDarkModeStore } from '@/store/index.js';
import { watch, ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const darkModeStore = useDarkModeStore();
    const isDarkMode = ref(darkModeStore.getIsDarkMode);
    const isMenuOpen = ref(false);
    

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


    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const resetMenu = () => {
      if (window.innerWidth > 900) {
        isMenuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('resize', resetMenu);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resetMenu);
    });

    return {
      isDarkMode,
      toggleDarkMode,
      isMenuOpen,
      toggleMenu
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
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 999;
  scroll-behavior: smooth !important;
  transition: .5s;
}

.title-name {
  font-size: 1.5em; 
  font-family: var(--font-secondary);
  color: var(--secondary-color);
}

.menu {
  display: none;
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
  padding: 15%;
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


.dark-mode .menu {
  transition: .2s;
  filter: invert();
}


@media screen and (max-width: 900px) {
  .nav-container {
    display: flex;
    height: fit-content;
    align-items: flex-start;
  }

  .title-name {
    font-size: 1.1em;
  }

  .menu {
    display: flex;
    align-self: center;
    position: absolute;
    left: 89%;
  }

  button {
    width: 15vw !important;
  }



  .nav-elements button {
    padding: 15px;
    height: 7dvh;
    width: 6vw;
  }

  .nav-elements {
  display: none;
  color: black;
  transition: .2s;
}

.nav-elements.open {
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .2s;
}

.nav {
  display: flex !important;
  justify-content: center;
  margin-top: 10%;
  margin-right: 20%;
}

.toggle-mode {
  margin-bottom: 5%;
  margin-left: 30%;
}


}

</style>
