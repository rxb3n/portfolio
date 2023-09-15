<template>
  <div class="nav-container">
    <div class="nav-elements">
      <a href="#about"><p class="nav">About</p></a>
      <p class="nav">Services</p>
      <p class="nav">Projects</p>
      <p class="nav nav-button">Contact</p>
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


</style>
