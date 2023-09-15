<template>
    <div class="hero-wrapper">

        <div class="hero-text">
            <h1>RUBEN KONAN</h1>
            <h2>Professional <br>Front-End Developer</h2>

            <div class="hero-btn">
                <a href="cv.pdf" download><button>Download CV</button></a>
            </div>

        </div>

        <div class="hero-image">
            <img src="../assets/picture.png">
        </div>

    </div>

</template>

<style scoped>
.hero-wrapper{
    background-image: url(../assets/hero-banner.jpg);
    height: 80dvh;
    width: 95%;
    margin: auto;
    background-size: contain;
    background-attachment: fixed;
    font-family: var(--main-font);
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4%;
}

.hero-image img {
    height: 35dvh;
    width: auto;
    transition: .5s;
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

</style>