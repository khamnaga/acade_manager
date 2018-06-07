<template lang="html">
    <div id="trombino">
        <div class="container-users">

            <div class="wrapper-users">

                <div class="user-card" v-for="(user, n) in users" :key="n">
                    <router-link :to="'/profile/' + user.id ">
                        <div class="user-card-f">
                            <p>{{ user.lastname }} {{ user.firstname }}</p>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'trombinoscope',

    data() {
        return {
            users: []
        }
    },

    created() {
        console.log("users: ",this.users);
        this.getAllUsers();
    },

    methods: {
        getAllUsers() {
            const url = "http://localhost:3000/users";
            axios(url).then(response => {
                console.log("response:", response.data);
                this.users = response.data;
            });
        }
    }
}
</script>

<style lang="css">

/* DESKTOP */
@media screen and (min-width: 992px) {
    div.wrapper-users {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        font-size: 20px;
        margin-top: 110px;
        text-align: center;
        padding: 0 20% 5%;
    }

    .user-card {
        width: 287px;
        height: 435px;
        background: #FFF;
        /* border: 0.5px solid #FFBF00; */
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 19.5px;
        padding-top: 20px;
        position: relative;
        transition: 0.3s;
    }

    .user-card:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .name p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .user-card-f {
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: absolute;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

/* TABLET */
@media screen and (min-width: 768px) and (max-width: 991px) {
    div.wrapper-users {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        font-size: 20px;
        margin-top: 30px;
        text-align: center;
        /* padding: 0 6%; */
    }

    .user-card {
        width: 287px;
        height: 435px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 19.5px;
        padding-top: 20px;
        position: relative;
    }

    .name p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .user-card-f {
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: absolute;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

/* TABLET XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    div.wrapper-users {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        font-size: 20px;
        margin-top: 30px;
        text-align: center;
        padding: 0 89px;
    }

    .user-card {
        width: 287px;
        height: 435px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 10px;
        padding-top: 20px;
        position: relative;
    }

    .name p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .user-card-f {
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: absolute;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}

/* SMARTPHONE */
@media screen and (min-width: 320px) and (max-width: 519px) {
    div.wrapper-users {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        font-size: 20px;
        margin-top: 30px;
        text-align: center;
    }

    .user-card {
        width: 287px;
        height: 435px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin: 10px;
        padding-top: 20px;
        position: relative;
    }

    .name p {
        margin-top: 20px;
        margin-bottom: 33px;
    }

    .user-card-f {
        width: 100%;
        height: 80px;
        line-height: 80px;
        position: absolute;
        bottom: 0;
        background: #233249;
        color: #FFBF00;
    }
}
</style>
