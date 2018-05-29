/* jshint esversion : 6 */
import axios from 'axios';

export const users = {
    namespaced: true,
    state: {
        user: null,
        users: [],
    },

    // actions: réservées aux process asynchrones
    actions: {
        // get all USERS
        getAll({ commit, state }) {
            axios({
                method: "get",
                url: "/user",
            }).then(response => {
                console.log("getallusers"; response);
                commit("users", response.data);
            })
            .catch(error => {
                console.log("error: store/users/getAll()");
                console.log(error);
            });
        },

        // get one USER
        get({ commit, state }, id) {
            const url = id ? `/user/${id}` : "user/";
            axios({
                method: "get",
                url: url
            }).then(response => {
                state.user = response.data[0]
            })
            .catch(error => {
                console.log(error);
            });
        },

        // Créer & sauver un USER dans la BDD
        register({commit, dispatch, state}, authData) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: "/user",
                    data: {
                        mail:     authData.mail,
                        password: authData.password,
                    }
                }).then(response => {
                    commit("auth", {
                        userId:    response.data.insertId,
                        userToken: response.data.token
                    });

                    authData.id = response.data.inserId;
                    commit("storeUser", authData);
                    resolve(response);

                }).catch(error => {
                    reject(error.response.data.message);
                });
            });
        },

        getters: {
            all(state) {
                return state.users;
            }
        }

        // mutations: réservées aux process asynchrones
        mutations: {
            storeUser(state, user) {
                state.user = user;
            },
            users(state, users) {
                state.users = users;
            }
        }
    }
};
