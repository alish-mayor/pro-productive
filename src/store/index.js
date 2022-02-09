import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currencies: [],
    cityName: "",
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
    completeTask(state, index) {
      state.tasks[index].completed = true;
    },
    addCur(state) {
      state.currencies.push("");
    },
    deleteCur(state, index) {
      state.currencies.splice(index, 1);
    },
    updateCity(state, name) {
      state.cityName = name;
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
