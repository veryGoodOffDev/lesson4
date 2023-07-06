<template>
  <a v-bind:class="['user__button', { active: isOpened }]" @click="showMenu">
    <img src="@/assets/userAvatar.jpg" alt="user-avatar" class="user__img" />
    <span class="arrow down">
      <IconBase width="24px" height="24px" icon-name="dropdown"
        ><icon-dropDown
      /></IconBase>
    </span>
    <ul v-bind:class="['user__dropdown', { show: isOpened }]">
      <router-link to="/profile" tag="li"
        ><li class="item-menu__list-item">Профиль</li></router-link
      >
      <li class="item-menu__list-item">Выход</li>
    </ul>
  </a>
</template>

<script>
import IconDropDown from "@/components/Icon/IconDropDown.vue";
import IconBase from "@/components/IconBase.vue";
export default {
  name: "UserButtonVue",
  components: {
    IconDropDown,
    IconBase,
  },

  data() {
    return {
      isOpened: false,
    };
  },

  mounted() {},

  methods: {
    showMenu() {
      this.$root.$el.addEventListener("click", (event) => {
        if (!event.target.classList.contains("user__button")) {
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
svg {
  color: white;
  width: 100%;
}
</style>
