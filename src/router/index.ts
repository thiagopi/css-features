import { createRouter, createWebHistory } from 'vue-router';
import BorderAnimations from '@/modules/border-animations/BorderAnimations.vue';
import Home from '@/modules/home/Home.vue';
import InfinityCarousel from '@/modules/infinity-carousel/InfinityCarousel.vue';
import CornerShape from '@/modules/corner-shape/CornerShape.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/border-animations', component: BorderAnimations, name: 'border-animations' },
    { path: '/corner-shape', component: CornerShape, name: 'corner-shape' },
    { path: '/infinity-carousel', component: InfinityCarousel, name: 'infinity-carousel' },
  ]
});

export default router;
