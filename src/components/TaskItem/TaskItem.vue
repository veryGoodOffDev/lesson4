<template>
<li class="items__list-item">
    <div class="item-card">
      <div class="item-card__head">
        <router-link :to="'/task/' + item._id"><h3 class="item-card__title">
        {{ item.name }}</h3>
        </router-link>
        
        <img
          v-if="item.projectId"
          src="@/assets/userAvatar.jpg"
          alt="user-avatar"
          class="user__img"
        />
      </div>
      <div class="item-card__body">
        <p class="item-card__created">
          <span class="item-card__number">{{ item?.code || item?.number }}</span>
          {{ item.dateCreated }}
          <StatusBadge v-if="item.projectId" v-bind:status="item.status"/>
        </p>
        <p class="item-card__edited">{{ item.dateEdited }}</p>
      </div>
    </div>
    <DropDownMenu
      v-on:remove-item="removeItem"
      v-on:edit-item="editItem"
      v-bind:item="item"
      v-bind:itemsMenu="itemsMenu"
    />

  </li>
</template>

<script>
import DropDownMenu from "../DropDownMenu/DropDownMenu.vue";
import StatusBadge from '../StatusBadge/StatusBadge.vue';
export default {
  components: {
    DropDownMenu,
    StatusBadge,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  name: "TaskItem",

  data() {
    return {
      itemsMenu:[
        {
        name: 'Редактировать',
        className: 'edit',
        event:'',
        },
        {
          name: 'Удалить',
          className: 'delete',
          event:'',
        }
      ]
    };
  },

  mounted() {},

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
@import "./index.scss";
</style>
