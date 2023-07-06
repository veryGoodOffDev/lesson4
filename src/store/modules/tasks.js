import axios from "axios";
import { getToken } from "@/helper";

const state = {
  tasks: null,
};

const getters = {
  TASKS: (state) => state.tasks,
};

const mutations = {
  SET_TASKS: (state, payload) => {
    state.tasks = payload;
  },
};

const actions = {
  GET_TASKS: async (context) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/tasks/search`,
        {
          limit: 200,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      console.log(data);
      context.commit("SET_TASKS", data.tasks);
    } catch (error) {
      console.log({
        status: error.response.status,
        message: error.message,
      });
    }

    // })
    // .catch((error) => console.log("error", error));
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
