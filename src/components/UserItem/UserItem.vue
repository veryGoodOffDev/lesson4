<template>
  <li class="items__list-item">
    <div class="item-card">
      <div class="item-card__body">
        <img
          src="@/assets/userAvatar.jpg"
          alt="user-avatar"
          class="user__img"
        />
        <h3 class="item-card__title">
            {{ item.name }}
          </h3>
          <StatusBadge v-bind:status="item.status" />
      </div>
    </div>
    <DropDownMenu
      v-bind:item="item"
      v-bind:itemsMenu="itemsMenu"
    />
  </li>
</template>

<script>
import DropDownMenu from '../DropDownMenu/DropDownMenu.vue';
import StatusBadge from '../StatusBadge/StatusBadge.vue';

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
</style>
