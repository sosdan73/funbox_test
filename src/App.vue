<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
@font-face {
  font-family: 'Exo2.0';
  src: url(./assets/fonts/Exo2.0-Thin.otf);
}
body {
  margin: 0;
}
html, body {
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 45px;
  width: 100vw;
  h1 {
    text-align: center;
    font-family: 'Exo2.0';
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 2rem;
      width: 90%;
      margin: auto;
    }
  }
}
</style>
