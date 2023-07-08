<template>
  <div class="wrapper">
    <UsersList v-bind:items="users" />
  </div>
</template>

<script>
import UsersList from "../../src/components/UsersList/UsersList.vue";
export default {
  name: "UsersPage",
  components: {
    UsersList,
  },

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("GET_USERS");
  },
  computed: {
    users() {
      return this.$store.getters.USERS;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
