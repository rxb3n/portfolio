<template >
    <div class="hero-wrapper" :class="{ 'dark-mode': isDarkMode }">

        <div class="hero-text">
            <svg viewBox="0 0 960 500">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="50%">RUBEN</text>
    <text text-anchor="middle" x="50%" y="75%">KONAN</text>
    
  </symbol>

  <g class = "g-ants">
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
  </g>
</svg>
            <h2>Professional <br>Front-End Developer</h2>

            <div class="hero-btn">
                <a href="https://pdfhost.io/v/kCUgVJOOd_cv" download><button>Download CV</button></a>
            </div>

        </div>

        <div class="hero-image">
            <img src="../assets/picture.png">
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
.hero-wrapper{
  background-image: url(../assets/hero-banner-day.jpg);
  height: 80dvh;
  width: 95%;
  margin: auto;
  background-size: cover;
  background-attachment: fixed;
  font-family: var(--main-font);
  text-align: center;
  color: var(--main-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 4%;
  transition: .5s;
}

.hero-image img {
    height: 35dvh;
    width: auto;
    transition: .5s;
    border-radius: 18px;
    position: relative;
    bottom: 10dvh;
}

.hero-image img:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

.hero-btn {
    width: 100%;
}

.hero-btn button {
    font-size: 1.5em;
    margin-top: 25%;
    border-radius: 0px;
    border: none;
    padding: 3%;
    width: 65%;
    transition: 0.25s;
    font-family: var(--main-font);
}

.hero-btn button:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

h1 {
    margin-bottom: 15%;
    font-size: 2.5em;
}

svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 680px;
    height: 800;
    margin: 0 auto;
}

.text-copy {
    fill: none;
    stroke: var(--main-color);
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
  stroke: var(--main-color);
  animation-delay: -1;
}

.text-copy:nth-child(2){
  stroke: black;
  animation-delay: -2s;
}

.text-copy:nth-child(3){
  stroke: var(--main-color);
  animation-delay: -3s;
}

.text-copy:nth-child(4){
  stroke: black;
  animation-delay: -4s;
}

.text-copy:nth-child(5){
  stroke: var(--main-color);
  animation-delay: -5s;
}

@keyframes stroke-offset{
  100% {stroke-dashoffset: -35%;}
}

.dark-mode {
  background-image: url(../assets/hero-banner.jpg);
  transition: .5s !important;
}

.dark-mode button{
    background-color: black !important;
    color: white !important;
}

@media screen and (max-width: 900px) {
  .hero-wrapper {
    display: block
  }
  .hero-image img{
    height: 25dvh;
  }

  .hero-image {
    display: block;
    padding-top: 10%;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-wrapper{
    height: fit-content;
  }

  .hero-btn {
    height: 45dvh;
    margin-top: -8%;
  }

  svg{
    width: 100vw;
  }
}

</style>