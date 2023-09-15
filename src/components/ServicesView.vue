<template>
    <div class="service-container">

        <div class="card">
            <img src="../assets/service1.gif">
            <p class="serv">Coding Skills</p>
            <p class="serv-desc">Expert in HTML, CSS, and JavaScript as well as several frameworks,
                I craft intricate web solutions that perform 
                impeccably across all devices and browsers.</p>
        </div>

        <div class="card">
            <img src="../assets/service2.gif">
            <p class="serv">Design Flair</p>
            <p class="serv-desc">I turn concepts into visually stunning layouts, 
                keeping user experience at the heart of every design decision. 
                Your audience won’t forget the experience.</p>
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
</template>

<style scoped>
.service-container{
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-family: var(--main-font);
    margin-bottom: 7%;
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
}

.serv {
    color: var(--secondary-color);
    margin-bottom: 5%;margin-top: 5%;
    font-size: 1.15em;
}

</style>