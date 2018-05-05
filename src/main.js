import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vue2Leaflet from 'vue2-leaflet'
import store from './store'
import * as Filters from '@/common/filters'
import 'leaflet/dist/leaflet.css'
import '@/styles/disney/index.styl'
// Vue.config.productionTip = false

Object.keys(Filters).forEach(key => {
  Vue.filter(key, Filters[key])
})

Vue.use(Vuex)

Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)
Vue.component('v-popup', Vue2Leaflet.Popup)
Vue.component('v-tooltip', Vue2Leaflet.Tooltip)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
