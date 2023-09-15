<template>
    <div class="project-container" id="projects">
        <h2>Some Projects</h2>
    </div>
    <div class="project-wrapper">

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


<style scoped>
.project-container {
    width: 95%;
    margin: auto;
}

.project-wrapper {
    width: 95%;
    margin: auto;
}

.project {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 3%;
    align-items: center;
}

.project-inv {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 3%;
    align-items: center;
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
    margin: 2%;
}

</style>