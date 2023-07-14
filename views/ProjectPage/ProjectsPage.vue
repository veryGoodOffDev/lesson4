<template>
  <div class="wrapper">
    <CreateProjectModal v-show="isShowModal" />
    <ItemsList
      :items="projects"
      :itemsData="projectsData"
      :inner="'Не создан ни один проект'"
      @get-tasks-by-id="getTasksByIdProject"
    />
  </div>
</template>

<script>
import CreateProjectModal from "./../CreateProjectModal/CreateProjectModal.vue";
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
export default {
  name: "ProjectsPage",
  components: {
    ItemsList,
    CreateProjectModal,
  },

  data: function () {
    return {};
  },

  mounted() {
    this.$store.dispatch("GET_PROJECTS");
  },
  computed: {
    projects() {
      return this.$store.getters.PROJECTS;
    },
    projectsData() {
      return this.$store.getters.PROJECTS_DATA;
    },
    isShowModal() {
      return this.$store.getters.isShowModal;
    },
  },

  methods: {
    getTasksByIdProject(id) {
      this.$store.dispatch("GET_TASKS_BY_PROJECT_ID", id);
      console.log(id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
