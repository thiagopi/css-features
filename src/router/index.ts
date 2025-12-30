import { createRouter, createWebHistory } from "vue-router";
import BorderAnimations from "@/modules/border-animations/BorderAnimations.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/border-animations", component: BorderAnimations, name: "border-animations" }],
});

export default router;
