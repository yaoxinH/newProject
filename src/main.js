import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'
import './style/index.less'
Vue.use(element)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
