import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Create from './views/Create.vue'
import Show from './views/Show.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
      props: true
    }
  ]
})
