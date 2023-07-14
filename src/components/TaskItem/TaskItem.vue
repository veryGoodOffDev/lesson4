<template>
  <li class="items__list-item">
    <div class="item-card">
      <div class="item-card__head">
        <router-link
          :to="!item.projectId ? '/project/' + item._id : '/task/' + item._id"
          ><h3
            class="item-card__title"
            @click="$emit('get-tasks-by-id', item._id)"
          >
            {{ item.name }}
          </h3>
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
          <span class="item-card__number">{{
            item?.code || item?.number
          }}</span>
          {{ nameUserCreate }} создал(а) {{ item.dateCreated }}
          <StatusBadge v-if="item.projectId" v-bind:status="item.status" />
        </p>
        <p class="item-card__edited" v-if="item.dataEdited">
          {{
            users
              ? findNameUserEdited + " изменил(а) " + item.dateEdited
              : "Ожидание"
          }}
        </p>
      </div>
    </div>
    <DropDownMenu
      v-bind:item="item"
      v-bind:itemsMenu="itemsMenu"
      @remove-item="removeItem"
      @edit-item="editItem"
    />
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
  props: {
    item: {
      type: Object,
    },
  },
  name: "TaskItem",

  data() {
    return {
      itemsMenu: [
        {
          name: "Редактировать",
          className: "edit",
          event: "edit-item",
        },
        {
          name: "Удалить",
          className: "delete",
          event: "remove-item",
        },
      ],
      nameUserCreated: null,
      nameUserEdited: null,
    };
  },
  beforeMount() {
  },
  mounted() {},
  computed: {
    users() {
      return this.$store.getters.USERS;
    },

    findNameUserEdited() {
      const indexUser = this.users?.findIndex(
        (u) => u._id === this.item.authorEdited
      );
      return this.users[indexUser].name
        .split(/\s+/)
        .map((w, i) => (i ? w.substring(0, 1).toUpperCase() + "." : w))
        .join(" ");
    },
    findNameUserCreated() {
      const indexUser = this.users?.findIndex(
        (u) => u._id === this.item.author
      );
      return this.users[indexUser].name
        .split(/\s+/)
        .map((w, i) => (i ? w.substring(0, 1).toUpperCase() + "." : w))
        .join(" ");
    },
    nameUserCreate() {
      if (this.users) {
        return this.findNameUserCreated;
      } else {
        return "Wait";
      }
    },
  },

  methods: {
    editItem(id) {
      console.log(id);
    },
    removeItem(id) {
      this.$store.dispatch("REMOVE_PROJECT", id);
      this.$store.dispatch("GET_PROJECTS");
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
