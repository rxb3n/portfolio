<template>
    <div class="about-container" id="about">
        <h2>About me</h2>
        <div class="about-text">

            <div class="text">
                <p>
                With years of experience creating mind-blowing web experiences, 
                I’m Ruben Konan, your go-to front-end developer. 
                I give life to your designs and turn them into engaging, 
                interactive websites.
                </p>
            </div>

            <div class="text">
                <p>
                    I’ve worked with media and IT companies to create inspiring user interfaces and keep users coming back for more. 
                    My coding skills and attention to detail ensure fast delivery of pixel-perfect designs each and every time.
                </p>
                </div>
            

                

        </div>
    </div>
</template>

<style scoped>
.about-container{
    width: 95%;
    margin: auto;
    height: 35dvh;
}

.about-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.about-text p {
    font-family: var(--main-font);
    font-size: 1.2em;
    text-align: start;
}

.text {
    max-width: 47%;
    margin: 0;
}

h2 {
    font-family: var(--font-secondary);
    font-size: 3em;
    margin-bottom: 2%;
    color: var(--secondary-color);
}
</style>