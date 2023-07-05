<template>
<div class="wrapper">
   <ItemsList
    v-bind:items="tasks"
    @remove-item="removeTask"
    @edit-item="editTask"
    v-bind:inner="'Не создано ни одной задачи'"
   /> 
   </div>
</template>


<script>
import axios from 'axios';
import ItemsList from '../../src/components/ItemsList/ItemsList.vue';
import { getToken } from "@/helper.js";
export default {
    name: 'TasksPage',
    components: {
        ItemsList,
    },

    data: function() {
        return {
            
        };
    },
    computed: {
      tasks() {
        return this.$store.getters.tasks
      }
    },

    mounted() {
            axios
      .post(
        `http://45.12.239.156:8081/api/tasks/search`,
        {
          page: 4, // нумерация страниц с единицы
          limit: 10,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.$store.dispatch('setTasks', data.tasks)
      })
      .catch((error) => console.log("error", error));
    },

    methods: {
        removeTask(id) {
          this.$store.dispatch('removeTask', id)
        },
        editTask(id) {
          console.log(id)
        },
    },
};
</script>

<style lang="scss" scoped>

</style>