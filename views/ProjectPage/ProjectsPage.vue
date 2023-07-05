<template>
  <div>
    <ItemsList
      v-bind:items="projects"
      @remove-item="removeProject"
      @edit-item="editProject"
      v-bind:inner="'Не создан ни один проект'"
    />
  </div>
</template>

<script>
import ItemsList from "../../src/components/ItemsList/ItemsList.vue";
import { getToken } from "@/helper.js";
import axios from "axios";
export default {
  name: "ProjectsPage",
  components: {
    ItemsList,
  },

  data: function () {
    return {
      
    };
  },

  mounted() {
    axios
      .post(
        `http://45.12.239.156:8081/api/projects/search`,
        {
          page: 2, 
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.$store.dispatch('setProjects', data.projects)
      })
      .catch((error) => console.log("error", error));
  },
  computed: {
    projects() {
      return this.$store.getters.projects;
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
