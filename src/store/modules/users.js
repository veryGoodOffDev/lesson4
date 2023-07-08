import axios from "axios";
import { getToken } from "@/helper";

const state = {
  users: null,
};

const getters = {
  USERS: (state) => state.users,
};

const mutations = {
  SET_USERS: (state, payload) => {
    state.users = payload;
  },
};

const actions = {
  GET_USERS: async (context) => {
    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/users/search`,
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
      context.commit("SET_USERS", data.users);
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
