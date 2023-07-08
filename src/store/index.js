import Vue from "vue";
import Vuex from "vuex";
import projects from "./modules/projects";
import tasks from "./modules/tasks";
import users from "./modules/users";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    accessToken: "",
    auth: false,
    currentUser: null,
  },
  getters: {
    auth: (state) => state.auth,
    accessToken: (state) => state.accessToken,
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, id) {
      this.state.tasks = state.tasks.filter((t) => t.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeProject(state, id) {
      this.state.projects = state.projects.filter((p) => p.id !== id);
    },
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },
  actions: {
    createTask({ commit }, item) {
      commit("createTask", item);
    },
    removeTask({ commit }, id) {
      commit("removeTask", id);
    },
    removeProject({ commit }, id) {
      console.log(commit("removeProject"), "2324234234");
      commit("removeProject", id);
    },
    setCurrentUser({ commit }, data) {
      // console.log( commit("setCurrentUser"), 'sdfsdfsdf')
      commit("setCurrentUser", data);
    },
  },
  modules: {
    projects,
    tasks,
    users,
  },
});
