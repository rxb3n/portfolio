<template>
    <div class="project-container" id="projects" :class="{ 'dark-mode': isDarkMode}">
        <h2>Some Projects</h2>
    </div>
    <div class="project-wrapper" :class="{ 'dark-mode': isDarkMode}">

        <div class="project">
            <a href="https://sneakerpage.netlify.app/" target="_blank"><img src="../assets/sites/shoe.png"></a>
            <p>SneakerPage: template design for a Shoe / Sneakers store.</p>
        </div>

        <div class="project-inv">
            <a href="https://richards-site.netlify.app" target="_blank"><img src="../assets/sites/richards.png"></a>
            <p>Richard's: A template design for a luxury restaurant based in Ivory Coast.</p>
        </div>

        <div class="project">
            <a href="https://gameshop-hardcoded.netlify.app" target="_blank"><img src="../assets/sites/gameshop.png"></a>
            <p>GameShop: A template design for a Videogame / Consoles retail store.</p>
        </div>

        <div class="project-inv">
            <a href="https://artysite.netlify.app" target="_blank"><img src="../assets/sites/arty-site.png"></a>
            <p>Arty: A template design for a Makeup Artist Business based in Ivory Coast.</p>
        </div>

        <div class="project">
            <a href="https://sparkle-site.netlify.app" target="_blank"><img src="../assets/sites/jewelery.png"></a>
            <p>Sparkle: A template design for a Jewelery Selling Business based in Ivory Coast.</p>
        </div>

        <div class="project-inv">
            <a href="https://assurivoire.netlify.app" target="_blank"><img src="../assets/sites/assur.png"></a>
            <p>AssurIvoire: A template design for an Insurance company based in Ivory Coast</p>
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


<style scoped>
.project-container {
    width: 95%;
    margin: auto;
}

.project-wrapper {
    width: 95%;
    margin: auto;
    margin-bottom: 5%;
}

.project {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 3%;
    align-items: center;
    rotate: -5deg;
    transition: .2s;
    border-radius: 40px;
}

.project-inv {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 3%;
    align-items: center;
    rotate: -5deg;
    transition: .2s;
    border-radius: 40px;
}

.project:hover {
    background-color: var(--secondary-color);
    color: var(--main-color);
}



.project-inv:hover {
    background-color: var(--secondary-color);
    color: var(--main-color);
}

img {
    height: 50dvh;
    width: 50vw;
    filter: brightness(45%);
    transition: .25s;
    border-radius: 40px;
}

img:hover {
    filter: brightness(70%);
}

h2 {
    font-family: var(--font-secondary);
    color: var(--secondary-color);
    font-size: 3em;
    margin-bottom: 5%;
}

p {
    font-family: var(--main-font);
    display: flex;
    font-size: 1.3em;
    transition: .2s;
}

.dark-mode h2{
    color: var(--secondary-color-dark);
    transition: .2s;
}

.dark-mode .project:hover {
    background-color: var(--secondary-color-dark);
    color: var(--main-color);
}

.dark-mode .project-inv:hover {
    background-color: var(--secondary-color-dark);
    color: var(--main-color);
}

@media screen and (max-width: 900px) {
    .project img, .project-inv img {
        height: 30dvh;
    }

    .project, .project-inv {
        margin-bottom: 15%;
    }

    .project-wrapper {
        font-size: 0.8rem;
    }
}

</style>