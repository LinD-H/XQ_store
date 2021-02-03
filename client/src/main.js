import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.less'
import './assets/css/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')