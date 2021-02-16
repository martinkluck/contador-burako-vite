import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
export default createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
});
