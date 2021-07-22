import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/RegisterPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
