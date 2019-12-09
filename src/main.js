import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// 全局引入 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
