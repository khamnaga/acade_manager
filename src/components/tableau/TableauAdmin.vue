<template lang="html">
    <div class="container">
        <h2>page d'administration - liste des élèves</h2>
        <div class="column">
            <router-link :to="'/dashboard/'">
                <p>sessions</p>
            </router-link>
            <router-link :to="'/tableau-admin/'">
                <p>eleves</p>
            </router-link>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th class="age">Age</th>
                    <th>Linkedin</th>
                    <th>Github</th>
                    <th>rôle</th>
                    <th>Fiche</th>
                    <!-- <th>Mise à jour</th> -->
                    <th>suppr</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(user, n) in users" :key="n">
                    <td class="id">{{ user.id }}</td>
                    <td class="nom">{{ user.lastname }}</td>
                    <td class="prenom">{{ user.firstname }}</td>
                    <td class="age">{{ user.age }}</td>
                    <td class="social">{{ user.linkedin }}</td>
                    <td class="social">{{ user.github }}</td>
                    <td class="role">{{ user.roles }}</td>
                    <td class="read">
                        <router-link :to="'/profile/' + user.id">
                            <button type="button" name="button">Fiche</button>
                        </router-link>
                    </td>
                    <!-- <td class="maj" @click="updateUser(user)">
                        <router-link :to="'/update/' + user.id">
                            <button type="button" name="button">MAJ</button>
                        </router-link>
                    </td> -->
                    <td class="del" @click="deleteUser(user)">
                        <button type="button" name="button">X</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
// import Dashboard from './components/pages/Dashboard.vue';

export default {

    name: 'tableau-admin',

    data() {
        return {
            users: []
        }
    },

    // components: {
    //     Dashboard
    // },

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
        },

        deleteUser(user) {
            const url = "http://localhost:3000/delete/" + user.id;
            console.log("url:", url);
            axios.delete(url)
                 .then(response => {
                     console.log(response);
                     if (response) {
                         this.getAllUsers();
                     }
                 })
                 .catch(error => {
                     console.error("error axios:", error);
                 })
        },

        // updateUser(user) {
        //     const url = "http://localhost:3000/update/" + user.id;
        //     console.log("url:", url);
        //     axios.update(url)
        // }
    }
}
</script>

<style lang="css" scoped>
    h2 {
        text-transform: uppercase;
        margin: 30px 0px;
    }

    .column {
        width: 14vw;
        height: 200vh;
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        background: #FFBF00;
        padding: 100px 50px 0;
        position: absolute;
        top: 62px;
        left: 0;
        z-index: -1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .container {
        margin-top: 120px;
        padding-bottom: 5%;
        width: 100%;
        margin-left: 27%;
        /* height: 100vh; */
    }

    table {
        text-transform: capitalize;
        background: #FFF;
        font-weight: bold;
    }

    thead {
        background: #2c3e50;
        color: #FFBF00;
        height: 50px;
    }

    td {
        height: 50px;
        width: 4%;
    }

    tr:nth-child(even) {
        background: lightgray;
    }

    .prenom, .nom, .social {
        width: 1%;
    }

    .id, .age {
        width: 0.1%;
    }

    .role {
        width: 0.18%;
    }

    .read, .maj, .del {
        width: 0.1%;
    }

/* Tablet XS */
@media screen and (min-width: 520px) and (max-width: 767px) {
    .container {
        margin-top: 120px;
        padding-bottom: 5%;
        width: 100%;
        font-size: 0.9rem;
    }

    .age {
        display: none;
    }
}

/* Smartphone */
@media screen and (min-width: 320px) and (max-width: 519px) {
    .container {
        margin-top: 120px;
        padding-bottom: 5%;
        width: 100%;
        font-size: 0.9rem;
    }
}

</style>
