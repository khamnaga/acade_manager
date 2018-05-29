<template lang="html">
    <div class="container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Age</th>
                    <th>Linkedin</th>
                    <th>Github</th>
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
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    name: 'tableau',

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
    .container {
        width: 100%;
        height: 100vh.
    }

    thead {
        height: 50px;
    }

    td {
        height: 50px;
        width: 4%;
    }

    .prenom, .nom {
        width: 1.5%;
    }

    .id, .age {
        width: 2%;
    }

    .social {
        width: 2%;
    }
</style>
