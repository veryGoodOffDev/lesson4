<template>
  <header class="header">
    <div class="header__inner">
      <nav class="menu">
        <ul class="menu__list">
          <router-link
            custom
            v-slot="{ href, navigate, isActive}"
            v-for="link in links"
            :key="link.path"
            v-bind:to="link.path"
           v-bind:exact="link.exact"
           active-class="acive"
            >
           <li class="menu__list-item"    
          >
            <!-- :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']" -->
            <a :href="href" :class="[isActive && 'active']"   class="menu__list-link" @click="navigate">{{
               link.linkName
            }}</a>
            </li>
          </router-link>
        </ul>
        <UserButtonVue />
      </nav>
    </div>
  </header>
</template>

<script>
import UserButtonVue from "../UserButton/UserButton.vue";
import router from "@/router";
export default {
  name: "NavigationVue",
  components: {
    UserButtonVue,
  },

  data() {
    return {
      links: [
        {
          linkName: "Проекты",
          path: "/",
          exact:true,

        },
        {
          linkName: "Задачи",
          path: "tasks",

        },
        {
          linkName: "Пользователи",
          path: "users",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    changeClass() {
      console.log(router);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";

</style>
