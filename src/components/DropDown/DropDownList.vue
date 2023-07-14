<template>
  <ul class="item-menu__list show-menu">
    <li
      :class="['item-menu__list-item ' + itemMenu.className]"
      v-for="itemMenu in itemsMenu"
      :key="itemMenu.name"
      @click="$emit(itemMenu.event, param)"
    >
      {{ itemMenu.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "DropDownList",
  props: {
    itemsMenu: {
      type: Array,
    },
    method: {
      type: String,
    },
    param: {
      type: [String, Boolean, Number, Object],
    },
    item: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
