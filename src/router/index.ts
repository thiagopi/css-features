import { createRouter, createWebHistory } from "vue-router";
import BorderAnimations from "@/modules/border-animations/BorderAnimations.vue";
import Home from "@/modules/home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/border-animations", component: BorderAnimations, name: "border-animations" }
  ],
});

export default router;
