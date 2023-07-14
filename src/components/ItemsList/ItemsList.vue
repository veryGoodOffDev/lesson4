<template>
  <PreloaderSpinner v-if="!items" />
  <section class="items" v-else-if="items.length">
    <div class="items__head">
      <BaseButton
        v-bind:text="'Добавить'"
        :className="'bg-secondary'"
        @show-modal="showModal"
        :event="'show-modal'"
        :param="!isShowModal"
      />
    </div>
    <ul class="items__list">
      <TaskItem
        v-for="item of items"
        :key="item.id"
        v-bind:item="item"
        @get-tasks-by-id="getTasksByIdProject"
      />
    </ul>
    <Pagination
      v-if="itemsData.total > 1"
      v-bind:itemsData="itemsData"
      @go-to-page="goToPage"
    />
  </section>
  <EmptyPage v-else v-bind:inner="inner"  :id="id"/>
</template>
<script>
import BaseButton from "../BaseButton/BaseButton.vue";
import EmptyPage from "../EmptyPage/EmptyPage.vue";
import Pagination from "../Pagination/Pagination.vue";
import PreloaderSpinner from "../Preloader/PreloaderSpinner.vue";
import TaskItem from "../TaskItem/TaskItem.vue";
export default {
  props: ["items", "itemsData", "inner", "id"],
  name: "TaskList",
  components: {
    TaskItem,
    EmptyPage,
    PreloaderSpinner,
    BaseButton,
    Pagination,
  },

  data() {
    return {};
  },

  mounted() {},
  computed: {
    isShowModal() {
      return this.$store.getters.isShowModal;
    },
  },

  methods: {
     goToPage(page) {
      this.$store.dispatch("GET_PROJECTS__PAGE", page);
      console.log(page);
    },
    showModal(bool) {
      this.$store.dispatch("showModal", bool);
    },
    getTasksByIdProject(id) {
      this.$emit("get-tasks-by-id", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
