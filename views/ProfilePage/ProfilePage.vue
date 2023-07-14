<template>
  <section class="profile">
    <PreloaderSpinner v-if="!currentUser" />
    <div class="profile__page" v-else>
      <!-- <div class="avatar">
        <img src="@/assets/userAvatar.jpg" alt="аватар пользователя" />
      </div> -->
      <NoAvatar />
      <div class="profile__page-body">
        <div class="profile__page-header">
          <div class="profile__page-title">
            <h2>{{ currentUser.name }}</h2>
            <StatusBadge v-bind:status="currentUser?.status" />
          </div>
          <DropDownMenu v-bind:itemsMenu="itemsMenu" />
        </div>
        <div class="profile__page-about-me">
          <span class="about-me">О себе:</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            porro, rem accusamus reiciendis ducimus ipsam temporibus delectus
            nobis accusantium maiores consequuntur, sequi distinctio aspernatur
            excepturi doloremque hic maxime praesentium dolore.
            {{ currentUser.description }}
          </p>
        </div>
        <BaseButton
          :text="'Назад'"
          :className="'bg-secondary'"
          @go-back="goBack"
          :event="'go-back'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import DropDownMenu from "@/components/DropDownMenu/DropDownMenu.vue";
import router from "@/router";
import StatusBadge from "@/components/StatusBadge/StatusBadge.vue";
import BaseButton from "@/components/BaseButton/BaseButton.vue";
import PreloaderSpinner from "@/components/Preloader/PreloaderSpinner.vue";
import NoAvatar from "@/components/NoAvatar/NoAvatar.vue";
export default {
  name: "ProfilePage",
  components: {
    DropDownMenu,
    StatusBadge,
    BaseButton,
    PreloaderSpinner,
    NoAvatar,
  },
  props: [],

  data() {
    return {
      itemsMenu: [
        {
          name: "Редактировать",
          className: "",
        },
        {
          name: "Изменить пароль",
          className: "",
        },
        {
          name: "Просмотр задач пользователя",
          className: "",
        },
      ],
    };
  },

  mounted() {},
  beforeMount() {
    // getCurrentUser(this.currentUser);
  this.$store.dispatch("GET_CURRENT_USER")
  },
  computed: {
    currentUser() {
      return this.$store.getters.CURRENT_USER;
    },
  },

  methods: {
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
.item-menu {
  display: block;
}
</style>
