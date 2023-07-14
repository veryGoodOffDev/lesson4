import axios from "axios";
import { getToken } from "@/helper";

const state = {
  tasks: null,
  tasksData:null,
  filteredTasks:null,
  isLoading:true,
};

const getters = {
  TASKS: (state) => state.tasks,
  TASKS_DATA: (state) => state.tasksData,
  FILTERED_TASKS: (state) => state.filteredTasks,
  IS_LOADING: (state) => state.isLoading,
};


const mutations = {
  SET_TASKS: (state, payload) => {
    state.tasks = payload;
  },
  SET_TASKS_DATA: (state, payload) => {
    state.tasksData = payload;
  },
  SET_FILTRED_TASKS: (state, payload) => {
    state.filteredTasks = payload;
  }
};

const actions = {
  GET_TASKS: async ({commit}) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/tasks/search`,
        {
          page:1,
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data.total, 'всего страниц с задачами');
      console.log(data)
      commit("SET_TASKS", data.tasks);
      commit("SET_TASKS_DATA", data);
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  },
  GET_TASKS_BY_PROJECT_ID: async ({commit}, filter) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/tasks/search`,
        {
          limit: 10,
          filter: {
            projectId:filter,
          }
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data.tasks, 'отфильтрованные таски')
      commit("SET_FILTRED_TASKS", data.tasks);
      commit("SET_TASKS_DATA", data);
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  },
  GET_TASKS__PAGE: async ({commit}, page) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/tasks/search`,
        {
          page:page,
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      commit("SET_TASKS", data.tasks);
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
