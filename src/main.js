import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index'
import Http from "@/service/http";
import './assets/css/color-dark.css'

Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
// 把http挂载到vue实例
Vue.prototype.$Http = Http

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
