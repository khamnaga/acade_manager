/* jshint esversion : 6 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home      from "./components/pages/Home.vue";
import Login     from "./components/pages/Login.vue";
import About     from "./components/pages/About.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Profile   from "./components/pages/Profile.vue";
import Register  from "./components/form/Register.vue";
import Tableau from "./components/tableau/Tableau.vue";
import Trombinoscope from "./components/pages/Trombinoscope.vue";

Vue.use(VueRouter);

const routes = [
    {
        component: Home,
        name: "home",
        path: "/",
    },

    {
        component: Login,
        name: "login",
        path: "/login",
    },

    {
        component: About,
        name: "about",
        path: "/about",
    },

    {
        component: Register,
        name: "register",
        path: "/register",
    },

    {
        component: Dashboard,
        name: "dashboard",
        path: "/dashboard",
    },

    {
        component: Tableau,
        name: "tableau",
        path: "/tableau",
    },

    {
        component: Trombinoscope,
        name: "trombinoscope",
        path: "/trombinoscope",
    },

    {
        component: Profile,
        name: "profile",
        path: "/profile",
    }

    // {
    //     component: Profile,
    //     name: "profile",
    //     path: "/profile",
    // },

    // {
    //     component: Sessions,
    //     name: "sessions",
    //     path: "/sessions",
    // },
];

export default new VueRouter({
    mode: "history",
    routes
});
