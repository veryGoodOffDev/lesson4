<template>
  <div class="wrapper">
    <UsersList v-bind:items="users" />
  </div>
</template>

<script>
import axios from "axios";
import UsersList from "../../src/components/UsersList/UsersList.vue";
import { getToken } from "@/helper.js";
export default {
  name: "Lesson4UsersPage",
  components: {
    UsersList,
  },

  data() {
    return {};
  },

  mounted() {
    axios
      .post(
        `http://45.12.239.156:8081/api/users/search`,
        {
          limit: 200,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data.users);
        this.$store.dispatch("setUsers", data.users);
      })
      .catch((error) => console.log("error", error));
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
