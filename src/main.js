import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'

Vue.config.productionTip = false

// Format mata uang indonesia
Vue.filter('currency', function (value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
