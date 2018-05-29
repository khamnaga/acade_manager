<template lang="html">
    <div id="jumbo">
        <div class="jumbo">
            <div class="slogan">
                <h1>ACADE MANAGER</h1>
                <p>Outil de gestion pour </br> les sessions de formation</p>
                <button class="btn">INSCRIPTION</button>
            </div>
        </div>
    <section id="first">
        <div class="container">
            <h2>CE QUE NOUS PROPOSONS</h2>
            <div class="wrapper-1">
                <div class="first-left"></div>
                <div class="first-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet reiciendis quae excepturi iure, culpa sint dolor consectetur exercitationem quidem adipisci rerum asperiores voluptate corporis fugiat quasi numquam inventore nostrum quo dolorem alias reprehenderit deserunt nisi commodi, nemo. Dolorum, fugit, recusandae.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Carousel personas -->
    <section class="slider" role="slider">
        <div class="container">
            <h2>TEMOIGNAGES</h2>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <!-- <img class="d-block w-100" src="img/slide.jpg" alt="First slide"> -->
                  <div class="persona-card">
                      <figcaption></figcaption>
                      <p>Lorem ipsum dolor sit amet, per quando delectus legendos ne, est soleat
                        fastidii prodesset eu, nulla detracto elaboraret ius et. Ei vis brute lorem
                        inermis. Qui eu soleat elaboraret, probatus iudicabit vix eu. An sit autem
                        erant. </p>
                      <hr>
                      <p>PRENOM DU PERSONA</p>
                      <p>profession du persona</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="persona-card">
                      <figcaption></figcaption>
                      <p>Lorem ipsum dolor sit amet, per quando delectus legendos ne, est soleat
                        fastidii prodesset eu, nulla detracto elaboraret ius et. Ei vis brute lorem
                        inermis. Qui eu soleat elaboraret, probatus iudicabit vix eu. An sit autem
                        erant. </p>
                      <hr>
                      <p>PRENOM DU PERSONA</p>
                      <p>profession du persona</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="persona-card">
                      <figcaption></figcaption>
                      <p>Lorem ipsum dolor sit amet, per quando delectus legendos ne, est soleat
                        fastidii prodesset eu, nulla detracto elaboraret ius et. Ei vis brute lorem
                        inermis. Qui eu soleat elaboraret, probatus iudicabit vix eu. An sit autem
                        erant. </p>
                      <hr>
                      <p>PRENOM DU PERSONA</p>
                      <p>profession du persona</p>
                  </div>
                </div>
                <!-- test -->
                <div class="carousel-item">
                  <div class="persona-card">
                      <figcaption></figcaption>
                      <p>Lorem ipsum dolor sit amet, per quando delectus legendos ne, est soleat
                        fastidii prodesset eu, nulla detracto elaboraret ius et. Ei vis brute lorem
                        inermis. Qui eu soleat elaboraret, probatus iudicabit vix eu. An sit autem
                        erant. </p>
                      <hr>
                      <h2>HAROUNA MELLINA</h2>
                      <p>profession du persona</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>CONTACT</h2>
            <div class="wrapper-1">
                <div class="first-left"></div>
                <div class="second-right">
                    <p>Nous vous contacterons dans 24H</p>

                    <hr>

                    <form method="post" action="">
                        <input type="text" name="name" placeholder="votre nom">
                        <input type="email" name="email" placeholder="votre email">
                        <!-- <input type="textarea" name="message" placeholder="votre message"> -->
                        <textarea>votre message</textarea>

                        <input type="submit" value="ENVOYER" class="btn">

                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>

<style lang="css" scoped>

/* DESKTOP */
@media screen and (min-width: 992px) {
    /* accroche du site */
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
        background: #FFF;
        /* color: #FFBF00; */
        font-weight: bold;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px gray;
    }

    div.container {
        width:  1200px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.container h2 {
        margin: 30px 0 30px;
    }

    /* 1ere section */
    section#first {
        width: 100%;
        height: 730px;
        padding: 0px 0px 30px;
    }

    div.wrapper-1 {
        width: 100%;
        height: 600px;
        display: flex;
        flex-wrap: wrap;
        /* box-shadow: 0px 5px 20px 0px gray; */
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        font-size: 20px;
    }

    div.first-left, .first-right, .second-right {
        width: 554px;
        height: 100%;
    }

    div.first-left {
        background: #FFBF00;
    }

    div.first-right {
        background: #FFF;
        padding: 30px;
    }

    /* personas */
    section.slider {
        width: 100%;
        height: 680px;
        /* background: #D7D7D7; */
        background: #E1E1E1;
        font-size: 20px;
    }

    div.persona-card {
        width: 85%;
        height: 535px;
        background: #FFF;
        margin: 0 auto;
        margin-bottom: 30px;
        padding: 200px 100px 40px;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    div.persona-card hr {
        margin: 50px 0px;
    }

    div.persona-card p:nth-child(3) {
        margin-top: 35px;
    }

    .carousel-control-next,
    .carousel-control-prev {
        width: 5%;
    }

    /* contact */
    section#contact {
        margin-bottom: 30px;
    }

    section#contact p {
        margin-top: 30px;
    }

    section#contact input, textarea {
        width: 90%;
        padding: 10px;
        margin: 16px 0;
    }

    div.second-right {
        padding: 30px;
        text-align: center;
        background: #FFF;
    }

    div.second-right form {
        width: 100%;
        height: 87%;
        padding: 0 78px;
    }

    div.second-right hr {
        margin: 30px 0;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    /* accroche du site */
    div.jumbo {
        width: 100%;
        height: 100vh;
        background: #FFBF00;
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
        background: #FFF;
        /* color: #FFBF00; */
        font-weight: bold;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px gray;
    }

    div.container {
        width:  1200px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.container h2 {
        margin: 30px 0 30px;
    }

    /* 1ere section */
    section#first {
        width: 100%;
        height: 108vh;
        padding: 0px 0px 30px;
    }

    div.wrapper-1 {
        width: 100%;
        height: 898px;
        display: flex;
        flex-wrap: wrap;
        /* box-shadow: 0px 5px 20px 0px gray; */
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        font-size: 20px;
    }

    div.first-left, .first-right {
        width: 100%;
        height: 50%;
    }

    div.first-left {
        background: #FFBF00;
    }

    div.first-right {
        background: #FFF;
        height: 450px;
        padding: 30px;
    }

    div.second-right {
        width: 100%;
        background: #FFF;
    }

    /* personas */
    section.slider {
        width: 100%;
        height: 705px;
        /* background: #D7D7D7; */
        background: #E1E1E1;
        font-size: 20px;
    }

    div.persona-card {
        width: 85%;
        height: 560px;
        background: #FFF;
        margin: 0 auto;
        margin-bottom: 30px;
        padding: 200px 100px 40px;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    div.persona-card hr {
        margin: 50px 0px;
    }

    div.persona-card p:nth-child(3) {
        margin-top: 35px;
    }

    .carousel-control-next,
    .carousel-control-prev {
        width: 5%;
    }

    /* contact */
    form {
        padding: 0px 145px;
    }

    input {
        width: 90%;
        padding: 10px;
        margin: 10px 0;
        border: 1.2px solid black;
    }

    section#contact {
        height: 105vh;
        margin-bottom: 30px;
    }

    section#contact p {
        margin-top: 30px;
    }

    section#contact input, textarea {
        width: 90%;
        padding: 10px;
        margin: 16px 0;
    }

    div.second-right {
        padding: 30px;
        text-align: center;
        background: #FFF;
    }

    div.second-right form {
        width: 100%;
        height: 87%;
        padding: 0 78px;
    }

    div.second-right hr {
        margin: 30px 0;
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    /* accroche du site */
    div.jumbo {
        width: 100%;
        height: 100vh;
        background: #FFBF00;
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

    .btn {
        width: 250px;
        height: 75px;
        background: #FFF;
        /* color: #FFBF00; */
        font-weight: bold;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px gray;
    }

    div.container {
        width:  505px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.container h2 {
        font-size: 1.5rem;
        margin: 30px 0 30px;
    }

    /* 1ere section */
    section#first {
        width: 100%;
        height: 107vh;
        padding: 0px 0px 30px;
    }

    div.wrapper-1 {
        width: 100%;
        height: 93vh;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        font-size: 20px;
    }

    div.first-left, .first-right {
        width: 100%;
        height: 40%;
    }

    div.first-left {
        background: #FFBF00;
    }

    div.first-right {
        background: #FFF;
        height: 525px;
        padding: 30px;
    }

    div.second-right {
        width: 100%;
        background: #FFF;
    }

    /* personas */
    section.slider {
        width: 100%;
        height: 750px;
        /* background: #D7D7D7; */
        background: #E1E1E1;
        font-size: 20px;
    }

    div.persona-card {
        width: 85%;
        height: 590px;
        background: #FFF;
        margin: 0 auto;
        margin-bottom: 30px;
        padding: 200px 40px 40px;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    div.persona-card hr {
        margin: 50px 0px;
    }

    div.persona-card p:nth-child(3) {
        margin-top: 35px;
    }

    .carousel-control-next,
    .carousel-control-prev {
        width: 5%;
    }

    /* contact */
    form {
        padding: 0px 145px;
    }

    input {
        width: 90%;
        padding: 5px;
        margin: 10px 0;
    }

    section#contact {
        height: 105vh;
        margin-bottom: 30px;
    }

    section#contact p {
        margin-top: 30px;
    }

    section#contact input {

    }

    div.second-right {
        padding: 30px;
        text-align: center;
        background: #FFF;
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    /* accroche du site */
    div.jumbo {
        width: 100%;
        height: 47vh;
        background: #FFBF00;
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

    .btn {
        width: 250px;
        height: 75px;
        background: #FFF;
        /* color: #FFBF00; */
        font-weight: bold;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px gray;
    }

    div.container {
        width:  100%;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.container h2 {
        font-size: 1.1rem;
        margin: 30px 0 30px;
    }

    div.container p {
        font-size: 0.85rem;
    }

    /* 1ere section */
    section#first {
        width: 100%;
        height: 75vh;
        padding: 0px 0px 30px;
    }

    div.wrapper-1 {
        width: 100%;
        height: 64vh;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        font-size: 20px;
    }

    div.first-left, .first-right {
        width: 100%;
        height: 30%;
    }

    div.first-left {
        /* display: none; */
        background: #FFBF00;
    }

    div.first-right {
        background: #FFF;
        height: 70%;
        padding: 18px;
    }

    div.second-right {
        width: 100%;
        background: #FFF;
    }

    /* personas */
    section.slider {
        width: 100%;
        min-height: 560px;
        height: auto;
        /* background: #D7D7D7; */
        background: #E1E1E1;
        font-size: 20px;
    }

    div.persona-card {
        width: 95%;
        height: 450px;
        background: #FFF;
        margin: 0 auto;
        margin-bottom: 30px;
        padding: 165px 20px 40px;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    div.persona-card hr {
        margin: 10% 0;
    }

    div.persona-card p:nth-child(3) {
        margin-top: 35px;
    }

    .carousel-control-next,
    .carousel-control-prev {
        width: 5%;
    }

    /* contact */
    input {
        width: 90%;
        padding: 5px;
        margin: 10px 0;
    }

    section#contact {
        height: 73vh;
        margin-bottom: 30px;
    }

    section#contact p {
        margin-top: 30px;
    }

    section#contact input {

    }

    div.second-right {
        padding: 30px;
        text-align: center;
        background: #FFF;
    }
}

</style>
