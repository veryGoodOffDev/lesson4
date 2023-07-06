<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from "./components/Navigation/Navigation.vue";
// import axios from "axios";
import { getNewToken } from "@/helper.js";

export default {
  data() {
    return {
      url: "http://45.12.239.156:8081/api",
    };
  },
  components: {
    Navigation,
  },
  mounted() {
    if (!localStorage.getItem("accessData")) {
      getNewToken("peregudov.i", "jc63fk");
    }
    console.log(localStorage.getItem("accessData"), "Текущий Токен");
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
