<template lang="html">
    <div class="profile">
        <div class="wrapper-profile">
            <div class="profile-card">
                <div class="avatar">
                    <h2 class="xssm">MODIFIER PROFIL</h2>

                    <hr class="xssm">

                    <figure>
                        <!-- <img :src="user.avatar" alt="avatar de l'utilisateur"> -->
                    </figure>
                </div>

                <form @submit.prevent="updateUser" class="bio">

                    <h2 class="desktab">MODIFIER PROFIL</h2>

                    <hr class="desktab">

                    <!-- Test données dynamiques avec v-model -->
                    <input v-model="user.firstname" class="firstname" placeholder="Modifier votre nom">
                    <input v-model="user.lastname"  class="lastname"  placeholder="Modifier votre prénom">
                    <input v-model="user.age" class="age">
                    <!-- <input>{{ user.name }} -->
                    <input v-model="user.email"    class="email" placeholder="Modifier votre email">
                    <input v-model="user.password" class="password" placeholder="Modifier votre password">
                    <textarea v-model="user.bio"   class="descr" maxlength="140" placeholder="Modifier votre description"></textarea>

                    <input type="submit" value="METTRE LE PROFIL A JOUR" class="btn">

                    <div class="bio-footer">

                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'update',

    data() {
        return {
            user: null
        }
    },

    created() {
        this.getUser(this.$route.params.id);
        console.log(this.$route.params);
    },

    methods: {
        getUser(id) {
            const url = "http://localhost:3000/profile/" + id;
            console.log("url:", url);
            console.log("id", id);

            axios.get(url).then(response => {
                console.log("response1", response.data);

                this.user = response.data[0];
            }).catch(error => {
                console.error("msg error:", error);
                if (error) throw error;
            })
        },

        updateUser() {
            console.log("============= test ============");
            console.log("user id:", this.user.id);
            console.log("firstname update:",this.$el.querySelector(".firstname").value);
            console.log("lastname update:",this.$el.querySelector(".lastname").value);
            console.log("age update:",this.$el.querySelector(".age").value);
            console.log("email update:",this.$el.querySelector(".email").value);
            console.log("password update:",this.$el.querySelector(".password").value);
            console.log("bio update:",this.$el.querySelector(".descr").value);
            console.log("=========== test2 =============");
            console.log(this.user)
            console.log("===============================");
            axios({
                method: 'put',
                url: "http://localhost:3000/update/" + this.$route.params.id,
                data: this.user
            }).then(response => {
                console.log("response:", response);
                this.$router.push(`/profile/${this.$route.params.id}`);
            }).catch(error => {
                console.log("msg error", error);
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
        padding: 38px 4% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        width: 100%;
        max-width: 1200px;
        height: auto;
        background: lightgray;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
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
        /* height: 100%; */
    }

    .avatar {
        padding: 165px 3% 110px;
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
        text-align: center;
        padding: 28px  60px 110px;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.6rem;
        margin: 5% 0;
    }

    input, textarea {
        width: 80%;
        padding: 10px;
        margin: 18px 0;
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

    .xssm {
        display: none;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    .profile {
        width: 100%;
        height: 100vh;
        padding: 55px 2% 0;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        width: 100%;
        height: auto;
        background: lightgray;
        margin: 0 auto;
        display: flex;
        flex-flow: wrap;
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
        /* height: 100%; */
    }

    .avatar {
        padding: 165px 20px 110px;
        background: #FFBF00;
    }

    .avatar figure {
        height: 420px;
        width: 320px;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        background: #FFF;
        position: relative;
        text-align: center;
        padding: 25px  27px 110px;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.6rem;
        margin: 5% 0;
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        margin: 16px 0;
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

    .xssm {
        display: none;
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    .profile {
        width: 100%;
        height: auto;
        padding: 45px 4% 30px;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        width: 100%;
        height: auto;
        background: lightgray;
        margin: 0 auto;
        display: flex;
        flex-flow: wrap;
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
        /* height: 100%; */
    }

    .avatar {
        text-align: center;
        padding: 30px 20px 50px;
        background: #FFBF00;
    }

    .avatar figure {
        height: 420px;
        width: 320px;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        background: #FFF;
        position: relative;
        text-align: center;
        padding: 25px  27px 110px;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.6rem;
        margin: 5% 0;
    }

    input, textarea {
        width: 79%;
        padding: 10px;
        margin: 16px 0;
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

    .xssm {
        display: block;
        margin-bottom: 35px;
    }

    .desktab {
        display: none;
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    .profile {
        width: 100%;
        height: auto;
        padding: 45px 4% 30px;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23b4b4b4' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .wrapper-profile {
        width: 100%;
        height: auto;
        background: lightgray;
        margin: 0 auto;
        display: flex;
        flex-flow: wrap;
    }

    .profile-card {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        /* display: flex; */
        /* flex-flow: row wrap; */
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .avatar, .bio {
        width: 100%;
        /* height: 100%; */
    }

    .avatar {
        text-align: center;
        padding: 30px 20px 50px;
        background: #FFBF00;
    }

    .avatar figure {
        height: 350px;
        width: 100%;
        margin: 0 auto;
        background: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .bio {
        background: #FFF;
        position: relative;
        text-align: center;
        padding: 25px  27px 110px;
    }

    hr {
        margin: 20px 0;
    }

    .bio p {
        font-size: 1.6rem;
        margin: 5% 0;
    }

    input, textarea {
        width: 88%;
        padding: 10px;
        margin: 16px 0;
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

    .xssm {
        display: block;
        margin-bottom: 35px;
    }

    .desktab {
        display: none;
    }
}

</style>
