<template lang="html">
    <div class="">
        <div id="dash">
              <div class="column">
                  <p>sessions</p>
                  <p>eleves</p>
              </div>

              <div class="wrapper">
                  <form class="login-right">

                      <h2>NOUVELLE SESSION</h2>

                      <hr>

                      <!-- <input v-model="session.entitled" type="text"  name="entitled"  placeholder="Intitulé de la session" required>
                      <input v-model="session.name" type="text"  name="name" placeholder="Nom de la session" required>
                      <input v-model="session.start_date" type="date"  name="start_date" placeholder="Date de début" required>
                      <input v-model="session.end_date" type="date" name="end-date" placeholder="Date de fin" required>
                      <input v-model="session.admin_firstname" type="text"  name="firstname" placeholder="Nom chargé.e de promotion" required>
                      <input v-model="session.admin_lastname" type="text" name="lastname" placeholder="Prénom chargé.e de promotion" required> -->

                      <input type="text"  name="entitled"  placeholder="Intitulé de la session" required>
                      <input type="text"  name="name" placeholder="Nom de la session" required>
                      <input type="date"  name="start_date" placeholder="Date de début" required>
                      <input type="date" name="end-date" placeholder="Date de fin" required>
                      <input type="text"  name="firstname" placeholder="Nom chargé.e de promotion" required>
                      <input type="text" name="lastname" placeholder="Prénom chargé.e de promotion" required>

                      <input type="submit" value="CREER SESSION" class="btn">

                  </form>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard'
}
</script>

<style lang="css" scoped>
/* page dashboard */
    #dash {
        width: 100%;
        height: 100vh;
        background: #ffffff;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .column {
        width: 14vw;
        height: 100%;
        color: #FFF;
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        background: #233249;
        padding: 100px 50px 0;
        float: left;
    }

    .wrapper {
        width: 99vw;
        padding-top: 6%;
    }

    form {
        width: 25%;
        height: 70vh;
        background: #FFF;
        text-align: center;
        padding: 60px 100px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 0 auto;
    }

    input {
        width: 100%;
        margin: 15px 0;
        border: 1.1px solid;
        padding: 10px;
    }
/* page dashboard */
</style>
