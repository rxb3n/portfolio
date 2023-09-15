<template>
    <div class="contact-container" id="contact">
        <div class="contact">
            <h2>Let's Talk!</h2>
            <p>Ready to elevate your brand with a stunning<br> web presence? 
            Don’t hesitate to reach out!</p>

            <div class="contact-btn">
                <a href="mailto:rubenkonan@gmail.com"><button>Contact Me</button></a>  
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-container {
    background-color: var(--secondary-color);
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--main-color);
    text-align: center;
    height: 25dvh;
    justify-content: center;
}

h2 {
    font-size: 3em;
    font-family: var(--font-secondary);
    margin-bottom: 1%;
}

p {
    font-family: var(--main-font);
    font-size: 1.2em;
    margin-bottom: 1%;
}

button {
    font-family: var(--main-font);
    border: none;
    background-color: white;
    padding: 5px;
    border-radius: 18px;
    font-size: 1.1em;
    transition: .2s;
}

button:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}

</style>