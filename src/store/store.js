/*jshint esversion : 6*/

import Vue from "vue";
import Vuex from "vuex";

// module USERS
import { users } from "./users.js";

// module SESSIONS
import { sessions } from "./sessions/js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    sessions
  }
});
