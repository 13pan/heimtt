import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index.vue'
const Home = () => import('@/views/Home/index.vue')
const Video = () => import('@/views/Video/index.vue')
const Question = () => import('@/views/Question/index.vue')
const My = () => import('@/views/My/index.vue')
const Login = () => import('@/Logout/index.vue')
const Search = () => import('@/views/Search/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/home',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'video', component: Video },
      { path: 'question', component: Question },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  { path: '/serch', component: Search }
]
const router = new VueRouter({
  routes
})

export default router
