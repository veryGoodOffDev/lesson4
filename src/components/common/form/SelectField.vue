<template>
  <select
    id="selected"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
  <option value="">{{currentItem}}</option>
    <option v-for="option in options" :key="option._id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectField",
  props: {
    options: {
      type: Array,
    },
    selectedItem: {
      type: [String, Object, Array],
    },
    value: {
        type: [String, Object, Array]
    }
  },
  computed: {
    currentItem() {
        const indexCurrItem = this.options.findIndex(o => o.name === this.selectedItem)
        return this.options[indexCurrItem].name
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
