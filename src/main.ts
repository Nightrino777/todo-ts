import Vue from 'vue'
import App from './App.vue'
import router from './router'
import contextMixin from '@/context';

Vue.config.productionTip = false

new Vue({
  router,
  mixins: [contextMixin],
  render: h => h(App)
}).$mount('#app')

