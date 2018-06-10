<template lang="html">
    <div class="profile">
        <div class="wrapper-profile">
            <div class="profile-card">
                <div class="avatar">
                    <h2 class="xssm">PROFIL</h2>

                    <hr class="xssm">
                    <figure>
                        <!-- <img src="" alt="avatar de l'utilisateur"> -->
                    </figure>
                </div>
                <div class="bio">
                    <h2 class="desktab">PROFIL</h2>

                    <hr class="desktab">

                    <!-- Test données dynamiques avec {{ }} -->
                    <p class="prenom">{{ user.firstname }}</p>
                    <p class="nom">{{ user.lastname }}</p>
                    <p>{{ user.age }} ans</p>
                    <p>{{ user.name }}</p>
                    <p>{{ user.bio }}</p>

                    <router-link :to="'/update/' + user.id ">
                        <button class="btn">MODIFIER PROFIL</button>
                    </router-link>

                    <div class="bio-footer">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'profile',

    data() {
        return {
            user: null,
        }
    },

    created() {
        this.getUser(this.$route.params.id);
        console.log(this.$route);
    },

    methods: {
        getUser(id) {
            const url = "http://localhost:3000/profile/" + id;
            console.log("url:", url);
            console.log("id", id);

            axios.get(url).then(response => {
                console.log("response profile", response.data);
                this.user = response.data[0];
                console.log(response.data);
            }).catch(error => {
                console.error("msg error:", error);
                if (error) throw error;
            })
        }
    }
}
</script>

<style lang="css" scoped>

/* DESKTOP */
@media screen and (min-width: 992px) {
    .profile {
        width: 100%;
        height: 100vh;
        padding: 120px 1% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        /* width: 80%; */
        max-width: 1000px;
        height: 70vh;
        background: lightgray;
        margin: 0 auto;
    }

    .profile-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .avatar, .bio {
        width: 50%;
        height: 100%;
    }

    .avatar {
        padding: 100px 3% 110px;
        background: #FFBF00;
    }

    .avatar figure {
        height: 420px;
        width: 320px;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        background: #FFF;
        position: relative;
        padding: 60px  110px 110px;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.6rem;
        margin: 5% 0;
    }

    .bio-footer {
        /* z-index: 1; */
        background: #233249;
        color: #FFF;
        width: 100%;
        line-height: 80px;
        height: 80px;
        left: 0;
        bottom: 0;
        position: absolute;
    }

    .prenom, .nom {
        text-transform: capitalize;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: transparent;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 5%;
        border: 1px solid lightgray;
        border-radius: 30px;
        transition: 0.3s;
    }

    .btn:hover {
        background: #FFBF00;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .xssm {
        display: none;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    .profile {
        width: 100%;
        height: 100vh;
        padding: 120px 2% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        /* width: 80%; */
        /* min-width: 950px; */
        height: 70vh;
        background: lightgray;
        margin: 0 auto;
    }

    .profile-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .avatar, .bio {
        width: 50%;
        height: 100%;
    }

    .avatar {
        padding: 100px 3% 110px;
        background: #FFBF00;
    }

    .avatar figure {
        height: 420px;
        width: 320px;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        background: #FFF;
        position: relative;
        padding: 95px 8% 110px;
    }

    .bio h2 {
        font-size: 1.6rem;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.4rem;
        margin: 7% 0;
    }

    .bio-footer {
        /* z-index: 1; */
        background: #233249;
        color: #FFF;
        width: 100%;
        line-height: 80px;
        height: 80px;
        left: 0;
        bottom: 0;
        position: absolute;
    }

    .prenom, .nom {
        text-transform: capitalize;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: transparent;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 12%;
        border: 1px solid lightgray;
        border-radius: 30px;
        transition: 0.3s;
    }

    .btn:hover {
        background: #FFBF00;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .xssm {
        display: none;
    }
}

/* TABLET XS*/
@media screen and (min-width: 520px) and (max-width: 767px) {
    .profile {
        width: 100%;
        height: 147vh;
        padding: 37px 2% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        /* width: 80%; */
        /* min-width: 950px; */
        height: 70vh;
        background: lightgray;
        margin: 0 auto;
    }

    .profile-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .avatar, .bio {
        width: 100%;
        height: 100%;
    }

    .avatar {
        text-align: center;
        padding: 40px 3% 110px;
        background: #FFBF00;
    }

    .avatar hr {
        margin-bottom: 50px;
    }

    .avatar figure {
        height: 420px;
        width: 320px;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        text-align: center;
        background: #FFF;
        position: relative;
        padding: 40px 10%;
    }

    .bio h2 {
        font-size: 1.6rem;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.4rem;
        margin: 8% 0;
    }

    .bio-footer {
        /* z-index: 1; */
        background: #233249;
        color: #FFF;
        width: 100%;
        line-height: 80px;
        height: 80px;
        left: 0;
        bottom: 0;
        position: absolute;
    }

    .prenom, .nom {
        text-transform: capitalize;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: transparent;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 12%;
        border: 1px solid lightgray;
        border-radius: 30px;
        transition: 0.3s;
    }

    .btn:hover {
        background: #FFBF00;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .xssm {
        display: block;
        margin-bottom: 35px;
    }

    .desktab {
        display: none;
    }
}

/* SMARTPHONE*/
@media screen and (min-width: 320px) and (max-width: 519px) {
    .profile {
        width: 100%;
        height: 130vh;
        padding: 37px 2% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        /* width: 80%; */
        /* min-width: 950px; */
        height: 70vh;
        background: lightgray;
        margin: 0 auto;
    }

    .profile-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .avatar, .bio {
        width: 100%;
        height: 88%;
    }

    .avatar {
        text-align: center;
        padding: 40px 3% 110px;
        background: #FFBF00;
    }

    .avatar hr {
        margin-bottom: 50px;
    }

    .avatar figure {
        height: 350px;
        width: 100%;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        text-align: center;
        background: #FFF;
        position: relative;
        padding: 40px 0%;
    }

    .bio h2 {
        font-size: 1.6rem;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.4rem;
        margin: 8% 0;
    }

    .bio-footer {
        /* z-index: 1; */
        background: #233249;
        color: #FFF;
        width: 100%;
        line-height: 80px;
        height: 80px;
        left: 0;
        bottom: 0;
        position: absolute;
    }

    .prenom, .nom {
        text-transform: capitalize;
    }

    .btn {
        width: 250px;
        height: 75px;
        background: transparent;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 12%;
        border: 1px solid lightgray;
        border-radius: 30px;
        transition: 0.3s;
    }

    .btn:hover {
        background: #FFBF00;
        border: none;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .xssm {
        display: block;
        margin-bottom: 35px;
    }

    .desktab {
        display: none;
    }
}
</style>
