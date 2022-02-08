import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currencies: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    addCur(state) {
      state.currencies.push("");
    },
  },
  actions: {},
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  modules: {},
});
