<template>
  <div class="wrapper">
    <ItemsList
      v-bind:items="tasksById"
      v-bind:users="users"
      v-bind:itemsData="tasksData"
      :tasksByIdProject="tasksById"
      @remove-item="removeTask"
      @edit-item="editTask"
      @go-to-page="goToPage"
      v-bind:inner="'Не создано ни одной задачи'"
    />
  </div>
</template>

<script>
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
export default {
  mounted() {
    this.$store.dispatch("GET_USERS");
  },
  computed: {
    users() {
      return this.$store.getters.USERS;
    },
    tasksData() {
      return this.$store.getters.TASKS_DATA;
    },
    tasksById() {
      return this.$store.getters.FILTERED_TASKS;
    },
  },
  name: "TasksPage",
  components: {
    ItemsList,
  },

  data: function () {
    return {};
  },

  methods: {
    removeTask(id) {
      console.log(id);
    },
    editTask(id) {
      console.log(id);
    },
    goToPage(page) {
      this.$store.dispatch("GET_TASKS__PAGE", page);
    },
  },
};
</script>

<style lang="scss" scoped></style>
