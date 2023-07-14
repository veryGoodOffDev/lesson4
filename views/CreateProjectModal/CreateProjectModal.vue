<template>
  <div class="modal">
    <div class="modal-window">
      <form @submit.prevent="createProject">
        <div class="modal-window__header">
          <h1>Создание проекта</h1>
        </div>
        <div class="modal-window__body">
          <label for="code">Код<span class="error">*</span></label>
          <TextField
            :placeholder="'Введите текст...'"
            v-model="code"
            :id="'code'"
            :type="'text'"
          />
          <label for="title">Название<span class="error">*</span></label>
          <TextField
            :placeholder="'Введите текст...'"
            v-model="name"
            :id="'name'"
            :type="'text'"
          />
        </div>
        <div class="modal-window__footer">
          <BaseButton
            :text="'Отмена'"
            :className="'bg-secondary'"
            @show-modal="showModal"
            :event="'show-modal'"
            :param="!isShowModal"
            :type="'button'"
          />
          <BaseButton
            v-bind:text="'Создать проект'"
            :className="'bg-primary'"
          />
        </div>
      </form>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton/BaseButton.vue";
import axios from "axios";
import { getToken } from "@/helper";
import TextField from "@/components/common/form/TextField.vue";
export default {
  components: {
    BaseButton,
    TextField,
  },
  name: "CreateProjectModal",

  data() {
    return {
      name: "",
      code: "",
    };
  },

  mounted() {},
  computed: {
    isShowModal() {
      return this.$store.getters.isShowModal;
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showModal(bool) {
      this.$store.dispatch("showModal", bool);
    },
    async createProject() {

    try {
      const { data } = await axios.post(
        `http://45.12.239.156:8081/api/projects`,
        {
          name: this.name,
          code: this.code,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      this.showModal(!this.isShowModal)
      console.log(data);
      this.$store.dispatch("GET_PROJECTS")
    } catch (error) {
      console.log(error);
    }
  },

  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
