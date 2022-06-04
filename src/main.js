import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router'
import { store } from './_store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// setup fake backend
import { configureFakeBackend } from './_fake-backend';
configureFakeBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
