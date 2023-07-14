<template>
  <div class="no-items__page">
    <div class="no-items__page-inner">
      <p class="no-items__title">{{ inner }}</p>
      <router-link :to="`/project/${id}/create`">
        <BaseButton
          v-bind:text="'Добавить'"
          :class="'bg-primary'" 
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseButton from "../BaseButton/BaseButton.vue";
export default {
  props: {
    inner: {
      type: String,
      required: true,
    },
    creating: {
      type: Boolean,
    },
  },
  components: {
    BaseButton,
  },
  name: "EmptyPageVue",
  computed:{
    id(){
      return this.$route.params.id
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {},

  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
