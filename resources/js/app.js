import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

window.Vue = require('vue');

//RUTAS
const router = new VueRouter({
    routes,
    mode: 'history'
  })
  






Vue.component('home', require('./components/Home.vue').default);
Vue.component('about', require('./components/About.vue').default);
Vue.component('contactos', require('./components/Contacts.vue').default);
Vue.component('game', require('./components/Games.vue').default);
Vue.component('inicio', require('./components/Inicio.vue').default);

const app = new Vue({
    el: '#app',
    router : router
});
