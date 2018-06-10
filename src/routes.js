/* jshint esversion : 6 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home      from "./components/pages/Home.vue";
import Login     from "./components/pages/Login.vue";
import About     from "./components/pages/About.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Profile   from "./components/pages/Profile.vue";
import Update    from "./components/pages/Update.vue";
import Sessions  from "./components/pages/Sessions.vue";
import Register  from "./components/form/Register.vue";
import TableauAdmin   from "./components/tableau/TableauAdmin.vue";
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
        component: TableauAdmin,
        name: "tableau-admin",
        path: "/tableau-admin",
    },

    {
        component: Trombinoscope,
        name: "trombinoscope",
        path: "/trombinoscope",
    },

    {
        component: Profile,
        name: "profile",
        path: "/profile/:id",
    },

    {
        component: Update,
        name: "update",
        path: "/update/:id",
    },

    {
        component: Sessions,
        name: "sessions",
        path: "/sessions",
    },
];

export default new VueRouter({
    mode: "history",
    routes
});
