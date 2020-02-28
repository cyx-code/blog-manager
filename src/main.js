import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
Vue.config.productionTip = false
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http=axios
Vue.prototype.$message=Message
Vue.use(ElementUI)
// 路由导航守卫实现未登录跳转
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  }
  if (!window.sessionStorage.getItem('token')) {
    return next('/login')
  }
  next()
})

axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  console.log(config)
  return config
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
