<template>
  <PreloaderSpinner v-if="!items" />
  <section class="items" v-else-if="items.length">
    <div class="items__head">
      <router-link to="/create">
      <BaseButton v-bind:text="'Добавить'" :className="'bg-secondary'" />
      </router-link>
    </div>
    <ul class="items__list">
      <TaskItem
        v-for="item of items"
        :key="item.id"
        v-bind:item="item"
        v-on:remove-item="removeItem"
        v-on:edit-item="editItem"
      />
    </ul>
  </section>
  <EmptyPage v-else v-bind:inner="inner" />
</template>
<script>
import BaseButton from "../BaseButton/BaseButton.vue";
import EmptyPage from "../EmptyPage/EmptyPage.vue";
import PreloaderSpinner from "../Preloader/PreloaderSpinner.vue";
import TaskItem from "../TaskItem/TaskItem.vue";
export default {
  props: ["items", "inner"],
  name: "TaskList",
  components: {
    TaskItem,
    EmptyPage,
    PreloaderSpinner,
    BaseButton,
  },

  data() {
    return {};
  },

  mounted() {},
  computed: {},

  methods: {
    removeItem(id) {
      this.$emit("remove-item", id);
    },
    editItem(id) {
      this.$emit("edit-item", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
// .items__list {
//   list-style: none;
//   padding: 5px 18px;
// }
</style>
