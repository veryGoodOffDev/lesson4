<template>
  <button :class="'btn ' + className" @click="$emit(event, param)">{{ text  }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Object],
      required: true,
    },
    event: {
      type: String,
      default: '',
    },
    className: {
      type: String,
    },
    param:{
      type:[String, Boolean, Number, Object,]
    }
  },
  name: "BaseButton",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
</style>
