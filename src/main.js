import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
