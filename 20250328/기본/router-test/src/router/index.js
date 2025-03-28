import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Members from '@/views/Members.vue';
import Videos from '@/views/Videos.vue';
import MeberInfo from '@/views/MeberInfo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/members/id', component: MeberInfo },
    { path: '/videos', component: Videos },
  ],
});

export default router;
