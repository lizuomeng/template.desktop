import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './registerServiceWorker'
import i18n from './i18n'
import './plugins/axios'
import './plugins/antd'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

window.$t = app.$t.bind(app)

export default app
