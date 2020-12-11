import Vue from "vue";
import VueRouter from "vue-router";
// import NewsView from "../views/NewsView.vue";
// import AskView from "../views/AskView.vue";
// import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import CreatedListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/news" },
    {
      path: "/news",
      name: "news",
      component: CreatedListView('NewsView'),
      beforeEnter: (to, from, next) => {
        console.log('to', to)
        console.log('from', from)
        next();
       }
    },
    {
      path: "/ask",
      name: "ask",
      component: CreatedListView('AskView'),
    },
    {
      path: "/jobs",
      name: "jobs",
       component: CreatedListView('JobsView'),
    },
    { path: "/item/:id", component: ItemView },
    { path: "/user/:id", component: UserView },
  ],
});
