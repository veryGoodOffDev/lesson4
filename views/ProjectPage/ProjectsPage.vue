<template>
  <div class="wrapper">
    <ItemsList
      v-bind:items="projects"
      v-bind:users="users"
      @remove-item="removeProject"
      @edit-item="editProject"
      v-bind:inner="'Не создан ни один проект'"
    />
  </div>
</template>

<script>
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
export default {
  name: "ProjectsPage",
  components: {
    ItemsList,
  },

  data: function () {
    return {};
  },

  mounted() {
    this.$store.dispatch("GET_PROJECTS");
    this.$store.dispatch("GET_USERS");
  },
  computed: {
    projects() {
      return this.$store.getters.PROJECTS;
    },
    users() {
      return this.$store.getters.USERS
    },
  },

  methods: {
    removeProject(id) {
      this.$store.dispatch("removeProject", id);
    },
    editProject(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
