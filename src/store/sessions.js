/* jshint esversion : 6 */
import axios from 'axios';

export const sessions = {
    namespaced: true,
    state: {
        session: null,
        sessions: [],
    },

    // actions: réservées aux process asynchrones
    actions: {
        // GET all SESSIONS
        getAll({ commit, state }) {
            axios({
                method: "get",
                url: "/sessions",
            }).then(response => {
                console.log("get all sessions", response);
                commit("sessions", response.data);
            })
            .catch(error => {
                console.log("error: store/sessions/getAll()");
                console.log(error);
            });
        },

        // GET SESSION - READ
        get({ commit, state }, id) {
            const url = id ? `/session/${id}` : "session/";
            axios({
                method: "get",
                url: url
            }).then(response => {
                state.session = response.data[0]
            })
            .catch(error => {
                console.log(error);
            });
        },

        getters: {
            all(state) {
                return state.sessions;
            }
        }

        // mutations: réservées aux process asynchrones
        mutations: {
            storeSession(state, session) {
                state.session = session;
            },
            sessions(state, sessions) {
                state.sessions = sessions;
            }
        }
    }
};
