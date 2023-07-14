<template>
  <div class="wrapper">
    <ItemsList
      v-bind:items="tasks"
      v-bind:users="users"
      v-bind:itemsData="tasksData"
      @remove-item="removeTask"
      @edit-item="editTask"
      @go-to-page="goToPage"
      v-bind:inner="'Не создано ни одной задачи'"
      :id="id"
    />
  </div>
</template>

<script>
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
export default {
  beforeMount() {
    this.$store.dispatch("GET_USERS");
  },
  mounted() {
    this.$store.dispatch("GET_TASKS");
  },
  computed: {
    tasks() {
      return this.$store.getters.TASKS;
    },
    users() {
      return this.$store.getters.USERS;
    },
    tasksData() {
      return this.$store.getters.TASKS_DATA;
    },
    id() {
      return this.$route.params.id;
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
      this.$store.dispatch('GET_TASKS__PAGE', page)
    }
  },
};
</script>

<style lang="scss" scoped></style>
