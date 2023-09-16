<template>
    <div class="stack-container" :class="{ 'dark-mode': isDarkMode }">
        <h2>My Skills</h2>
    </div>

    <div class="swiper-wrapper" :class="{ 'dark-mode': isDarkMode }">
		<swiper
			:modules="modules"
			:space-between="0"
			:grabCursor = "true"
			:loop="true"
			:freeMode = "true"
            :freeModeMomentum = "true"
			:speed ="10000"

			:autoplay= "{
				delay: 1,
				disableOnInteraction: false,
			}"
			:breakpoints="{
				'950': {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 5,
				},
			}"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
        <swiper-slide>
            <div class="slide">
                <img src="../assets/html-logo.png">
                <p class="skill">HTML</p>
                <p class="level">Expert</p>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="slide">
                <img src="../assets/js-logo.png">
                <p class="skill">Javascript</p>
                <p class="level">Expert</p>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="slide">
                <img src="../assets/vue-logo.png">
                <p class="skill">Vue 3</p>
                <p class="level">Expert</p>
            </div>
        </swiper-slide>



        <swiper-slide>
            <div class="slide">
                <img src="../assets/python-logo.png">
                <p class="skill">Python</p>
                <p class="level">Expert</p>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="slide">
                <img src="../assets/mongodb-logo.png">
                <p class="skill">MongoDB</p>
                <p class="level">Intermediate</p>
            </div>
        </swiper-slide>



    </swiper>
    </div>

    <div class="swiper-wrapper" :class="{ 'dark-mode': isDarkMode }">
		<swiper
			:modules="modules"
			:space-between="0"
			:grabCursor = "true"
			:loop="true"
			:freeMode = "true"
            :freeModeMomentum = "true"
			:speed ="10000"

			:autoplay= "{
				delay: 1,
				disableOnInteraction: false,
                reverseDirection: true
			}"
			:breakpoints="{
				'950': {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				'0': {
					slidesPerView: 2,
					spaceBetween: 5,
				},
			}"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>

        <swiper-slide>
            <div class="slide">
                <img src="../assets/css-logo.png">
                <p class="skill">CSS</p>
                <p class="level">Expert</p>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="slide">
                <img src="../assets/react-logo.png">
                <p class="skill">React</p>
                <p class="level">Advanced</p>
            </div>
        </swiper-slide>


        <swiper-slide>
            <div class="slide">
                <img src="../assets/uxui-logo.png">
                <p class="skill">UX/UI</p>
                <p class="level">Advanced</p>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="slide">
                <img src="../assets/nodejs-logo.png">
                <p class="skill">NodeJs</p>
                <p class="level">Intermediate</p>
            </div>
        </swiper-slide>



    </swiper>
    </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from "swiper/modules";

  // Import Swiper styles
  import 'swiper/css';
  import { useDarkModeStore } from '@/store/index.js';
    import { watch, ref } from 'vue';

  export default {
    components: {
      Swiper,
      SwiperSlide,
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

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    const modules = [Autoplay];

    return {
      onSwiper,
      onSlideChange,
      modules,
      isDarkMode,
      toggleDarkMode,
    };
  },
  };
</script>

<style scoped>
.stack-container{
    width: 95%;
    margin: auto;
    margin-bottom: 5%;
}


.swiper-wrapper {
    margin-bottom: 5%;
}

.stack-container h2 {
    font-family: var(--font-secondary);
    font-size: 3em;
    margin-bottom: 3%;
    color: var(--secondary-color);
    transition: .2s;
}

.slide {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    border-radius: 18px;
    height: 40dvh;
    transition: .25s;
}

.slide p {
    display: none;
    transition: .25s;
}

.slide:hover {
    filter: grayscale(100%);
    filter: invert();
}

.slide:hover img {
    display: none;
}


.slide:hover > p {
    display: flex
}

.slide img{
    height: 25dvh;
    width: 12vw;
    transition: .25s;
}

.skill {
    margin-top: 4%;margin-bottom: 4%;
    font-family: var(--font-secondary);
    font-size: 2.5em;
}

.level {
    font-family: var(--main-font);
}

.dark-mode .slide{
    background-color: rgb(31, 31, 31) !important;
}


.dark-mode p{
    color: var(--font-color-dark) !important;
}

.dark-mode h2 {
    color: var(--secondary-color-dark);
}

@media screen and (max-width: 900px) {
    img {
        object-fit: contain;
    }

    .stack-container {
        margin-bottom: 10%;
    }

    .swiper-wrapper {
        margin-bottom: 10%;
    }
    
    .slide {
        height: 20dvh;
    }
}

</style>