import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'
const Home = () => import('@/views/Home/index.vue')
const Video = () => import('@/views/Video/index.vue')
const Question = () => import('@/views/Question/index.vue')
const My = () => import('@/views/My/index.vue')
const Login = () => import('@/views/Layout/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'video', component: Video },
      { path: 'question', component: Question },
      { path: 'my', component: My }
    ]
  },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
