import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'Проекты',
      component:() => import("./../../views/ProjectPage/ProjectsPage.vue"),
      linkActiveClass: 'active',
    },
    {
      path: '/tasks',
      name:'Задачи',
      component:() => import("./../../views/TasksPage/TasksPage.vue"),
    },
    {
      path: '/task/:id',
      name:'Задача',
      component:() => import("./../../views/Task/TaskPage.vue"),
    },
    {
      path: '/profile',
      name:'Profile',
      component:() => import("./../../views/ProfilePage/ProfilePage.vue"),
    },
    {
      path: '*',
      name:'Пользователи',
      component: () => import("./../../views/NotFoundPage/NotFoundPage.vue")
    },
    {
      path: '/create',
      name:'Создание',
      component: () => import("./../../views/CreateItem/CreateItem.vue")
    }
  ]
})
