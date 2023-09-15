<template>
    <div class="stack-container">
        <h2>My Skills</h2>
    </div>

    <div class="swiper-wrapper">
		<swiper
			:modules="modules"
			:space-between="0"
			:grabCursor = "true"
			:loop="true"
			:freeMode = "true"
			:speed ="10000"
			:freeModeMomentum = "true"
			:autoplay= "{
				delay: 1,
				disableOnInteraction: false
			}"
			:breakpoints="{
				'950': {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				'0': {
					slidesPerView: 1,
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
                <img src="../assets/css-logo.png">
                <p class="skill">CSS</p>
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
                <img src="../assets/react-logo.png">
                <p class="skill">React</p>
                <p class="level">Advanced</p>
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
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from "swiper/modules";

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay],
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

</style>