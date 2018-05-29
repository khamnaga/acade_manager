<template lang="html">
    <div id="propos">
        <div class="jumbo">
            <div class="slogan">
                <h1>ACADE MANAGER</h1>
                <p>A propos du projet</p>
                <button class="btn">retour à l'accueil</button>
            </div>
        </div>
        <section id="about">
            <div class="container-about">
                <h2>QUI JE SUIS</h2>
                <div class="wrapper-3">
                    <figure class="illus">
                    </figure>
                    <div class="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container-about">
            <h2>GENESE DU PROJET</h2>
            <div class="wrapper-3">
                <figure class="illus">
                </figure>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
                </br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
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
        border: 1px solid red;
    }

    .container-about h2 {
        margin-bottom: 15px;
    }

    .text {
        padding: 30px 25%;
    }

    figure.illus {
        width: 50%;
        height: 580px;
        background: #FFBF00;
        margin: 0 auto;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
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
        border: 1px solid red;
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
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
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
        border: 1px solid red;
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
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
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
        border: 1px solid red;
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
}
</style>
