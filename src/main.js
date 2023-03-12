import Vue from "vue";
// import App from "./App.vue";
import Main from "./Main.vue";
import Student from "./Student.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/student", component: Student },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;
