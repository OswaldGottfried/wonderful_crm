import Vue from 'vue'
import App from './App.vue'
import routes from './routes.js';
import VueRouter from 'vue-router';

// Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')