import Vue from "vue";
import VueX from "vuex";
import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(VueX);

export default {
  state,
  mutations,
  actions,
};
