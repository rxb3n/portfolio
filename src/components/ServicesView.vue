<template>
    <div class="service-container" id="services" :class="{ 'dark-mode': isDarkMode }">
        <h2>Services</h2>
        <div class="card-wrapper">
            <div class="card">
            <img src="../assets/service2.gif">
            <p class="serv">Design Flair</p>
            <p class="serv-desc">I turn concepts into visually stunning layouts, 
                keeping user experience at the heart of every design decision. 
                Your audience won’t forget the experience.</p>
        </div>

        <div class="card">
            <img src="../assets/service1.gif">
            <p class="serv">Coding Skills</p>
            <p class="serv-desc">Expert in HTML, CSS, and JavaScript as well as several frameworks,
                I craft intricate web solutions that perform 
                impeccably across all devices and browsers.</p>
        </div>

        <div class="card">
            <img src="../assets/service3.gif">
            <p class="serv">Proactive Approach</p>
            <p class="serv-desc">I tackle challenges head-on and 
                find innovative solutions to complex problems. 
                I stay up-to-date with trends, 
                ensuring your brand remains relevant and engaging.</p>
        </div>
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
.service-container{
    width: 95%;
    margin: auto;
    font-family: var(--main-font);
    margin-bottom: 7%;
}

.card-wrapper{
    display: flex;
    justify-content: space-between;
}

h2 {
    font-family: var(--font-secondary);
    font-size: 3em;
    color: var(--secondary-color);
    margin-top: 3%; margin-bottom: 8%;
}

.card {
    width: 20%;
    transition: .25s;
}

.card:hover > img{
    filter: grayscale(0%);
}

.card:hover {
    transform: scale(1.2);
}

img {
    height: 40dvh;
    width: 18vw;
    filter: grayscale(100%);
    transition: .25s;
    border-radius: 18px;
}

.serv {
    color: var(--secondary-color);
    margin-bottom: 5%;margin-top: 5%;
    font-size: 1.15em;
}

.dark-mode .serv{
    color: var(--secondary-color-dark) !important;
}

.dark-mode  h2{
    color: var(--secondary-color-dark) !important;
}

@media screen and (max-width: 900px) {
    .card-wrapper {
        height: fit-content;
        display: block;
    }

    h2 {
        text-align: center;
    }

    .card {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15%;
        text-align: center;
    }

    .card:hover {
        transform: none;
    }

    img {
        width: 50vw;
    }
}

</style>