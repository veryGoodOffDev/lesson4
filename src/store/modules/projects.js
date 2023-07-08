import axios from "axios";
import { getToken, getNewToken } from "@/helper";

const state = {
  projects: null,
};

const getters = {
  PROJECTS: (state) => state.projects,
};

const mutations = {
  SET_PROJECTS: (state, payload) => {
    state.projects = payload;
  },
};

const actions = {
  GET_PROJECTS: async (context) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/projects/search`,
        {
          limit: 300,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data);
      context.commit("SET_PROJECTS", data.projects);
    } catch (error) {
      if(error.response.status === 401) {
        getNewToken("peregudov.i", "jc63fk");
      }
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
