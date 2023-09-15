<template>
    <div class="footer-container">
        <div class="social phone">
            <img src="../assets/phone.webp" alt="">
            <p>+ 33 7 65 72 16 01</p>

        
            <img src="../assets/mail.png" alt="">
            <p>rubenkonan@gmail.com</p>
        <h2>© Ruben Konan</h2>
    </div>
    </div>
</template>


<style scoped>
.footer-container{
    font-family: var(--main-font);
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.social {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

img {
    height: 5dvh;
}
p {
    margin-top: 1%;
    margin-left: 2%;
    width: 100%;
}

h2 {
    font-family: var(--font-secondary);
    width: 100%;
    text-align: center;
    margin-top: 1%;
}
</style>