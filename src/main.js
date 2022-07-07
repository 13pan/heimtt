import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'
import '@/styles/icon.less'
import '@/styles/reset.less'
import '@/styles/index.less'
// 导入所有作为属性放入obj对象
import * as obj from '@/filters/index'
import FallowUser from '@/components/fallowUser.vue'
import CollectArticle from '@/components/CollectArticle.vue'
Object.keys(obj).forEach(key => {
  Vue.filter(key, obj[key])
})
Vue.use(Vant)
Vue.component(FallowUser.name, FallowUser)
Vue.component(CollectArticle.name, CollectArticle)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
