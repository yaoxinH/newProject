import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'
import './style/index.less'
import axios from 'axios'
// axios.defaults.baseUrl = 'http://ttapi.easearch.itcast.cn/mp/v1_0'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.use(element)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
