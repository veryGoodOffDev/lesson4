<template>
    <li class="items__list-item">
      <div class="item-card">
        <div class="item-card__head">
          <router-link :to="'/project/' + item._id"
            ><h3 class="item-card__title" @click="!item.projectId?$emit('get-tasks-by-id', item._id):badReq">
              {{ item.name }}
            </h3>
          </router-link>
        </div>
        <div class="item-card__body">
          <p class="item-card__created">
            <span class="item-card__number">{{
              item?.code
            }}</span>
          {{findNameUserCreated}} создал(а)  {{ item.dateCreated }} 
          </p>
          <p class="item-card__edited">{{ item.dateEdited? findNameUserEdited + " изменил(а) "+ item.dateEdited : null}}</p>
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
  export default {
    components: {
      DropDownMenu,
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
      users: {
        type:Array,
      }
    },
    name: "ProjectItem",
  
    data() {
      return {
        itemsMenu: [
          {
            name: "Редактировать",
            className: "edit",
            event: "",
          },
          {
            name: "Удалить",
            className: "delete",
            event: "",
          },
        ],
      };
    },
    beforeMount() {
  },
    mounted() {
  
    },
    computed: {
      findNameUserCreated() {
      const indexUser = this.users?.findIndex(u => u._id === this.item.author)
      return this.users[indexUser].name.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ')
      },
      findNameUserEdited() {
      const indexUser = this.users?.findIndex(u => u._id === this.item.authorEdited)
      return this.users[indexUser].name.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ')
      }
    },
  
    methods: {
      removeItem(id) {
        this.$emit("remove-item", id);
      },
      editItem(id) {
        this.$emit("edit-item", id);
      },
      getTasksByIdProject(id) {
        this.$emit("get-tasks-by-id", id)
        console.log('click')
      },
      badReq(){
        console.log('шляпа')
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/components/TaskItem/index.scss";
  </style>
  