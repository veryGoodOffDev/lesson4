<template>
  <div v-bind:class="['item-menu', { show: isOpened }]" @click="showMenu">
    <span class="item-menu__dots">
      <IconBase width="5px" height="15px" viewBox="0 0 4 14" icon-name="dots"
        ><icon-dots
      /></IconBase>
    </span>
    <DropDownList v-bind:itemsMenu="itemsMenu"  v-show="isOpened"/>
  </div>
</template>

<script>
import IconDots from "../Icon/IconDots.vue";
import IconBase from "../IconBase.vue";
import DropDownList from '../DropDown/DropDownList.vue';
export default {
  props: ["itemsMenu"],
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
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
