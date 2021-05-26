import Vue from 'vue'
import App from './App.vue'

// Estrutura
import store from './store'
import router from './router'

// Layout
import vuetify from './plugins/vuetify'
import boxicons from 'boxicons'

// Axios
import api from '@/plugins/axios'

Vue.config.productionTip = false

new Vue({
  api,
  vuetify,
  boxicons,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
