<template>
  <div v-bind:class="['item-menu', { show: isOpened }]" @click="showMenu">
    <span class="item-menu__dots">
      <IconBase width="5px" height="15px" viewBox="0 0 4 14" icon-name="dots"
        ><icon-dots
      /></IconBase>
    </span>
    <DropDownList
      @remove-item="removeItem"
      @edit-item="editItem"
      v-bind:itemsMenu="itemsMenu"
      :item="item"
      v-show="isOpened"
      :param="item._id"
    />
  </div>
</template>

<script>
import IconDots from "../Icon/IconDots.vue";
import IconBase from "../IconBase.vue";
import DropDownList from "../DropDown/DropDownList.vue";
export default {
  props: ["itemsMenu", "item"],
  components: {
    IconBase,
    IconDots,
    DropDownList,
  },
  name: "DropDownMenu",

  data() {
    return {
      isOpened: false,
    };
  },

  mounted() {},

  methods: {
    showMenu() {
      document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("item-menu")) {
          this.isOpened = false;
        }
      });
      this.isOpened = !this.isOpened;
    },
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
