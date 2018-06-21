// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueECharts from 'vue-echarts'
import axios from 'axios'
// import urls from './utils/api'
// import common from './utils/common'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.component('chart', VueECharts)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype.$urls = urls
// Vue.prototype._ = common

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
