import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//   {
//   id: 6,
//   title:
//     "Название очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки",
//   status: "Черновик",
//   created: "Иванов И.И. создал 1 час назад",
//   edited: "Баранов В.В. изменил 1 минуту назад",
//   number: "#1",
//   isProject: false,
// },
//   {
//   id: 7,
//   title:
//     "Название очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки",
//   status: "Черновик",
//   created: "Иванов И.И. создал 1 час назад",
//   edited: "Баранов В.В. изменил 1 минуту назад",
//   number: "#1",
//   isProject: false,
// },

export default new Vuex.Store({
  state: {
    accessToken:'',
    auth: false,
    currentUser:null,
    tasks: null,
    projects: null,
    users:[],
  },
  getters: {
    tasks: (state) => state.tasks,
    projects: (state) => state.projects,
    auth: (state) => state.auth,
    accessToken: (state) => state.accessToken,
    currentUser: (state) => state.currentUser,
    users: (state) => state.users,
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
    setCurrentUser(state, data){
      state.currentUser = data
    },
    setProjects(state, data) {
      state.projects = data;
    },
    setTasks(state, data) {
      state.tasks = data;
    },
    setUsers(state, data) {
      state.users = data;
    }
  },
  actions: {
    createTask({ commit }, item) {
      commit("createTask", item);
    },
    removeTask({ commit }, id) {
      commit("removeTask", id);
    },
    removeProject({ commit }, id) {
      console.log(commit("removeProject"), '2324234234')
      commit("removeProject", id);
    },
    setCurrentUser({commit}, data) {
      // console.log( commit("setCurrentUser"), 'sdfsdfsdf')
      commit("setCurrentUser", data)
    },
    setProjects({commit}, data) {
      commit("setProjects", data)
    },
    setTasks({commit}, data) {
      commit("setTasks", data)
    },
    setUsers({commit}, data) {
      commit("setUsers", data)
    }
  },
  modules: {},
});
