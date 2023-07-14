<template>
  <div class="create">
    <form class="create-form" @submit.prevent="submitHandler">
      <div class="create-form__header">
        <h1>Создание задачи</h1>
      </div>
      <hr />
      <div class="create-form__body">
        <label for="title">Название<span class="error">*</span></label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          placeholder="Введите текст..."
        />
        <label for="description">Описание</label>
        <textarea
          type="text"
          id="description"
          v-model="description"
          placeholder="Введите текст..."
        />
        <label>Проект из компонента<span class="error">*</span></label>
        <SelectField :options="projects"  v-model="selected" :selectedItem="currentProject"/>
        <label>Исполнитель<span class="error">*</span></label>
        <SelectField :options="users"  v-model="selectedExecutor" :selectedItem="currentUser?.name" />

      </div>
      <hr />
      <div class="create-form__footer">
        <BaseButton
          v-bind:text="'Отмена'"
          :className="'bg-secondary'"
          @go-back="goBack"
          v-bind:event="'go-back'"
          type="button"
        />
        <BaseButton v-bind:text="'Создать задачу'" :className="'bg-primary'" />
      </div>
    </form>
  </div>
</template>

<script>
import SelectField from '@/components/common/form/SelectField.vue';
import BaseButton from "../../src/components/BaseButton/BaseButton.vue";
export default {
  components: {
    BaseButton,
    SelectField,
  },
  name: "CreateItem",

  data() {
    return {
      title: "",
      description: "",
      date: null,
      selected: null,
      selectedExecutor:null,
    };
  },

  mounted() {
    this.$store.dispatch("GET_CURRENT_USER")
    this.$store.dispatch("GET_USERS")
  },
  computed: {
    projects() {
      return this.$store.getters.PROJECTS;
    },
    id() {
      return this.$route.params.id;
    },
    currentProject() {
      const indexProject = this.projects.findIndex((p) => p._id === this.id);
       return this.projects[indexProject].name;
       
    },
    users() {
      return this.$store.getters.USERS
    },
    currentUser() {
      return this.$store.getters.CURRENT_USER
    }
  },

  methods: {
    submitHandler() {
      const item = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: "Черновик",
        project: this.selected?this.selected:this.currentProject,
        code: "#" + Date.now(),
        created: "Баранов И. И. создал 1 час назад",
        edited: "Перегудов И. Г. изменил 1 минуну назад",
        executor: this.selectedExecutor?this.selectedExecutor:this.currentUser.name
      };
      console.log(item);
      this.$store.dispatch("createTask", item);
      this.$router.push("/tasks");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
