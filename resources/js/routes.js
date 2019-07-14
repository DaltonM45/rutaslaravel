// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter);

//componentes
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import Games from './components/Games.vue'
import inicio from './components/Inicio.vue'
import Sesion from './components/Sesion.vue'
import Error404 from './components/Error404.vue'




// export default new VueRouter({

//     routes : [

//         {
//             path: '/',
//             name: '/',
//             component : inicio
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component : About
//         },
//         {
//             path: '/contacts',
//             name: 'contacts',
//             component : Contacts
//         },
//         {
//             path: '/games',
//             name: 'games',
//             component : Games
//         },
//         {
//             path: '/sesion',
//             name: 'sesion',
//             component : Sesion
//         }
//     ],
//      mode: 'history'
// })


const routes = [
                 {
                    path: '/',
                    name: '/',
                    component : inicio
                },
                {
                    path: '/about',
                    name: 'about',
                    component : About
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component : Contacts
                },
                {
                    path: '/games',
                    name: 'games',
                    component : Games
                },
                {
                    path: '/sesion',
                    name: 'sesion',
                    component : Sesion
                },
                {
                    path: '*',
                    component: Error404
                }
  ]
  
  export default routes