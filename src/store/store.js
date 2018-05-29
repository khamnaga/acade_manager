/*jshint esversion : 6*/

import Vue from "vue";
import Vuex from "vuex";
// module User
import { users } from "./users.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users
  }
});
