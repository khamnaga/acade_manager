<template>
  <div id="nav">
      <header role="heading">
          <figure class="logo">
              <a href="#">
                  <!-- w-100 prend la largeur à 100% -->
                  <img src="../../assets/img/academanager_logo.png" alt="academanager logo" class="w-100" role="img" @click="goToHome()">
              </a>
          </figure>

          <nav class="navbar navbar-expand-lg navbar-light black">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <!-- <span class="navbar-toggler-icon">
              <hr>
              <hr>
              <hr>
          </span> -->

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" href="#">ACCUEIL<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">A PROPOS</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">SESSIONS</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">SE CONNECTER</a>
                  </li>
              </ul>
          </div>
      </nav>
  </header>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
      goToHome() {
          this.$router.push("/");
      }
  }
}
</script>

<style lang="scss">
    #nav {
      font-family: 'Dosis', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    header {
        width: 100%;
        height: 80px;
        background: #FFF;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        box-shadow: 0px 0px 10px 0px gray;
    }

    figure.logo {
        width: 110px;
        height: 110px;
    }

    .navbar {
        position: absolute;
        right: 0;
        top: 0;
        height: 80px;
    }
</style>
