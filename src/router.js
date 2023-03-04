import Vue from 'vue';
import VueRouter from "vue-router";
import MainPage from '@/pages/MainPage'; //classic import 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage,
  },

  {
    path: '/photo',
    component: () => import ('./pages/PhotosPage') // lazy loading
  }, 
]

export default new VueRouter({
  mode: 'history',
  routes  
})




