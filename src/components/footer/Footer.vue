<template lang="html">
    <div id="foot">
        <footer>
        <div class="container">
            <div class="f-wrapper">
                <div class="f-left">
                    <h3>ADRESSE</h3>
                    <address>1 Rue Auguste Renoir</br>93600 Aulnay sous Bois</address>
                </div>
                <div class="f-right">
                    <h3>NAVIGATION</h3>
                    <ul>
                        <a href="#">
                            <li>Accueil</li>
                        </a>
                        <a href="#">
                            <li>A propos</li>
                        </a>
                        <a href="#">
                            <li>Sessions</li>
                        </a>
                        <a href="#">
                            <li>Se connecter</li>
                        </a>
                    </ul>
                </div>
            </div>
            <p>© Richard Phonthibsvads - Projet Titre Professionel 2018</p>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
    name: 'footerr'
}
</script>

<style lang="css">

/* DESKTOP */
#foot {
    font-family: 'Dosis', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

@media screen and (min-width: 992px) {

    footer {
        width: 100%;
        min-height: 372px;
        height: auto;
        background: #233249;
        padding: 50px 0px;
        color: #FFF;
    }

    .f-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .f-left h3, .f-right h3 {
        color: #FFBF00;
        margin-bottom: 35px;
    }

    .f-left, .f-right {
        width: 50%;
        height: 230px;
    }

    .f-right ul li {
        list-style: none;
        text-decoration: none;
        color: #FFF;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    footer {
        width: 100%;
        min-height: 372px;
        height: auto;
        background: #233249;
        padding: 50px 0px;
        color: #FFF;
    }

    .f-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .f-left h3, .f-right h3 {
        color: #FFBF00;
        margin-bottom: 35px;
    }

    .f-left, .f-right {
        width: 50%;
        height: 230px;
    }

    .f-right ul li {
        list-style: none;
        text-decoration: none;
        color: #FFF;
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    footer {
        width: 100%;
        min-height: 372px;
        height: auto;
        background: #233249;
        padding: 50px 0px;
        color: #FFF;
    }

    .f-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .f-left h3, .f-right h3 {
        color: #FFBF00;
        margin-bottom: 35px;
    }

    .f-left, .f-right {
        width: 50%;
        height: 230px;
    }

    .f-right ul li {
        list-style: none;
        text-decoration: none;
        color: #FFF;
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    footer {
        width: 100%;
        min-height: 372px;
        height: auto;
        background: #233249;
        padding: 50px 0px;
        color: #FFF;
    }

    .f-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .f-left h3, .f-right h3 {
        color: #FFBF00;
        margin-bottom: 35px;
    }

    .f-left, .f-right {
        width: 100%;
        height: 230px;
    }

    .f-right ul li {
        list-style: none;
        text-decoration: none;
        color: #FFF;
    }
}
</style>
