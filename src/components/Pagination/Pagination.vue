<template>
  <div class="nav-pages">
    <div class="nav-buttons">
      <BaseButton v-bind:text="'prev'"/>
        <BaseButton v-for="page in pages" :key="page" v-bind:text="page" :param="page" :event="'go-to-page'" @go-to-page="goToPage"/>
      <BaseButton v-bind:text="'next'"/>
    </div>
    <span class="nav-pages__info"></span>
  </div>
</template>

<script>
import BaseButton from "../BaseButton/BaseButton.vue";

export default {
  props: {
    itemsData:{
      type:Object,
    }
  },
  components: {
    BaseButton,
  },
  name: "PaginationVue",

  data() {
    return {
        pages: this.newArray(this.itemsData.total)
    };
  },

  mounted() {},

  methods: {
    newArray(number){
      let newArr = [];
      for(let i = 1; i<=number; i++) {
        newArr.push(String(i))
      }
      return newArr
    },
     goToPage(page) {
      this.$emit("go-to-page", page)
    }

  },
};
</script>

<style lang="scss" scoped></style>
