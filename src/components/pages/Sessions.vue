<template lang="html">
    <div id="sessions">
        <div class="container-sessions">
            <div class="wrapper-sessions">


                <div class="session-card">
                    <h2>SESSION AULNAY SOUS BOIS #2</h2>
                    <div class="content">
                        <h3>FORMATION DEVELOPPEMENT WEB</br> FULLSTACK JAVASCRIPT</h3>
                        <p>CHARGE DE PROMOTION SOUFIANE ROUASS</p>
                        <div class="card-footer">
                            <p>2 formateurs | 20 élèves</p>
                        </div>
                    </div>
                </div>

                <div class="session-card">
                    <h2>SESSION AULNAY SOUS BOIS #3</h2>
                    <div class="content">
                        <h3>FORMATION DEVELOPPEMENT WEB</br> FULLSTACK JAVASCRIPT</h3>
                        <p>CHARGE DE PROMOTION SOUFIANE ROUASS</p>
                        <div class="card-footer">
                            <p>2 formateurs | 28 élèves</p>
                        </div>
                    </div>
                </div>

                <div class="session-card">
                    <h2>SESSION AULNAY SOUS BOIS #4</h2>
                    <div class="content">
                        <h3>FORMATION DEVELOPPEMENT WEB</br> FULLSTACK JAVASCRIPT</h3>
                        <p>CHARGE DE PROMOTION SOUFIANE ROUASS</p>
                        <div class="card-footer">
                            <p>2 formateurs | 32 élèves</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sessions',
}
</script>

<style lang="css">

/* DESKTOP */
@media screen and (min-width: 992px) {
    div.container-sessions {
        width:  100%;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
        padding: 0 4%;
    }

    div.wrapper-sessions {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        margin-top: 30px;
    }

    .session-card {
        width: 60%;
        height: 400px;
        margin: 0 auto 30px;
        padding: 30px 70px 100px;
        border: 1px solid darkorange;
        box-shadow: 0px 5px 20px 0px lightgray;
    }

    .content {
        height: 250px;
        border: 1.5px solid #FFBF00;
        margin-top: 20px;
        padding-top: 20px;
    }

    .content p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .card-footer {
        height: 80px;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }

}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    div.container-sessions {
        width:  753px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.wrapper-sessions {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        margin-top: 30px;
    }

    .session-card {
        width: 75%;
        height: 400px;
        margin: 0 auto 30px;
        padding: 30px 70px 100px;
        border: 1px solid darkorange;
        box-shadow: 0px 5px 20px 0px lightgray;
    }

    .content {
        height: 250px;
        border: 1.5px solid #FFBF00;
        margin-top: 20px;
        padding-top: 20px;
    }

    .content p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .card-footer {
        height: 80px;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    div.container-sessions {
        width:  505px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.wrapper-sessions {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 1rem;
        margin-top: 30px;
    }

    .session-card {
        width: 90%;
        height: 400px;
        margin: 0 auto 30px;
        padding: 30px 70px 100px;
        border: 1px solid darkorange;
        box-shadow: 0px 5px 20px 0px lightgray;
    }

    .session-card h2, .session-card h3 {
        font-size: 1.5rem;
    }

    .content {
        height: 250px;
        border: 1.5px solid #FFBF00;
        margin-top: 20px;
        padding-top: 20px;
    }

    .content p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .card-footer {
        height: 80px;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    div.container-sessions {
        width:  305px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid red;
    }

    div.wrapper-sessions {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        margin-top: 30px;
    }

    .session-card {
        width: 90%;
        height: 330px;
        margin: 0 auto 30px;
        padding: 15px 20px 100px;
        border: 1px solid darkorange;
        box-shadow: 0px 5px 20px 0px lightgray;
    }

    .session-card h2, .session-card h3, .session-card p {
        font-size: 1rem;
    }

    .content {
        height: 250px;
        border: 1.5px solid #FFBF00;
        margin-top: 20px;
        padding-top: 27px;
    }

    .content p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .card-footer {
        height: 80px;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

</style>
