<template>
  <div class="nav-container">
    <a href="/"><h1 style="font-size: 1.5em; font-family: var(--font-secondary); color: var(--secondary-color);">Ruben KONAN</h1></a>
    <div class="nav-elements">
      <a href="#about"><p class="nav">About</p></a>
      <a href="#services"><p class="nav">Services</p></a>
      <a href="#projects"><p class="nav">Projects</p></a>
      <a href="#contact"><p class="nav nav-button">Contact</p></a>

    </div>
  </div>

</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  font-family: var(--main-font);
  display: flex;
  width: 95%;
  margin: auto;
  height: 8dvh;
  font-size: 1.15em;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  scroll-behavior: smooth !important;
}


.nav-elements {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}

.nav {
  transition: 0.25s;
}

.nav:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

a{
  text-decoration: none;
  color: black;
}


</style>
