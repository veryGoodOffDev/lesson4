import axios from "axios";
import { getToken } from "@/helper";

const state = {
  users: null,
  dataUsers: null,
  currentUser: null,
};

const getters = {
  USERS: (state) => state.users,
  DataUsers: (state) => state.dataUsers,
  CURRENT_USER: (state) => state.currentUser,
};

const mutations = {
  SET_USERS: (state, payload) => {
    state.users = payload;
  },
  SET_DATA_USERS: (state, payload) => {
    state.dataUsers = payload;
  },
  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload;
  },
};

const actions = {
  GET_CURRENT_USER: async ({commit}) => {
    try {
      const { data} = await axios
      .get(`http://45.12.239.156:8081/api/users/current`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log(data);
      commit("SET_CURRENT_USER", data);
    } catch(error) {
      console.log(error)
    }

      

  },
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
      context.commit("SET_DATA_USERS", data);
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
