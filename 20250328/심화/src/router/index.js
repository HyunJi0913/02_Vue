import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ElectronicsPage from '../views/ElectronicsPage.vue'
import JeweleryPage from '../views/JeweleryPage.vue'
import MensClothingPage from '../views/MensClothingPage.vue'
import WomensClothingPage from '../views/WomensClothingPage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/electronics', name: 'electronics', component: ElectronicsPage },
    { path: '/jewelery', name: 'jewelery', component: JeweleryPage },
    { path: '/mensclothing', name: 'mensclothing', component: MensClothingPage },
    { path: '/womenclothing', name: 'womenclothing', component: WomensClothingPage },
  ]
  
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
