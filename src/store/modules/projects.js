import axios from "axios";
import { getToken, getNewToken } from "@/helper";

const state = {
  projects: null,
  projectsData: null,
};

const getters = {
  PROJECTS: (state) => state.projects,
  PROJECTS_DATA: (state) => state.projectsData,
};

const mutations = {
  SET_PROJECTS: (state, payload) => {
    state.projects = payload;
  },
  SET_PROJECTS_DATA: (state, payload) => {
    state.projectsData = payload;
  },
};

const actions = {
  GET_PROJECTS: async (context) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/projects/search`,
        {
          page: 1,
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data);
      context.commit("SET_PROJECTS", data.projects);
      context.commit("SET_PROJECTS_DATA", data);
    } catch (error) {
      if (error.response.status === 401) {
        getNewToken("peregudov.i", "jc63fk");
      }
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  },
  GET_PROJECTS__PAGE: async ({ commit }, page) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/projects/search`,
        {
          page: page,
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      commit("SET_PROJECTS", data.projects);
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  },
  REMOVE_PROJECT: async ({commit}, id) => {
    try {
      const { data } = await axios.delete(
        `http://45.12.239.156:8081/api/projects/${id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data.message)
      console.log(commit)
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }
  },

};

export default {
  state,
  getters,
  mutations,
  actions,
};
