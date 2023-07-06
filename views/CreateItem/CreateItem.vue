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
        <label>Проект<span class="error">*</span></label>
        <select v-model="select" id="select">
          <option
            v-for="project in projects"
            :key="project.number"
            selected="true"
          >
            {{ project.number }}
          </option>
        </select>
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
import BaseButton from "../../src/components/BaseButton/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  name: "CreateItem",

  data() {
    return {
      title: "",
      description: "",
      date: null,
      select: null,
    };
  },

  mounted() {},
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },

  methods: {
    submitHandler() {
      const item = {
        //   id: 7,
        //   title:
        //     "Название очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки очень длинное название для проверки верстки",
        //   status: "Черновик",
        //   created: "Иванов И.И. создал 1 час назад",
        //   edited: "Баранов В.В. изменил 1 минуту назад",
        //   number: "#1",
        //   isProject: false,
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: "Черновик",
        project: this.select,
        code: "#" + Date.now(),
        created: "Баранов И. И. создал 1 час назад",
        edited: "Перегудов И. Г. изменил 1 минуну назад",
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
