<template>
  <div class="wrapper">
    <ItemsList
      v-bind:items="tasks"
      @remove-item="removeTask"
      @edit-item="editTask"
      v-bind:inner="'Не создано ни одной задачи'"
      v-bind:users="users"
    />
  </div>
</template>

<script>
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
export default {
  name: "TasksPage",
  components: {
    ItemsList,
  },

  data: function () {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.getters.TASKS;
    },
    users() {
      return this.$store.getters.USERS;
    }
  },

  mounted() {
    this.$store.dispatch("GET_TASKS");
    this.$store.dispatch("GET_USERS");
  },

  methods: {
    removeTask(id) {
      this.$store.dispatch("removeTask", id);
    },
    editTask(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
