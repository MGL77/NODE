// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// rem 开始
import "./assets/rem.js"
// rem 结束

// vant 开始
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant 结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
