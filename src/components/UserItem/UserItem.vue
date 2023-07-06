<template>
  <li class="items__list-item">
    <div class="item-card">
      <img src="@/assets/userAvatar.jpg" alt="user-avatar" class="user__img" />
      <p>
        {{ item.name }}
      </p>
      <StatusBadge v-bind:status="item.status" />
    </div>
    <DropDownMenu v-bind:item="item" v-bind:itemsMenu="itemsMenu" />
  </li>
</template>

<script>
import DropDownMenu from "../DropDownMenu/DropDownMenu.vue";
import StatusBadge from "../StatusBadge/StatusBadge.vue";

export default {
  components: {
    DropDownMenu,
    StatusBadge,
  },
  name: "UserItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      itemsMenu: [
        {
          name: "Редактировать",
          className: "edit",
        },
        {
          name: "Удалить",
          className: "delete",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/components/TaskItem/index.scss";
.item-card {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  height: 42px;
}
p {
  color: #1c1c1c;
  margin-left: 8px;
}
</style>
