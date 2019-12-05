import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import animate from 'animate.css'
import Live2d from './components/Live2d'

Vue.use(animate)
Vue.use(Live2d)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
