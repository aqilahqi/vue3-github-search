import { createRouter, createWebHistory } from "vue-router";
import SavedRepo from "@/pages/SavedRepo.vue";
import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Home,
    },
    {
      path: "/saved-repositories",
      name: "single",
      component: SavedRepo,
    },
  ],
});

export default router;
