<template>
  <ul class="item-menu__list show-menu">
    <li
      :class="['item-menu__list-item ' + item.className]"
      v-for="item in itemsMenu"
      :key="item.name"
      @click="$emit('edit-item', item.id)"
    >
      {{ item.name }}
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
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
