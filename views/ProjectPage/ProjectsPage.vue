<template>
  <div class="wrapper">
    <CreateProjectModal v-show="isShowModal" />
    <ItemsList
      :items="projects"
      :itemsData="projectsData"
      :inner="'Не создан ни один проект'"
      @get-tasks-by-id="getTasksByIdProject"
      @go-to-page="goToPage"
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
  beforeMount() {
    this.$store.dispatch("GET_USERS");
  },

  mounted() {
    this.$store.dispatch("GET_PROJECTS");
  },
  watch: {},
  computed: {
    projectsData() {
      return this.$store.getters.PROJECTS_DATA;
    },
    isShowModal() {
      return this.$store.getters.isShowModal;
    },
    projects() {
      return this.$store.getters.PROJECTS;
    },
  },

  methods: {
    getTasksByIdProject(id) {
      this.$store.dispatch("GET_TASKS_BY_PROJECT_ID", id);
      console.log(id);
    },
     goToPage(page) {
      this.$store.dispatch('GET_PROJECTS__PAGE', page)
    }
  },
};
</script>

<style lang="scss" scoped></style>
