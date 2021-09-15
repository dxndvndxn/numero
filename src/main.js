import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/app.scss'

// Scroll
import vuescroll from 'vuescroll';

import store from './store'
Vue.component('vuescroll', vuescroll);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
