import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Проекты",
      component: () => import("./../../views/ProjectPage/ProjectsPage.vue"),
      linkActiveClass: "active",
    },
    {
      path: "/tasks",
      name: "Задачи",
      component: () => import("./../../views/TasksPage/TasksPage.vue"),
      props:true,
    },
    {
      path: "/task/:id",
      name: "Задача",
      component: () => import("./../../views/Task/TaskPage.vue"),
    },
    {
      path: "/project/:id",
      name: "Проект",
      component: () => import("./../../views/TasksPage/TasksPageFiltered.vue"),
      props:true,
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("./../../views/ProfilePage/ProfilePage.vue"),
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("./../../views/NotFoundPage/NotFoundPage.vue"),
    },
    {
      path: "/project/:id/create",
      name: "Создание",
      component: () => import("./../../views/CreateItem/CreateItem.vue"),
      props:true,
    },
    {
      path: "/users",
      name: "Пользователи",
      component: () => import("./../../views/UsersPage/UsersPage.vue"),
    },
  ],
});
