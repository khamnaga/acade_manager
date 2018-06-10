<template lang="html">
    <div id="propos">
        <div class="jumbo">
            <div class="slogan">
                <h1>ACADE MANAGER</h1>
                <p>A propos du projet</p>
                <router-link :to="'/'">
                    <button class="btn">retour à l'accueil</button>
                </router-link>
            </div>
        </div>
        <section id="about">
            <div class="container-about">
                <h2>QUI JE SUIS</h2>
                <div class="wrapper-3">
                    <figure class="illus">
                        <img src="../../assets/img/me.png" alt="paire de lunettes">
                    </figure>
                    <div class="text">
                        <p>Anciennement intermittent du spectacle dans le dessin d'animation, j'ai décidé après de nombreuses années dans le métier de faire une reconversion professionnelle.</p>
                    </br>
                    <p>Ayant entendu parler de Simplon lors d'un meetup, je me suis renseigné par rapport aux modalités d'inscription et fais le nécessaire pour intégrer la session de formation.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container-about">
            <h2>GENESE DU PROJET</h2>
            <div class="wrapper-3">
                <figure class="illus">
                    <img src="../../assets/img/lightbulb.png" alt="idée ampoule">
                </figure>
                <div class="text">
                    <p>Au départ, j’ai voulu créer cette application dans le cadre d’un projet personnel car elle permettrait d’aider mon chargé de promotion dans la gestion des absences, des retards et de la bonne tenue des comptes github et linkedin des élèves.</p>
                </br>
                <p>Mes camarades de promotion m’ont encouragé à développer cette application car elle répondait aux différentes unités de compétences permettant la validation du titre professionnel. Et répondre a un besoin d’ordre pédagogique.</p>
            </div>
        </div>
    </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'about',
}
</script>

<style lang="css">

/* DESKTOP */
@media screen and (min-width: 992px) {
    div.jumbo {
    width: 100%;
    height: 100vh;
    background: #FFBF00;
    background-color: #ffbf00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ababab' fill-opacity='0.35'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    div.slogan {
        position: absolute;
        z-index: 1;
        top: 35%;
        left: 11%;
    }

    div.slogan h1 {
        font-size: 5em;
        font-weight: bold;
    }
    div.slogan p {
        font-size: 2.5em;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: transparent;
        font-weight: bold;
        margin-top: 20px;
        border: 1px solid;
        border-radius: 30px;
        transition: 0.3s;
    }

    .btn:hover {
        background: #FFF;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    section#about {
        width: 100%;
        margin-top: 30px;
    }

    section#about:nth-child(2) {
        margin-bottom: 30px;
    }

    div.wrapper-3 {
        width: 100%;
        min-height: 600px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
    }

    div.container-about {
        width:  100%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        border: 1px solid transparent;
    }

    .container-about h2 {
        margin-bottom: 15px;
    }

    .text {
        padding: 30px 25%;
    }

    figure.illus {
        width: 50%;
        max-width: 920px;
        height: 580px;
        background: #FFBF00;
        margin: 0 auto;
    }

    img {
        background-size: cover;
        /* max-width: 100%; */
        width: 55%;
        /* height: auto; */
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    div.jumbo {
        width: 100%;
        height: 100vh;
        background-color: #ffbf00;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ababab' fill-opacity='0.35'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    div.slogan {
        position: absolute;
        z-index: 1;
        top: 35%;
        left: 11%;
    }
    div.slogan h1 {
        font-size: 5em;
        font-weight: bold;
    }
    div.slogan p {
        font-size: 2.5em;
    }

    section#about {
        width: 100%;
        margin-top: 30px;
    }

    section#about:nth-child(2) {
        margin-bottom: 30px;
    }

    div.wrapper-3 {
        width: 100%;
        min-height: 600px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
    }

    div.container-about {
        width:  100%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        border: 1px solid transparent;
    }

    .container-about h2 {
        margin-bottom: 15px;
    }

    .text {
        padding: 30px 13%;
    }

    figure.illus {
        width: 75%;
        height: 510px;
        background: #FFBF00;
        margin: 0 auto;
    }

    img {
        width: 75%;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: #FFF;
        font-weight: bold;
        margin-top: 20px;
        border-radius: 30px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    div.jumbo {
        width: 100%;
        height: 100vh;
        background-color: #ffbf00;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ababab' fill-opacity='0.35'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    div.slogan {
        position: absolute;
        z-index: 1;
        top: 35%;
        left: 11%;
    }
    div.slogan h1 {
        font-size: 3.5em;
        font-weight: bold;
    }
    div.slogan p {
        font-size: 2.5em;
    }

    section#about {
        width: 100%;
        margin-top: 30px;
    }

    section#about:nth-child(2) {
        margin-bottom: 30px;
    }

    div.wrapper-3 {
        width: 100%;
        min-height: 600px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
    }

    div.container-about {
        width:  100%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        border: 1px solid transparent;
    }

    .container-about h2 {
        margin-bottom: 15px;
    }

    .text {
        padding: 30px 8%;
    }

    figure.illus {
        width: 90%;
        height: 400px;
        background: #FFBF00;
        margin: 0 auto;
    }

    img {
        width: 60%;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: #FFF;
        font-weight: bold;
        margin-top: 20px;
        border-radius: 30px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    div.jumbo {
        width: 100%;
        height: 47vh;
        background-color: #ffbf00;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ababab' fill-opacity='0.35'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    div.slogan {
        position: absolute;
        z-index: 1;
        margin-top: 35%;
        left: 8%;
    }
    div.slogan h1 {
        font-size: 2em;
        font-weight: bold;
    }
    div.slogan p {
        font-size: 1.5em;
    }

    section#about {
        width: 100%;
        margin-top: 30px;
    }

    section#about:nth-child(2) {
        margin-bottom: 30px;
    }

    div.wrapper-3 {
        width: 100%;
        min-height: 600px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
    }

    div.container-about {
        width:  100%;
        height: auto;
        margin: 0 auto;
        text-align: center;
        border: 1px solid transparent;
    }

    .container-about h2 {
        font-size: 1.1rem;
        margin-bottom: 15px;
    }

    .text {
        font-size: 1rem;
        padding: 30px 4%;
    }

    figure.illus {
        width: 94%;
        height: 300px;
        background: #FFBF00;
        margin: 0 auto;
    }

    img {
        width: 65%;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: #FFF;
        font-weight: bold;
        margin-top: 20px;
        border-radius: 30px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
}
</style>
