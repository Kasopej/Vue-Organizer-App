import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/main-view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/edit-todo/:id',
    name: 'EditTodo',
    props: r => ({ id: parseInt(r.params.id) }),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-mode" */ '../views/edit-todo.vue')
  },
  {
    path: '/add-todo',
    name: 'AddTodo',
    component: () => import(/* webpackChunkName: "edit-mode" */ '../views/add-todo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
