<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footerr></footerr>
  </div>
</template>

<script>
import Navbar   from "./components/nav/Navbar.vue";
import Footerr  from "./components/footer/Footer.vue";

export default {
  name: 'app',
  components: {
      Navbar,
      Footerr
  },
}
</script>

<style lang="css">
#app {
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

</style>
